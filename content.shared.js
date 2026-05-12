// Portfolio content — bilingual, key-first (en/zh co-located per leaf).
//
// To consume: `const t = window.pickLang(window.PORTFOLIO_CONTENT, lang)`.
// pickLang treats `{ en: "...", zh: "..." }` (exactly two string keys) as a
// leaf and substitutes the active language; arrays + nested objects recurse;
// everything else passes through. This is also used by the per-work content
// files (work-1-EdgePQM/content.js, work-2-PVS/content.js, work-3-ADJ/content.js).

(function () {
  function pickLang(node, lang) {
    if (Array.isArray(node)) return node.map((n) => pickLang(n, lang));
    if (node && typeof node === "object") {
      const keys = Object.keys(node);
      if (
        keys.length === 2 &&
        keys.includes("en") &&
        keys.includes("zh") &&
        typeof node.en === "string" &&
        typeof node.zh === "string"
      ) {
        return node[lang];
      }
      const out = {};
      for (const k of keys) out[k] = pickLang(node[k], lang);
      return out;
    }
    return node;
  }
  window.pickLang = pickLang;
})();

window.PORTFOLIO_CONTENT = {
  nav: {
    about:      { en: "About",       zh: "關於" },
    experience: { en: "Experience",  zh: "經歷" },
    works:      { en: "Works",       zh: "作品" },
    skills:     { en: "Skills",      zh: "技能" },
    contact:    { en: "Contact",     zh: "聯絡" },
    resume:     { en: "Resume",      zh: "履歷" }
  },

  hero: {
    eyebrow: {
      en: "Open to interesting opportunities 😊",
      zh: "對有趣的機會保持開放 😊"
    },
    title_1: "Designer",
    title_2: "of",
    title_3: "complex",
    title_4: "systems",
    sub: {
      en: "I'm Kris — a Senior UX Designer & Product Owner focused on complex manufacturing systems, AI / IIoT products, and multi-site rollout. I translate shop-floor workflows, data logic, and engineering constraints into products users adopt and teams can ship.",
      zh: "我是 Kris，一位 Senior UX Designer 與 Product Owner，專注於製造業複雜系統、AI / IIoT 產品與跨廠區導入。我把現場流程、資料邏輯與工程限制，翻譯成用戶願意用、團隊能落地的產品。"
    },
    meta: [
      {
        k: { en: "Role", zh: "現職" },
        v: "Senior UX Designer · Product Owner"
      },
      {
        k: { en: "Company", zh: "公司" },
        v: { en: "Delta Electronics", zh: "台達電子" }
      },
      {
        k: { en: "Experience", zh: "經驗" },
        v: { en: "7+ years", zh: "7+ 年" }
      },
      {
        k: { en: "Based in", zh: "地點" },
        v: { en: "Tainan, Taiwan", zh: "台灣 台南" }
      }
    ],
    cta_primary:   { en: "View Works",     zh: "看作品" },
    cta_secondary: { en: "Get in Touch",   zh: "聯絡我" }
  },

  about: {
    label: { en: "About", zh: "關於我" },
    bio_html: {
      en: "<em>7+ years</em> designing and shipping enterprise software for the manufacturing industry — SCADA, SPC, MES, IIoT Gateway. I translate <em>IIoT, Edge Computing and AI</em> into products shop-floor operators genuinely want to use.",
      zh: "在製造業企業軟體領域累積<em>超過 7 年經驗</em>，參與過 SCADA、SPC、MES、IIoT Gateway 等工業系統的設計與交付。專長是把 <em>IIoT、Edge Computing 與 AI</em> 等技術，轉化成現場人員真正願意用、用得起來的產品。"
    },
    bio_2: {
      en: "I lead cross-functional initiatives across multiple production lines — from discovery and prototyping to building design systems — iterating on real-world feedback to maximize usability and business impact. Good UX is both strategy and craft.",
      zh: "成功將系統導入過多條產線、以跨團隊的大型導入專案，從需求探索、原型驗證到設計系統建置，習慣以實際使用回饋持續迭代。相信好的 UX 既是策略，也是手藝。"
    },
    now: {
      label: { en: "Currently", zh: "現在進行式" },
      text: {
        en: "In the age of AI, I weave AI Agent capabilities into my daily design and product workflow — from research synthesis, prototype review, and PRD drafting to multilingual semantic checks, so the team can spend more energy on judgment, trade-offs, and field alignment.",
        zh: "AI 時代下，我把 AI Agent 融入日常設計與產品工作流——從研究整理、原型驗證、PRD 草稿到多語系語意檢查，讓團隊把更多時間留給判斷、取捨與現場溝通。"
      }
    },
    stats: [
      { n: "7+", l: { en: "Years of UX experience",  zh: "年產品設計經驗" } },
      { n: "5",  l: { en: "Enterprise system domains", zh: "種企業系統領域" } },
      { n: "2",  l: { en: "Invention patents",         zh: "項發明專利" } }
    ]
  },

  experience: {
    label: { en: "Experience", zh: "工作經歷" },
    title: {
      en: "From UI to UX to Product Owner",
      zh: "從 UI 到 UX，再到 Product Owner"
    },
    sub: {
      en: "Seven years at Delta Electronics — a journey from interface craft to product strategy.",
      zh: "在台達電子的七年，是一段從介面設計、邁向產品策略的成長旅程。"
    },
    items: [
      {
        period:  { en: "2024 — Present", zh: "2024 — 至今" },
        phase:   "Phase 03",
        role:    "Product Owner",
        company: { en: "Delta Electronics · Tainan", zh: "台達電子 Delta Electronics · 台南" },
        summary: {
          en: "Stepped beyond design to translate first-hand shop-floor knowledge into product strategy and business outcomes.",
          zh: "從設計者跨足產品擁有者，把車間第一手生產知識，翻譯成可落地的產品策略與商業價值。"
        },
        bullets: [
          {
            en: "Embed on the shop floor regularly — talking with operators, line leaders and process engineers to build first-hand domain knowledge",
            zh: "定期走訪產線，與操作員、製程工程、廠長對話，累積第一手生產現場知識"
          },
          {
            en: "Translate workflows, machine behavior and quality-control logic into specs engineers can execute",
            zh: "把車間流程、設備行為與品質管控邏輯，轉譯成可被產品實作的需求與規格"
          },
          {
            en: "Explore user-centered product hypotheses that create real business value; define target users, scenarios and pain points; author PRDs",
            zh: "探索能創造商業價值的產品假說，定義目標用戶、使用情境與痛點，撰寫 PRD"
          },
          {
            en: "Break product vision into Epic / Story / Task with executable granularity",
            zh: "將產品願景拆解為 Epic / Story / Task，與工程團隊建立可執行的交付節奏"
          },
          {
            en: "Manage the roadmap and trade-offs across users, engineering and business priorities",
            zh: "管理產品 roadmap，在使用者需求、工程資源與商業優先順序之間做取捨"
          },
          {
            en: "Set product strategy for IIoT, Edge Computing and AI — grounded in field reality, not just tech possibility",
            zh: "為 IIoT、Edge Computing、AI 落地方案制定產品策略，整合場域知識與技術可行性"
          }
        ],
        tags: ["Product Strategy", "Roadmap", "PRD", "Field Research", "IIoT", "AI"]
      },
      {
        period:  "2021 — 2024",
        phase:   "Phase 02",
        role:    "Senior UX Designer",
        company: { en: "Delta Electronics · Tainan", zh: "台達電子 Delta Electronics · 台南" },
        summary: {
          en: "Expanded from interface to experience — researching the floor, building a scalable design system.",
          zh: "從介面延伸到體驗，深入研究現場流程，建立可規模化的設計系統。"
        },
        bullets: [
          {
            en: "Conducted user research: interviews, on-site observations, personas, journey maps",
            zh: "進行使用者研究：訪談、現場觀察、Persona 與 User Journey 整理"
          },
          {
            en: "Restructured information architecture across SCADA / SPC / MES / ADC / IIoT Gateway",
            zh: "重新梳理 SCADA / SPC / MES / ADC / IIoT Gateway 等系統的資訊架構"
          },
          {
            en: "Built and maintained a scalable design system and component library",
            zh: "建立可規模化的設計系統（Design System）與元件庫"
          },
          {
            en: "Set up the i18n process to support multi-region, multi-language deployments",
            zh: "規劃多國語系（i18n）流程，支援多廠區、多語言部署"
          },
          {
            en: "Produced high-fidelity prototypes, ran usability tests, iterated on feedback",
            zh: "產出高保真原型，主持使用者驗證（UT），依回饋迭代優化"
          },
          {
            en: "Drove cross-product design consistency, improving UI quality and dev velocity",
            zh: "推動跨產品的設計一致性，提升 UI 品質與開發效率"
          }
        ],
        tags: ["UX Research", "Design System", "Information Architecture", "i18n", "Prototyping", "Usability Testing"]
      },
      {
        period:  "2018 — 2021",
        phase:   "Phase 01",
        role:    "Senior UI Designer",
        company: { en: "Delta Electronics · Tainan", zh: "台達電子 Delta Electronics · 台南" },
        summary: {
          en: "Started in interface design — turning dense factory dashboards into screens operators could actually read.",
          zh: "從介面設計起步，把工廠車間複雜的儀表板，變成清楚易讀的畫面。"
        },
        bullets: [
          {
            en: "Designed operating UIs and dashboards for SCADA, MES and other factory systems",
            zh: "為數位系統設計操作介面與儀表板"
          },
          {
            en: "Established visual standards: type, color, iconography and spacing",
            zh: "建立視覺規範與元件樣式，定義字體、色彩、圖示與間距"
          },
          {
            en: "Produced wireframes and high-fidelity mockups, partnered with engineering on delivery",
            zh: "繪製 Wireframe 與高保真 Mockup，與工程團隊協作落地"
          },
          {
            en: "Improved readability and efficiency of data-dense screens",
            zh: "優化資料密集型畫面的可讀性與操作效率"
          },
          {
            en: "Adapted UIs across resolutions and devices — desktop, tablet, HMI",
            zh: "處理多解析度、多裝置（桌機、平板、HMI）的介面適配"
          },
          {
            en: "Collaborated closely with PMs and engineers to make designs technically achievable",
            zh: "與 PM、工程師密切合作，確保視覺設計能被技術實現"
          }
        ],
        tags: ["UI Design", "Visual Design", "Wireframe", "Mockup", "SCADA", "MES"]
      }
    ]
  },

  works: {
    label: { en: "Selected Works", zh: "精選作品" },
    title: "Selected Works",
    sub: {
      en: "Product design case studies across manufacturing, AI, and IIoT — showing how I turn complex workflows into systems people can use, engineering can ship, and organizations can adopt.",
      zh: "聚焦製造現場、AI 與 IIoT 的產品設計案例，展示我如何把複雜流程轉成可被現場使用、工程交付、組織採納的系統。"
    },
    items: [
      {
        year: "2025 — 2026",
        title: "Edge PQM",
        desc: {
          en: "Translating real-time manufacturing data into a production monitoring platform Line Managers actually use.",
          zh: "把複雜的製造現場數據，翻譯成讓用戶真正能用的生產監控平台。"
        },
        tags: ["UX Design", "Product Owner", "Dashboard", "IIoT"]
      },
      {
        year: "2023",
        title: {
          en: "Case 02 · Coming Soon",
          zh: "作品 02 · 即將揭曉"
        },
        desc: {
          en: "A cross-team product transformation journey.",
          zh: "跨團隊協作下的產品改造旅程。"
        },
        tags: ["Product Owner", "Design System"]
      },
      {
        year: "2023 — 2024",
        title: "AOI · Auto Defect Judgement",
        desc: {
          en: "Turning an AI model-training workflow only data scientists could run — into a defect re-judgement system shop-floor engineers can operate themselves.",
          zh: "把資料科學家才能操作的 AI 模型訓練流程，變成現場製程工程師能上手的瑕疵覆判系統。"
        },
        tags: ["UX Design", "AI / MLOps", "ADC", "AOI"]
      }
    ],
    placeholder: { en: "Case study coming soon", zh: "Case study coming soon" }
  },

  skills: {
    label: { en: "Skills & Tools", zh: "技能與工具" },
    title: { en: "My toolbox", zh: "我的工作工具箱" },
    groups: [
      {
        name: { en: "Design", zh: "設計" },
        items: ["UX/UI Design", "Design System", "Information Architecture", "Prototyping", "Wireframing"]
      },
      {
        name: { en: "Research", zh: "研究" },
        items: [
          { en: "User Research",       zh: "User Research" },
          { en: "Usability Testing",   zh: "Usability Testing" },
          { en: "Journey Mapping",     zh: "User Journey Mapping" },
          { en: "Personas",            zh: "Persona" },
          { en: "Heuristic Evaluation", zh: "Heuristic Evaluation" }
        ]
      },
      {
        name: { en: "Product Management", zh: "產品管理" },
        items: ["Product Owner", "Roadmap", "Epic / Story", "Stakeholder Mgmt.", "i18n"]
      },
      {
        name: { en: "Systems", zh: "系統類別" },
        items: ["SCADA", "SPC", "MES", "Auto Defect Classification", "IIoT Gateway"]
      },
      {
        name: { en: "Manufacturing Domains", zh: "製造領域" },
        items: [
          { en: "SMT (Surface Mount)",  zh: "SMT 表面黏著" },
          { en: "Electronic Assembly",  zh: "電子組裝" },
          { en: "Injection Molding",    zh: "注塑成型" }
        ]
      }
    ],
    marquee: ["Figma", "Adobe", "Jira", "Confluence", "Notion", "Claude Code", "Codex"]
  },

  education: {
    label: { en: "Education", zh: "學歷" },
    items: [
      {
        deg: {
          en: "M.Des. · Interaction & Interface Design (UIUX)",
          zh: "碩士 · 互動與介面設計 (UIUX Design)"
        },
        school: {
          en: "Southern Taiwan University of Science & Technology",
          zh: "南臺科技大學"
        },
        yrs: "2015 — 2017"
      },
      {
        deg: {
          en: "B.Des. · Innovative Product Design",
          zh: "學士 · 創新產品設計系 (Product Design)"
        },
        school: {
          en: "Southern Taiwan University of Science & Technology",
          zh: "南臺科技大學"
        },
        yrs: "2011 — 2015"
      }
    ]
  },

  awards: {
    label: { en: "Patents & Certifications", zh: "專利與證照" },
    items: [
      {
        // `title` / `org` form a bilingual subtitle pair — the value shown in
        // the active locale plus the "other-language" name as supporting copy.
        title: {
          en: "Autonomic Shopping System for Visually Impaired",
          zh: "視障者自主購物系統"
        },
        org: {
          en: "視障者自主購物系統",
          zh: "Autonomic Shopping System for Visually Impaired"
        },
        desc: {
          en: "Invention patent — assistive shopping system designed for visually impaired users.",
          zh: "發明專利 — 為視障者設計的自主購物輔助系統。"
        },
        num: "Patent"
      },
      {
        title: {
          en: "Interactive Game Set and Method Therefor",
          zh: "互動遊戲組件及其方法"
        },
        org: {
          en: "互動遊戲組件及其方法",
          zh: "Interactive Game Set and Method Therefor"
        },
        desc: {
          en: "Invention patent — interactive game device and operating method.",
          zh: "發明專利 — 互動式遊戲裝置與其運作方法。"
        },
        num: "Patent"
      },
      {
        title: "Adobe Certified Associate",
        org: "Visual Communication using Photoshop CS5",
        num: "Certified"
      },
      {
        title: "Autodesk Certified Professional",
        org: "3DS MAX 2015",
        num: "Certified"
      }
    ]
  },

  cta: {
    title_1: { en: "Let's",  zh: "讓我們" },
    title_2: { en: "talk",   zh: "聊聊" },
    sub: {
      en: "Got a product challenge, or just want to chat about UX and digital transformation in manufacturing? I'd love to hear from you.",
      zh: "如果你有產品設計的挑戰，或單純想交流 UX 與製造業數位轉型的想法，歡迎聯絡。"
    },
    buttons: {
      email:    { en: "Email me",  zh: "寄信給我" },
      linkedin: "LinkedIn"
    },
    contact: [
      { k: "Email",    v: "jie820819@gmail.com", href: "mailto:jie820819@gmail.com" },
      //{ k: "Phone", v: "+886 986 081 875",   href: "tel:+886986081875" },
      { k: "LinkedIn", v: "in/kris-uiux",       href: "https://www.linkedin.com/in/kris-uiux" }
    ]
  },

  footer: {
    copy: "© 2026 Kris Lu. Crafted with care ✨",
    built: { en: "Built with HeroUI", zh: "" }
  },

  detail: {
    back: { en: "← Back to home", zh: "← 返回首頁" },
    meta: [
      { en: "Role",     zh: "角色" },
      { en: "Team",     zh: "團隊" },
      { en: "Timeline", zh: "時程" },
      { en: "Tools",    zh: "工具" }
    ],
    coming: {
      en: "Case study in progress",
      zh: "案例詳細內容整理中"
    }
  }
};
