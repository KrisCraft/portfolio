// AOI · Auto Defect Judgement — case study content (key-first / co-located i18n)
//
// Leaves are `{ en, zh }` pairs; identical-across-locales strings stay plain.
// Render with `window.pickLang(WORK3_CONTENT, lang)` (helper lives in global content.shared.js).

window.WORK3_CONTENT = {
  title: { en: "AOI · Auto Defect Judgement", zh: "AOI · Auto Defect Judgement" },
  tagline: {
    en: "Turning an AI model-training workflow only data scientists could operate — into a defect re-judgement system shop-floor process engineers can actually run",
    zh: "把資料科學家才能操作的 AI 模型訓練流程，變成現場製程工程師能上手的 AOI 瑕疵覆判系統"
  },

  tags: ["UX Design", "AI / MLOps", "AOI", "Smart SMT", "Industrial AI"],

  meta: [
    { k: { en: "Role", zh: "角色" }, v: "UX Designer" },
    {
      k: { en: "Team", zh: "團隊" },
      v: {
        en: "1 Designer · 2 Data Scientists · 2 Engineers · 1 PM",
        zh: "Designer × 1 · Data Scientist × 2 · Engineer × 2 · PM × 1"
      }
    },
    { k: { en: "Timeline", zh: "時程" }, v: "2023 — 2024" },
    { k: { en: "Tools", zh: "工具" }, v: "Figma · Jira · Confluence" }
  ],

  summary: [
    {
      k: "Problem",
      v: {
        en: "Legacy ADC was a data-scientist tool; shop-floor engineers were stuck with manual data cleaning, image-by-image labeling, and models that could not adapt per line.",
        zh: "傳統 ADC 是資料科學家工具，現場工程師被卡在人工清洗、逐張標註與不可重訓的模型流程。"
      }
    },
    {
      k: "My Impact",
      v: {
        en: "Turned MLOps into operable modules, designing Dataset / Batch / Filter, Auto Labeling, RCL-ROI assist, and model-trust controls.",
        zh: "把 MLOps 拆成可操作模組，設計 Dataset / Batch / Filter、Auto Labeling、RCL-ROI 輔助與模型信任機制。"
      }
    },
    {
      k: "Outcome",
      v: {
        en: "AI took on roughly half of human re-judgement work, reached 0 misses under the conservative model, and enabled factories to self-onboard in about 30 days.",
        zh: "AI 約替代一半人工覆判量，保守模型實驗下 0 漏檢，工廠約 30 天可自主啟動 AI 輔助。"
      }
    }
  ],

  // ── 01 Context & Challenge ──
  s1: {
    num: "01",
    title: { en: "Context & Challenge", zh: "背景與挑戰" },
    p1: {
      en: "ADJ (Auto Defect Judgement) is the AI defect re-judgement system that sits on top of <em>AOI (Automated Optical Inspection)</em> equipment. It ingests AOI images and provides an <em>AOI + AI two-stage re-judgement</em> solution, with self-service model training so inference models can keep iterating to meet the needs of different production lines.",
      zh: "ADJ（Auto Defect Judgement）是 AOI(自動光學檢測) 設備的 AI 自動瑕疵覆判系統。它接收 AOI 自動光學檢測的影像，提供 <em>AOI + AI 二階覆判</em> 解決方案，並支援自主模型訓練，讓推論模型能持續迭代符合不同產品線的需求。"
    },
    p2: {
      en: "I joined as <em>UX Designer</em>. The challenge wasn't just polishing the UI — it was rebuilding the entire ADC (Auto Defect Classification) workflow into steps that process engineers and technicians could run themselves. The legacy system was a tool for data scientists; my job was to make it a tool for the shop floor.",
      zh: "我以 <em>UX Designer</em> 加入這個專案，挑戰不只是把畫面做好——而是要把整個傳統 ADC（Auto Defect Classification）的工作流，重新拆解成現場製程工程師、技術員都能操作的步驟。原本的系統是「資料科學家專用工具」，我的工作是讓它變成「車間生產工具」。"
    },
    challenge_title: { en: "The Core Challenge", zh: "核心挑戰" },
    challenge: {
      en: "In high-mix low-volume production, AOI over-kills (NDF — No Defect Found) and process root-causing is hard. Legacy ADC then piles on: data scientists hand-cleaning datasets, manual labeling on every image, models that can't be retrained to fit different production lines — four systemic bottlenecks all needed dismantling at once.",
      zh: "在「少量多樣」生產環境下，AOI 誤殺率高（NDF）、製程根因難追溯；傳統 ADC 又需要 DS 人工清洗數據、人工標註每張圖、模型無法重訓來符合各種產線的需求——四個系統性瓶頸要被同時拆掉。"
    }
  },

  pains_title: { en: "Four Bottlenecks of Legacy ADC", zh: "傳統 ADC 的四個瓶頸" },
  pains_caption: {
    en: "Four systemic problems ADJ dismantled simultaneously",
    zh: "ADJ 同時拆解的四個系統性問題"
  },
  pains: [
    {
      tag: { en: "Over-kill", zh: "誤殺" },
      text: {
        en: "AOI flags NG but the part is fine (No Defect Found) — heavy human re-inspection cost",
        zh: "AOI 判 NG 但實際無瑕（No Defect Found），造成大量人工複檢成本"
      }
    },
    {
      tag: { en: "Blind spot", zh: "盲區" },
      text: {
        en: "Can't auto-classify defect types — process root-cause stays opaque",
        zh: "無法主動分類瑕疵類型，難結合生產／測試數據定位製程根因"
      }
    },
    {
      tag: { en: "Bottleneck", zh: "瓶頸" },
      text: {
        en: "Data scientists hand-clean each dataset; the team relies on heavy manual labeling on every image",
        zh: "DS 需人工清洗歷史數據集、仰賴大量人員手動標註每張圖"
      }
    },
    {
      tag: { en: "Rigidity", zh: "僵化" },
      text: {
        en: "Algorithms are coupled to the training pipeline — no per-line retraining, no multi-model concurrency",
        zh: "演算法綁定訓練流程，無法根據不同產品線重訓、無法多模型同時部署運行"
      }
    }
  ],

  // ── 02 Research & Insight ──
  s2: {
    num: "02",
    title: { en: "Research & Insight", zh: "研究與洞察" },
    p1: {
      en: "Deep interviews with the data science team, process engineers, and AOI operators mapped the current workflow. Three insights reshaped the system:",
      zh: "與 DS 團隊、製程工程師、AOI 機台操作員深度訪談，盤點當前的工作流。三個關鍵洞察改變了系統的設計方向："
    },
    insights: [
      {
        n: "01",
        title: {
          en: "Operators aren't model trainers",
          zh: "操作的人不是訓練模型的人"
        },
        desc: {
          en: "Process engineers know defects and process — they aren't data scientists. The UI can't ask them to tune complex algorithm parameters; it has to focus their attention on judgments only they can make: which class does this image belong to, is this model ready to ship?",
          zh: "現場工程師懂瑕疵、懂製程，但不是資料科學家。介面不能要求他們設定複雜的演算法參數，而要讓他們專注在「這張圖該分到哪一類」、「這個模型可以上線了嗎」這種專業判斷上。"
        }
      },
      {
        n: "02",
        title: {
          en: "Data labeling is where the workload really lives",
          zh: "資料標註才是真正的工作量"
        },
        desc: {
          en: "Model training is a small part of the pipeline. The cleaning, classifying, labeling, and batching upstream is where time actually goes. The system must turn 'source → shape → rule-based filtering' into a single legible track.",
          zh: "模型訓練本身只是流程的一小部分。前端的資料清洗、分類、標註、批次切分，才是時間真正消耗的地方。系統必須把資料的「來源 → 整形 → 規則篩選」變成一條清楚的軌道。"
        }
      },
      {
        n: "03",
        title: {
          en: "Adopt the CFX industrial standard — metadata comes for free, so labeling can be largely skipped",
          zh: "導入 CFX 工業標準格式，自動帶 metadata，讓標註可以大幅省掉"
        },
        desc: {
          en: "AOI images uploaded via IPC-CFX already carry component type and inspection metadata. If the system consumes those fields directly, users only need to review — not re-label. That's the structural unlock that takes weight off the workflow.",
          zh: "AOI 透過 IPC-CFX 上拋的影像本來就帶有元件類型、檢測項目等 metadata。如果系統能直接消化這些欄位，使用者只需「審核」而非「重新標註」——這是從工作流上根本減負的關鍵。"
        }
      }
    ]
  },

  // ── 03 Design Decisions ──
  s3: {
    num: "03",
    title: { en: "Design Decisions", zh: "設計決策" },
    p1: {
      en: "Four key decisions came out of the research and reshaped ADJ's workflow:",
      zh: "基於研究發現，我做了四個關鍵的設計決策，重塑了 ADJ 的工作流："
    },
    decisions: [
      {
        idx: { en: "Decision 01", zh: "決策 01" },
        title: {
          en: "Three modules — splitting MLOps into operable surfaces",
          zh: "三大模組 — 把 MLOps 拆成可操作的工作面"
        },
        body: {
          en: "I split the MLOps pipeline into three modules a shop-floor user could understand: Smart Re-judgement (CFX data exchange + inference monitoring), Model Management (versioning + training + offline prediction), and Data Management (collection + labeling + browsing). Each module maps to one role's daily job — instead of forcing every user to face the full complexity of the pipeline.",
          zh: "把複雜的 MLOps 流程切成三個現場人員能理解的模組：智能復判（CFX 數據交換 + 推論監控）、模型管理（版控 + 訓練 + 離線預測）、數據管理（收集 + 標記 + 瀏覽）。每個模組對應一種角色的日常工作，而不是強迫所有人都看到全部複雜度。"
        },
        img: "data-catalog-dark.png",
        caption: {
          en: "Top nav 'Data Catalog / Labeling / Model Management' maps to the three modules; sidebar shows component-type counts (e.g. Capacitor / Resistor / IC / Unclassified)",
          zh: "頂部導覽列「數據庫 / 數據標記 / 模型管理」對應三大模組；左側依數據類型統計（例如:電容 / 電阻 / IC / 未分類 ）"
        }
      },
      {
        idx: { en: "Decision 02", zh: "決策 02" },
        title: {
          en: "Dataset → Batch → Filter — a three-tier data structure",
          zh: "Dataset → Batch → Filter — 三層數據結構"
        },
        body: {
          en: "Data management is split into three tiers: Dataset (raw groups collected at the factory), Batch (pre-training shaping — downsample or merge), and Filter — a rule-based persistent <em>subscription</em> that auto-ingests any new data matching Label / Project / Batch rules. The Filter–Batch difference is structural: rules keep firing, so the pipeline becomes a long-running subscription rather than a one-shot cleanup. Engineers stop manually grooming data — newly arriving R-class NG images flow into the 'R150_NG' filter on their own.",
          zh: "資料管理拆成三層：Dataset 是廠端蒐集的原始資料群、Batch 是訓練前的整形（downsample 或合併）、Filter 是規則式的持續訂閱器——只要新進資料符合 Label / Project / Batch 規則就自動進入。Filter 與 Batch 最大的差異是「規則持續生效」：資料管線從一次性整理變成可長期運轉的<em>訂閱機制</em>，新增的 R類_NG 影像會自動匯入「R150_NG」這類過濾器，工程師不必再手動整理。"
        },
        img: "data-filter.png",
        caption: {
          en: "Preferred Filter 'R150_NG' (10) — a persistent rule-based subscription, new images flow in automatically",
          zh: "「偏好過濾」R150_NG（10 張）— 規則式持續訂閱，新進影像自動歸入"
        }
      },
      {
        idx: { en: "Decision 03", zh: "決策 03" },
        title: {
          en: "Training / Validation / Test as stages + Version Control",
          zh: "Training / Validation / Test 分階段 + Version Control"
        },
        body: {
          en: "I broke the legacy 'training and testing bundled together' design into three explicit stages — Training → Validate → Test — wrapped in a full Version Control and 'pass-or-loop' cycle: if validation fails, you go back to Training and retune; only if it passes can you deploy. Every model version is traceable, and multiple models can be enabled / disabled in parallel.",
          zh: "捨棄傳統 ADC「訓練測試綁在一起」的設計，把流程拆成 Training → Validate → Test 三階段，並建立完整的 Version Control 與「達標循環」：未達標自動回到 Training 依驗證集調參，達標才能部署。每個模型版本都可追溯，多模型可同時啟用 / 停用。"
        },
        img: "model-management.png",
        caption: {
          en: "Model list: training status, dataset size, enable / disable toggle, version traceability",
          zh: "模型清單：訓練狀態、總數據數、停用 / 啟用切換、版本可追溯"
        }
      },
      {
        idx: { en: "Decision 04", zh: "決策 04" },
        title: {
          en: "Transparent model evaluation + configurable bypass",
          zh: "模型評估透明化 + 復判效能可配置"
        },
        body: {
          en: "Two moves earned the floor's <em>willingness to ship</em>. First, the model-detail page breaks training results into legible metrics (Total / NG / PASS accuracy), with the formula source shown next to every number. Second, users set their own threshold for 'don't run AI re-judgement' — e.g. 'if AOI flags ≥20 defects on a single PCB, route directly to human review' — so AI never bottlenecks throughput in over-kill scenarios. The model stops being a black box; it becomes something operators can read and control.",
          zh: "兩件事讓現場人員<em>敢上線</em>：第一，模型詳細頁把訓練結果拆成可讀指標（整體 / NG / PASS 精確度），每個數字旁都附上說明公式來源；第二，使用者可依產線特性自設「不啟動 AI 復判」的閾值——例如 PCB 瑕疵 ≥ 20 時直接交回人員，避免 AI 在大量誤殺場景中拖慢產能。模型不再是黑盒，而是現場能讀懂、能掌控的工具。"
        },
        img: "model-prediction.png",
        caption: {
          en: "Model detail: Total / NG / PASS accuracy as three big donuts, plus a prediction-task list (states: Done / Predicting / Queued / Editing)",
          zh: "模型詳細頁：整體 / NG / PASS 三個精確度圓環 + 預測任務清單（含完成 / 預測中 / 佇列中 / 編輯中狀態）"
        }
      }
    ]
  },

  // ── 07 Inference Monitor (featured) ──
  feature: {
    num: "07",
    eyebrow: { en: "07 / Inference Monitor", zh: "07 / 推論監控 · Inference Monitor" },
    title: {
      en: "Turning abstract model performance into numbers the floor can read",
      zh: "把抽象的模型表現變成現場能讀懂的數字"
    },
    desc: {
      en: "The Inference Monitor unifies three lenses on one screen: the left donut shows <em>AI inference</em> (NG / PASS / unsupported), the centre donut breaks <em>NG by defect type</em> (tombstone / shift / extra), and the right donut shows <em>human re-judgement</em>. AI and human verdicts sit side by side — who's right and who's wrong is immediately readable. Below, a line chart tracks PASS / NG accuracy across 24 hours, the top tabs filter by component (All / Capacitor / Resistor / Inductor / IC), and a 5-second carousel auto-paginates on factory-floor displays so quality, process, and line-manager roles all read the same page through their own lens.",
      zh: "推論監控頁整合三層視角於一頁：左圓環是 <em>AI 推論結果</em>（NG / PASS / 未支援零件）、中央圓環拆解 <em>NG 瑕疵類型</em>（立碑 / 偏移 / 缺多）、右圓環則是 <em>人員複判結果</em>。AI 跟人的判斷在同一頁並列，誰對誰錯一目了然。下方折線圖追蹤 24 小時 PASS / NG 精確度趨勢，頂部 tab 可切換零件類型（所有零件 / 電容 / 電阻 / 電感 / IC），右上角的 5 秒輪播能在工廠大螢幕上自動翻頁，讓品保、製程、廠長三種角色用同一頁讀懂模型現況。"
    },
    caption: {
      en: "Inference Monitor — three donut views unifying AI inference / NG defect-type breakdown / human re-judgement, plus a 24-hour replacement-rate trend",
      zh: "推論監控 · 三圓環整合 AI 推論／NG 瑕疵類型分布／人員複判，下方追蹤 24 小時替代率與檢出率"
    }
  },

  // ── 04 Information Architecture ──
  s_ia: {
    num: "04",
    title: {
      en: "Information Architecture — From raw images to floor decisions",
      zh: "資訊架構 — 從原始影像到產線決策"
    },
    p1: {
      en: "ADJ compresses the entire ML workflow into <em>four modules + one spine</em>: raw images come in → Data Catalog shapes them → Data Labeling annotates → Inference Service trains and deploys → Inference Monitor visualises everything on the floor. Each module maps to one role's daily surface, so users get their job done without seeing the whole pipeline.",
      zh: "ADJ 把整條 ML 工作流壓縮成 <em>四個模組 + 一條主軸</em>：原始影像進來 → 數據庫整理 → 數據標記 → 推論服務（訓練 + 部署）→ 推論監控（產線可視化）。每個模組對應一種角色的日常工作面，使用者不需要看到整條 pipeline 也能完成自己的工作。"
    },
    flow_label: { en: "Data Spine", zh: "資料主軸" },
    flow: [
      {
        n: "01",
        h: { en: "AOI Images", zh: "AOI 影像" },
        d: { en: "CFX auto-upload", zh: "CFX 自動上拋" }
      },
      {
        n: "02",
        h: { en: "Data Catalog", zh: "數據庫" },
        d: { en: "Cleanse / filter / batch", zh: "清洗 / 過濾 / 切批" }
      },
      {
        n: "03",
        h: { en: "Data Labeling", zh: "數據標記" },
        d: { en: "Annotate + review", zh: "標註 + 審核" }
      },
      {
        n: "04",
        h: { en: "Inference Service", zh: "推論服務" },
        d: { en: "Train + deploy", zh: "訓練 + 部署" }
      },
      {
        n: "05",
        h: { en: "Inference Monitor", zh: "推論監控" },
        d: { en: "Floor AI performance visibility", zh: "產線 AI 效能可視化" }
      }
    ],
    modules_label: { en: "Four Main Modules", zh: "四個主模組" },
    modules: [
      {
        h: { en: "Data Catalog", zh: "數據庫" },
        en: { en: "數據庫", zh: "Data Catalog" },  // bilingual subtitle (other-lang)
        role: { en: "Data Engineer", zh: "資料工程師" },
        pages: [
          { en: "All Data — single image inbox", zh: "所有數據 — 統一影像入口" },
          { en: "Preferred Filter — rule-based subscription", zh: "偏好過濾 — 規則式持續訂閱" },
          { en: "Datasets — Dataset / Batch / Filter tiers", zh: "數據集 — Dataset / Batch / Filter 三層" }
        ]
      },
      {
        h: { en: "Data Labeling", zh: "數據標記" },
        en: { en: "數據標記", zh: "Data Labeling" },
        role: { en: "Shop-floor Domain Engineer", zh: "產線領域工程師" },
        pages: [
          { en: "Project list — grouped by line / component", zh: "專案列表 — 依產線 / 元件分組" },
          { en: "Annotate — Classification / Object Detection", zh: "註釋 — Classification / Object Detection" },
          { en: "Review — second-stage QA", zh: "評論 — 二階審核流" },
          { en: "Reject & Re-label — feedback loop", zh: "拒絕通過 — 退件重新標註" }
        ]
      },
      {
        h: { en: "Inference Service", zh: "推論服務管理" },
        en: { en: "推論服務管理", zh: "Inference Service" },
        role: { en: "Data Scientist", zh: "資料科學家" },
        pages: [
          { en: "Service list — RCL Classifier + IC Autoencoder", zh: "服務清單 — RCL Classifier + IC Autoencoder" },
          { en: "Model list — versioning + enable / disable", zh: "模型清單 — 多版本 + 啟停切換" },
          { en: "Bypass threshold — skip AI on overload", zh: "復判效能設定 — 閥值跳過 AI" },
          { en: "Prediction tasks — offline evaluation", zh: "模型預測 — 離線預測任務" }
        ]
      },
      {
        h: { en: "Inference Monitor", zh: "推論監控" },
        en: { en: "推論監控", zh: "Inference Monitor" },
        role: { en: "Quality / Process / Plant Manager", zh: "品保 / 製程 / 廠長" },
        pages: [
          { en: "AI inference results", zh: "AI 推論結果" },
          { en: "NG defect-type breakdown", zh: "NG 瑕疵類型分布" },
          { en: "Human re-judgement results", zh: "人員複判結果" },
          { en: "24-hour PASS / NG trend", zh: "24 小時 PASS / NG 趨勢" },
          { en: "Big-screen floor carousel", zh: "現場大螢幕輪播" }
        ]
      }
    ],
    admin_label: { en: "Support Modules", zh: "輔助模組" },
    admin: [
      {
        h: { en: "BOM Maintenance", zh: "BOM 維護" },
        d: {
          en: "Parts the system detects but can't find in the BOM are auto-tagged 'Unclassified'; the model trains only on classified components",
          zh: "系統偵測未在 BOM 中的零件自動標為「未分類」，模型只訓練已分類的部分"
        }
      },
      {
        h: { en: "Data Management", zh: "數據管理" },
        d: {
          en: "Edge storage optimization toggle — auto-cleanup older images by retention period to keep factory disks from filling up during high-volume runs",
          zh: "邊緣儲存空間優化開關，依保留期自動清理舊影像，避免廠端硬碟在量產期爆滿"
        }
      }
    ]
  },

  // ── 06 Algorithm Strategy ──
  s_algo: {
    num: "06",
    title: {
      en: "Algorithm Strategy — Two engines, one interface",
      zh: "演算法策略 — 兩套引擎並存"
    },
    p1: {
      en: "Algorithm choice isn't just a DS concern — <em>it directly shapes how users operate the system</em>. RCL (Resistor / Capacitor / Inductor) and IC have very different defect distributions: RCL has enough NG samples to support <em>supervised classification</em>, while IC defects are too rare and varied (tombstone, shift, extra solder, lifted leg, short circuit, lifted pin) to enumerate — far better fit for <em>unsupervised anomaly detection</em>. ADJ wraps both strategies behind one operator interface: users only see 'the right model is running'; the algorithm choice happens automatically based on component type.",
      zh: "演算法選擇不只是 DS 的事，<em>它直接決定使用者要怎麼操作系統</em>。RCL（電容 / 電阻 / 電感）與 IC 是兩種完全不同的瑕疵分布——RCL 的 NG 樣本相對好收集，可以用<em>監督式分類</em>學會判斷；IC 的 NG 樣本則太稀少且形態多變（立碑、偏移、缺多、翹少、短路、翹腳）難以窮舉，適合用<em>無監督異常偵測</em>。ADJ 把兩種策略包成同一份操作介面下的雙引擎——使用者只看到「適合的模型已經在跑」，背後的演算法選擇由系統依元件類型自動套用。"
    },
    algo_caption: {
      en: "Inference Service Management lists two algorithms: RCL · ResNet18 supervised classifier; IC · Autoencoder unsupervised anomaly detector",
      zh: "推論服務管理列出兩種演算法：RCL · ResNet18 監督式分類；IC · Autoencoder 無監督異常偵測"
    },
    labels: {
      components: { en: "Components", zh: "元件" },
      defects: { en: "Defects", zh: "瑕疵" }
    },
    engines: [
      {
        h: "RCL — Classifier",
        algo: "ResNet18 · Supervised Classification",
        comp: { en: "Capacitor / Resistor / Inductor", zh: "電容 / 電阻 / 電感" },
        defect: {
          en: "Missing · Shift · Tombstone · Side-stand · Extra · Lifted · Cold-solder",
          zh: "缺件 · 偏移 · 立碑 · 側立 · 缺多 · 翹少 · 空焊"
        },
        why: {
          en: "RCL components have enough NG samples to learn 'normal vs. defect' as binary or multi-class classification.",
          zh: "RCL 元件 NG 樣本相對好收集，分類模型可以直接學「正常 vs. 缺陷」的二分類或多分類。"
        }
      },
      {
        h: "IC — Unsupervised",
        algo: "Autoencoder · Anomaly Detection",
        comp: { en: "Integrated Circuits", zh: "積體電路 IC" },
        defect: {
          en: "Missing · Shift · Extra · Lifted · Short · Lifted-leg",
          zh: "缺件 · 偏移 · 缺多 · 翹少 · 短路 · 翹腳"
        },
        why: {
          en: "IC NG samples are too rare and too varied. The Autoencoder only needs PASS samples to learn 'what normal looks like' — anything that doesn't reconstruct cleanly gets flagged.",
          zh: "IC 的 NG 樣本太稀少、瑕疵類型也太發散，Autoencoder 只需要 PASS 樣本就能學會「正常的長相」，遇到不像的就標記為異常。"
        }
      }
    ]
  },

  // ── 05 Data Labeling ──
  s_label: {
    num: "05",
    title: {
      en: "Data Labeling — taking the pain out of annotation",
      zh: "數據標記 — 把標註的痛拆掉"
    },
    p1: {
      en: "After sitting next to people who actually run legacy ADC, the heaviest part of the workflow isn't modeling — it's <em>labeling</em>. Tens of thousands of images per day had to be classified, boxed, and reviewed by hand, with data scientists and operators stuck on both ends. ADJ pours its largest UX investment here: Auto Labeling, RCL-ROI assistant frames, and CFX metadata ingestion turn 'draw a box on every image' into <em>'glance and approve'</em>.",
      zh: "走訪實際操作 ADC 的人員後發現，最沉重的不是模型，是<em>標註</em>——每天上萬張影像要手動分類、手動畫框、手動審核，DS 與作業員兩端都被卡住。ADJ 在這個模組投入了最多 UX 設計能量：透過 Auto Labeling、RCL-ROI 輔助框與 CFX metadata 導入，把「每張圖都要手畫」的疲憊，<em>翻譯成「看一眼並審核」的工作</em>。"
    },
    caption_l: {
      en: "Classification labeling — RC components use NG / PASS classes; the left rail shows five states: Pending / In Review / Rejected / Approved / Skipped",
      zh: "Classification 標註 — RC 類元件採 NG / PASS 雙類別，左側清單顯示待標記 / 待審核 / 拒絕通過 / 註釋完成 / 已略過 五狀態"
    },
    caption_r: {
      en: "Object Detection ROI — IC uses bounding-box labeling, with the system auto-suggesting ROI from component spec — the user only confirms",
      zh: "Object Detection ROI — IC 類採位置框標註，系統依元件規格自動提示 ROI，使用者只需確認"
    },
    moves_label: { en: "Three Key Design Moves", zh: "三個關鍵設計" },
    moves: [
      {
        n: "01",
        h: {
          en: "Auto Labeling — pre-filled verdict",
          zh: "Auto Labeling — 預判標籤"
        },
        d: {
          en: "Every image already has an AI-suggested NG / PASS verdict when the annotator opens the screen. Their job shifts from 'decide what this is' to 'verify the AI is right' — one less layer of cognitive load.",
          zh: "使用者進入畫面時，每張圖已經有 AI 預判好的 NG / PASS 結果。標註者的工作從「決定它是什麼」變成「驗證 AI 對不對」，省掉一輪認知負擔。"
        }
      },
      {
        n: "02",
        h: {
          en: "RCL-ROI assistant frame",
          zh: "RCL-ROI 輔助框"
        },
        d: {
          en: "For RCL components (resistor / capacitor / inductor), the system auto-positions the bounding box based on component spec — no mouse-dragging. For IC, an Object Detection mode handles component localization.",
          zh: "RC 元件（電容 / 電阻 / 電感）的位置由系統依元件規格自動提示，不用拖滑鼠畫框；IC 類則切到 Object Detection 模式，由模型輸出 component localization。"
        }
      },
      {
        n: "03",
        h: {
          en: "CFX metadata ingestion",
          zh: "CFX metadata 直接消化"
        },
        d: {
          en: "AOI images uploaded via IPC-CFX already carry component type, inspection item, and other metadata. ADJ consumes these fields directly — users don't have to label 'what component is this' or 'which defect type'. Metadata becomes the default; humans only review.",
          zh: "AOI 透過 IPC-CFX 上拋的影像本就帶有元件類型、檢測項目等元資料。系統直接吃這些欄位——元資料變成預設答案，使用者不用再標「這是什麼元件」「這是哪種瑕疵」，只要審核。"
        }
      }
    ],
    state_label: { en: "Labeling Workflow", zh: "標註狀態流程" },
    states: [
      {
        n: "01",
        h: { en: "Pending", zh: "待標記" },
        d: { en: "New images enter the annotation queue", zh: "新進影像進入標註佇列" }
      },
      {
        n: "02",
        h: { en: "In Review", zh: "待審核" },
        d: {
          en: "Annotator finished, awaiting QA approver",
          zh: "註釋者標完，等審核者把關"
        }
      },
      {
        n: "03",
        h: { en: "Approved / Rejected", zh: "註釋完成 / 拒絕通過" },
        d: {
          en: "Approved → training set; Rejected → back for re-labeling",
          zh: "通過 → 進訓練集；拒絕 → 退回重新標註"
        }
      }
    ]
  },

  // ── 08 Operations Highlights ──
  s_ops: {
    num: "08",
    title: {
      en: "Operations Highlights — getting it to live on the line",
      zh: "運營亮點 — 落到產線的細節"
    },
    p1: {
      en: "Shipping the model is just the start; <em>keeping it running</em> on the floor is the actual problem. ADJ turns three operational pain points — part-number maintenance, edge storage, throughput protection — into first-class features users can directly operate:",
      zh: "AI 模型上線只是起點，<em>能不能在產線跑得久</em>才是核心。ADJ 把運營層的痛點——料號維護、儲存空間、產能保護——都變成可被使用者直接操作的功能："
    },
    ops: [
      {
        h: { en: "BOM Maintenance", zh: "BOM 維護" },
        v: "1,000+",
        u: { en: "part nos.", zh: "筆料號" },
        d: {
          en: "Part numbers absent from the BOM are auto-tagged as 'Unclassified type'. Users upload a BOM template or fill it in manually; the model trains only on classified components.",
          zh: "未在 BOM 中的料號自動標記為「未分類數據類型」，使用者可上傳 BOM 模板或手動補齊，模型只訓練已分類的零件。"
        }
      },
      {
        h: { en: "Edge Storage", zh: "邊緣儲存優化" },
        v: "Auto",
        u: { en: "cleanup", zh: "空間清理" },
        d: {
          en: "Edge devices can enable 'Storage Optimization' to auto-clean older images on a retention schedule, preventing factory disks from filling up during high-volume runs.",
          zh: "邊緣端可開啟「儲存空間優化」，按既定保留期自動清理舊影像，避免廠端硬碟在量產期爆滿。"
        }
      },
      {
        h: { en: "Bypass Threshold", zh: "復判效能閥值" },
        v: "≥ N",
        u: { en: "skip AI", zh: "瑕疵略過" },
        d: {
          en: "If AOI flags more than N defects on a single PCB, the system bypasses AI and routes to human review — preventing AI from bottlenecking throughput in over-kill scenarios.",
          zh: "AOI 在同一片 PCB 上瑕疵數超過閥值時直接交回人員複判——避免 AI 在大量誤殺場景中拖慢產能。"
        }
      }
    ],
    ops_imgs: [
      {
        src: "bom-table.png",
        caption: {
          en: "BOM Maintenance · 1,259 part numbers, template download / upload, unclassified items shown by part number",
          zh: "BOM 表維護 · 1,259 筆料號，下載 / 上傳模板，未分類項目以料號顯示"
        }
      },
      {
        src: "data-management.png",
        caption: {
          en: "Data Management · Edge storage optimization toggle, auto-cleanup by retention period",
          zh: "數據管理 · 邊緣儲存優化開關，按保留期自動清理"
        }
      }
    ]
  },

  // ── 10 Outcome & Reflection ──
  s5: {
    num: "10",
    title: { en: "Outcome & Reflection", zh: "成果與反思" },
    p1: {
      en: "ADJ completed its full system rebuild and validated the re-judgement workflow on live production lines. Additional models — including red-glue inspection — were rolled out in turn, with auto-retraining on the roadmap.",
      zh: "ADJ 完成系統重構，並於實際產線完成模型復判的導入驗證；後續紅膠等模型陸續部署，自動重訓機制亦進入規劃。"
    },
    outcomes: [
      {
        n: "50%",
        l: {
          en: "AI Replacement Rate\nAI takes on roughly half of human re-judgement work",
          zh: "AI替代率\nAI 替人工減少約一半的復判量"
        }
      },
      {
        n: "0%",
        l: {
          en: "Leak Rate\nZero misses under the most conservative model",
          zh: "漏檢率\n最保守模型實驗下 0 漏檢"
        }
      },
      {
        n: "4",
        l: {
          en: "Component Types\nSupports Resistor / Capacitor / Inductor / IC",
          zh: "種零件類型\n支援電阻 / 電容 / 電感 / IC"
        }
      },
      {
        n: "30",
        l: {
          en: "Days to Self-Onboard\nFactory teams stand up AI assistance in ~1 month",
          zh: "天自主上線\n工廠自主訓練約 1 個月即可啟動 AI 輔助"
        }
      }
    ],
    reflection_title: { en: "Reflection", zh: "反思" },
    reflection: {
      en: "<p>The biggest lesson from ADJ was about UX's role in AI systems — it's not about polishing screens, it's about <em>translating an abstract ML pipeline into a daily operating track for the shop floor</em>. The Dataset / Batch / Filter tiering looks like a small data-management decision, but it's really about wrapping the data scientist's mental model into something a process engineer can operate.</p><p>The other lesson came from sitting next to labelers. The heaviest part of legacy ADC isn't the modeling — it's the labeling. RCL-ROI assistant frames, Auto Labeling, and direct CFX metadata ingestion look like three unrelated decisions, but they all answer the same question: <em>how do we make the operator label one less image</em>? In hindsight, that mattered more than any beautiful dashboard.</p><p>ADJ was also my first time navigating three stakeholder camps inside one system: the algorithm team, the process team, and the IT platform team. Each spoke a different language, optimized for different metrics, ranked priorities differently. <span style=\"color:var(--accent);font-weight:600\">UX in this kind of context isn't interface work — it's translation work, turning three world-views into one product language.</span> That experience pushed me directly toward stepping into the Product Owner role.</p>",
      zh: "<p>ADJ 對我而言最重要的學習，是 UX 在 AI 系統裡扮演的角色——不只是把畫面做漂亮，而是<em>把抽象的機器學習流程，翻譯成現場人員能日常操作的工作軌道</em>。Dataset / Batch / Filter 三層結構看似只是資料管理的小設計，但它本質上是把資料科學家的工作模式，封裝成領域工程師的操作模式。</p><p>另一個刻骨銘心的學習是「標註的痛」。在實際走訪標註人員後才發現，傳統 ADC 系統最沉重的不是模型，而是標註。RCL-ROI 輔助框、Auto Labeling、CFX metadata 直接導入這三個看似不相關的設計決策，本質上都在回答同一個問題——<em>怎麼讓操作員少標一張圖</em>。事後回看，這比任何漂亮的 dashboard 都重要。</p><p>ADJ 也是我第一次在一個系統裡同時面對「演算法團隊」、「製程團隊」、「IT 平台團隊」三方利害關係人。每一方都有自己語言、自己的指標、自己的優先順序。<span style=\"color:var(--accent);font-weight:600\">UX 在這種場域不是介面工作，而是翻譯工作——把不同團隊的世界觀，翻譯成同一個產品能容納的設計語言。</span>這個經驗導向我後來轉任 Product Owner 的種子與機會。</p>"
    }
  },

  // ── 09 Legacy ADC vs ADJ ──
  s6: {
    num: "09",
    title: { en: "Legacy ADC vs ADJ", zh: "傳統 ADC vs ADJ" },
    p1: {
      en: "ADJ redefined what shop-floor AI re-judgement should look like across five capability dimensions:",
      zh: "ADJ 在五個關鍵能力上重新定義了「車間 AI 覆判」應該長什麼樣："
    },
    before_label: { en: "Legacy ADC", zh: "傳統 ADC" },
    after_label: { en: "ADJ", zh: "ADJ" },
    before: [
      { en: "Fixed local image path, manual import", zh: "圖片來源固定本地路徑、需手動匯入" },
      { en: "Each model needs a DS to re-clean the training set", zh: "每個模型需 DS 重新清洗訓練集" },
      { en: "Operator hand-labels every image", zh: "每張圖需作業人員手動標註" },
      { en: "Training / testing bundled together, inseparable", zh: "訓練 / 測試流程綁在一起、不可分離" },
      { en: "Single-model deployment, no concurrency", zh: "單一模型部署、無法多模型並行" }
    ],
    after: [
      { en: "CFX auto-upload, plug-and-play across AOI vendors", zh: "CFX 自動上拋、跨廠牌 AOI 即插即用" },
      { en: "Three-tier data + rule-based Filter for persistent shaping", zh: "三層數據結構 + 規則式 Filter 持續整形" },
      { en: "Auto Labeling + RCL-ROI assist + CFX metadata review", zh: "Auto Labeling + RCL-ROI 輔助框 + CFX metadata 審核" },
      { en: "Three-stage split + Version Control + pass-or-loop", zh: "三階段分離 + Version Control + 達標循環" },
      { en: "Concurrent models + enable / disable + offline prediction", zh: "多模型並行 + 啟停管理 + 離線預測" }
    ]
  },

  // Inline nav labels that used to be `lang === "zh" ? ... : ...` in JSX
  nav: {
    prev: { en: "← Previous Case", zh: "← 上一個作品" },
    back_to_works: { en: "All Works →", zh: "返回作品列表 →" }
  }
};
