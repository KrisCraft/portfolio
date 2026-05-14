// PVS · Part Verification System — case study content (key-first / co-located i18n)
//
// Structure mirrors work-1 / work-3: every translatable leaf is `{ en, zh }`,
// rendered via `window.pickLang(WORK2_CONTENT, lang)`. Non-localized values
// (numbers, layout codes, plain strings) stay as-is.

window.WORK2_CONTENT = {
  title: { en: "PVS · Part Verification System", zh: "PVS · Part Verification System" },
  tagline: {
    en: "Stopping the most expensive mistake on an SMT line — a Web + Mobile error-proofing system that turns 'operator verifies the reel by eye' into a step verified by the system",
    zh: "擋下 SMT 線上最貴的那個錯誤——把「作業員人工比對料盤」變成由系統自動驗證的步驟"
  },

  tags: ["UX Design", "Product Owner", "Web + Mobile", "Error-Proofing", "SMT"],

  meta: [
    { k: { en: "Role", zh: "角色" }, v: "UX Designer" },
    {
      k: { en: "Team", zh: "團隊" },
      v: {
        en: "Designer × 1 · Engineer × 3 · PM × 1 + UIC RD team × 3 (US subsidiary)",
        zh: "Designer × 1 · Engineer × 3 · PM × 1 + UIC 設備商團隊（美國子公司） × 3"
      }
    },
    { k: { en: "Timeline", zh: "時程" }, v: "2024 — 2025" },
    { k: { en: "Tools", zh: "工具" }, v: "Figma · Jira · Confluence" }
  ],

  // Problem / My Impact / Outcome labels stay in English on both locales (mirrors work-1 / work-3)
  summary: [
    {
      k: "Problem",
      v: {
        en: "On a traditional SMT line, the last line of defense against wrong materials is the operator's own eyes — visually matching a reel against a printed recipe before mounting it. One missed match can scrap hundreds of PCBAs before anyone notices: hundreds of dollars in components, plus line stoppage and rework. Human alertness is the wrong place for that risk to live.",
        zh: "在傳統 SMT 產線上，最後一道擋下錯料的關卡只剩作業員的眼睛——把料盤拿起來、和紙本配方比對一下、再裝上 Feeder。上錯一次料，可能在被發現前已連續報廢上百片 PCBA：光元件成本就好幾百美元，加上停線、排查、重工。把這種風險押在「人會不會看錯」上，本來就不對。"
      }
    },
    {
      k: "My Impact",
      v: {
        en: `Designed PVS as a Web + Mobile product where reel-to-slot binding becomes a system-verified step instead of a visual check, with each platform tuned to a different role's scenario. Also acted as the design–product bridge between ${window.BRAND.possessive.en} software team and UIC's US RD team — getting both sides aligned on what the product should be before either side started shipping.`,
        zh: `把上料這件事從「人工比對」設計成「由系統自動驗證」的步驟，並用 Web + Mobile 雙平台拆開不同角色的使用情境。同時擔任軟體開發與設備商的溝通橋樑，串連${window.BRAND.possessive.zh}軟體團隊與美國 UIC 設備團隊，讓兩邊在開工前先對齊「PVS 到底該是什麼」。`
      }
    },
    {
      k: "Outcome",
      v: {
        en: "Deployed at customer factories. Wrong-material scrap — historically a real cost risk — became structurally prevented: no PVS-equipped line can start production without a verified reel-to-slot binding, and the product is now part of operators' daily workflow.",
        zh: "成功交付系統，並於廠區實際上線，「上錯料報廢整片 PCBA」這個原本實際存在的成本風險，變成系統層級就能擋下來的事情——掛上 PVS 的產線，沒有完成驗證的料盤不會被允許開始生產，並已成為當前作業員日常工作流程的一部份。"
      }
    }
  ],

  // ── 01 Context & Challenge ──
  s1: {
    num: "01",
    title: { en: "Context & Challenge", zh: "背景與挑戰" },
    // Quick domain primer — sits between the section heading and p1 so readers
    // unfamiliar with SMT can get oriented before the body talks about reels,
    // feeders, slots, etc.
    domain: {
      label: { en: "Quick domain primer", zh: "讀前速懂｜SMT 領域小詞典" },
      terms: [
        {
          h: { en: "Pick-and-Place Machine", zh: "貼片機 · Pick-and-Place" },
          d: {
            en: "The SMT machine that physically places electronic components (capacitors, resistors, ICs) from reels onto PCBs. One SMT line typically chains several of them in sequence.",
            zh: "SMT 產線上負責把電子元件（電容、電阻、IC 等）從料盤精準貼到 PCB 板上的設備。一條 SMT 線通常會串接好幾台貼片機接力作業。"
          }
        },
        {
          h: { en: "Feeder", zh: "供料器 · Feeder" },
          d: {
            en: "The component-feeding unit that mounts onto a slot on the machine. It holds a reel of components and advances them one by one to the pick position for the placement head.",
            zh: "安裝在貼片機料站（Slot）上的供料機構，內裝一卷料盤，把元件一顆顆送到取料位置，讓貼片頭抓取。"
          }
        },
        {
          h: { en: "Reel", zh: "料盤 · Reel" },
          d: {
            en: "The tape-and-reel package of components shipped by suppliers. Each reel carries a unique barcode encoding part number, batch, manufacturing date, and other metadata.",
            zh: "由元件供應商出廠時裝著元件的捲帶式物料容器。每一捲料盤上都有唯一條碼，編碼了料號、批次、製造日期等關鍵資訊。"
          }
        }
      ]
    },
    p1: {
      en: "PVS (Part Verification System) prevents the single most expensive mistake on an SMT line: <em>mounting the wrong reel into the wrong feeder</em>. Every step where a hand touches material — kitting at the bench, mounting feeders on machines, splicing in new reels mid-run — is a step where one missed verification can scrap a whole batch of boards before anyone catches it. PVS turns each of those steps from a visual check into a system-gated action: nothing proceeds without the reel ↔ feeder ↔ slot ↔ recipe binding being verified.",
      zh: "PVS（Part Verification System）擋下 SMT 線上最貴的那個錯誤：<em>把錯的料盤裝到錯的 Feeder 上</em>。每一個手會碰到料的步驟——備料台前的綁定、Feeder 掛上機台、生產中接新料——只要漏看一次，可能就是一整批板子在被發現前已連續報廢。PVS 把這些步驟從「人工比對」變成「被系統閘住」的動作：料盤 ↔ Feeder ↔ 料站 ↔ 配方驗證沒過，下一步不會發生。"
    },
    p2: {
      en: `I joined as <em>UX Designer</em>. The product started as a PoC on UIC pick-and-place machines (a US equipment subsidiary ${window.BRAND.short.en} acquired), designed in close collaboration with UIC's RD team. My job wasn't to polish a UI — it was to take what used to be a fragile manual check at the bench, and turn it into a product two very different audiences (operators on the floor, managers at the desk) can both use intuitively.`,
      zh: `我以 <em>UX Designer</em> 身份加入這個專案。產品初期以運行在 UIC 貼片機（${window.BRAND.short.zh}收購的美國設備子公司）上作為 PoC，並與 UIC RD 團隊密切共同設計。我的工作不是把 UI 做漂亮，而是要把線邊那個本來脆弱、靠人眼把關的步驟，變成一個能被兩種完全不同的使用者（線邊作業員、辦公桌前的線長）都能直覺操作的產品。`
    },
    challenge_title: { en: "The Core Challenge", zh: "核心挑戰" },
    challenge: {
      en: "Real-time, precise mirroring of the physical state of every reel, feeder, and slot. Every physical action that happens on the bench has to translate directly into a state on screen — every status the operator sees has to map to a real reel, a real feeder, a real machine. Anything less and the system stops being trusted within a shift.",
      zh: "這個產品最大的挑戰，在於要即時且精準地反映實際物理上的備料狀態。備料過程中發生的每一個物理動作，都得直接對應到系統畫面上——畫面上每一個狀態背後都必須對應一卷真的料、一個真的 Feeder、一台真的機器。做不到，產品在一個班次內就會失去現場的信任。"
    }
  },

  // ── 02 Research & Insight ──
  s2: {
    num: "02",
    title: { en: "Research & Insight", zh: "研究與洞察" },
    p1: {
      en: "Before any wireframe could be drawn, the project had to answer three product-level questions: <em>why is this mistake worth a whole system to prevent?</em> <em>What does the mistake actually cost when it happens?</em> And <em>who exactly needs to be inside this workflow?</em> Three insights came out of the line walks and the time spent next to the bench:",
      zh: "在進入任何一張 wireframe 之前，這個專案必須先回答三個產品層級的問題：<em>這個錯誤為什麼值得用一整套系統去擋？</em> <em>真的發生時，錯誤會付出什麼代價？</em> 還有 <em>到底有哪些角色得進到這條工作流裡？</em> 三個關鍵洞察就是從線邊走訪、和坐在備料台旁邊觀察的過程裡長出來的："
    },
    insights: [
      {
        n: "01",
        title: {
          en: "Manual visual verification leaks — predictably",
          zh: "人工把關，必然會缺漏"
        },
        desc: {
          en: "Operators kit dozens of reels per shift, each verified against a printed recipe by eye. The work is fast, repetitive, low-cognitive — exactly the conditions where attention quietly slips. Across multiple line walks, I watched operators catch most mistakes but never all of them. Putting 'last gate against high-cost errors' on a human being is putting the risk at the wrong layer of the system.",
          zh: "作業員一個班次要綁幾十卷料，每次都拿著紙本配方用眼睛比對。動作快、重複、認知低——這正是注意力會悄悄滑掉的條件。多次線邊走訪後看到的事實是：作業員攔下大部分錯誤，但永遠攔不完。把「擋下高成本錯誤」這個責任壓在人身上，本來就是把風險放錯層。"
        }
      },
      {
        n: "02",
        title: {
          en: "One mistake costs a batch, not a board",
          zh: "錯誤不是線性損失，是連鎖反應"
        },
        desc: {
          en: "Wrong-material events aren't caught at the moment they happen. By the time downstream AOI flags the defect, the line may have produced 50–100 boards with the same problem — every one of them rework or scrap. Add line stoppage, root-causing, and the customer-facing cost of a missed shipment. Each averted incident isn't worth one PCBA's components — it's the whole cascade.",
          zh: "上錯料的瞬間不會被發現。等到下游 AOI 揪出問題時，產線可能已經跑出 50–100 片帶同樣錯料的板子——每一片都得重工或報廢，再加上停線、排查、和客戶端的交期壓力。每擋下一次錯誤，省下的不是一片 PCBA 的元件錢，而是整段連鎖反應的成本。"
        }
      },
      {
        n: "03",
        title: {
          en: "One workflow, three audiences at three very different points",
          zh: "同一條工作流，多種角色站在不同的位置"
        },
        desc: {
          en: "Watching the floor surfaced three distinct people inside the same workflow: operators at the kitting bench (both hands occupied with reels), IPQC walking up to verify (one hand on a scanner, one taking notes), line managers and engineers at desks (planning recipes, tracing after the fact). All three touch the same data, but none would tolerate being squeezed into someone else's UI. The product had to natively serve three postures from day one — not pick one and apologize to the others.",
          zh: "走訪線邊整理出三種完全不同的使用者：備料台前的作業員（雙手忙著接料補料）、走過來複檢的品保人員（二次人工確認）、坐在辦公桌前的線長與工程師（規劃配方、事後追溯）。產品得從一開始就規劃不同的角色需要提供什麼正確的解決方案給他。"
        }
      }
    ]
  },

  // ── 03 Design Decisions ──
  s3: {
    num: "03",
    title: { en: "Design Decisions", zh: "設計決策" },
    p1: {
      en: "Four decisions defined how PVS works on both platforms:",
      zh: "四個關鍵決策定義了 PVS 在兩個平台上的運作方式："
    },
    decisions: [
      {
        idx: { en: "Decision 01", zh: "決策 01" },
        title: {
          en: "Same product, two postures",
          zh: "同一個產品，兩種使用情境"
        },
        body: {
          en: "One product, two platforms — but each platform has a clear job. Web is where managers <em>plan, configure, and trace</em>; Mobile is where operators <em>scan, confirm, and act</em> on the line. Production Tracking — the deep traceability query — only lives on Web, because a seated user with time is the right audience for a long query. Same product, divided posture, divided action.",
          zh: "一個產品、兩個平台，但每個平台分工很明確：Web 是給線長與工程師<em>規劃、設定、追溯</em>的地方；Mobile（PDA）是給線邊作業員<em>掃描、確認、動手</em>的地方。深度的「生產追溯」查詢只放在 Web——因為坐著、有時間的人才適合做這種長查詢。同一個產品，姿態分工、動作分工。"
        }
      },
      {
        idx: { en: "Decision 02", zh: "決策 02" },
        title: {
          en: "Colour states that the floor can read at a glance",
          zh: "讓現場可以一眼讀懂的顏色狀態"
        },
        body: {
          en: "The line generates dozens of low-level signals — feeders mounted, reels running low, splice points reached. None of those are useful to a busy operator. I distilled them into five colour states on every slot: <em>ready</em> (green), <em>empty</em> (grey), <em>low — last chance to splice</em> (red), <em>awaiting verification</em> (yellow band), <em>anomaly</em> (red triangle). A single glance at the dashboard answers the only question that matters: 'which slot do I walk to next?' Thresholds are configurable per line so each factory can tune its own rhythm.",
          zh: "產線會跑出幾十種低階訊號——Feeder 上料、料快用完、偵測到接料點⋯⋯這些對忙碌的作業員都沒意義。我把它們收斂成每個料站的五色狀態：<em>備料完成</em>（綠）、<em>未備料</em>（灰）、<em>缺料預警 / 最後接料機會</em>（紅）、<em>尚未複檢</em>（黃色提醒帶）、<em>異常事件</em>（紅色三角）。看一眼看板就能回答最重要的問題：「下一步該走到哪個 Slot？」閾值還可依產線調整，讓每個工廠調出自己的節奏。"
        }
      },
      {
        idx: { en: "Decision 03", zh: "決策 03" },
        title: {
          en: "Second-person verification, with the line stopping itself if missed",
          zh: "限時複檢，超時設備自己停機"
        },
        body: {
          en: "When tighter control is needed, PVS can require a second-person check (IPQC) within a set time window for any new reel binding or splice — miss the window and the line stops, with the stop signal pushed back to the machine by PVS itself. Every scan asks for the employee badge again — no caching, no exceptions — because shift handovers blur accountability the moment the system trusts a stale login. Strict by design, because the cost of a missed verification is a scrapped batch.",
          zh: "必要時可啟動雙重保險，要求第二位人員（IPQC）必須在一定時間內完成新料盤綁定或接料的複檢，超時設備就停，PVS 會把停機訊號回拋給設備。每次操作都要重新掃工牌——不快取、不例外——因為交班時段「快取登入」會立刻模糊掉責任人。嚴格是刻意的設計，因為漏掉複檢的代價就是一批報廢板。"
        }
      },
      {
        idx: { en: "Decision 04", zh: "決策 04" },
        title: {
          en: "Substitute material rules the line manager can configure without code",
          zh: "讓線長不用寫程式就能設替代料規則"
        },
        body: {
          en: "When a scanned reel doesn't match the recipe, PVS auto-checks if there's an approved substitute — first against the recipe's own alternates, then against the general substitute list — before rejecting. Dual-lane machines add another wrinkle: do both lanes have to use the <em>same</em> substitute, or can each lane substitute independently? Both modes are configurable. I turned the material engineer's mental rulebook into a settings page the line manager can toggle on and off — what used to live in someone's head now lives in the product.",
          zh: "當掃到的料盤對不上配方料號時，PVS 會自動往下檢查：先看有沒有配方專用替代料、再看通用替代料，都對不到才拒絕。雙軌設備還多一個情境：兩條軌道是否必須用<em>同一種</em>替代料？還是各自獨立？兩種模式都可以設定。我把原本只存在「材料工程師腦袋裡」的決策樹，變成一頁線長可以開關的設定——以前活在某人腦中的規則，現在活在產品裡。"
        }
      }
    ],
    // ── Dual-platform poster (Web vs Mobile contrast, lives under Section 03) ──
    dp_poster: {
      web: {
        badge: "Web · 1920 × 1080",
        h: {
          en: "Sit-down · Manage + Query",
          zh: "靜態｜管理 + 查詢"
        },
        meta: {
          en: "Light / Dark theme",
          zh: "支援亮 / 暗主題"
        },
        desc: {
          en: "War-room display, line manager's desk, multi-monitor engineering setup. Both hands free — deep queries, cross-line comparison, batch ops.",
          zh: "戰情室大螢幕、線長辦公桌、工程師的多螢工作環境。雙手都空著，可以查詢深度資料、跨產線比對、批次操作。"
        },
        items: [
          { en: "Offline Prepare (kitting)",            zh: "Offline Prepare（離線備料）" },
          { en: "Online Monitoring (line carousel)",    zh: "Online Monitoring（線體輪播看板）" },
          { en: "Production Tracking (Web only)",       zh: "Production Tracking（只在 Web）" },
          { en: "Settings (6 sub-modules)",             zh: "Settings 後台（6 個子模組）" }
        ]
      },
      pda: {
        badge: "Mobile · 360 × 780",
        h: {
          en: "On-the-move · Scan + Confirm",
          zh: "動態｜掃描 + 確認"
        },
        meta: {
          en: "Always dark (line-side lighting)",
          zh: "永遠暗色（線邊光照設計）"
        },
        desc: {
          en: "Operators and IPQC carry it line-side, scanner in one hand, screen in the other. Fast actions, short fixations, readable under fluorescents or in night-shift dim.",
          zh: "線邊作業員 / IPQC 一手拿掃槍、一手操作。動作要快、視線停留要短、強光與夜班都得看得清。"
        },
        items: [
          { en: "Offline Prepare (mobile kitting)",     zh: "Offline Prepare（離線備料）" },
          { en: "Online Monitoring (mobile splice)",    zh: "Online Monitoring（線邊接料）" },
          { en: "Bottom Tab: 2 tabs (no tracking)",     zh: "底部 Tab：只有 2 個（無追溯）" },
          { en: "Marry / Replenish parity with Web",    zh: "Marry / Replenish 雙平台對等" }
        ]
      }
    }
  },

  // ── 04 Information Architecture ──
  s_ia: {
    num: "04",
    title: {
      en: "Information Architecture — From work order to traceable board",
      zh: "資訊架構 — 從工單到可追溯的板子"
    },
    p1: {
      en: "PVS organizes around the floor's actual workflow, not the system's internal complexity. A work order arrives → operators kit the reels → a second person verifies the binding → the line runs while PVS watches every slot → and afterwards, every board can be traced back to the specific reels and operators that made it. Each step gets its own surface, on the right platform, for the right role.",
      zh: "PVS 的資訊架構是繞著「現場到底怎麼工作」設計的，不是繞著系統內部複雜度。工單來了 → 作業員備料 → 第二個人複檢 → 產線開始跑、PVS 同時盯著每個料站 → 跑完之後，每一塊板子都能反查到是哪些料盤、哪些人做的。每一步都有自己的畫面，放在對的平台、給對的角色。"
    },
    flow_label: { en: "Floor Workflow", zh: "現場工作流" },
    flow: [
      { n: "01", h: { en: "Plan", zh: "規劃" }, d: { en: "Work order + required parts", zh: "工單 + 所需料件" } },
      { n: "02", h: { en: "Kit", zh: "備料" }, d: { en: "Marry reel ↔ feeder ↔ slot", zh: "料盤 ↔ Feeder ↔ Slot 綁定" } },
      { n: "03", h: { en: "Verify", zh: "複檢" }, d: { en: "Second person, time-bounded", zh: "第二人在時限內複檢" } },
      { n: "04", h: { en: "Produce", zh: "生產" }, d: { en: "Live slot monitoring + alerts", zh: "即時料站監控 + 告警" } },
      { n: "05", h: { en: "Trace", zh: "追溯" }, d: { en: "Board → reels → operators", zh: "板子 → 料盤 → 操作員" } }
    ],
    modules_label: { en: "Three User-Facing Modules", zh: "三個面向使用者的模組" },
    modules: [
      {
        h: { en: "Offline Prepare", zh: "離線備料" },
        en: { en: "離線備料", zh: "Offline Prepare" },
        role: { en: "Prep Operator · Web + Mobile", zh: "備料人員 · Web + Mobile" },
        pages: [
          { en: "Initial Preparation List by work order", zh: "依工單建立備料表" },
          { en: "Marry reel ↔ feeder ↔ slot binding", zh: "料盤 ↔ Feeder ↔ Slot 綁定" },
          { en: "Six work-order lifecycle states", zh: "六種工單生命週期狀態" },
          { en: "Bulk template upload supported", zh: "支援批次模板上傳" }
        ]
      },
      {
        h: { en: "Online Monitoring", zh: "線上監控" },
        en: { en: "線上監控", zh: "Online Monitoring" },
        role: { en: "Line Operator · Web + Mobile", zh: "線邊作業員 · Web + Mobile" },
        pages: [
          { en: "Line carousel — 11 lines auto-rotating", zh: "線體輪播 — 11 條產線輪播" },
          { en: "Slot colour grid + threshold alerts", zh: "Slot 色塊矩陣 + 閾值告警" },
          { en: "Changeover + Clean Slots + Replenish", zh: "換線 + 清空料站 + 接料" },
          { en: "Time-to-empty countdown per slot", zh: "每 Slot 倒數至打空時間" }
        ]
      },
      {
        h: { en: "Production Tracking", zh: "生產追溯" },
        en: { en: "生產追溯", zh: "Production Tracking" },
        role: { en: "Quality / Engineer · Web only", zh: "品保 / 工程師 · 僅 Web" },
        pages: [
          { en: "Query by reel ID / part no. / panel barcode", zh: "依料盤 ID / 料號 / 大板條碼查詢" },
          { en: "Full reel → component → panel lineage", zh: "完整料盤 → 點位 → 大板鏈路" },
          { en: "MES upload for SFC / Vision", zh: "MES 上拋 SFC / Vision" },
          { en: "Reserved for Web only by design", zh: "刻意只放 Web — 深度查詢場景" }
        ]
      }
    ],
    admin_label: { en: "Settings — Configurable by line managers, not engineers", zh: "後台設定 — 給線長配置，不用找工程師" },
    admin: [
      {
        h: { en: "Barcode Rule", zh: "條碼解析規則" },
        d: {
          en: "Every customer site has its own reel barcode format. Instead of asking engineering to change code each time, the line manager configures how the system reads the barcode — what's the delimiter, which segment is the part number, the vendor, the date code. Onboarding a new factory becomes a settings change, not a release",
          zh: "每個客戶廠的料盤條碼格式都不一樣。與其每次找工程師改 code，不如讓線長直接設定系統怎麼讀條碼——分隔符是什麼？哪一段是料號、供應商、Date Code？導入新工廠變成改設定，不用發版"
        }
      },
      {
        h: { en: "Feeder Low Threshold", zh: "料站水位閾值" },
        d: {
          en: "Two threshold tiers per line — Last Chance To Splice (red) and Time To Splice (yellow). Triggered by panels-to-empty or time-left. This is exactly where the colour states on the dashboard come from",
          zh: "依產線設兩級閾值 — 最後接料機會（紅）、建議接料（黃）。觸發條件是剩餘可生產片數或倒數時間。看板上的顏色，就是從這份設定直接繼承"
        }
      },
      {
        h: { en: "Alternative Material", zh: "替代料維護" },
        d: {
          en: "Primary part ↔ alternative parts mapping, with template upload for bulk import. Two layers: General Alt (applies to all recipes) and Recipe-specific Alt (overrides for one recipe)",
          zh: "主料號 ↔ 替代料號對映，支援模板上傳批次導入。兩層：通用替代料（所有配方有效）與配方專用替代料（特定配方覆寫）"
        }
      },
      {
        h: { en: "Error-Proofing Settings", zh: "防錯設置" },
        d: {
          en: "Per-machine toggles for the rules that decide how strict PVS is: does pulling a feeder unbind its reel? does material require IPQC verification (and within how long)? in dual-lane setups, must both lanes use the same substitute? — the customer's factory SOP, captured as switches",
          zh: "依設備可調的開關，決定 PVS 嚴格到什麼程度：Feeder 拔出是否解綁料？是否需要 IPQC 複檢（時限多久）？雙軌情境是否強制兩軌用同一替代料？——把客戶廠的 SOP 直接變成可調開關"
        }
      },
      {
        h: { en: "Line & Machine Management", zh: "產線與設備管理" },
        d: {
          en: "Where production lines and UIC machines are added and connected to PVS. Upgrading a machine from single-lane to dual-lane is a configuration change, not a rebuild — supports the customer's expansion without code changes",
          zh: "新增產線、把 UIC 設備掛上 PVS 的地方。單軌升雙軌是改設定、不是改架構——可以跟上客戶擴線，但不用發版"
        }
      },
      {
        h: { en: "User Management & House Keeping", zh: "人員與資料管理" },
        d: {
          en: "Only enrolled employees can scan / marry / verify — the badge gate is a hard wall, not a polite suggestion. Historical traceability data is auto-cleaned on a schedule the customer controls",
          zh: "只有清單上的人員能掃描 / 備料 / 複檢——掃工牌這一步是硬閘門。歷史追溯資料會依客戶設定的時程自動清理"
        }
      }
    ]
  },

  // ── 05 Visual & Design System ──
  s4: {
    num: "05",
    title: { en: "Visual & Design System — Light Web, Dark Mobile, One System", zh: "視覺與設計系統 — 亮色 Web、暗色 Mobile、共用一套 system" },
    p1: {
      en: "PVS lives in two visual worlds. <em>Web</em> supports light / dark themes for war-room displays and the engineer's desk. <em>Mobile (PDA) is permanently dark</em> — factory line-side lighting swings from harsh midday fluorescents to dim night shifts, and a dark UI with high-contrast scan targets reads reliably in both. The dark Mobile theme isn't a stylistic choice; it's an environmental requirement.",
      zh: "PVS 同時存在於兩個視覺世界。<em>Web</em> 支援亮 / 暗主題，對應戰情室大螢幕與工程師桌面。<em>Mobile（PDA）則永遠是暗色</em>——產線線邊的光照從強烈日光燈到夜班昏暗都會出現，暗色 UI 配高對比掃描目標在兩種環境下都讀得穩。Mobile 用暗色不是風格選擇，是線邊環境的硬要求。"
    },
    p2: {
      en: "<em>Same product, two platforms, one design system</em>. Light and dark, Web and Mobile, sit-down and on-the-move — but every component, every colour, every icon traces back to a single source. When a rule changes (a new threshold, a new substitute logic, a new status), both platforms update from one place. That's what made shipping Web and Mobile together feasible without doubling the design or engineering load.",
      zh: "<em>同一個產品、兩個平台、一套 design system</em>。亮色與暗色、Web 與 Mobile、坐姿與走動——但每一個元件、每一種顏色、每一個圖示都從同一個源頭出來。當規則變動（新增閾值、新替代邏輯、新狀態），兩個平台一起從同一個地方更新。是這份共用的系統，才讓 Web 與 Mobile 能同步交付，而不用把設計與工程資源加倍。"
    },
    p3: {
      en: "<em>Colour is wired to physical reality.</em> The reds and yellows on the dashboard aren't decoration — they map 1-to-1 to the configurable thresholds in 'Feeder Low Threshold'. A status badge doesn't have a colour; the threshold rule does, and the badge inherits it. That coupling is why operators can trust colour over text — and walk straight to the slot that's about to become a problem.",
      zh: "<em>顏色直接對映物理現實。</em>看板上的紅黃不是裝飾——它們和「料站水位閾值」設定中可配置的兩級門檻 1 對 1 對應。狀態標籤本身沒有顏色，是閾值規則有顏色，標籤只是繼承。是這份耦合，讓操作員能相信顏色勝過文字——並且直接走到下一個快要出狀況的料站。"
    }
  },

  // ── 06 Outcome & Reflection ──
  s5: {
    num: "06",
    title: { en: "Outcome & Reflection", zh: "成果與反思" },
    p1: {
      en: "PVS Phase 1 deployed at customer factories in February 2025 — covering the full lifecycle from kitting → second-person verification → splicing → in-line monitoring → traceability across multiple UIC SMT lines. The visible product is the dashboard and the scanner flow. The invisible product is the cost <em>that never happened</em>: every wrong feeder PVS catches at the bench is a PCBA panel that doesn't get scrapped — hundreds of dollars in components saved per averted incident, plus the downstream rework and line-stoppage cost that never lands on anyone's report.",
      zh: "在實際廠區上線——涵蓋從備料 → 複檢 → 接料 → 線上監控 → 追溯的完整流程，覆蓋多條使用 UIC 設備的 SMT 產線。看得見的成果是看板與掃描流程；真正的成果是那些<em>沒有發生</em>的成本——每一個被 PVS 在線邊擋下來的錯誤，就是一片沒有報廢的 PCBA，省下的不只是好幾百美元的元件，還有那些不會出現在報表上的重工、停線、排查成本。"
    },
    outcomes: [
      {
        n: "100%",
        l: {
          en: "Kitting accuracy\nwrong-material events structurally prevented since go-live",
          zh: "上料準確率\n上線後結構性擋下錯料事件"
        }
      },
      {
        n: "30%",
        l: {
          en: "Changeover time saved\nlow-material alerts + standardized splice / replenish flow",
          zh: "節省換料時間\n缺料預警，標準化快速換 / 補料"
        }
      },
      {
        n: "100%",
        l: {
          en: "Data traceability\nreel → feeder → operator end-to-end lineage",
          zh: "數據全鏈追溯\n可追溯料盤 → 料槍 → 操作員"
        }
      }
    ],
    reflection_title: { en: "Reflection", zh: "反思" },
    reflection: {
      en: `<p>The deepest lesson from PVS came from <em>designing for a product where errors cost real money</em>. On a typical SaaS, a confused user reads the wrong number and clicks back. On a production line, one wrong reel in the wrong feeder scraps a whole batch of boards — and the design that 'looked fine in Figma' is literally the design that just cost the factory thousands of dollars. I learned to anchor design in floor-reality, not screen-first thinking: every status on the dashboard had to mean something physical the operator could verify with their own eyes, or the product wouldn't be trusted long enough to prove its value.</p><p>The second lesson was about <em>dual-platform design</em>. I went in thinking the hard part would be 'making one design work on two screen sizes'. It wasn't. The hard part was naming what each platform was <em>for</em>: Web is for someone sitting down to manage and trace; Mobile is for someone walking the line to scan and confirm. Same product, different scenario, different priority of information. The moment we decided 'Production Tracking belongs to a seated user' and pulled that tab off Mobile, the whole IA suddenly made sense.</p><p>The third lesson was about <em>cross-org collaboration</em>. ${window.BRAND.possessive.en.charAt(0).toUpperCase() + window.BRAND.possessive.en.slice(1)} software team and UIC's US RD team are two organizations on opposite sides of the Pacific, with different time zones, different vocabularies, even different products in their heads when they say the same word. The deliverable they remember from this project isn't a screen — it's the shared way of talking about the product that emerged after months of meetings: <em>this is what 'kitting' means to both of us, this is what 'verified' means, this is what success looks like</em>. <span style="color:var(--accent);font-weight:600">A designer's core role in cross-org work is to simplify the mess: to converge and translate noisy requirements until both sides hold the same picture of the product in their heads, and goals quietly align themselves.</span></p>`,
      zh: `<p>PVS 給我最深的一課是<em>為「錯誤會造成真實成本」的產品做設計</em>。一般 SaaS 上使用者讀錯數字就點返回；但在 SMT 線上，錯料一旦進到 Feeder，就是一批板子報廢——我做出來的設計，真的就是讓工廠少了好幾百美元的設計。我學會了把設計錨定在現場、而不是螢幕上：看板上每一個狀態，都必須對應一件作業員可以親眼驗證的事，產品才有機會被信任久到能證明自己的價值。</p><p>第二個收穫是<em>雙平台設計</em>。一開始我以為難的地方是「同一份設計如何適配兩種螢幕」，後來發現完全不是。真正的難題是替每個平台命名它「為了什麼存在」：Web 是給「坐下來管理、追溯」的人用的；Mobile 是給「走在線上掃描、確認」的人用的。同一個產品、不同情境、不同的資訊優先級。當我們決定「生產追溯」是給坐著的人、把這個 Tab 從 Mobile 取捨掉的那一刻——整個資訊架構就有邏輯多了。</p><p>第三個收穫是<em>跨組織協作</em>。${window.BRAND.possessive.zh}軟體團隊和美國 UIC 設備團隊是跨太平洋的兩個組織，不同時區、不同詞彙，說到同一個詞時雙方腦中浮現的東西可能都不一樣。最後留在他們腦海裡的成果不是任何一張畫面——而是那份在無數次會議後浮現的共同語言：<em>「備料」對雙方代表什麼、「驗證」代表什麼、什麼叫做這個產品成功</em>。<span style="color:var(--accent);font-weight:600">跨組織協作中，設計師的核心角色是化繁為簡——收斂並轉譯混亂的需求，直到兩邊對產品逐漸形成共同想像，目標自然就對齊了。</span></p>`
    }
  },

  // Image captions
  captions: {
    
    visual_web: {
      en: "Web · Online Monitoring (light) — sit-down posture, dashboard for the war room and the line manager",
      zh: "Web · 靜態姿態，給戰情室與線長使用的看板"
    },
    visual_pda: {
      en: "Mobile · Online Monitoring (always dark) — walking posture, scanner in one hand, line-side lighting from harsh fluorescent to night-shift dim",
      zh: "Mobile · 走動姿態，一手拿掃槍，線邊光照從強烈日光燈到夜班昏暗"
    },
    ia_offline: {
      en: "Offline Prepare list — work orders with six lifecycle states (Preparing / Locked / 換線狀態 / 生產已完成 / 微料流程 / 系統找不到料站表)",
      zh: "離線備料列表 — 工單呈現六種生命週期狀態（Preparing / Locked / 換線狀態 / 生產已完成 / 微料流程 / 系統找不到料站表）"
    },
    ia_barcode: {
      en: "Barcode Rule — every customer site has its own reel-ID format; this turns a delimiter + segment index into Part No., Vendor, Date Code, Lot No., Remaining Qty without code changes",
      zh: "Barcode Rule — 每個客戶廠區條碼格式不同；用「分隔符 + 段索引」就能把現場條碼解析成料號 / 供應商 / Date Code / Lot No. / 剩餘數量，不用改 code"
    }
  },

  // ── Decision-section accompanying images (per-decision, mirrors work-1 / work-3) ──
  s3_images: [
    {
      base: "marry-reel-pda",
      alt: "Mobile Marry Reel",
      caption: {
        en: "Decision 01 · Mobile Marry Reel — same fields as the Web counterpart, tuned for one-handed scan-and-confirm in low light",
        zh: "決策 01 · Mobile Marry Reel — 欄位與 Web 完全一致，但 layout 為單手掃描 + 暗環境調整"
      }
    },
    {
      base: "feeder-low-threshold",
      alt: "Feeder Low Threshold settings",
      caption: {
        en: "Decision 02 · Where the colours come from — two threshold tiers (Last Chance / Time To Splice) per line, configurable on panels-to-empty + time-left. The dashboard inherits these colours directly",
        zh: "決策 02 · 顏色從這裡來 — 每條產線設兩級閾值（最後接料機會 / 建議接料），條件為剩餘片數 + 倒數時間。看板的顏色從這份設定直接繼承"
      }
    },
    {
      base: "replenish-reel",
      alt: "Replenish Reel modal",
      caption: {
        en: "Decision 03 · Replenish Reel modal — Using / Splice / Used Reels stacked; the centre row is the current reel, the row below queues the splice with countdown to verification",
        zh: "決策 03 · Replenish Reel 模態 — 使用中 / 接料 / 已用盡三段堆疊；中段是當前料盤，下段是排隊接料並倒數複檢"
      }
    },
    {
      base: "alternative-material",
      alt: "Alternative Material settings",
      caption: {
        en: "Decision 04 · Alternative Material — primary part ↔ alternatives mapping, with template upload for bulk import; recipe-specific Alt overrides general Alt",
        zh: "決策 04 · 替代料設定 — 主料號 ↔ 替代料對映，支援模板批次上傳；配方專用替代料覆寫通用替代料"
      }
    }
  ],

  // Nav button labels — work-2 is the middle case: prev → work-1, next → work-3
  nav: {
    prev: { en: "← Previous Case", zh: "← 上一個作品" },
    next: { en: "Next Case →",     zh: "下一個作品 →" },
    back_to_works: { en: "All Works", zh: "返回作品列表" }
  }
};
