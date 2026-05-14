#!/usr/bin/env python3
"""
Export PVS Figma frames as high-resolution PNG via the Figma REST API.

Mirror of export_figma.py, retargeted to the PVS Figma file. Curated set
of 10 frames chosen to support the work-2-PVS case study narrative.

Reads the Personal Access Token from Windows Credential Manager
(target name: figma-pat).

Usage:
    py scripts/export_figma_pvs.py
"""
import json
import subprocess
import sys
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT_DIR = ROOT / "uploads" / "pvs"
OUT_DIR.mkdir(parents=True, exist_ok=True)

FILE_KEY = "o1OJ7RyktB12YwfWtCzBL5"  # PVS
SCALE = 2  # render at 2x source; web frames downsized to 1920 wide for anti-aliasing
FORMAT = "png"
MAX_WIDTH = 1920  # cap final width for web frames; PDA frames pass through

# (nodeId, filename, [opts])
JOBS = [
    # Hero / cover — the iconic Online Monitoring view (line carousel + slot grid)
    ("1:7047",  "online-monitoring-web.png"),

    # Dual-platform contrast — PDA Online Monitoring Home (always dark)
    ("1:32306", "online-monitoring-pda.png"),

    # Decision 02/03 — Replenish Reel modal (Using / Splice / Used 3-section)
    ("1:7808",  "replenish-reel.png"),

    # Decision 01 — PDA Marry Reel (paired with web for isomorphic story)
    ("1:33080", "marry-reel-pda.png"),

    # IA — Offline Prepare list (work order lifecycle states visible)
    ("1:505",   "offline-prepare-list.png"),

    # IA — Offline Prepare detail with married/unmarried statuses
    ("1:3955",  "offline-prepare-detail.png"),

    # Visual / Decision 02 — Feeder Low Threshold (explains red/yellow color semantics)
    ("1:30239", "feeder-low-threshold.png"),

    # Decision 04 — Alternative Material (substitute parts)
    ("1:27055", "alternative-material.png"),

    # IA Settings — Barcode Rule (segment-based reel ID parsing)
    ("1:27538", "barcode-rule.png"),

    # Online Monitoring action — Changeover dialog
    ("1:12768", "changeover.png"),
]


def get_token() -> str:
    """Read figma-pat from Windows Credential Manager via PowerShell helper."""
    helper = ROOT / "scripts" / "Get-StoredToken.ps1"
    proc = subprocess.run(
        ["powershell", "-NoProfile", "-ExecutionPolicy", "Bypass",
         "-File", str(helper), "-Target", "figma-pat"],
        capture_output=True, text=True, check=False,
    )
    if proc.returncode != 0:
        raise SystemExit(f"Failed to read figma-pat:\n{proc.stderr}")
    return proc.stdout.strip()


def fetch_image_urls(token: str, node_ids: list[str]) -> dict[str, str]:
    ids = ",".join(node_ids)
    url = f"https://api.figma.com/v1/images/{FILE_KEY}?ids={ids}&scale={SCALE}&format={FORMAT}"
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
    try:
        from PIL import Image
        img = Image.open(dest)
        crop_to = (opts or {}).get("crop_to")
        if crop_to and img.size[0] > crop_to:
            img = img.crop((0, 0, crop_to, img.size[1]))
            img.save(dest, optimize=True)
        elif img.size[0] > MAX_WIDTH:
            ratio = MAX_WIDTH / img.size[0]
            img = img.resize((MAX_WIDTH, int(img.size[1] * ratio)), Image.LANCZOS)
            img.save(dest, optimize=True)
    except ImportError:
        pass
    return dest.stat().st_size


def main() -> int:
    token = get_token()
    node_ids = [job[0] for job in JOBS]
    print(f"Requesting {len(node_ids)} frames at {SCALE}x from PVS Figma ...")
    images = fetch_image_urls(token, node_ids)

    ok = fail = 0
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
            dims = ""
            try:
                from PIL import Image
                with Image.open(dest) as im:
                    dims = f" [{im.size[0]}x{im.size[1]}]"
            except Exception:
                pass
            print(f"[OK]   {node_id} -> {fname} ({size // 1024} KB){dims}")
            ok += 1
        except Exception as e:
            print(f"[FAIL] {node_id} -> {fname}: {e}")
            fail += 1
    print(f"\nDone: {ok} OK, {fail} FAIL")
    return 0 if fail == 0 else 1


if __name__ == "__main__":
    sys.exit(main())
