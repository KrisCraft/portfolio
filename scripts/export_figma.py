#!/usr/bin/env python3
"""
Export Figma frames as high-resolution PNG via the Figma REST API.

Reads the Personal Access Token from Windows Credential Manager
(target name: figma-pat) — set up once via:
    cmdkey /generic:figma-pat /user:token /pass:"figd_..."

Usage:
    py scripts/export_figma.py
"""
import base64
import json
import os
import subprocess
import sys
import time
import urllib.error
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT_DIR = ROOT / "uploads" / "adj"
OUT_DIR.mkdir(parents=True, exist_ok=True)

FILE_KEY = "i7urqYuC9UMSotEJAL15Ok"  # AOI-ADJ
SCALE = 1  # 1x — produces 1920×1080 from 1920×1080 source frames (display-tier)
FORMAT = "png"
MAX_WIDTH = 1920  # cap final width; wide source frames (e.g. 3384) are resized down

# (nodeId, filename, [opts]) — opts is an optional dict:
#   {"crop_to": 1920}  → crop the left 1920px instead of resizing.
#                        Use when source frame is much wider than 1920 because
#                        the designer left overflow whitespace on the right
#                        (e.g. ADJ's 2:13573 is 3384 wide; UI lives in 0-1920).
JOBS = [
    ("2:13573", "data-catalog-light.png", {"crop_to": 1920}),
    ("2:14054", "data-catalog-grid.png"),
    ("2:14245", "data-catalog-dark.png"),
    ("2:21621", "model-management.png"),
    ("2:21806", "cover-model-thresholds.png"),
    ("2:23692", "inference-monitor.png"),
    ("2:18127", "labeling-classification.png"),
    ("2:19690", "labeling-roi-detection.png"),
    ("2:18370", "labeling-review.png"),
    ("2:22378", "metric-explainer.png"),
    ("2:19454", "labeling-ic-training.png"),
    ("2:25763", "bom-detail.png"),
    ("2:16810", "data-filter.png"),
    ("2:21437", "inference-service.png"),
    ("2:22157", "model-prediction.png"),
    ("2:24164", "bom-table.png"),
    ("2:26581", "data-management.png"),
]


def get_token() -> str:
    """Read figma-pat from Windows Credential Manager via PowerShell helper."""
    helper = ROOT / "scripts" / "Get-StoredToken.ps1"
    proc = subprocess.run(
        [
            "powershell",
            "-NoProfile",
            "-ExecutionPolicy",
            "Bypass",
            "-File",
            str(helper),
            "-Target",
            "figma-pat",
        ],
        capture_output=True,
        text=True,
        check=False,
    )
    if proc.returncode != 0:
        raise SystemExit(
            f"Failed to read figma-pat from Credential Manager:\n{proc.stderr}"
        )
    return proc.stdout.strip()


def fetch_image_urls(token: str, node_ids: list[str]) -> dict[str, str]:
    """Ask Figma for S3 URLs of rendered PNGs at SCALE."""
    ids = ",".join(node_ids)
    url = (
        f"https://api.figma.com/v1/images/{FILE_KEY}"
        f"?ids={ids}&scale={SCALE}&format={FORMAT}"
    )
    req = urllib.request.Request(url, headers={"X-Figma-Token": token})
    with urllib.request.urlopen(req, timeout=120) as resp:
        body = json.loads(resp.read().decode("utf-8"))
    if body.get("err"):
        raise SystemExit(f"Figma API error: {body['err']}")
    return body.get("images", {})


def download(url: str, dest: Path, opts: dict | None = None) -> int:
    with urllib.request.urlopen(url, timeout=120) as resp:
        data = resp.read()
    dest.write_bytes(data)
    # Post-process: crop or resize to cap width at MAX_WIDTH
    try:
        from PIL import Image
        img = Image.open(dest)
        crop_to = (opts or {}).get("crop_to")
        if crop_to and img.size[0] > crop_to:
            img = img.crop((0, 0, crop_to, img.size[1]))
            img.save(dest, optimize=True)
        elif img.size[0] > MAX_WIDTH:
            ratio = MAX_WIDTH / img.size[0]
            new_size = (MAX_WIDTH, int(img.size[1] * ratio))
            img = img.resize(new_size, Image.LANCZOS)
            img.save(dest, optimize=True)
    except ImportError:
        pass  # PIL optional; export still works without post-process
    return dest.stat().st_size


def main() -> int:
    token = get_token()
    node_ids = [job[0] for job in JOBS]
    print(f"Requesting {len(node_ids)} frames at {SCALE}x ...")
    images = fetch_image_urls(token, node_ids)

    ok = 0
    fail = 0
    for job in JOBS:
        node_id, fname = job[0], job[1]
        opts = job[2] if len(job) > 2 else None
        url = images.get(node_id)
        dest = OUT_DIR / fname
        if not url:
            print(f"[FAIL] {node_id} -> {fname}: no URL returned")
            fail += 1
            continue
        try:
            size = download(url, dest, opts)
            print(f"[OK]   {node_id} -> {fname} ({size // 1024} KB)")
            ok += 1
        except Exception as e:
            print(f"[FAIL] {node_id} -> {fname}: {e}")
            fail += 1
    print(f"\nDone: {ok} OK, {fail} FAIL")
    return 0 if fail == 0 else 1


if __name__ == "__main__":
    sys.exit(main())
