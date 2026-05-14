// Edge PQM — case study content (key-first / co-located i18n)
//
// Structure: every translatable leaf is `{ en: "...", zh: "..." }`.
// Non-localized fields (numbers, layout codes, identical-in-both strings)
// stay as plain values.
//
// At render time call `window.pickLang(WORK1_CONTENT, lang)` to flatten the
// tree into the active language — the rest of the JSX consumes it like a
// regular object (e.g. `c.s1.title`). pickLang is defined globally in
// ../content.shared.js.

window.WORK1_CONTENT = {
  title: { en: "Edge PQM", zh: "Edge PQM" },
  tagline: {
    en: "Translating real-time manufacturing data into a production monitoring platform Line Managers actually use",
    zh: "把複雜的製造現場數據，翻譯成讓用戶真正能用的生產監控平台"
  },

  // tags & values identical across locales → plain strings (pickLang passes through)
  tags: ["UX Design", "Product Owner", "Dashboard", "IIoT"],

  meta: [
    {
      k: { en: "Role", zh: "角色" },
      v: "UX Designer · Product Owner"
    },
    {
      k: { en: "Team", zh: "團隊" },
      v: {
        en: "1 Designer · 3 Engineers · 1 PM",
        zh: "Designer × 1 · Engineer × 3 · PM × 1"
      }
    },
    {
      k: { en: "Timeline", zh: "時程" },
      v: "2025 — 2026"
    },
    {
      k: { en: "Tools", zh: "工具" },
      v: "Figma · Jira · ClaudeCode"
    }
  ],

  // Problem / My Impact / Outcome labels are kept in English on both locales by design
  summary: [
    {
      k: "Problem",
      v: {
        en: "Multiple data sources and metric owners made production status hard to trust and harder to read in one view.",
        zh: "多個系統散亂的數據源與組織各自定義指標，導致現場無法在同一個可信畫面快速判斷產線狀態。"
      }
    },
    {
      k: "My Impact",
      v: {
        en: "Restructured the IA, role-based dashboards, metric provenance, and widget model; later drove cross-org metric alignment as Product Owner.",
        zh: "重構資訊架構、定義不同的角色看板、指標可溯源與 widget 化機制，並以 PO 身分推動跨組織指標共識。"
      }
    },
    {
      k: "Outcome",
      v: {
        en: "Rolled out across Taiwan, China, and Thailand, supporting 500+ production lines and four-language delivery.",
        zh: "完成台灣、中國、泰國跨廠導入，支援 500+ 產線與四語系交付。"
      }
    }
  ],

  // ── 01 Context & Challenge ──
  s1: {
    num: "01",
    title: { en: "Context & Challenge", zh: "背景與挑戰" },
    // Quick domain primer — placed between the section heading and the cs-2col
    // body so readers unfamiliar with smart-manufacturing data sources can get
    // oriented before encountering CFX / MES / SPC in body text.
    domain: {
      label: { en: "Quick domain primer", zh: "讀前速懂｜智慧製造資料來源" },
      terms: [
        {
          h: { en: "IPC-CFX", zh: "IPC-CFX · 連線工廠交換" },
          d: {
            en: "An IPC industry standard for SMT factory equipment communication. CFX-capable machines auto-publish events (recipe load, board in/out, defects, alarms) in a standardized format, so any platform can consume them without vendor-specific adapters.",
            zh: "IPC（國際電子工業聯接協會）制定的 SMT 工廠設備通訊標準。支援 CFX 的設備會以統一格式自動拋出事件（換配方、進板出板、不良、警報），任何系統都能直接接收，不用為每個設備廠牌再做轉接。"
          }
        },
        {
          h: { en: "MES", zh: "MES · 製造執行系統" },
          d: {
            en: "Manufacturing Execution System — the factory's core system for work orders, production scheduling, lot tracking, and shop-floor data. Edge PQM consumes MES work orders to link production data to the right WO context.",
            zh: "Manufacturing Execution System，工廠的生產執行核心，管工單、生產排程、批次追蹤、現場數據。Edge PQM 從 MES 取得工單，把採集到的生產數據對應到正確的 WO 上。"
          }
        },
        {
          h: { en: "SPC", zh: "SPC · 統計製程管制" },
          d: {
            en: "Statistical Process Control — a quality methodology that monitors process variation through control charts and KPIs (Cp / Cpk, KPIV / OV) to catch drift before it becomes defects. Edge PQM integrates with SPC to surface quality anomalies on the dashboard.",
            zh: "Statistical Process Control，用控制圖與 Cp / Cpk、KPIV / OV 等指標監控製程變異，在缺陷產生前就抓到偏移的品質方法。Edge PQM 整合 SPC 模組，把品質異常直接呈現到看板上。"
          }
        }
      ]
    },
    p1: {
      en: `Edge PQM (Production Quality Management) is a core application in ${window.BRAND.full.en}'s smart manufacturing stack. The goal: let factory Line Managers monitor production status <em>in a single view</em> — no switching between three systems, no waiting for shift reports, no guesswork.`,
      zh: `Edge PQM 是${window.BRAND.full.zh}智慧製造堆疊的核心應用之一，目標是讓工廠產線在<em>同一個系統上即時掌握產線狀態</em>——不用在多個系統之間切換，不用等現場回報，不用憑感覺判斷哪裡出了問題。`
    },
    p2: {
      en: "My role spanned two phases: first as <em>UX Designer</em>, restructuring the entire information architecture and design system; then as <em>Product Owner</em>, aligning metric definitions across multiple internal organizations and driving multi-site deployment.",
      zh: "在這個專案裡，我的職責橫跨兩個階段：善用過去 <em>UX Designer</em> 的能力重構整個資訊架構與設計系統；並以 <em>Product Owner</em> 角色，制定產品藍圖，調度開發資源進行產品管理，並負責與多個內部組織對齊指標定義、釐清產品邊界、推動跨廠區導入。"
    },
    challenge_title: { en: "The Core Challenge", zh: "核心挑戰" },
    challenge: {
      en: "Data flows from CFX equipment events, MES work orders, EDMS device info, and the SPC quality module — multiple sources with metrics defined by different organizations, all needing to land in one configurable dashboard operators can read in seconds while standing.",
      zh: "資料來自 CFX 設備事件、MES 工單系統、EDMS 設備資訊、SPC 品質模組——等多個資料源、多個組織定義的指標，要統一進一個可配置的看板，還要讓站在螢幕前的用戶幾秒就能讀懂。"
    }
  },

  // ── 02 Research & Insight ──
  s2: {
    num: "02",
    title: { en: "Research & Insight", zh: "研究與洞察" },
    p1: {
      en: "I embedded on the shop floor regularly, talking to Line Managers, process engineers, and equipment technicians. Three key insights emerged:",
      zh: "定期走訪產線，與現場製程工程師、設備技術員對話。研究帶出三個關鍵洞察："
    },
    insights: [
      {
        n: "01",
        title: {
          en: "Shared screen, different jobs",
          zh: "角色分工，螢幕共用"
        },
        desc: {
          en: "Line Managers watch overall utilization and yield rate. Equipment engineers focus on ATT / CT for specific machines. Quality engineers only care about FPY. One screen has to serve three distinct mental models.",
          zh: "廠長看全線稼動率與直通率；設備工程師看某台設備的 ATT / CT；品質工程師只在乎 FPY。同一個系統必須服務三種不同視角。"
        }
      },
      {
        n: "02",
        title: {
          en: "Metric definitions are the real pain",
          zh: "指標定義才是痛點"
        },
        desc: {
          en: "\"Utilization\" meant different things to different teams. Numbers appeared on screen with no explanation, so nobody trusted them — and nobody used them.",
          zh: "「稼動率」這個詞在不同組織有不同算法。數字出現在螢幕上，沒有人知道它怎麼算出來的，結果大家不信任、不使用。"
        }
      },
      {
        n: "03",
        title: {
          en: "Read in seconds, or never",
          zh: "必須在秒級內讀完，或永遠不讀"
        },
        desc: {
          en: "Line Managers stand in front of a large display during shift handover for under 10 seconds. Information has to be large and immediate — otherwise they keep using whiteboards and pen-and-paper.",
          zh: "用戶在排班確認時站在大螢幕前，視線停留不超過 10 秒。資訊必須夠大、夠直覺，否則他們會繼續用白板和筆紙。"
        }
      }
    ]
  },

  // ── 03 Design Decisions ──
  s3: {
    num: "03",
    title: { en: "Design Decisions", zh: "設計決策" },
    p1: {
      en: "Four key decisions came out of the research:",
      zh: "基於現場研究，我做了四個關鍵的設計決策："
    },
    decisions: [
      {
        idx: { en: "Decision 01", zh: "決策 01" },
        title: {
          en: "Three fixed dashboards + custom dashboard",
          zh: "三層標準看板 + 自訂看板"
        },
        body: {
          en: "Four role-aligned standard dashboards out of the box (Production Dashboard, Metrics Dashboard, Equipment Status Dashboard, Quality Analysis Dashboard), plus a custom dashboard for advanced users to freely compose. Fixed dashboards ensure out-of-the-box usability; custom dashboards provide an outlet for the long tail.",
          zh: "依角色需求設計四個固定的標準看板（產線生產看板、指標看板、設備狀態看板、品質分析看板），並提供自訂看板讓進階用戶自行組合。標準看板確保開箱即用；自訂看板確保長尾需求有出口。"
        }
      },
      {
        idx: { en: "Decision 02", zh: "決策 02" },
        title: {
          en: "Metric Provenance Card — making every number verifiable",
          zh: "指標溯源卡 — 讓每個數字可以被驗証"
        },
        body: {
          en: "Every KPI carries its definition, formula, data source, and update frequency — reviewed and approved by each contributing organization to reach consensus. Not just UI polish; this is multi-organizational alignment made visible as a product layer.",
          zh: "每個 KPI 指標附上定義、計算公式、資料來源、更新頻率，由各組織共同審核取得共識。這不只是 UI 設計，而是讓多個組織的共識變成可見的產品層。"
        }
      },
      {
        idx: { en: "Decision 03", zh: "決策 03" },
        title: {
          en: "Number-forward visual language",
          zh: "數字優先的視覺語言"
        },
        body: {
          en: "Key KPIs (UPH, OEE, Utilization) are displayed in large numbers, turning red on anomaly or orange on warning when thresholds are breached. Donut charts show equipment status distribution; line charts show ATT / CT trends. Equipment metrics refresh as fast as every 10 seconds.",
          zh: "關鍵指標（UPH、OEE、稼動率）用大數字呈現，觸發閾值時立即變色（紅色=異常、橙色=警示）。圓環圖顯示設備狀態分布；折線圖顯示 ATT / CT 趨勢。設備狀態更新最快 10 秒一次。"
        }
      },
      {
        idx: { en: "Decision 04", zh: "決策 04" },
        title: {
          en: "Every metric is a widget — freely composable",
          zh: "全指標 Widget 化 — 自由組合的部件中心"
        },
        body: {
          en: "All metric modules are designed as self-contained widgets. Through the Widget Center, users freely select from three categories — Production (P), Quality (Q), Equipment (M) — and drag any combination into a custom dashboard. One data infrastructure serves diverse use cases without redundant development.",
          zh: "所有指標模組都設計為獨立 widget，透過「部件中心」讓用戶從生產分析（P）、品質分析（Q）、設備分析（M）三個類別中自由挑選、拖拉組合成專屬看板。這讓同一套資料基礎設施，能服務不同的使用情境，無需重複開發。"
        }
      }
    ]
  },

  // ── 04 Information Architecture ──
  s_ia: {
    num: "04",
    title: {
      en: "Information Architecture — From multi-source data to role dashboards",
      zh: "資訊架構 — 從多源資料到角色看板"
    },
    p1: {
      en: "Edge PQM aggregates <em>multiple data sources</em> (CFX equipment events / MES work orders / EDMS device info / SPC quality module) into one platform, then fans out to <em>four standard dashboards + one custom dashboard</em>, each mapping to a role's daily work. Underneath sits a widget-based <em>Widget Center</em>: build the data infrastructure once, compose use cases freely.",
      zh: "Edge PQM 把<em>多個資料源</em>（CFX 設備事件 / MES 工單 / EDMS 設備資訊 / SPC 品質模組）匯聚成一個平台，再 fan-out 到<em>四個標準看板 + 一個自訂看板</em>，每張對應一種角色的日常。背後共用一套 widget 化的部件中心，讓資料基礎設施只開發一次，使用情境可以自由組合。"
    },
    flow_label: { en: "Data Spine", zh: "資料主軸" },
    flow: [
      {
        n: "01",
        h: { en: "Multi-source", zh: "多源資料" },
        d: "CFX / MES / EDMS / SPC"
      },
      {
        n: "02",
        h: { en: "Platform", zh: "平台整合" },
        d: { en: "Cleanse / align / compute", zh: "清洗 / 對齊 / 計算指標" }
      },
      {
        n: "03",
        h: { en: "Widget Center", zh: "部件中心" },
        d: { en: "P / Q / M categories", zh: "P / Q / M 三類 widget" }
      },
      {
        n: "04",
        h: { en: "Dashboards", zh: "看板組合" },
        d: { en: "4 standard + N custom", zh: "4 標準 + N 個自訂" }
      },
      {
        n: "05",
        h: { en: "Roles", zh: "角色解讀" },
        d: { en: "Manager / Engineer / QA", zh: "廠長 / 工程師 / 品保" }
      }
    ],
    modules_label: { en: "Four Standard Dashboards", zh: "四個標準看板" },
    modules: [
      {
        h: { en: "Production Dashboard", zh: "產線生產看板" },
        // `en` here is the *subtitle* — i.e. the "other language" shown below the
        // primary heading. After pickLang, m.en resolves to a string in JSX.
        en: { en: "產線生產看板", zh: "Production Dashboard" },
        role: {
          en: "Executive / Plant Manager / Customer",
          zh: "高層主管 / 廠長 / 客戶"
        },
        pages: [
          { en: "Plant-wide utilization / yield rate", zh: "全廠稼動率 / 直通率" },
          { en: "UPH / OEE live numbers", zh: "UPH / OEE 即時數字" },
          { en: "Bottleneck-station analysis + standard-time achievement", zh: "整線瓶頸站分析 + 標工達成率" }
        ]
      },
      {
        h: { en: "Metrics Dashboard", zh: "指標看板" },
        en: { en: "指標看板", zh: "Metrics Dashboard" },
        role: { en: "Line Operator / Shift Lead", zh: "產線作業員 / 班組長" },
        pages: [
          { en: "Large UPH / OEE / Utilization KPIs", zh: "UPH / OEE / 稼動率 大數字" },
          { en: "Threshold-triggered real-time alerts", zh: "閾值觸發即時警示" },
          { en: "Optimized for big-screen viewing", zh: "支援大螢幕視覺化" },
          { en: "Fast-scan for decision makers", zh: "供決策層快速掃讀" }
        ]
      },
      {
        h: { en: "Equipment Dashboard", zh: "設備狀態看板" },
        en: { en: "設備狀態看板", zh: "Equipment Dashboard" },
        role: { en: "Process / Equipment Engineer", zh: "製程 / 設備工程師" },
        pages: [
          { en: "ATT / CT real-time trends", zh: "ATT / CT 即時趨勢圖" },
          { en: "Downtime history + Error Code ranking", zh: "停機歷史 + Error Code 排行" },
          { en: "Sub-minute refresh", zh: "秒級更新" }
        ]
      },
      {
        h: { en: "Quality Dashboard", zh: "品質分析看板" },
        en: { en: "品質分析看板", zh: "Quality Dashboard" },
        role: { en: "Quality Engineer", zh: "品質工程師" },
        pages: [
          { en: "Yield / Throughput-rate analysis", zh: "良率/直通率分析" },
          { en: "Defect-type distribution", zh: "瑕疵類型分布" },
          { en: "Quality anomaly tracking", zh: "品質異常追蹤" },
          { en: "Integrated with SPC module — KPIV / OV monitoring", zh: "整合 SPC 模組監控 KPIV/OV" }
        ]
      }
    ],
    admin_label: { en: "Support Modules", zh: "支撐模組" },
    admin: [
      {
        h: { en: "Widget Center + Custom", zh: "部件中心 + 自訂看板" },
        d: {
          en: "Freely pick from P (Production) / Q (Quality) / M (Machine) widget categories, drag and compose into a custom dashboard — covering long-tail use cases the fixed dashboards can't enumerate",
          zh: "從 P（生產）/ Q（品質）/ M（設備）三類 widget 自由挑選，拖拉組合成專屬看板，覆蓋固定看板無法窮舉的長尾需求"
        }
      },
      {
        h: { en: "Metric Provenance Card", zh: "指標溯源卡" },
        d: {
          en: "Every KPI carries definition / formula / data source / update frequency, reviewed across organizations — making global governance standardizable, so executives can trust the numbers",
          zh: "每個 KPI 指標附上定義 / 公式 / 資料來源 / 更新頻率，由各組織共同審核取得共識——讓全球治理可標準化，數字讓高層相信"
        }
      },
      {
        h: { en: "KPI Threshold Settings", zh: "KPI 閾值設定" },
        d: {
          en: "Every key metric (UPH / OEE / Utilization / FPY, etc.) carries a configurable red / orange threshold tuned to the line's characteristics. When a number breaks a threshold, the indicator turns color instantly — operators don't read numbers, they read the colors",
          zh: "每個關鍵指標（UPH / OEE / 稼動率 / FPY 等）的警示閾值由使用者依產線特性自設。觸發時看板立即變色——站在大螢幕前的人不用讀到具體數字，注意顏色就可以立刻採取行動"
        }
      }
    ]
  },

  // ── 05 Visual & Design System ──
  s4: {
    num: "05",
    title: { en: "Visual & Design System", zh: "視覺與設計系統" },
    p1: {
      en: "Factory screens are diverse — large displays in war rooms, 24\" engineer monitors, HMI touchscreens on the floor, and dimly lit night shifts. So I built a <em>light / dark dual theme</em> that auto-enlarges every dashboard element when entering full-screen mode (matching real monitoring scenarios), with the entire design-token system unified so the engineering team can switch UI modes with a single toggle.",
      zh: "工廠環境的螢幕多樣——戰情室的大型顯示器、工程師桌面的 24 吋螢幕、現場產線上的監控面板，甚至深夜輪班時燈光昏暗的車間。因此我設計了<em>深色 / 淺色雙主題</em>，且在全螢幕狀態將看板所有元素自動放大，以利於實際監控情境，並把所有設計 token 系統化，讓工程團隊能在不同環境下一鍵切換 UI 模式。"
    },
    p2: {
      en: `The system supports <em>four languages</em> (Traditional Chinese, Simplified Chinese, English, Thai) because ${window.BRAND.possessive.en} factories span Asia and operators work in their native tongue. I also brought <em>AI Agent collaboration</em> into delivery: defining i18n key conventions, drafting translations, and checking semantic consistency across all four locales, so multilingual maintenance no longer depended on line-by-line manual review.`,
      zh: `同時支援<em>四語 i18n</em>（繁體中文 / 簡體中文 / English / ไทย），因為${window.BRAND.possessive.zh}工廠遍布亞洲，操作人員的母語各不相同。我也把 <em>AI Agent</em> 納入交付流程：協助建立 i18n key 命名規範、產出翻譯初稿、檢查四語語意一致性，讓多語系維護不再完全依賴人工逐句比對。`
    },
    p3: {
      en: "This was my first full deployment of an <em>AI-powered workflow in a live product</em> — and the move from 'a designer who uses AI tools' to 'a product owner who designs AI workflows'.",
      zh: "這是我將 <em>AI 工作流落地到真實產品交付</em>的第一個完整實踐——也是我從「會用 AI 工具的設計師」走向「能設計 AI 工作流的產品擁有者」。"
    }
  },

  // ── 06 Outcome & Reflection ──
  s5: {
    num: "06",
    title: { en: "Outcome & Reflection", zh: "成果與反思" },
    p1: {
      en: `Edge PQM scaled to a multi-country rollout across Taiwan, China, and Thailand, becoming a core system in ${window.BRAND.possessive.en} manufacturing application stack. What it really solved underneath was the challenge of <em>global ramp-up consistency</em>: tuned best-practice parameters and quality logic can be replicated to plants worldwide, dramatically shortening the new-line ramp-up curve. This kind of "Copy Exact" production-line replication is, at its core, the <em>softwarization and asset-ization of manufacturing know-how</em>.`,
      zh: `Edge PQM 完成跨國規模化導入，覆蓋台灣、中國、泰國三地廠區，現已成為${window.BRAND.possessive.zh}生產製造應用的核心系統之一，背後其實解決的是「全球擴產率一致性」的挑戰。調校好的最佳生產參數與品質邏輯，可以快速複製到世界各廠，大幅縮短新廠的開線爬坡期，這種「產線複製(Copy Exact)」的過程，本質上是 「製造經驗的軟體化與資產化」。`
    },
    outcomes: [
      {
        n: "500+",
        l: { en: "Production lines deployed\nTaiwan・China・Thailand", zh: "條產線成功導入\n台灣・中國・泰國" }
      },
      {
        n: "3",
        l: { en: "Manufacturing domains\nSMT・Electronics Assembly・Plastic Injection", zh: "種製造領域\nSMT・電子組裝・塑膠射出" }
      },
      {
        n: "3",
        l: { en: "Metric dimensions\nProductivity・Equipment Status・Quality", zh: "類指標維度\n生產力・設備狀態・品質分析" }
      },
      {
        n: "4",
        l: { en: "Languages i18n\nZH-TW・ZH-CN・EN・TH", zh: "個多語系 i18n\n繁・簡・英・泰" }
      }
    ],
    reflection_title: { en: "Reflection", zh: "反思" },
    reflection: {
      en: "<p>The hardest part wasn't the UI — it was getting different organizations to align on metric definitions that could coexist on one screen. The Metric Provenance Card looks like a minor feature, but it represents cross-organizational governance made visible — earning operators' trust in the numbers on screen is the real work of UX.</p><p>The lesson that only came after launch: when equipment data reporting breaks down, numbers on the dashboard go wrong. But that's not an Edge PQM bug — it's a dropped CFX event, an unsynced MES work order, a machine offline with no status flag. From the operator's view, all they see is 'the number is wrong' and they blame the system. This taught me that <em>data health visibility</em> and <em>guided error triage design</em> are the most underestimated — and trust-critical — design problems in any platform that depends on upstream data sources.</p><p>Moving from UX Designer to Product Owner revealed something else: good UI solves the operator's workflow problem, but for a product to survive, you also have to solve organizational alignment, data ownership, and the harder question of getting different teams to stand behind the same number. <span style=\"color:var(--accent);font-weight:600\">The gap between designer and product owner isn't a skills gap — it's a willingness gap: are you ready to walk into the meetings where no one has a wireframe, but where the product's fate gets decided?</span></p>",
      zh: "<p>這個專案最難的不是畫面，而是讓不同組織的指標定義在同一個螢幕上共存。指標溯源卡看起來只是一個小功能，但背後代表的是跨組織治理的可視化——讓用戶對看板上的數字產生信任，才是 UX 真正的工作。</p><p>上線之後才真正學到的一課：當設備數據上報出現問題，看板的數字就會跟著異常。但這不是 Edge PQM 的 bug——根源可能是 CFX 事件丟失、MES 工單未同步、設備離線卻無狀態標記。用戶眼中只有「數字不對」，第一反應永遠是系統壞了。這讓我意識到，<em>資料健康度的可視化</em>與<em>異常排查的導引設計</em>，是這類依賴多源頭上報系統裡最容易被忽視、卻直接左右用戶信任的設計課題。</p><p>從 UX Designer 跨到 Product Owner，另一個轉變是：好的介面只解決了用戶的操作問題，但產品要真正活下去，還必須解決組織的對齊問題、資料的擁有權問題，以及讓不同團隊願意為同一個數字背書的問題。<span style=\"color:var(--accent);font-weight:600\">設計師與產品擁有者之間，最大的差距不在技能，而在你願不願意走進那些沒有線稿、卻決定產品生死的會議室。</span></p>"
    }
  },

  // ── Inline captions / nav labels formerly `lang === "zh" ? ... : ...` in JSX ──
  captions: {
    cover: { en: "Production Dashboard", zh: "產線生產看板" },
    dashboard_full: {
      en: "Production Dashboard — 15 widgets covering utilization, UPH, ATT, yield rate, and equipment status",
      zh: "產線生產看板 — 15 個 widget 涵蓋稼動率、UPH、ATT、直通率與設備狀態"
    },
    theme_light: {
      en: "Light Theme — suited for office control rooms",
      zh: "Light 主題 — 適合辦公室控制室"
    },
    theme_dark: {
      en: "Dark Theme — Equipment dashboard, suited for night-shift environments",
      zh: "Dark 主題 — 設備狀態看板，適合輪班深夜環境"
    },
    equipment: {
      en: "Equipment Dashboard — 10 widgets per machine: ATT / CT trends, utilization, downtime history, Error Code ranking",
      zh: "設備狀態看板 — 每台設備 10 個 widget，包含 ATT / CT 趨勢、稼動率、停機歷史與 Error Code 排行"
    }
  },
  nav: {
    back_to_works: { en: "← All Works", zh: "← 返回作品列表" },
    next: { en: "Next Case →", zh: "下一個作品 →" }
  },

  // ── Decision-section accompanying images (formerly `const S3_IMAGES`) ──
  s3_images: [
    {
      base: "dashboard-full",
      alt: "產線生產看板",
      caption: {
        en: "Production Dashboard — 15 widgets ready out of the box",
        zh: "產線生產看板 — 15 個 widget 即開即用"
      }
    },
    {
      base: "widget-ipopup",
      alt: "指標溯源卡",
      caption: {
        en: "Metric Provenance Card — metric definition, formula, and data source reviewed by each contributing org",
        zh: "指標溯源卡 — 每個指標的定義單位、計算公式、資料來源由各組織審核"
      }
    },
    {
      base: "metrics-dashboard",
      alt: "指標看板",
      caption: {
        en: "Metrics Dashboard — UPH, OEE, Utilization displayed as large KPI numbers",
        zh: "指標看板 — UPH、OEE、稼動率等關鍵 KPI 大數字呈現"
      }
    },
    {
      base: "widget-center",
      alt: "部件中心",
      caption: {
        en: "Widget Center — freely composable P / Q / M widgets",
        zh: "部件中心 — P / Q / M 三類 widget 自由組合成專屬看板"
      }
    }
  ]
};
