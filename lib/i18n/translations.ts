export type Locale = "zh" | "en";

export const translations = {
  zh: {
    nav: {
      glance: "計畫總覽",
      whyNow: "為何現在",
      benefits: "資源支援",
      criteria: "適合團隊",
      timeline: "時程",
      selection: "評選流程",
      mentors: "導師與講者",
      faq: "FAQ",
      apply: "立即申請",
      toggleMenu: "開啟選單",
      closeMenu: "關閉選單",
    },
    topBanner: {
      programName: "Google Project Hatcher × SparkLabs",
      deadline: "7 / 26 申請截止",
      ctaShort: "立即申請",
    },
    languageToggle: {
      zh: "切換至中文",
      en: "切換至英文",
    },
    seo: {
      homeTitle: "Google × SparkLabs Taiwan AI 加速器｜從台灣走向全球的 AI 新創計畫",
      homeDescription:
        "Google 與 SparkLabs Taiwan 攜手，為 AI-native 創辦團隊提供 USD 25K Google Cloud Credit、Google 技術支援、全球導師網絡與 11 月 Global Showcase。7 月 26 日截止申請。",
      applyTitle: "立即申請｜Google × SparkLabs Taiwan AI 加速器",
      applyDescription:
        "申請 Google × SparkLabs Taiwan AI 加速器。7 月 26 日截止，精選 15 家團隊。免費申請，不交換股權。",
    },
    hero: {
      badgeCohort: "申請中",
      badgeStatus: "7 / 26 截止 · 精選 15 家團隊",
      title: {
        part1: "Google Project Hatcher × SparkLabs",
        part2: "",
        highlight: " AI 新創全球化加速計畫",
        part3: "",
      },
      subtitle:
        "15 個名額、USD 25K Google Cloud Credit、11 月國際舞台。為準備走向全球的 AI 創辦團隊而設。",
      ctaPrimary: "立即申請",
      ctaSecondary: "了解計畫內容",
      applicationOpen: "6 月 5 日開放申請",
      poweredBy: "技術支援：Google Cloud · Vertex AI · Gemini",
      scroll: "scroll",
    },
    countdown: {
      labelOpen: "距離 7 / 26 申請截止",
      labelClosed: "申請已截止",
      labelLastDay: "今天就是截止日",
      days: "天",
      hours: "時",
      minutes: "分",
      seconds: "秒",
      statusOpen: "申請中",
      statusScarcity: "精選 15 家團隊",
    },
    stats: {
      title: "計畫總覽",
      headline: "申請時程、資源與入選名額一次看清",
      items: [
        { value: 15, label: "入選名額", sublabel: "精選 15 家團隊" },
        {
          value: 25,
          prefix: "USD ",
          suffix: "K",
          label: "Google Cloud Credit",
          sublabel: "每隊專屬額度",
        },
        { value: 12, suffix: " 週", label: "密集加速", sublabel: "8 / 24 - 11 / 27" },
        {
          value: 200,
          suffix: "+",
          label: "Global Showcase 出席者",
          sublabel: "11 月 Meet Taipei 同期登場",
        },
      ],
    },
    whyNow: {
      eyebrow: "為何現在 / 為何台灣",
      title: "下一代世界級 AI 公司，可以從台灣出發",
      body: "台灣有深厚的硬體與供應鏈基礎，也有世界級工程人才。當 AI 重塑每個產業，台灣不只負責製造，更有機會孕育面向全球的新創公司。",
      quote:
        "未來十年，台灣最有機會成長為全球公司的團隊，會是 AI-native、從第一天就看向國際，並建立在扎實工程能力之上。這個計畫要協助它們更快跨出去。",
      quoteAuthor: "Edgar Chiu",
      quoteRole: "SparkLabs Taiwan 創始合夥人",
      pillars: [
        { label: "硬體與供應鏈", description: "位在台積電到 NVIDIA 生態的關鍵位置" },
        { label: "工程人才", description: "具備世界級 AI、軟體與系統能力的人才密度" },
        { label: "國際企圖", description: "越來越多創辦人從第一天就看向全球市場" },
      ],
    },
    benefits: {
      eyebrow: "你將獲得什麼",
      title: "聚焦真正重要的支援，省去不必要的複雜",
      subtitle:
        "這不只是課程或補助，而是把 Google 的技術能量與 SparkLabs 的全球網絡整合成可直接使用的加速資源，幫團隊更快靠近第一個國際客戶。",
      readyCta: "準備好取得這些資源了嗎？",
      heroCard: {
        tag: "USD 25K Credit",
        title: "USD 25K Google Cloud Credit",
        tagline: "入選團隊專屬",
        description:
          "入選即取得 USD 25K 額度，可投入 Gemini、Vertex AI 與產品上線所需的雲端資源，讓團隊更快驗證、迭代與交付。",
        subnote: "已申請過 GFS 25K Credit 者不重複給予，其他所有資源照常提供。",
      },
      showcaseCard: {
        tag: "Global Showcase",
        title: "國際展示舞台",
        description:
          "一個舞台，200+ 位 VC、CVC 與媒體。把原本需要半年累積的曝光、引薦與商務開發，集中在一晚完成。",
      },
      items: [
        {
          title: "技術加速",
          tagline: "Google Cloud AI 技術支援",
          description:
            "Google Cloud AI 團隊提供直接技術支援，從架構檢視、模型優化到上線準備，協助團隊更穩定地把 AI 產品推向市場。",
          bullets: [
            "架構檢視：與 Google 工程師一對一討論",
            "AI 模型優化：Gemini 調校與應用建議",
            "領域專家：Medical AI、Deep Tech 等專家支援",
          ],
        },
        {
          title: "商務加速",
          tagline: "Google GTM 與 SparkLabs Mentor 網絡",
          description:
            "協助團隊釐清客戶、通路與營收成長路徑，並接上美國市場、Google BU 與全球夥伴資源。",
          bullets: [
            "Go-to-Market 策略：美國市場進入",
            "募資準備：募資簡報、估值與投資人介紹",
            "Google BU 合作：直接接觸 Google 業務單位",
          ],
        },
        {
          title: "創辦人社群",
          tagline: "走過全球化的創辦人經驗",
          description:
            "由已成功拓展國際市場的創辦人分享實戰經驗，讓同屆團隊在真實案例中交換做法、少走彎路。",
          bullets: [
            "創辦人分享：由具全球化經驗的創辦人主講",
            "實戰經驗：不藏私的戰情室方法",
          ],
        },
        {
          title: "國際展示舞台",
          tagline: "11 月 20-27 日 · 與 Meet Taipei 同期",
          description:
            "一個舞台，200+ 位 VC、CVC 與媒體。把原本需要半年累積的曝光、引薦與商務開發，集中在一晚完成。",
          bullets: [
            "200+ 出席者：一晚集中半年商務開發能量",
            "資本市場連結：國際 VC / CVC 媒合",
            "全球媒體素材包：跨境媒體素材與聯合 PR",
          ],
        },
      ],
    },
    criteria: {
      eyebrow: "適合參與的團隊",
      title: "這個計畫適合你嗎？",
      subtitle: "我們尋找 AI-native、具備初期市場動能，並準備從台灣走向全球的創辦團隊。",
      headline: {
        line1: "為準備打造世界級 AI 公司的創辦人",
        line2: "搭起通往全球的舞台",
      },
      cohortIntro: "我們將精選 ",
      cohortHighlight: "15 家新創",
      cohortRest:
        "，看重技術深度、國際視野，以及把產品推向下一個市場的決心。",
      detailsCta: "了解計畫內容",
      cards: [
        {
          title: "已有初期動能的 Seed 至 Series A 團隊",
          body: "已有 prototype、pilot 客戶，或能看見早期市場訊號。",
        },
        {
          title: "AI 是產品核心，不是附加功能",
          body: "AI 不是附加功能，而是產品差異化與使用價值的核心。",
        },
        {
          title: "從第一天就看向國際市場",
          body: "產品與商業模式從一開始就為美國、亞太或其他海外市場設計。",
        },
        {
          title: "與台灣有明確連結",
          body:
            "團隊在台灣有技術、人才、營運或創辦人連結，準備接上 Google 與 SparkLabs 全球網絡。",
        },
      ],
      forYouTitle: "適合申請",
      notForYouTitle: "暫時不適合",
      forYou: [
        "Seed 至 Series A：雲端與基礎架構仍有調整空間",
        "AI-native：AI 是產品核心，而非附加功能",
        "全球市場思維：從第一天就為海外市場設計",
        "台灣連結：團隊在台灣有技術、人才或營運基礎",
      ],
      notForYou: [
        "尚在純概念階段、無任何產品雛形",
        "AI 僅為附加功能、非核心差異化",
        "已完成 Series B 以上輪次",
      ],
      uncertainPrompt: "不確定是否符合？",
      uncertainAnswer: "先申請，我們會一起判斷。",
      domains: {
        title: "我們特別歡迎的領域",
        items: ["Biotech / Healthcare AI", "Frontier AI", "Deep Tech AI", "Physical AI"],
      },
      matchCta: "符合條件 — 立即申請",
    },
    timeline: {
      eyebrow: "計畫時程",
      title: "三個關鍵日期，從申請走向國際舞台",
      subtitle: "6 月 5 日開放申請；8 月 17 日公布入選名單；11 月 20 日登上 Global Showcase。",
      statuses: {
        open: "申請中",
        upcoming: "即將開始",
        future: "待展開",
      },
      items: [
        {
          date: "6/5",
          title: "開放申請",
          description: "AI-native 團隊可提交申請資料。",
        },
        {
          date: "8/17",
          title: "入選名單公布",
          description: "正式公布 15 家入選團隊。",
        },
        {
          date: "11/20",
          title: "Global Showcase",
          description: "入選團隊登上國際舞台，向投資人、企業與媒體展示成果。",
        },
      ],
    },
    selection: {
      eyebrow: "評選流程",
      title: "評選標準透明，讓你知道我們怎麼看團隊",
      subtitle: "我們會從技術、市場、團隊與國際化潛力，完整評估每份申請。",
      stages: [
        {
          num: "01",
          title: "書面審查",
          description: "我們會完整閱讀申請資料",
          detail: "團隊背景、產品進度、AI 技術、市場動能與國際化規劃",
        },
        {
          num: "02",
          title: "首輪面談",
          description: "與計畫團隊 30 分鐘深入交流",
          detail: "了解創辦人動機、市場洞察與技術差異化",
        },
        {
          num: "03",
          title: "終審評選",
          description: "由 SparkLabs 與 GCP Leadership 共同決定",
          detail: "綜合所有資料，選出最具潛力的 15 家團隊",
        },
      ],
      criteriaTitle: "四個評選維度",
      criteriaSubtitle: "每個團隊都會從這四個面向被評估",
      criteriaItems: [
        {
          title: "AI 技術強度",
          description: "技術差異化、模型品質、產品成熟度",
        },
        {
          title: "創辦團隊能力",
          description: "團隊背景、過往執行紀錄、學習速度",
        },
        {
          title: "市場動能",
          description: "PMF 訊號、客戶驗證、收入成長軌跡",
        },
        {
          title: "國際擴張潛力",
          description: "國際市場理解、從第一天就看向全球、執行可行性",
        },
      ],
    },
    mentors: {
      eyebrow: "導師與講者",
      title: "和懂技術、懂市場的人並肩作戰",
      subtitle:
        "從 Google 的 AI 戰略視角、SparkLabs 全球 GP，到 Biotech 與 Frontier AI 領域專家，協助你釐清成長瓶頸並找到下一步。",
      poweredBy: "串接 SparkLabs 全球導師網絡",
      sparkLabsNetwork: {
        label: "SparkLabs 全球網絡",
        title: "把台灣 AI 團隊接上跨國創業網絡",
        points: [
          {
            title: "全球導師與 GP",
            body:
              "已經走過你正在挑戰的路的人，為你打開關鍵引薦。",
          },
          {
            title: "市場與資本連結",
            body:
              "美國、亞洲與更多海外市場：那些通常需要多年累積的門，為你提前打開。",
          },
          {
            title: "出海陪跑",
            body:
              "台灣的市場動能只是起點。我們協助你把這些證明轉化為全球市場能理解的故事與策略。",
          },
        ],
      },
      featuredTitle: "精選導師與講者",
      googleSupportTitle: "Google 直接支援",
      placeholderLabel: "Google Cloud 導師",
      directSupport: [
        {
          label: "Google 直接支援",
          title: "Google 技術團隊",
          body:
            "Google 工程與 Customer Success 團隊提供直接技術支援，涵蓋 Gemini 模型最佳化、雲端架構擴展、上線前架構審查，以及入選團隊的實作陪跑。",
        },
        {
          label: "Google 直接支援",
          title: "Google Go-to-Market 團隊",
          body:
            "協助團隊接上 Google GTM 方法與資源，包含美國市場進入策略、Google BU 合作機會、廣告資源與合作夥伴通路，讓成長路徑更可落地。",
        },
      ],
      mentors: [
        {
          title: "Physical AI & Deep Tech",
          org: "Google",
          contribution: "Google 對 Physical AI 的觀點，以及 Deep Tech AI 新創評選視角",
        },
        {
          title: "共同創辦人兼管理合夥人",
          org: "SparkLabs Taiwan",
          contribution: "台灣 AI 戰略視角、計畫願景、創辦人出海策略",
        },
        {
          title: "共同創辦人兼合夥人",
          org: "SparkLabs Group",
          contribution: "AI 新創 GTM、美國市場進入策略、美國投資人視角",
        },
        {
          title: "管理合夥人",
          org: "Hickory Falls Ventures",
          contribution: "創投視角、創辦人成長與跨境 GTM",
        },
        {
          title: "創投合夥人",
          org: "SparkLabs Group",
          contribution: "Biotech & Healthcare AI 募資、Silver Lake / Harvard 視角",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "常見問題",
      subtitle: "這裡整理了申請者最常問的問題。如果還有疑問，歡迎直接聯絡我們。",
      items: [
        {
          q: "申請需要費用嗎？",
          a: "完全免費。入選團隊可額外取得 USD 25K Google Cloud Credit。",
        },
        {
          q: "這個計畫會收取股權嗎？",
          a: "不會。本計畫提供加速資源，不以交換股權為條件。若 SparkLabs 後續有投資意願，會以獨立 Term Sheet 另行討論，並非參與計畫的必要條件。",
        },
        {
          q: "一定要在台灣嗎？",
          a: "不一定。設籍台灣或與台灣有明確連結皆可，例如公司登記、創辦人、技術團隊或營運在台灣。",
        },
        {
          q: "已申請過 GFS 25K Credit 還能參加嗎？",
          a: "可以申請計畫本身，但 USD 25K Credit 不重複提供。其他資源包含技術診斷、導師網絡、Global Showcase 等，仍可照常參與。",
        },
        {
          q: "計畫 12 週要實體到場嗎？",
          a: "採 Hybrid 模式：部分導師交流與 Global Showcase（11/20–11/27）會在台北實體進行；其餘以線上或混合形式安排。",
        },
        {
          q: "申請結果何時公布？",
          a: "8 月 17 日公布入選名單，8 月 24 日計畫啟動。未入選團隊也會收到個別電子郵件回覆。",
        },
        {
          q: "國際團隊可以申請嗎？",
          a: "歡迎申請，但團隊需具備從第一天就面向全球的思維，且至少有一項台灣連結，例如三個月內設立台灣公司、核心技術團隊在台灣，或有台灣創辦人。",
        },
      ],
    },
    finalCta: {
      deadline: "申請截止：7 月 26 日 · 精選 15 家團隊",
      title: {
        line1: "把最大的成長瓶頸，",
        line2: "交給我們",
      },
      ctaPrimary: "立即申請",
      ctaSecondary: "聯絡計畫團隊",
      microcopy: "15 家團隊，一次機會。額滿即截止。",
    },
    footer: {
      tagline:
        "Google 與 SparkLabs Taiwan 攜手，為下一代 AI-native 創辦團隊提供技術資源、導師網絡與國際舞台。",
      programTitle: "計畫",
      programLinks: [
        { label: "計畫總覽", href: "/#program-at-a-glance" },
        { label: "資源支援", href: "/#benefits" },
        { label: "申請時程", href: "/#timeline" },
        { label: "導師與講者", href: "/#mentors" },
        { label: "立即申請", href: "/apply" },
      ],
      contactTitle: "聯絡我們",
      address: "台北市信義區松仁路 100 號",
      copyright: "© 2026 Google × SparkLabs Taiwan AI 加速器。保留所有權利。",
      privacy: "隱私權政策",
      terms: "使用條款",
      socialAria: {
        linkedin: "前往 LinkedIn",
        twitter: "前往 Twitter",
        email: "寄信聯絡我們",
      },
    },
    apply: {
      backToHome: "← 回到首頁",
      header: {
        eyebrow: "申請表",
        title: "申請 Google × SparkLabs Taiwan AI 加速器",
        subtitle: "三步驟完成申請，預計 15 至 20 分鐘。",
        deadline: "申請截止：7 / 26",
        spots: "精選 15 個入選名額",
      },
      eligibility: {
        title: "步驟 1：確認參與條件",
        subtitle: "勾選所有條件後，即可進入下一步。",
        items: [
          "團隊目前處於 Seed 至 Series A 階段",
          "AI 是產品核心，而非附加功能",
          "產品從第一天就為國際市場設計",
          "團隊在台灣有技術、人才或營運連結",
        ],
        readyLabel: "符合條件，進入下一步",
        notReadyLabel: "尚未完全符合？仍歡迎申請，我們會逐案判斷。",
      },
      prepare: {
        title: "步驟 2：準備申請資料",
        subtitle: "建議先整理好以下內容，填寫時會更順暢。",
        items: [
          { title: "公司基本資訊", description: "公司名稱、註冊地、成立時間、團隊規模" },
          { title: "創辦團隊", description: "創辦人姓名、職稱、LinkedIn 與簡短背景" },
          { title: "產品與 AI 技術", description: "解決的問題、AI 的角色與技術差異化" },
          { title: "市場動能", description: "現有用戶、營收、合作夥伴或其他可量化指標" },
          { title: "國際擴張規劃", description: "未來 18 個月的目標市場與拓展計畫" },
          { title: "雲端與基礎架構需求", description: "目前雲端使用情況、預期算力與模型規模" },
          { title: "Pitch Deck", description: "PDF 上傳（建議 12 至 20 頁，小於 10MB）" },
        ],
      },
      criteria: {
        title: "評選重點",
        subtitle: "我們會從以下面向理解團隊的潛力。",
        items: [
          { title: "AI 技術強度", description: "技術差異化、模型品質、產品成熟度" },
          { title: "創辦團隊能力", description: "團隊背景、過往執行紀錄、學習速度" },
          { title: "市場動能", description: "PMF 訊號、客戶驗證、收入成長" },
          {
            title: "國際擴張潛力",
            description: "國際市場理解、從第一天就看向全球",
          },
        ],
      },
      form: {
        title: "步驟 3：提交申請",
        placeholder:
          "申請表單將嵌入於此（Google Forms / Typeform / Tally）。\n\n若表單尚未載入，請聯絡 program@sparklabstaiwan.com 取得申請連結，或稍後重新整理頁面。",
        note: "資料會直接送交 SparkLabs Taiwan 與 Google Cloud 評審團隊。建議使用桌機填寫，體驗會更完整。",
        externalCta: "前往申請表單",
        iframeLabel: "申請表單",
        iframeTitle: "Google × SparkLabs Taiwan AI 加速器申請表",
        iframeMeta: "Google Forms · 約 15 分鐘",
        openInNewTab: "在新分頁開啟",
        loading: "載入中…",
        fallbackPrompt: "看不到上方表單？",
        fallbackCta: "在新視窗開啟申請表單",
      },
      steps: {
        eligibility: "步驟 1",
        prepare: "步驟 2",
        form: "步驟 3",
      },
      reassurance: {
        title: "你即將申請的是",
        items: [
          { title: "免費申請", description: "完全免費，不收取申請費" },
          { title: "不交換股權", description: "參與計畫不以股權交換為條件" },
          { title: "8 / 17 公布入選", description: "8 月 17 日公布結果" },
          { title: "8 / 24 啟動", description: "8 月 24 日正式啟動" },
        ],
      },
      faqReminder: {
        title: "還有疑問？",
        subtitle: "首頁整理了完整 FAQ。",
        cta: "查看 FAQ →",
      },
    },
  },

  en: {
    nav: {
      glance: "Overview",
      whyNow: "Why Now",
      benefits: "Benefits",
      criteria: "Who",
      timeline: "Timeline",
      selection: "Selection",
      mentors: "Mentors",
      faq: "FAQ",
      apply: "Apply Now",
      toggleMenu: "Open menu",
      closeMenu: "Close menu",
    },
    topBanner: {
      programName: "Google Project Hatcher × SparkLabs",
      deadline: "Apply by July 26",
      ctaShort: "Apply Now",
    },
    languageToggle: {
      zh: "Switch to Chinese",
      en: "Switch to English",
    },
    seo: {
      homeTitle:
        "Google × SparkLabs Taiwan AI Accelerator | Build the next world-class AI company from Taiwan",
      homeDescription:
        "Google and SparkLabs Taiwan unite to accelerate AI-native founders with USD 25K Google Cloud Credit, a global mentor network, and a Global Showcase stage in November 2026. Apply by July 26.",
      applyTitle: "Apply | Google × SparkLabs Taiwan AI Accelerator",
      applyDescription:
        "Apply to Google × SparkLabs Taiwan AI Accelerator. Application deadline: July 26. Only 15 spots. Free to apply, no equity taken.",
    },
    hero: {
      badgeCohort: "Now Open",
      badgeStatus: "Apply by July 26 · Only 15 spots",
      title: {
        part1: "Google Project Hatcher × SparkLabs",
        part2: "",
        highlight: " AI Startup Globalization Accelerator",
        part3: "",
      },
      subtitle:
        "15 spots. USD $25K Google Cloud Credit. A global stage in November. Built for ambitious AI founders ready to scale globally.",
      ctaPrimary: "Apply Now",
      ctaSecondary: "See Program Details",
      applicationOpen: "Applications open June 5",
      poweredBy: "Powered by Google Cloud · Vertex AI · Gemini",
      scroll: "scroll",
    },
    countdown: {
      labelOpen: "Until July 26 deadline",
      labelClosed: "Applications closed",
      labelLastDay: "Last day to apply",
      days: "d",
      hours: "h",
      minutes: "m",
      seconds: "s",
      statusOpen: "Now Open",
      statusScarcity: "Only 15 spots",
    },
    stats: {
      title: "Program at a Glance",
      headline: "The essentials, built for quick scanning.",
      items: [
        { value: 15, label: "Selected Teams", sublabel: "Only Spots in Cohort" },
        {
          value: 25,
          prefix: "USD ",
          suffix: "K",
          label: "Google Cloud Credit",
          sublabel: "Per Team · Exclusive",
        },
        { value: 12, suffix: " wk", label: "Weeks of Acceleration", sublabel: "Aug 24 – Nov 27" },
        {
          value: 200,
          suffix: "+",
          label: "Global Showcase Audience",
          sublabel: "Nov × Meet Taipei",
        },
      ],
    },
    whyNow: {
      eyebrow: "Why Now / Why Taiwan",
      title: "AI is redrawing the global map. The next flagships start in Taiwan.",
      body:
        "Taiwan has deep hardware DNA, world-class engineering talent, and a new generation of founders building global from day one. As AI reshapes every industry, this island isn't just a supply chain hub — it's where world-class AI companies are born.",
      quote:
        "Taiwan's next decade of breakthrough companies will be AI-native, global from day one, and built on a foundation of world-class engineering. We're here to accelerate them.",
      quoteAuthor: "Edgar Chiu",
      quoteRole: "Founding Partner, SparkLabs Taiwan",
      pillars: [
        { label: "Hardware DNA", description: "Core position in the TSMC → NVIDIA ecosystem" },
        { label: "Engineering Talent", description: "World-class AI, software, and systems engineers" },
        { label: "Global Ambition", description: "A growing wave of day-one global founders" },
      ],
    },
    benefits: {
      eyebrow: "What You Get",
      title: "Everything you need. Nothing you don't.",
      subtitle:
        "Not just a program. Google's technical horsepower combined with SparkLabs' global network — A shortcut to your first global customer.",
      readyCta: "Ready to access these resources?",
      heroCard: {
        tag: "USD 25K Credit",
        title: "USD $25K Google Cloud Credit",
        tagline: "Selected teams only",
        description:
          "$25K to burn on Gemini, Vertex AI, and whatever it takes to ship faster. Yours the moment you're selected.",
        subnote: "Not granted again if you've already received GFS 25K Credit. All other resources apply.",
      },
      showcaseCard: {
        tag: "Global Showcase",
        title: "Global Showcase Stage",
        description:
          "One stage. 200+ VCs, CVCs, and press. The BD that would've taken you six months — in one night.",
      },
      items: [
        {
          title: "Technical Incubation",
          tagline: "Google Cloud AI Enablement",
          description:
            "Google Cloud AI Team — Direct technical support from Google engineers, from architecture reviews to production readiness.",
          bullets: [
            "Architecture Reviews — 1-on-1 with Google engineers",
            "AI Model Optimization — Gemini fine-tuning",
            "Domain Experts — Medical AI & Deep Tech specialists",
          ],
        },
        {
          title: "Business Incubation",
          tagline: "SparkLabs Global Mentor Network",
          description:
            "Google GTM Team — Google's go-to-market experts helping you find customers, build distribution, and grow revenue across global markets.",
          bullets: [
            "Go-to-Market Strategy — US market entry",
            "Fundraising Preparation — pitch deck, valuation, investor intros",
            "Google BU Partnership — direct access to Google business units",
          ],
        },
        {
          title: "Community Support",
          tagline: "Founder Circle & Knowledge Transfer",
          description:
            "Entrepreneur Sharing Sessions led by founders who've already scaled globally. Build a cohort peer community and learn directly from those who've walked the path.",
          bullets: [
            "Entrepreneur Sharing Sessions — led by globally-scaled founders",
            "Real-world Playbooks — unfiltered war-room learnings",
          ],
        },
        {
          title: "Global Showcase Stage",
          tagline: "Nov 20–27 · Co-located with Meet Taipei",
          description:
            "One stage. 200+ VCs, CVCs, and press. The BD that would've taken you six months — in one night.",
          bullets: [
            "200+ attendees — one stage equals six months of BD",
            "Capital Market Access — international VC / CVC matchmaking",
            "Global Press Kit — cross-border media & joint PR",
          ],
        },
      ],
    },
    criteria: {
      eyebrow: "Who We're Looking For",
      title: "Are you the founder we're looking for?",
      subtitle:
        "This program is designed for a specific kind of founder — AI-native, global from day one, with roots in Taiwan.",
      headline: {
        line1: "Built for ambitious AI founders",
        line2: "ready to scale globally.",
      },
      cohortIntro: "A focused cohort of ",
      cohortHighlight: "15 selected startups",
      cohortRest:
        " that combine technical depth, day-one global ambition, and the conviction to build what's next.",
      detailsCta: "See program details",
      cards: [
        {
          title: "Early-stage teams with traction",
          body: "Seed to Series A startups with a working prototype, pilot customers, or early market signal.",
        },
        {
          title: "AI-native, not AI-adjacent",
          body: "Teams building AI as the product's core — not a side feature bolted onto a traditional stack.",
        },
        {
          title: "Global from day one",
          body: "Founders building for international markets from the start, with US or APAC ambition baked in.",
        },
        {
          title: "Taiwan-connected",
          body: "Roots, engineering talent, or operations in Taiwan — ready to plug into Google + SparkLabs networks.",
        },
      ],
      forYouTitle: "We're looking for you if",
      notForYouTitle: "Not quite ready yet",
      forYou: [
        "Seed–Series A: cloud and infrastructure choices still on the table",
        "AI-Native: AI is your product's core, not a feature",
        "Global Mindset: you've built for the world from day one",
        "Taiwan-Connected: roots, talent, or operations in Taiwan",
      ],
      notForYou: [
        "Still in pure concept stage with no product prototype",
        "AI is just an add-on feature, not core differentiation",
        "Already past Series B funding",
      ],
      uncertainPrompt: "Not sure if you qualify?",
      uncertainAnswer: "Apply anyway — let's figure it out together.",
      domains: {
        title: "We especially welcome these domains",
        items: ["Biotech / Healthcare AI", "Frontier AI", "Deep Tech AI", "Physical AI"],
      },
      matchCta: "I Match. Apply Now",
    },
    timeline: {
      eyebrow: "Program Timeline",
      title: "Three dates. One global stage.",
      subtitle: "Applications open June 5. Shortlist lands August 17. Showcase starts November 20.",
      statuses: {
        open: "Open",
        upcoming: "Upcoming",
        future: "Future",
      },
      items: [
        {
          date: "6/5",
          title: "Applications Open",
          description: "AI-native teams can begin submitting applications.",
        },
        {
          date: "8/17",
          title: "Shortlist Announced",
          description: "The selected 15 teams are announced.",
        },
        {
          date: "11/20",
          title: "Global Showcase",
          description: "Selected teams step onto the global stage.",
        },
      ],
    },
    selection: {
      eyebrow: "Selection Process",
      title: "Transparent selection. You know exactly how to be seen.",
      subtitle: "No black box. Here's how we evaluate every application.",
      stages: [
        {
          num: "01",
          title: "Application Review",
          description: "We read every line.",
          detail: "Team background, product, AI technology, market traction, global expansion plan.",
        },
        {
          num: "02",
          title: "First Interview",
          description: "30 minutes with our team.",
          detail: "Deep dive into founder motivation, market insight, and technical differentiation.",
        },
        {
          num: "03",
          title: "Final Selection",
          description: "By SparkLabs & GCP Leadership.",
          detail: "All signals combined to select the 15 highest-potential teams.",
        },
      ],
      criteriaTitle: "Four evaluation dimensions",
      criteriaSubtitle: "We assess every team across these four lenses.",
      criteriaItems: [
        {
          title: "AI Technology Strength",
          description: "Differentiation, model quality, product readiness.",
        },
        {
          title: "Founder Capability",
          description: "Team background, execution track record, learning velocity.",
        },
        {
          title: "Market Traction",
          description: "PMF signals, customer validation, revenue growth trajectory.",
        },
        {
          title: "Global Expansion Potential",
          description: "International market understanding, day-one global mindset, execution feasibility.",
        },
      ],
    },
    mentors: {
      eyebrow: "Mentors & Speakers",
      title: "Build alongside those who get it",
      subtitle:
        "From Google's AI strategy lens, SparkLabs' global GPs, to Biotech and Frontier AI domain experts — these people can directly help you break through growth bottlenecks.",
      poweredBy: "Connected to SparkLabs Global Mentor Pool",
      sparkLabsNetwork: {
        label: "SparkLabs Global Network",
        title: "Plug Taiwan AI founders into a cross-border startup network",
        points: [
          {
            title: "Global mentors & GPs",
            body:
              "The people who've already done what you're trying to do — open for intros.",
          },
          {
            title: "Market & capital access",
            body:
              "U.S., Asia, and beyond — doors that take years to open, opened for you.",
          },
          {
            title: "Global expansion support",
            body:
              "Taiwan traction is just the start. We help you make it land globally.",
          },
        ],
      },
      featuredTitle: "Featured Mentors & Speakers",
      googleSupportTitle: "Google Direct Support",
      placeholderLabel: "Google Cloud Mentor",
      directSupport: [
        {
          label: "Google Direct Support",
          title: "Google Tech Team",
          body:
            "Direct technical support from Google engineering and Customer Success. Gemini model optimization, infrastructure scalability, production readiness reviews, and implementation-level guidance for each selected startup.",
        },
        {
          label: "Google Direct Support",
          title: "Google Go-to-Market Team",
          body:
            "Direct access to Google's GTM playbook: US market entry strategy, Google BU partnerships, advertising support, and partnership channels behind every team's growth motion.",
        },
      ],
      mentors: [
        {
          title: "Physical AI & Deep Tech",
          org: "Google",
          contribution: "Google's view on Physical AI; Deep Tech AI startup selection lens",
        },
        {
          title: "Co-founder & Managing Partner",
          org: "SparkLabs Taiwan",
          contribution: "Taiwan AI strategy, program vision, founder global expansion",
        },
        {
          title: "Co-founder & General Partner",
          org: "SparkLabs Group",
          contribution: "AI Startup GTM, US market entry, US investor perspective",
        },
        {
          title: "Managing Partner",
          org: "Hickory Falls Ventures",
          contribution: "Venture investing, founder scaling, cross-border GTM",
        },
        {
          title: "Venture Partner",
          org: "SparkLabs Group",
          contribution: "Biotech & Healthcare AI fundraising; Silver Lake / Harvard perspective",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Frequently Asked Questions",
      subtitle:
        "Here are the questions we hear most often. If you still have questions, reach out anytime.",
      items: [
        {
          q: "Are there application fees?",
          a: "Applications are completely free. Selected teams exclusively receive USD 25K Google Cloud Credit.",
        },
        {
          q: "Does the program take equity?",
          a: "No. The program does not take equity. If SparkLabs is later interested in investing, that's discussed under a separate term sheet — it's not a precondition of joining the program.",
        },
        {
          q: "Do we have to be based in Taiwan?",
          a: "Taiwan-based or Taiwan-connected both qualify. Any meaningful Taiwan connection — registered entity, founder, technical team, or operations — counts.",
        },
        {
          q: "I've already received GFS 25K Credit. Can I still apply?",
          a: "Yes, you can still apply to the program. The USD 25K Credit will not be granted again, but all other resources (Technical Deep Dive, Mentor Network, Global Showcase) apply as usual.",
        },
        {
          q: "Do we have to attend the 12 weeks in person?",
          a: "Hybrid model: some mentorship and Global Showcase (11/20-27) are in person in Taipei; the rest is online / hybrid.",
        },
        {
          q: "When will we hear back?",
          a: "Shortlist announced on August 17. Program kicks off on August 24. Non-selected teams will also receive individual email responses.",
        },
        {
          q: "Can international teams apply?",
          a: "Yes — with a day-one global mindset and at least one Taiwan connection. For example: plans to establish a Taiwan entity within 3 months, core technical team in Taiwan, or a Taiwanese founder.",
        },
      ],
    },
    finalCta: {
      deadline: "Application Deadline: July 26 · Only 15 spots",
      title: {
        line1: "Bring us your",
        line2: "biggest bottleneck.",
      },
      ctaPrimary: "Apply Now",
      ctaSecondary: "Contact the Team",
      microcopy: "15 teams. One shot. Applications close when spots are gone.",
    },
    footer: {
      tagline:
        "Google and SparkLabs Taiwan unite to deliver technical resources, mentor networks, and a global stage to the next generation of AI-native founders.",
      programTitle: "Program",
      programLinks: [
        { label: "Overview", href: "/#program-at-a-glance" },
        { label: "Benefits", href: "/#benefits" },
        { label: "Timeline", href: "/#timeline" },
        { label: "Mentors", href: "/#mentors" },
        { label: "Apply Now", href: "/apply" },
      ],
      contactTitle: "Contact",
      address: "100 Songren Rd, Xinyi District, Taipei",
      copyright: "© 2026 Google × SparkLabs Taiwan AI Accelerator. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Use",
      socialAria: {
        linkedin: "Visit LinkedIn",
        twitter: "Visit Twitter",
        email: "Email us",
      },
    },
    apply: {
      backToHome: "← Back to Home",
      header: {
        eyebrow: "Application",
        title: "Apply to Google × SparkLabs Taiwan AI Accelerator",
        subtitle: "Three steps to submit. Estimated 15-20 minutes.",
        deadline: "Deadline: July 26",
        spots: "15 spots only",
      },
      eligibility: {
        title: "Step 1 — Confirm you meet all criteria",
        subtitle: "Tick every box to unlock the next step.",
        items: [
          "Our team is between Seed and Series A",
          "AI is the core of our product, not a feature",
          "We've built for global markets from day one",
          "Our team has roots, talent, or operations in Taiwan",
        ],
        readyLabel: "All checks pass — continue to next step",
        notReadyLabel: "Not all checked? Apply anyway — we evaluate case by case.",
      },
      prepare: {
        title: "Step 2 — Prepare the following before you apply",
        subtitle: "We recommend gathering everything first to avoid mid-form interruptions.",
        items: [
          { title: "Company Basics", description: "Name, registration, founding date, headcount" },
          { title: "Founding Team", description: "Names, titles, LinkedIn, short backgrounds" },
          { title: "Product & AI Tech", description: "What problem? What's your AI differentiation?" },
          { title: "Market Traction", description: "Users, revenue, partnerships — quantifiable signals" },
          { title: "Global Expansion Plan", description: "Your market expansion plan for the next 18 months" },
          { title: "Cloud / Infra Needs", description: "Current cloud, expected compute, model scale" },
          { title: "Pitch Deck", description: "PDF upload (12-20 pages recommended, under 10MB)" },
        ],
      },
      criteria: {
        title: "How we'll evaluate you",
        subtitle: "So you know exactly what we're looking at.",
        items: [
          {
            title: "AI Technology Strength",
            description: "Differentiation, model quality, product readiness",
          },
          {
            title: "Founder Capability",
            description: "Team background, execution track record, learning velocity",
          },
          { title: "Market Traction", description: "PMF signals, customer validation, revenue growth" },
          {
            title: "Global Expansion Potential",
            description: "International market understanding, day-one global mindset",
          },
        ],
      },
      form: {
        title: "Step 3 — Submit your application",
        placeholder:
          "Application form will be embedded here (Typeform / Tally / custom form).\n\nThis is a placeholder. Email program@sparklabstaiwan.com to request the application link, or come back once the form is live.",
        note: "Submissions go directly to the SparkLabs Taiwan and Google Cloud review team. Desktop is recommended for the best experience.",
        externalCta: "Go to Application Form",
        iframeLabel: "Application Form",
        iframeTitle: "Google × SparkLabs Taiwan AI Accelerator Application",
        iframeMeta: "Powered by Google Forms · ~15 min",
        openInNewTab: "Open in new tab",
        loading: "Loading...",
        fallbackPrompt: "Can't see the form above?",
        fallbackCta: "Open application form in new window",
      },
      steps: {
        eligibility: "Step 1",
        prepare: "Step 2",
        form: "Step 3",
      },
      reassurance: {
        title: "What you're applying to",
        items: [
          { title: "Free to Apply", description: "Completely free · No fees" },
          { title: "No Equity Taken", description: "Zero equity exchange" },
          { title: "Shortlist 8 / 17", description: "Results on August 17" },
          { title: "Kickoff 8 / 24", description: "Program starts August 24" },
        ],
      },
      faqReminder: {
        title: "Still have questions?",
        subtitle: "Full FAQ is on the main page.",
        cta: "See FAQ →",
      },
    },
  },
};

export type Translation = typeof translations.zh;
