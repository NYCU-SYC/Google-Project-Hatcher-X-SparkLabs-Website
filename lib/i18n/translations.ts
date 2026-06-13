export type Locale = "zh" | "en";

export const translations = {
  zh: {
    nav: {
      glance: "關於計畫",
      whyNow: "差異亮點",
      benefits: "你將獲得",
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
      programName: "Google Cloud Taiwan × SparkLabs Taiwan AI Accelerator",
      deadline: "7 / 26 申請截止",
      ctaShort: "立即申請",
    },
    languageToggle: {
      zh: "切換至中文",
      en: "切換至英文",
    },
    seo: {
      homeTitle: "Google Cloud Taiwan × SparkLabs Taiwan AI Accelerator｜為有全球企圖的 AI 創辦人而設",
      homeDescription:
        "由 Google Cloud 與 SparkLabs Taiwan 共同推動的 12 週、不交換股權 AI 加速器計畫，協助 AI 新創強化技術、加快成長並拓展國際市場。",
      applyTitle: "立即申請｜Google Cloud Taiwan × SparkLabs Taiwan AI Accelerator",
      applyDescription:
        "申請 Google Cloud Taiwan × SparkLabs Taiwan AI Accelerator。7 月 26 日截止，精選 15 家 AI 新創。免費申請，不交換股權。",
    },
    hero: {
      badgeCohort: "申請中",
      badgeStatus: "7 / 26 截止 · 精選 15 家團隊",
      title: {
        part1: "為有全球企圖的",
        part2: "",
        highlight: " AI 創辦人而設計",
        part3: "",
      },
      subtitle:
        "這是一個由 Google Cloud Taiwan 推動、為期 12 週且不交換股權的加速器計畫，協助 AI 新創強化技術、加快成長，並走向國際市場。",
      ctaPrimary: "立即申請",
      ctaSecondary: "了解計畫內容",
      applicationOpen: "6 / 15 開放申請",
      poweredBy: "技術支援：Google Cloud · Gemini Enterprise Agent Platform · Gemini models API",
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
      headline: "重要時程、資源與入選名額一次看清",
      items: [
        { value: 15, label: "入選名額", sublabel: "精選 15 家團隊" },
        {
          value: 25,
          prefix: "USD ",
          suffix: "K",
          label: "Google Cloud Platform 抵免額度",
          sublabel: "每隊最高 USD 25K 抵免額度",
        },
        { value: 12, suffix: " 週", label: "密集加速", sublabel: "8 月中旬 - 11 月下旬" },
        {
          value: 200,
          suffix: "+",
          label: "Global Showcase 出席者",
          sublabel: "11 月下旬 Meet Taipei 同期登場",
        },
      ],
    },
    aboutProgram: {
      eyebrow: "關於計畫",
      title: "關於計畫",
      paragraphs: [
        "台灣不缺世界級 AI 人才；下一步，是讓更多 AI 新創長成世界級公司。",
        "Google Cloud Taiwan × SparkLabs Taiwan AI Accelerator，協助高潛力團隊加快腳步：從 AI 技術建構、產品化，到跨市場成長。",
        "入選創辦人將直接連結技術專家、商業導師、國際投資人與國際展示機會，讓產品、團隊與市場策略同步升級。",
      ],
    },
    programDifference: {
      eyebrow: "核心差異",
      title: "技術與國際成長，放在同一個加速器裡",
      subtitle:
        "Google 帶來 AI、Cloud 與 GTM 資源，SparkLabs Taiwan 串接創辦人網絡與國際拓展支持。兩者結合，讓團隊不只做出更好的 AI 產品，也更快走向全球市場。",
      cards: [
        {
          title: "打造更強的 AI 產品",
          poweredBy: "由 Google 支持",
          lead: "",
          bullets: [
            "Google Cloud AI 直接支援，協助實作 Gemini Enterprise Agent Platform、Gemini models API 與完整 Google Cloud 技術資源",
            "Google Healthcare 產業專家，協助針對垂直領域打磨產品",
            "Google Cloud 工程師協助進行產品架構檢視",
            "Google Cloud Platform 抵免額度，支持團隊快速測試與上線",
          ],
        },
        {
          title: "拓展全球市場",
          poweredBy: "由 Google × SparkLabs 支持",
          lead: "",
          bullets: [
            "Google Ads 與 Google GTM 團隊提供市場進入策略支援",
            "Google 專家與 SparkLabs Taiwan 導師提供一對一輔導",
            "透過 SparkLabs 全球網絡，連結國際 VC 與 CVC",
            "Global Showcase Day 結合區域科技媒體跨境 PR 曝光",
          ],
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
      title: "具體、可使用、能推動成長的加速資源",
      subtitle:
        "從雲端額度、AI 技術指導，到商業導師、募資準備與國際曝光，協助團隊把技術、產品與市場推進到下一階段。",
      readyCta: "準備好取得這些資源了嗎？",
      heroCard: {
        tag: "USD 25K 抵免額度",
        title: "Google Cloud Platform 抵免額度",
        tagline: "入選團隊專屬",
        description:
          "入選即取得 USD 25K 抵免額度，可投入 Gemini models API、Gemini Enterprise Agent Platform 與產品上線所需的雲端資源，讓團隊更快驗證、迭代與交付。",
        subnote: "已申請過 Google Cloud for Startup Program 25K Credit 者不重複給予，其他所有資源照常提供。",
      },
      showcaseCard: {
        tag: "Global Showcase",
        title: "國際展示舞台",
        description:
          "一個舞台，200+ 位 VC、CVC 與媒體。把原本需要半年累積的曝光、引薦與商務開發，集中在一晚完成。",
      },
      items: [
        {
          title: "Google Cloud Platform 抵免額度",
          tagline: "USD 25K 抵免額度",
          description: "可投入 Google Cloud、Gemini Enterprise Agent Platform、Gemini models API 的建置、測試與擴充。",
          bullets: [],
        },
        {
          title: "Google Cloud AI 專家",
          tagline: "來自 Google Cloud 團隊的技術指導",
          description: "協助檢視 AI 架構、模型應用、擴充性與產品化部署準備。",
          bullets: [],
        },
        {
          title: "商業導師輔導",
          tagline: "創辦人與營運實戰者的一對一建議",
          description: "協助釐清成長策略、客戶開發與商業化路徑。",
          bullets: [],
        },
        {
          title: "全球網絡",
          tagline: "串接 SparkLabs 國際新創生態系",
          description: "連結跨區域導師、創辦人、投資人與市場資源。",
          bullets: [],
        },
        {
          title: "募資支援",
          tagline: "投資人準備與引薦",
          description: "優化募資敘事、Pitch Deck 與投資人溝通策略。",
          bullets: [],
        },
        {
          title: "國際展示機會",
          tagline: "面向投資人、夥伴與客戶發表",
          description: "在國際舞台展示產品成果、市場潛力與合作機會。",
          bullets: [],
        },
      ],
    },
    criteria: {
      eyebrow: "適合申請",
      title: "適合申請的團隊",
      subtitle: "我們正在尋找技術扎實、產品可規模化，並具備全球企圖的 AI 新創團隊。",
      headline: {
        line1: "適合準備走向全球的 AI 新創",
        line2: "",
      },
      cohortIntro: "我們將精選",
      cohortHighlight: "15 家新創",
      cohortRest:
        "，看重技術深度、可規模化產品與國際市場企圖。",
      leadIn: "我們正在尋找：",
      checklist: [
        "AI-native 新創團隊",
        "Seed 至 Series A 階段",
        "具備扎實技術能力的創辦團隊",
        "正在打造可規模化的產品",
        "不只看台灣市場，具備明確全球企圖",
        "歡迎 B2B AI、DeepTech、Physical AI、Healthcare AI 團隊",
      ],
      detailsCta: "了解計畫內容",
      cards: [
        {
          title: "AI-native 新創團隊",
          body: "AI 是產品核心，而不是附加功能。",
        },
        {
          title: "Seed 至 Series A 階段",
          body: "已有產品雛形、pilot 客戶或早期市場訊號。",
        },
        {
          title: "強技術創辦團隊",
          body: "具備把 AI 技術轉化為可規模化產品的能力。",
        },
        {
          title: "具備全球企圖",
          body: "不只看台灣市場，已開始思考國際客戶、通路與合作夥伴。",
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
        title: "歡迎領域",
        items: ["B2B AI", "DeepTech", "Physical AI", "Healthcare AI"],
      },
      matchCta: "符合條件 — 立即申請",
    },
    timeline: {
      eyebrow: "計畫時程",
      title: "三個關鍵日期，從申請走向國際舞台",
      subtitle: "6 / 15 開放申請；8 月中旬公布入選名單；11 月下旬登上 Global Showcase。",
      statuses: {
        open: "申請中",
        upcoming: "即將開始",
        future: "待展開",
      },
      items: [
        {
          date: "6/15",
          title: "開放申請",
          description: "AI-native 團隊可提交申請資料。",
        },
        {
          date: "8 月中旬",
          title: "入選名單公布",
          description: "正式公布 15 家入選團隊。",
        },
        {
          date: "11 月下旬",
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
      title: "與懂 AI、懂市場、懂國際成長的人並肩前進",
      subtitle:
        "從 Google Cloud 的 AI 技術視角、SparkLabs 全球 GP，到 DeepTech 與 Healthcare AI 領域專家，協助你釐清瓶頸、找到下一步。",
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
            "Google 工程與 Customer Success 團隊提供直接技術支援，涵蓋 Gemini models API 最佳化、雲端架構擴展、上線前架構審查，以及入選團隊的實作陪跑。",
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
          a: "完全免費。入選團隊可取得最高 USD 25K Google Cloud 額度，用於雲端與 AI 產品建置。",
        },
        {
          q: "這個計畫會收取股權嗎？",
          a: "不會。這是 equity-free 的加速器計畫，參與不以交換股權為條件。若未來有投資討論，會另行以獨立條件進行。",
        },
        {
          q: "一定要在台灣嗎？",
          a: "不一定。設籍台灣或與台灣有明確連結皆可，例如公司登記、創辦人、技術團隊或營運在台灣。",
        },
        {
          q: "已申請過 Google Cloud for Startup Program 25K Credit 還能參加嗎？",
          a: "可以申請計畫本身，但 USD 25K Google Cloud 額度不重複提供。技術指導、商業導師、SparkLabs 全球網絡與 Global Showcase 等資源仍可照常參與。",
        },
        {
          q: "計畫 12 週要實體到場嗎？",
          a: "採 Hybrid 模式：部分導師交流與 Global Showcase 預計於 11 月下旬在台北實體進行；其餘以線上或混合形式安排。",
        },
        {
          q: "申請結果何時公布？",
          a: "預計 8 月中旬公布入選名單，並於 8 月中旬後啟動計畫。未入選團隊也會收到個別電子郵件回覆。",
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
        line1: "準備把 AI 產品",
        line2: "推向國際市場了嗎？",
      },
      ctaPrimary: "立即申請",
      ctaSecondary: "聯絡計畫團隊",
      microcopy: "12 週、不交換股權，協助你的技術、商業與國際拓展同步升級。",
    },
    footer: {
      tagline:
        "Google Cloud 與 SparkLabs Taiwan 攜手，協助有全球企圖的 AI 創辦人強化技術、加速成長並走向國際市場。",
      programTitle: "計畫",
      programLinks: [
        { label: "關於計畫", href: "/#about-program" },
        { label: "差異亮點", href: "/#program-difference" },
        { label: "你將獲得", href: "/#benefits" },
        { label: "適合團隊", href: "/#apply-criteria" },
        { label: "申請時程", href: "/#timeline" },
        { label: "立即申請", href: "/apply" },
      ],
      contactTitle: "聯絡我們",
      address: "台北市信義區松仁路 100 號",
      copyright: "© 2026 Google Cloud Taiwan × SparkLabs Taiwan AI Accelerator。保留所有權利。",
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
        title: "申請\nGoogle Cloud × SparkLabs Taiwan\nAI Accelerator",
        subtitle: "確認資格、準備資料並提交表單，約 15 至 20 分鐘即可完成。",
        deadline: "申請截止：7 / 26",
        spots: "精選 15 家 AI 新創",
      },
      eligibility: {
        title: "步驟 1：確認是否適合申請",
        subtitle: "若大多數條件符合，就可以開始準備申請資料。",
        items: [
          "我們是 AI-native 新創團隊",
          "目前處於 Seed 至 Series A 階段",
          "創辦團隊具備扎實技術能力",
          "正在打造可規模化的 AI 產品",
          "具備不只台灣市場的全球企圖",
          "我們的方向屬於 B2B AI、DeepTech、Physical AI、Healthcare AI 或相關 AI 應用",
        ],
        readyLabel: "符合條件，進入下一步",
        notReadyLabel: "尚未全部符合？仍可申請，我們會依團隊狀況逐案評估。",
      },
      prepare: {
        title: "步驟 2：準備申請資料",
        subtitle: "建議先整理好以下內容，填寫時會更順暢。",
        items: [
          { title: "公司基本資訊", description: "公司名稱、註冊地、成立時間、團隊規模" },
          { title: "創辦團隊", description: "創辦人姓名、職稱、LinkedIn 與簡短背景" },
          { title: "產品與 AI 技術", description: "解決的問題、AI 的角色、架構與技術差異化" },
          { title: "市場動能", description: "現有用戶、營收、合作夥伴或其他可量化指標" },
          { title: "國際擴張規劃", description: "未來 18 個月的目標市場與拓展計畫" },
          { title: "雲端與基礎架構需求", description: "目前雲端使用情況、預期算力、模型規模與部署需求" },
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
        note: "資料會直接送交 SparkLabs Taiwan 與 Google Cloud 評審團隊。建議使用桌機填寫，內容會更好整理。",
        externalCta: "前往申請表單",
        iframeLabel: "申請表單",
        iframeTitle: "Google Cloud Taiwan × SparkLabs Taiwan AI Accelerator 申請表",
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
          { title: "12 週加速", description: "技術、商業與國際拓展同步推進" },
          { title: "8 月中旬公布入選", description: "預計 8 月中旬公布結果" },
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
      glance: "About",
      whyNow: "Why Different",
      benefits: "What You Get",
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
      programName: "Google Cloud Taiwan × SparkLabs Taiwan AI Accelerator",
      deadline: "Apply by July 26",
      ctaShort: "Apply Now",
    },
    languageToggle: {
      zh: "Switch to Chinese",
      en: "Switch to English",
    },
    seo: {
      homeTitle:
        "Google Cloud Taiwan × SparkLabs Taiwan AI Accelerator | Built for AI founders with global ambition",
      homeDescription:
        "A 12-week equity-free accelerator powered by Google Cloud and SparkLabs Taiwan, helping AI startups strengthen technology, accelerate growth, and scale globally.",
      applyTitle: "Apply | Google Cloud Taiwan × SparkLabs Taiwan AI Accelerator",
      applyDescription:
        "Apply to the Google Cloud Taiwan × SparkLabs Taiwan AI Accelerator. Application deadline: July 26. 15 selected AI startups. Free to apply, equity-free.",
    },
    hero: {
      badgeCohort: "Now Open",
      badgeStatus: "Apply by July 26 · Only 15 spots",
      title: {
        part1: "Built for AI founders",
        part2: "",
        highlight: " with global ambition.",
        part3: "",
      },
      subtitle:
        "A 12-week equity-free accelerator powered by Google Cloud Taiwan, helping AI startups strengthen their technology, accelerate growth, and scale globally.",
      ctaPrimary: "Apply Now",
      ctaSecondary: "See Program Details",
      applicationOpen: "Application Open 6/15",
      poweredBy: "Powered by Google Cloud · Gemini Enterprise Agent Platform · Gemini models API",
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
      headline: "Key dates, resources, and cohort size at a glance.",
      items: [
        { value: 15, label: "Selected Teams", sublabel: "Only Spots in Cohort" },
        {
          value: 25,
          prefix: "USD ",
          suffix: "K",
          label: "Google Cloud Platform credit",
          sublabel: "Up to USD 25K per team",
        },
        { value: 12, suffix: " wk", label: "Weeks of Acceleration", sublabel: "Mid August – Late November" },
        {
          value: 200,
          suffix: "+",
          label: "Global Showcase Audience",
          sublabel: "Late November × Meet Taipei",
        },
      ],
    },
    aboutProgram: {
      eyebrow: "About the Program",
      title: "About the Program",
      paragraphs: [
        "Taiwan has world-class AI talent. What it needs are more world-class AI companies.",
        "The Google Cloud Taiwan × SparkLabs Taiwan AI Accelerator helps high-potential startups move faster—from building with AI to scaling globally.",
        "Selected founders receive direct access to technical experts, business mentors, global investors, and opportunities to showcase their innovations on an international stage.",
      ],
    },
    programDifference: {
      eyebrow: "Why This Program Is Different",
      title: "Why This Program Is Different",
      subtitle:
        "Google brings AI, Cloud, and GTM resources. SparkLabs Taiwan brings founder networks and global expansion support. Together, they help AI startups build stronger products and scale internationally.",
      cards: [
        {
          title: "Build Better AI",
          poweredBy: "Powered by Google",
          lead: "",
          bullets: [
            "Direct support from Google Cloud AI, with hands-on access to Gemini Enterprise Agent Platform, Gemini models API, and the full Google Cloud stack",
            "Google Healthcare industry experts to sharpen your product for your vertical",
            "Product architecture reviews from Google Cloud engineers",
            "Google Cloud Platform credit to test and ship fast",
          ],
        },
        {
          title: "Scale Globally",
          poweredBy: "Powered by Google × SparkLabs",
          lead: "",
          bullets: [
            "Go-to-market support from Google Ads and Google's GTM team",
            "1:1 mentorship from Google experts and SparkLabs Taiwan mentors",
            "Access to international VCs and CVCs through SparkLabs' global network",
            "Global Showcase Day with cross-border PR across regional tech media",
          ],
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
      title: "What You'll Get",
      subtitle:
        "A focused set of technical, business, fundraising, and global expansion resources designed for AI founders who need to move faster.",
      readyCta: "Ready to access these resources?",
      heroCard: {
        tag: "USD 25K credit",
        title: "Google Cloud Platform Credit",
        tagline: "Selected teams only",
        description:
          "$25K to burn on Gemini models API, Gemini Enterprise Agent Platform, and whatever it takes to ship faster. Yours the moment you're selected.",
        subnote: "Not granted again if you've already received the Google Cloud for Startup Program 25K Credit. All other resources apply.",
      },
      showcaseCard: {
        tag: "Global Showcase",
        title: "Global Showcase Stage",
        description:
          "One stage. 200+ VCs, CVCs, and press. The BD that would've taken you six months — in one night.",
      },
      items: [
        {
          title: "Google Cloud Platform Credit",
          tagline: "USD 25K credit",
          description: "Build, test, and scale with Google Cloud, Gemini Enterprise Agent Platform, and Gemini models API.",
          bullets: [],
        },
        {
          title: "Google Cloud AI Experts",
          tagline: "Technical guidance from the Google Cloud team",
          description: "Get support on AI architecture, model usage, scalability, and production readiness.",
          bullets: [],
        },
        {
          title: "Business Mentorship",
          tagline: "1-on-1 support from operators and founders",
          description: "Sharpen growth strategy, customer development, and commercialization plans.",
          bullets: [],
        },
        {
          title: "Global Network",
          tagline: "Access to SparkLabs' international ecosystem",
          description: "Connect with mentors, operators, investors, and market builders across regions.",
          bullets: [],
        },
        {
          title: "Fundraising Support",
          tagline: "Investor readiness and introductions",
          description: "Refine your narrative, pitch deck, investor approach, and fundraising readiness.",
          bullets: [],
        },
        {
          title: "Global Showcase",
          tagline: "Present to investors, partners, and customers",
          description: "Showcase your product and market potential to an international audience.",
          bullets: [],
        },
      ],
    },
    criteria: {
      eyebrow: "Who Should Apply",
      title: "Who Should Apply",
      subtitle:
        "This program is designed for AI startups with technical depth, scalable products, and global ambition beyond Taiwan.",
      headline: {
        line1: "Built for AI startups ready to scale",
        line2: "",
      },
      cohortIntro: "A focused cohort of",
      cohortHighlight: "15 selected startups",
      cohortRest:
        " with technical depth, scalable products, and global ambition.",
      leadIn: "We are looking for:",
      checklist: [
        "AI-native startups",
        "Seed to Series A",
        "Strong technical founders",
        "Building scalable products",
        "Global ambition beyond Taiwan",
        "B2B AI, DeepTech, Physical AI, Healthcare AI welcome",
      ],
      detailsCta: "See program details",
      cards: [
        {
          title: "AI-native startups",
          body: "AI is core to the product, not a feature added later.",
        },
        {
          title: "Seed to Series A",
          body: "Teams with a working product, pilots, or early market signal.",
        },
        {
          title: "Strong technical founders",
          body: "Founders who can turn AI capability into scalable products.",
        },
        {
          title: "Global ambition beyond Taiwan",
          body: "Teams thinking beyond local markets, with customers, partners, or GTM plans abroad.",
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
        title: "Welcome domains",
        items: ["B2B AI", "DeepTech", "Physical AI", "Healthcare AI"],
      },
      matchCta: "I Match. Apply Now",
    },
    timeline: {
      eyebrow: "Program Timeline",
      title: "Three dates. One global stage.",
      subtitle: "Application Open 6/15. Shortlist lands in mid August. Showcase starts in late November.",
      statuses: {
        open: "Open",
        upcoming: "Upcoming",
        future: "Future",
      },
      items: [
        {
          date: "6/15",
          title: "Application Open",
          description: "AI-native teams can begin submitting applications.",
        },
        {
          date: "Mid August",
          title: "Shortlist Announced",
          description: "The selected 15 teams are announced.",
        },
        {
          date: "Late November",
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
      title: "Work with people who understand AI, GTM, and global growth",
      subtitle:
        "From Google Cloud's AI expertise to SparkLabs' global partners and domain specialists, founders get practical guidance on technology, market entry, and scaling beyond Taiwan.",
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
            "Direct technical support from Google engineering and Customer Success. Gemini models API optimization, infrastructure scalability, production readiness reviews, and implementation-level guidance for each selected startup.",
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
          a: "No. Applications are free. Selected teams may receive Google Cloud Platform credit for cloud and AI product development.",
        },
        {
          q: "Does the program take equity?",
          a: "No. This is an equity-free accelerator. Participation does not require an equity exchange. Any future investment discussion would be handled separately.",
        },
        {
          q: "Do we have to be based in Taiwan?",
          a: "Taiwan-based or Taiwan-connected both qualify. Any meaningful Taiwan connection — registered entity, founder, technical team, or operations — counts.",
        },
        {
          q: "I've already received the Google Cloud for Startup Program 25K Credit. Can I still apply?",
          a: "Yes. You can still apply to the program. The USD 25K Google Cloud Platform credit will not be granted again; subject to future fundraising criteria, eligible teams may upgrade to the AI Tier and receive USD 350K in Google Cloud Platform credit. Technical guidance, mentorship, SparkLabs network access, and Global Showcase opportunities still apply.",
        },
        {
          q: "Do we have to attend the 12 weeks in person?",
          a: "Hybrid model: some mentorship and the Global Showcase are expected to take place in Taipei in late November; the rest is online / hybrid.",
        },
        {
          q: "When will we hear back?",
          a: "Shortlist announcements are expected in mid August, with the program starting shortly after. Non-selected teams will also receive individual email responses.",
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
        line1: "Ready to take your AI product",
        line2: "to global markets?",
      },
      ctaPrimary: "Apply Now",
      ctaSecondary: "Contact the Team",
      microcopy: "A 12-week, equity-free accelerator for AI founders ready to strengthen technology, accelerate growth, and scale globally.",
    },
    footer: {
      tagline:
        "Google Cloud and SparkLabs Taiwan help AI founders strengthen technology, accelerate growth, and scale beyond Taiwan.",
      programTitle: "Program",
      programLinks: [
        { label: "About", href: "/#about-program" },
        { label: "Why Different", href: "/#program-difference" },
        { label: "What You Get", href: "/#benefits" },
        { label: "Who Should Apply", href: "/#apply-criteria" },
        { label: "Timeline", href: "/#timeline" },
        { label: "Apply Now", href: "/apply" },
      ],
      contactTitle: "Contact",
      address: "100 Songren Rd, Xinyi District, Taipei",
      copyright: "© 2026 Google Cloud Taiwan × SparkLabs Taiwan AI Accelerator. All rights reserved.",
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
        title: "Apply to\nGoogle Cloud × SparkLabs Taiwan\nAI Accelerator",
        subtitle: "Confirm fit, prepare your materials, and submit in about 15-20 minutes.",
        deadline: "Deadline: July 26",
        spots: "15 selected AI startups",
      },
      eligibility: {
        title: "Step 1 — Confirm fit",
        subtitle: "If most of these apply, you should prepare your application.",
        items: [
          "We are an AI-native startup",
          "We are Seed to Series A",
          "We have strong technical founders",
          "We are building a scalable AI product",
          "We have global ambition beyond Taiwan",
          "We work in B2B AI, DeepTech, Physical AI, Healthcare AI, or a related AI domain",
        ],
        readyLabel: "Looks like a fit — continue to next step",
        notReadyLabel: "Not every box applies? You can still apply. We review teams case by case.",
      },
      prepare: {
        title: "Step 2 — Prepare the following before you apply",
        subtitle: "Gather these materials first so the form is easier to complete.",
        items: [
          { title: "Company Basics", description: "Name, registration, founding date, headcount" },
          { title: "Founding Team", description: "Names, titles, LinkedIn, short backgrounds" },
          { title: "Product & AI Technology", description: "Problem, AI role, architecture, and technical differentiation" },
          { title: "Market Traction", description: "Users, revenue, partnerships — quantifiable signals" },
          { title: "Global Expansion Plan", description: "Target markets and expansion priorities for the next 18 months" },
          { title: "Cloud / Infrastructure Needs", description: "Current cloud setup, expected compute, model scale, and deployment needs" },
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
        note: "Submissions go directly to the SparkLabs Taiwan and Google Cloud review team. Desktop is recommended for easier completion.",
        externalCta: "Go to Application Form",
        iframeLabel: "Application Form",
        iframeTitle: "Google Cloud Taiwan × SparkLabs Taiwan AI Accelerator Application",
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
          { title: "Equity-Free", description: "No equity exchange required" },
          { title: "12-Week Accelerator", description: "Technology, growth, and global expansion support" },
          { title: "Shortlist in Mid August", description: "Results expected in mid August" },
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
