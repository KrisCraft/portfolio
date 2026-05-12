// PVS — case study content (skeleton, key-first / co-located i18n)
//
// Scaffolded to mirror work-1 / work-3 so the real case study can be written
// by filling in the empty `{ en: "", zh: "" }` bodies — no JSX migration
// needed later. Section titles are pre-populated with the conventional
// labels used across the portfolio.
//
// `window.pickLang` lives in ../content.shared.js; no need to redefine here.
//
// When the real case study lands:
//   1. Fill in `s1.p1`, `s1.p2`, `s1.challenge`, then s2.insights[], s3.decisions[], etc.
//   2. Replace the placeholder JSX in index.html with the full case-study
//      sections (copy the structure from work-1-EdgePQM/index.html).
//   3. Delete the `placeholder` section below.

window.WORK2_CONTENT = {
  title: {
    en: "Case 02 · Coming Soon",
    zh: "作品 02 · 即將揭曉"
  },
  tagline: {
    en: "A cross-team product transformation journey.",
    zh: "跨團隊協作下的產品改造旅程。"
  },
  year: "2023",

  tags: ["Product Owner", "Design System"],

  meta: [
    {
      k: { en: "Role", zh: "角色" },
      v: "UX Designer · PO"
    },
    {
      k: { en: "Team", zh: "團隊" },
      v: {
        en: "1 Designer · 4 Engineers · 1 PM",
        zh: "Designer × 1, Engineer × 4, PM × 1"
      }
    },
    {
      k: { en: "Timeline", zh: "時程" },
      v: { en: "Ongoing", zh: "進行中" }
    },
    {
      k: { en: "Tools", zh: "工具" },
      v: "Figma · Jira · Miro"
    }
  ],

  // Problem / My Impact / Outcome labels stay in English on both locales (mirrors work-1 / work-3)
  summary: [
    { k: "Problem",   v: { en: "", zh: "" } },
    { k: "My Impact", v: { en: "", zh: "" } },
    { k: "Outcome",   v: { en: "", zh: "" } }
  ],

  // ── 01 Context & Challenge ──
  s1: {
    num: "01",
    title: { en: "Context & Challenge", zh: "背景與挑戰" },
    p1: { en: "", zh: "" },
    p2: { en: "", zh: "" },
    challenge_title: { en: "The Core Challenge", zh: "核心挑戰" },
    challenge: { en: "", zh: "" }
  },

  // ── 02 Research & Insight ──
  s2: {
    num: "02",
    title: { en: "Research & Insight", zh: "研究與洞察" },
    p1: { en: "", zh: "" },
    insights: [
      { n: "01", title: { en: "", zh: "" }, desc: { en: "", zh: "" } },
      { n: "02", title: { en: "", zh: "" }, desc: { en: "", zh: "" } },
      { n: "03", title: { en: "", zh: "" }, desc: { en: "", zh: "" } }
    ]
  },

  // ── 03 Design Decisions ──
  s3: {
    num: "03",
    title: { en: "Design Decisions", zh: "設計決策" },
    p1: { en: "", zh: "" },
    decisions: [
      {
        idx: { en: "Decision 01", zh: "決策 01" },
        title: { en: "", zh: "" },
        body:  { en: "", zh: "" }
      },
      {
        idx: { en: "Decision 02", zh: "決策 02" },
        title: { en: "", zh: "" },
        body:  { en: "", zh: "" }
      },
      {
        idx: { en: "Decision 03", zh: "決策 03" },
        title: { en: "", zh: "" },
        body:  { en: "", zh: "" }
      }
    ]
  },

  // ── 04 Information Architecture ──
  s_ia: {
    num: "04",
    title: {
      en: "Information Architecture",
      zh: "資訊架構"
    },
    p1: { en: "", zh: "" },
    flow_label: { en: "Data Spine", zh: "資料主軸" },
    flow: [
      // { n: "01", h: { en: "", zh: "" }, d: { en: "", zh: "" } },
    ],
    modules_label: { en: "Main Modules", zh: "主模組" },
    modules: [
      // {
      //   h: { en: "", zh: "" },
      //   en: { en: "", zh: "" },  // bilingual subtitle (other-lang)
      //   role: { en: "", zh: "" },
      //   pages: [ { en: "", zh: "" } ]
      // }
    ],
    admin_label: { en: "Support Modules", zh: "支撐模組" },
    admin: [
      // { h: { en: "", zh: "" }, d: { en: "", zh: "" } }
    ]
  },

  // ── 05 Visual & Design System ──
  s4: {
    num: "05",
    title: { en: "Visual & Design System", zh: "視覺與設計系統" },
    p1: { en: "", zh: "" },
    p2: { en: "", zh: "" },
    p3: { en: "", zh: "" }
  },

  // ── 06 Outcome & Reflection ──
  s5: {
    num: "06",
    title: { en: "Outcome & Reflection", zh: "成果與反思" },
    p1: { en: "", zh: "" },
    outcomes: [
      // { n: "", l: { en: "", zh: "" } }
    ],
    reflection_title: { en: "Reflection", zh: "反思" },
    reflection: { en: "", zh: "" }
  },

  // Image captions formerly written as `lang === "zh" ? ... : ...` in JSX
  captions: {
    cover: { en: "", zh: "" }
  },

  // Nav button labels — work-2 is the middle case: prev → work-1, next → work-3
  nav: {
    prev: { en: "← Previous", zh: "← 上一個" },
    next: { en: "Next →",     zh: "下一個 →" }
  },

  // ── Placeholder skeleton (delete this whole block when the real case study lands) ──
  // Drives the temporary "coming soon" view in index.html.
  placeholder: {
    coming_long: {
      en: "Research, decisions and outcomes for this case are being written up. The full story — challenge, research, process, design, impact — will live here.",
      zh: "這個案例的研究過程、設計決策與成效正在整理中。完整內容會在這裡呈現包含挑戰、研究、流程、設計、成效。"
    },
    back_to_works: { en: "Back to all works", zh: "返回作品列表" },
    case_outline_label: { en: "Case Outline", zh: "案例結構" },
    case_outline: [
      {
        n: "01",
        title: { en: "Context & Challenge", zh: "背景與挑戰" },
        desc: {
          en: "Why this work matters, the pains we set out to solve",
          zh: "為什麼要做這件事，使用者面對什麼困境"
        }
      },
      {
        n: "02",
        title: { en: "Research & Insight", zh: "研究與洞察" },
        desc: {
          en: "Interviews, data, on-site observations",
          zh: "訪談、資料分析、現場觀察整理"
        }
      },
      {
        n: "03",
        title: { en: "Design Decisions", zh: "設計決策" },
        desc: {
          en: "IA, flows, prototyping, iteration",
          zh: "資訊架構、流程、原型、迭代過程"
        }
      },
      {
        n: "04",
        title: { en: "Visual & System", zh: "視覺與設計系統" },
        desc: {
          en: "Components, styles, navigation, i18n",
          zh: "元件、樣式、導覽、語系"
        }
      },
      {
        n: "05",
        title: { en: "Outcome & Reflection", zh: "成果與反思" },
        desc: {
          en: "Metrics, business impact, lessons",
          zh: "量化指標、業務影響、學到的事"
        }
      }
    ]
  }
};
