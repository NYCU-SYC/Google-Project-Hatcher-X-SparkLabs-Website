export type Locale = "zh" | "en";

export const translations = {
  zh: {
    nav: {
      glance: "計劃一覽",
      whyNow: "為何現在",
      benefits: "資源支援",
      criteria: "申請對象",
      timeline: "時程",
      selection: "評選方式",
      mentors: "導師",
      faq: "FAQ",
      apply: "立即申請",
      toggleMenu: "開啟選單",
      closeMenu: "關閉選單",
    },
    topBanner: {
      programName: "Google × SparkLabs Taiwan AI 加速器",
      deadline: "7 / 26 申請截止",
      ctaShort: "立即申請",
    },
    languageToggle: {
      zh: "切換至中文",
      en: "切換至英文",
    },
    seo: {
      homeTitle: "Google × SparkLabs Taiwan AI 加速器｜從台灣打造世界級 AI 新創",
      homeDescription:
        "Google 與 SparkLabs Taiwan 攜手，為 AI-native 創辦人提供 USD 25K Google Cloud Credit、全球導師網絡與 11 月 Global Showcase 舞台。7 月 26 日截止申請。",
      applyTitle: "立即申請｜Google × SparkLabs Taiwan AI 加速器",
      applyDescription:
        "申請 Google × SparkLabs Taiwan AI 加速器。7 月 26 日截止，僅精選 15 家團隊。免費申請，不交換股權。",
    },
    hero: {
      badgeCohort: "申請中",
      badgeStatus: "7 / 26 截止 · 只精選 15 家",
      title: {
        part1: "從台灣出發，打造",
        part2: "",
        highlight: "世界級 AI 新創",
        part3: "",
      },
      subtitle:
        "Google × SparkLabs Taiwan 聯手，為 AI-native 創辦人提供 Google Cloud 技術深度賦能、全球導師網絡，與 11 月國際舞台",
      ctaPrimary: "立即申請",
      ctaSecondary: "了解計劃內容",
      poweredBy: "Powered by Google Cloud · Vertex AI · Gemini",
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
      statusScarcity: "只精選 15 家",
    },
    stats: {
      title: "計劃規模一覽",
      headline: "一眼掌握申請、資源與時程重點",
      items: [
        { value: 15, label: "入選名額", sublabel: "僅限精選團隊" },
        {
          value: 25,
          prefix: "$",
          suffix: "K",
          label: "Google Cloud Credit",
          sublabel: "每隊專屬額度",
        },
        { value: 12, suffix: " 週", label: "密集加速", sublabel: "8 / 24 - 11 / 27" },
        {
          value: 200,
          suffix: "+",
          label: "Global Showcase 觀眾",
          sublabel: "11 月 Meet Taipei 同期",
        },
      ],
    },
    whyNow: {
      eyebrow: "為何現在 / 為何台灣",
      title: "AI 正在重新繪製全球競爭版圖下一代 AI 旗艦，從台灣誕生",
      body: "台灣擁有深厚的硬體 DNA、世界級的工程人才、與從 Day One 就具備國際野心的創辦人。 當 AI 重塑每一個產業，這座島不只是供應鏈中心——它是世界級 AI 公司的誕生地。",
      quote:
        "Taiwan's next decade of breakthrough companies will be AI-native, global from day one, and built on a foundation of world-class engineering. We're here to accelerate them.",
      quoteAuthor: "Edgar Chiu",
      quoteRole: "Founding Partner, SparkLabs Taiwan",
      pillars: [
        { label: "硬體 DNA", description: "從台積電到 NVIDIA 生態的核心位置" },
        { label: "工程人才", description: "世界級的 AI、軟體與系統人才" },
        { label: "國際企圖", description: "Day-one global founders 越來越多" },
      ],
    },
    benefits: {
      eyebrow: "你將獲得什麼",
      title: "五個資源模組，從技術深度到國際舞台一次到位",
      subtitle:
        "不只是 credits 補貼，而是 Google 的技術能量加上 SparkLabs 的全球網絡，為 AI-native founder 整合成一套可直接使用的加速資源。",
      readyCta: "準備好取得這些資源了嗎？",
      heroCard: {
        tag: "入選團隊專屬",
        title: "USD 25K Google Cloud Credit",
        tagline: "直接抵掉你 Seed–Series A 階段最大的固定成本",
        description:
          "模型訓練、推論、資料管線——這些是 AI 公司燒得最快的錢。 USD 25K Google Cloud Credit 給你足夠的跑道驗證假設、迭代產品，把資源留在最重要的事情上。",
        subnote: "已申請過 GFS 25K Credit 者不重複給予。 其他所有資源照常提供。",
      },
      items: [
        {
          title: "技術孵化",
          tagline: "Google Cloud AI 技術賦能",
          description:
            "Google 技術與 Customer Success 團隊直接支援每家入選新創，從 Gemini 模型最佳化到 production-ready 架構審查，提供完整技術陪跑。",
          bullets: [
            "Gemini 模型最佳化",
            "雲端架構擴展設計",
            "上線前壓力測試",
            "Google 工程師一對一架構檢視",
            "實作層級技術陪跑",
            "進階 AI 服務隨需支援",
            "Medical AI 與 Deep Tech AI 專職技術導師",
          ],
        },
        {
          title: "商務孵化",
          tagline: "SparkLabs 全球 Mentor 網絡",
          description:
            "每家入選新創可取得 3 場專屬 mentorship 與 2 場 office hours，從美國市場進入策略到 Google BU 資源對接，協助團隊更快走向國際。",
          bullets: [
            "美國市場進入策略",
            "Pitch deck、估值與投資人對接",
            "跨垂直領域產業連結",
            "Google 服務與 BU 資源串接",
            "Google Ads 資源協助",
            "與 Google 各事業部建立合作機會",
          ],
        },
        {
          title: "創辦人社群",
          tagline: "Founder 圈與經驗傳承",
          description:
            "由已成功國際擴張的 Founder 分享實戰經驗，建立 cohort 同儕社群，讓你直接向走過這條路的人學習。",
          bullets: [
            "國際擴張前輩分享",
            "跨輪次 founder 連結",
            "跨垂直領域創辦人網絡",
            "不藏私的實戰 playbook 交換",
          ],
        },
        {
          title: "國際展示舞台",
          tagline: "11 月 20-27 日 · 與 Meet Taipei 同期",
          description:
            "在 GCP 全球生態系與 Meet Taipei 結合的國際舞台上，向 VC / CVC 與媒體展示成果。200+ 出席者規模",
          bullets: [
            "GCP 全球生態系曝光",
            "跨境媒體包與聯合 PR",
            "國際 VC / CVC 媒合活動",
            "200+ 出席者，一次曝光等於做半年 BD",
          ],
        },
      ],
    },
    criteria: {
      eyebrow: "我們在找誰",
      title: "你是我們在找的 founder 嗎？",
      subtitle: "這個計劃為一群特定的創辦人而設計——AI-native、global-from-day-one、有台灣連結",
      headline: {
        line1: "為敢於做出世界級 AI 新創的創辦人",
        line2: "打造的舞台。",
      },
      cohortIntro: "我們將精選 ",
      cohortHighlight: "15 家新創",
      cohortRest:
        "，結合技術深度、從第一天就面向國際的視野，以及打造下一波突破的決心。",
      detailsCta: "了解計劃內容",
      cards: [
        {
          title: "已具初期動能的 Seed–Series A 團隊",
          body: "已有 prototype、pilot 客戶或早期市場訊號的新創。",
        },
        {
          title: "AI 是產品核心，不是附加功能",
          body: "AI 不是後接的功能，而是團隊產品最核心的差異。",
        },
        {
          title: "Day-One 國際思維",
          body: "從第一天就為國際市場而打造，具備美國或亞太擴張企圖。",
        },
        {
          title: "與台灣連結深厚",
          body:
            "在台灣有根、工程人才或營運，準備接上 Google + SparkLabs 全球網絡。",
        },
      ],
      forYouTitle: "我們在找的你",
      notForYouTitle: "暫時不適合",
      forYou: [
        "Seed–Series A：你的雲端與基礎架構選擇尚未鎖定",
        "AI-Native：AI 是產品核心，不是附加功能",
        "Global Mindset：你從 Day One 就為世界而打造",
        "Taiwan-Connected：你的團隊在台灣有根、有人才或有營運",
      ],
      notForYou: [
        "尚在純概念階段、無任何產品雛形",
        "AI 僅為附加功能、非核心差異化",
        "已完成 Series B 以上輪次",
      ],
      uncertainPrompt: "不確定自己是否符合？",
      uncertainAnswer: "先申請，讓我們一起判斷。",
      domains: {
        title: "我們特別歡迎這些領域",
        items: ["Biotech / Healthcare AI", "Frontier AI", "Deep Tech AI", "Physical AI"],
      },
      matchCta: "符合條件 — 立即申請",
    },
    timeline: {
      eyebrow: "計劃時程",
      title: "從申請到 Global Showcase，七個月的旅程",
      subtitle: "標記這些日期。 錯過 7/26 的申請截止，下一屆要等到明年。",
      statuses: {
        open: "申請中",
        upcoming: "即將開始",
        future: "未來",
      },
      items: [
        {
          date: "6/19",
          title: "計劃公告 · 申請開放",
          description:
            "線上申請通道正式開放，歡迎 AI-native 團隊提交申請。",
        },
        {
          date: "6/19–7/26",
          title: "招募期",
          description:
            "6 週招募窗口。我們鼓勵越早申請越好，以便有更多時間準備首輪面談。",
        },
        {
          date: "7/27–8/14",
          title: "評選流程",
          description:
            "書面審查、首輪面談，以及 SparkLabs / GCP Leadership 終審。",
        },
        {
          date: "8/17",
          title: "入選名單公告",
          description:
            "正式公布 15 家入選團隊，未錄取者也會收到個別回覆。",
        },
        {
          date: "8/24–11/27",
          title: "計劃執行期（12 週密集加速）",
          description:
            "技術孵化、商務孵化與創辦人社群三大模組全面啟動。",
        },
        {
          date: "11/20–11/27",
          title: "Global Showcase × Meet Taipei",
          description:
            "Global Showcase、跨境媒體曝光與國際 VC / CVC 連結同步展開，預計 200+ 國際觀眾參與。",
        },
      ],
    },
    selection: {
      eyebrow: "Selection Process",
      title: "評選流程透明公開，讓你知道怎麼被看見",
      subtitle: "我們不喜歡黑箱。 以下是我們如何評估每一份申請",
      stages: [
        {
          num: "01",
          title: "書面審查",
          description: "書面審查 — 我們會讀完每一行",
          detail: "團隊背景、產品、AI 技術、市場 traction、國際化規劃",
        },
        {
          num: "02",
          title: "首輪面談",
          description: "首輪面談 — 與我們團隊 30 分鐘",
          detail: "深入了解 founder 動機、市場洞察、技術差異化",
        },
        {
          num: "03",
          title: "終審評選",
          description: "終審 — 由 SparkLabs 與 GCP Leadership 決定",
          detail: "綜合所有資料，選出 15 家最具潛力的團隊",
        },
      ],
      criteriaTitle: "4 個評選維度",
      criteriaSubtitle: "我們會以這四個面向評估每一個團隊",
      criteriaItems: [
        {
          title: "AI 技術強度",
          description: "技術差異化、模型品質、產品 readiness",
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
          description: "國際市場理解、Day-one Global Mindset、執行可行性",
        },
      ],
    },
    mentors: {
      eyebrow: "導師與講者",
      title: "與最懂你的人並肩作戰",
      subtitle:
        "從 Google 的 AI 戰略視角、SparkLabs 全球 GP 到 Biotech 與 Frontier AI 領域專家 —— 這些人能直接幫你突破成長瓶頸",
      poweredBy: "串接 SparkLabs 全球導師網絡",
      sparkLabsNetwork: {
        label: "SparkLabs 全球網路",
        title: "把台灣 AI 團隊接上跨國創業網絡",
        points: [
          {
            title: "全球導師與 GP",
            body:
              "接觸 SparkLabs Group / Global Ventures 的創辦人、投資人與企業導師，補上募資、GTM 與跨境經營視角。",
          },
          {
            title: "市場與資本連結",
            body:
              "透過 SparkLabs accelerator 與 VC network，對接美國、亞洲與其他海外市場的投資人、企業與合作夥伴。",
          },
          {
            title: "出海陪跑",
            body:
              "從台灣起步，聚焦海外市場進入、pitch 調整、客戶 / 合作機會與 Global Showcase 前的敘事打磨。",
          },
        ],
      },
      featuredTitle: "精選導師與講者",
      googleSupportTitle: "Google 直接支援",
      placeholderLabel: "Google Cloud Mentor",
      directSupport: [
        {
          label: "Google 直接支援",
          title: "Google 技術團隊",
          body:
            "Google 工程與 Customer Success 團隊提供直接技術支援，涵蓋 Gemini 模型最佳化、雲端架構擴展、production readiness review，以及每家入選團隊的實作層級陪跑。",
        },
        {
          label: "Google 直接支援",
          title: "Google Go-to-Market 團隊",
          body:
            "協助團隊接上 Google GTM playbook，包含美國市場進入策略、Google BU 合作機會、廣告資源與 partner channel，讓每家團隊都有可落地的成長路徑。",
        },
      ],
      mentors: [
        {
          title: "Physical AI & Deep Tech",
          org: "Google",
          contribution: "Google 對 Physical AI 的觀點、Deep Tech AI startup 評選視角",
        },
        {
          title: "Co-founder & Managing Partner",
          org: "SparkLabs Taiwan",
          contribution: "台灣 AI 戰略視角、program 願景、創業者出海",
        },
        {
          title: "Co-founder & General Partner",
          org: "SparkLabs Group",
          contribution: "AI Startup GTM、美國市場進入策略、美國投資人視角",
        },
        {
          title: "VP",
          org: "SparkLabs Taiwan",
          contribution: "出海與美國市場進入實務建議、Cohort 經營",
        },
        {
          title: "Global Mentor",
          org: "SparkLabs Group",
          contribution: "Biotech & Healthcare AI 募資、Silver Lake / Harvard 視角",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "常見問題",
      subtitle: "這裡整理了申請者最常問的問題。 如果還有疑問，歡迎直接聯絡我們。",
      items: [
        {
          q: "申請需要費用嗎？",
          a: "完全免費。 入選團隊另獨家取得 USD 25K Google Cloud Credit。",
        },
        {
          q: "這個計劃會收取股權嗎？",
          a: "不會。 本計劃為加速資源型合作，不交換股權。 SparkLabs 後續若有興趣進行投資，將會另以獨立的 Term Sheet 進行討論，並非加速計劃的必要條件。",
        },
        {
          q: "一定要在台灣嗎？",
          a: "Taiwan-based 或 Taiwan-connected 皆可。 創辦團隊在台灣有任一連結（registered entity、創辦人、技術團隊或營運）即符合資格。",
        },
        {
          q: "已申請過 GFS 25K Credit 還能參加嗎？",
          a: "可以申請計劃本身，但 USD 25K Credit 不重複給予。 其他所有資源（Technical Deep Dive、Mentor Network、Global Showcase 等）照常提供。",
        },
        {
          q: "計劃 12 週要實體到場嗎？",
          a: "採 Hybrid 模式：部分 mentorship 與 Global Showcase（11/20-27）為實體於台北舉行；其餘以線上 / 混合進行。",
        },
        {
          q: "申請結果何時公布？",
          a: "8/17 公布入選名單。8/24 計劃正式啟動。 未錄取者亦會收到個別 email 回覆。",
        },
        {
          q: "國際團隊可以申請嗎？",
          a: "歡迎。 但要求 Day-one Global Mindset，且至少有台灣連結，例如預計 3 個月內在台設立分公司、核心技術團隊在台、或有台灣 founder。",
        },
      ],
    },
    finalCta: {
      deadline: "申請截止：7 月 26 日 · 只精選 15 家團隊",
      title: {
        line1: "把你最大的瓶頸，",
        line2: "交給我們",
      },
      subtitle1: "Google Cloud 與全球導師網絡，",
      subtitle2: "會成為你下一階段成長的加速器",
      ctaPrimary: "立即申請",
      ctaSecondary: "聯絡計劃團隊",
      microcopy: "免費申請 · 不交換股權 · 8/17 公布入選名單",
    },
    footer: {
      tagline:
        "Google 與 SparkLabs Taiwan 攜手，為下一代 AI-native 創辦人提供技術資源、導師網絡與國際舞台。",
      programTitle: "計劃",
      programLinks: [
        { label: "計劃一覽", href: "/#program-at-a-glance" },
        { label: "資源支援", href: "/#benefits" },
        { label: "申請時程", href: "/#timeline" },
        { label: "導師團", href: "/#mentors" },
        { label: "立即申請", href: "/apply" },
      ],
      contactTitle: "聯絡我們",
      address: "台北市信義區松仁路 100 號",
      copyright: "© 2026 Google × SparkLabs Taiwan AI Accelerator. All rights reserved.",
      privacy: "隱私權政策",
      terms: "使用條款",
    },
    apply: {
      backToHome: "← 回到首頁",
      header: {
        eyebrow: "Application",
        title: "申請 Google × SparkLabs Taiwan AI Accelerator",
        subtitle: "三步驟完成申請。 預計 15 - 20 分鐘。",
        deadline: "申請截止：7 / 26",
        spots: "僅 15 個入選名額",
      },
      eligibility: {
        title: "步驟 1 — 確認你符合所有條件",
        subtitle: "勾選所有條件後，下方會解鎖「我準備好了」按鈕。",
        items: [
          "我們團隊正處於 Seed 至 Series A 階段",
          "AI 是我們產品的核心，不是附加功能",
          "我們從 Day One 就為國際市場打造",
          "我們的團隊在台灣有根、有人才或有營運",
        ],
        readyLabel: "全部符合 — 進入下一步",
        notReadyLabel: "尚未全部符合？歡迎還是申請，我們會逐案判斷。",
      },
      prepare: {
        title: "步驟 2 — 申請前請準備好以下資料",
        subtitle: "建議先準備齊全再開始填表，避免中途中斷。",
        items: [
          { title: "公司基本資訊", description: "公司名稱、註冊地、成立日期、員工人數" },
          { title: "創辦團隊", description: "創辦人姓名、職稱、LinkedIn、簡短背景" },
          { title: "產品與 AI 技術描述", description: "在解決什麼問題？AI 技術差異化在哪？" },
          { title: "市場 Traction", description: "現有用戶、收入、合作夥伴等可量化指標" },
          { title: "國際擴張規劃", description: "未來 18 個月的市場拓展計劃" },
          { title: "Cloud / Infra 需求", description: "目前使用的雲端、預期算力、模型規模" },
          { title: "Pitch Deck", description: "PDF 上傳（建議 12-20 頁，小於 10MB）" },
        ],
      },
      criteria: {
        title: "我們會這樣評選",
        subtitle: "確保你知道我們在看什麼。",
        items: [
          { title: "AI 技術強度", description: "技術差異化、模型品質、產品 readiness" },
          { title: "創辦團隊能力", description: "團隊背景、過往執行紀錄、學習速度" },
          { title: "市場動能", description: "PMF 訊號、客戶驗證、收入成長" },
          {
            title: "國際擴張潛力",
            description: "國際市場理解、Day-one Global Mindset",
          },
        ],
      },
      form: {
        title: "步驟 3 — 提交申請",
        placeholder:
          "申請表單將於此嵌入（Typeform / Tally / 自建表單）。\n\n若表單尚未載入，請聯絡 program@sparklabstaiwan.com 取得申請連結，或稍後重新造訪此頁。",
        note: "資料會直接送到 SparkLabs Taiwan 與 Google Cloud 評審團隊。建議使用桌機填寫以獲得最佳體驗。",
        externalCta: "前往申請表單",
        iframeLabel: "申請表單",
        iframeTitle: "Google × SparkLabs Taiwan AI Accelerator 申請表",
        iframeMeta: "Google Forms · 約 15 分鐘",
        openInNewTab: "在新分頁開啟",
        loading: "載入中...",
        fallbackPrompt: "無法看到上方表單？",
        fallbackCta: "在新視窗開啟申請表單",
      },
      steps: {
        eligibility: "步驟 1",
        prepare: "步驟 2",
        form: "步驟 3",
      },
      reassurance: {
        title: "你即將申請的計劃",
        items: [
          { title: "免費申請", description: "完全免費 · 不收任何費用" },
          { title: "不交換股權", description: "計劃本身不收取股權" },
          { title: "8 / 17 公布入選", description: "結果於 8 月 17 日公告" },
          { title: "8 / 24 啟動", description: "計劃於 8 月 24 日啟動" },
        ],
      },
      faqReminder: {
        title: "還有疑問？",
        subtitle: "完整 FAQ 整理在主頁。",
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
      programName: "Google × SparkLabs Taiwan AI Accelerator",
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
        part1: "Build the next",
        part2: "",
        highlight: "world-class AI company",
        part3: " from Taiwan",
      },
      subtitle:
        "Google and SparkLabs Taiwan unite to give AI-native founders Google Cloud's technical depth, a global mentor network, and a Global Showcase stage in November.",
      ctaPrimary: "Apply Now",
      ctaSecondary: "See Program Details",
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
          prefix: "$",
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
      title: "Five modules. From technical depth to a global stage.",
      subtitle:
        "Not a credit subsidy. Google's technical horsepower combined with SparkLabs' global network — integrated for AI-native founders.",
      readyCta: "Ready to access these resources?",
      heroCard: {
        tag: "Exclusive · Selected Teams",
        title: "USD 25K Google Cloud Credit",
        tagline: "Cover the largest fixed cost of your Seed–Series A stage.",
        description:
          "Training, inference, data pipelines — the fastest-burning costs for AI companies. USD 25K Google Cloud Credit gives you runway to validate hypotheses, iterate, and keep capital where it matters most.",
        subnote: "Not granted again if you've already received GFS 25K Credit. All other resources apply.",
      },
      items: [
        {
          title: "Technical Incubation",
          tagline: "Google Cloud AI Enablement",
          description:
            "Google's technical and Customer Success teams plug directly into each selected startup — from Gemini model optimization to production-ready architecture reviews.",
          bullets: [
            "AI Model Optimization — Gemini fine-tuning",
            "Infrastructure Scalability — cloud architecture design",
            "Production Readiness — pre-launch stress testing",
            "Architecture Reviews — 1-on-1 with Google engineers",
            "Hands-on Support — implementation-level guidance",
            "On-Demand AI Service Support — advanced services as needed",
            "Domain Experts — Medical AI & Deep Tech AI specialists",
          ],
        },
        {
          title: "Business Incubation",
          tagline: "SparkLabs Global Mentor Network",
          description:
            "3 dedicated mentorship sessions + 2 office hours per selected startup. From US market entry to direct access to Google BU partnerships.",
          bullets: [
            "Go-to-Market Strategy — US market entry",
            "Fundraising Preparation — pitch deck, valuation, investor intros",
            "Industry Connection — cross-vertical industry access",
            "Google GTM Support — Google services & BU resources",
            "Google Ads — advertising support",
            "Google BU Partnership — partnerships with Google business units",
          ],
        },
        {
          title: "Community Support",
          tagline: "Founder Circle & Knowledge Transfer",
          description:
            "Entrepreneur Sharing Sessions led by founders who've already scaled globally. Build a cohort peer community and learn directly from those who've walked the path.",
          bullets: [
            "Entrepreneur Sharing Session — led by globally-scaled founders",
            "Cohort Peer Community — cross-batch founder connections",
            "Cross-Industry Founder Network — multi-vertical exchange",
            "Real-world Playbooks — unfiltered war-room learnings",
          ],
        },
        {
          title: "Global Showcase Stage",
          tagline: "Nov 20–27 · Co-located with Meet Taipei",
          description:
            "Showcase your progress to VCs, CVCs, and media on the GCP global ecosystem stage co-located with Meet Taipei. 200+ attendees expected.",
          bullets: [
            "Global Sample Showcase — GCP global ecosystem exposure",
            "Global Press Kit — cross-border media & joint PR",
            "Capital Market Access — international VC / CVC matchmaking",
            "200+ attendees — one stage equals six months of BD",
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
      title: "From application to Global Showcase, a seven-month journey.",
      subtitle:
        "Mark these dates. Miss the July 26 deadline and the next cohort won't open until next year.",
      statuses: {
        open: "Open",
        upcoming: "Upcoming",
        future: "Future",
      },
      items: [
        {
          date: "6/19",
          title: "Program Announcement · Applications Open",
          description: "The online portal goes live for AI-native teams.",
        },
        {
          date: "6/19–7/26",
          title: "Recruitment",
          description:
            "A 6-week window. We encourage early applications so you have more time to prepare for the first interview.",
        },
        {
          date: "7/27–8/14",
          title: "Selection Process",
          description:
            "Application review, first interview, and final selection by SparkLabs / GCP Leadership.",
        },
        {
          date: "8/17",
          title: "Shortlist Announcement",
          description: "The selected 15 teams are publicly announced. Non-selected teams receive individual responses.",
        },
        {
          date: "8/24–11/27",
          title: "Program Execution (12-week intensive)",
          description:
            "All three modules in full swing: Technical Incubation, Business Incubation, and Community Support.",
        },
        {
          date: "11/20–11/27",
          title: "Global Showcase × Meet Taipei",
          description:
            "Global Sample Showcase + Global Press Kit + International VC / CVC access. 200+ international attendees — one stage equals six months of BD.",
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
              "Access SparkLabs Group / Global Ventures founders, investors, and corporate mentors for fundraising, GTM, and cross-border operating perspective.",
          },
          {
            title: "Market & capital access",
            body:
              "Connect through SparkLabs' accelerator and VC network across the U.S., Asia, and other overseas markets.",
          },
          {
            title: "Global expansion support",
            body:
              "Translate Taiwan traction into overseas entry strategy, pitch refinement, customer / partner pathways, and Global Showcase readiness.",
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
          title: "VP",
          org: "SparkLabs Taiwan",
          contribution: "Practical guidance on overseas / US market entry, cohort ops",
        },
        {
          title: "Global Mentor",
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
      subtitle1: "We'll bring Google",
      subtitle2: "and our global mentors.",
      ctaPrimary: "Apply Now",
      ctaSecondary: "Contact the Team",
      microcopy: "Free to apply · No equity taken · Shortlist announced August 17",
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
