/**
 * Flow Series — Global i18n Dictionary & Language Selector
 */
const translations = {
  // 1. 한국어 (Korean)
  ko: {
    navProducts: "상품들", subWf: "스케줄 위젯", subSf: "미니멀 뷰어", subFf: "할일 & 몰입",
    navDownloads: "다운로드", navConnect: "고객센터",
    heroBadge: "Next-Gen Workspace Tools",
    heroTitle: '업무와 창작의 완벽한 흐름,<br><span class="gradient-text">Flow Series</span>',
    heroDesc: "투명한 일정 관리부터 압도적인 비주얼 슬라이드 경험까지. 직관적인 데스크톱 솔루션으로 완벽한 몰입을 경험하세요.",
    btnExplore: "제품 둘러보기", btnDownload: "다운로드 센터",
    productsTitle: "상품 라인업", productsSub: "당신의 핵심 업무 흐름을 돕는 Flow Series의 소프트웨어입니다.",
    wfDesc: "바탕화면에 자연스럽게 녹아드는 타임라인 기반 스케줄 위젯입니다. Google Calendar 동기화와 직관적인 타임라인으로 오늘 하루의 흐름을 한눈에 파악하세요.",
    wfF1: "Google Calendar 실시간 연동", wfF2: "타임라인 & 월간 일정 뷰 제공", wfF3: "Windows Mica 투명 반투명 위젯 UI", wfF4: "서버 저장 없는 로컬 중심의 안전한 데이터 관리",
    btnGetWf: "workerFlow 받기",
    sfDesc: "디자이너와 크리에이터를 위한 불필요한 요소 없는 미니멀 이미지 뷰어입니다. 드래그 앤 드롭으로 이미지 및 폴더를 감상하고 완벽하게 몰입할 수 있습니다.",
    sfF1: "몰입형 전체 화면 시청 모드", sfF2: "폴더 드래그 앤 드롭 탐색 지원", sfF3: "사용자 지정 재생 간격의 슬라이드쇼", sfF4: "macOS 및 Windows 크로스 플랫폼 지원",
    btnGetSf: "slideFlow 받기",
    ffDesc: "설치 없이 웹에서 바로 실행되는 직관적인 할 일 관리 앱입니다. workerFlow와 완벽히 연동되어 일정과 과업을 하나로 이어줍니다.",
    ffMainF1: "직관적인 To-Do 리스트 & 우선순위 관리", ffMainF2: "workerFlow 스케줄 위젯과 연동", ffMainF3: "일일 과업 달성 현황 시각화", ffMainF4: "웹 브라우저 기반 무설치 크로스 플랫폼",
    btnGetFf: "focusFlow 알아보기",
    whyLabel: "Design Philosophy", whyTitle: '인터페이스는 최소한으로,<br><span class="gradient-text">몰입과 흐름은 극대화.</span>', whySub: "Flow Series는 복잡한 기능을 덜어내고 사용자의 업무와 창작 흐름을 방해하지 않는 소프트웨어를 만듭니다.",
    why1Title: "100% 로컬 보안 중심", why1Desc: "모든 데이터는 오직 사용자의 기기에만 안전하게 저장됩니다. 외부 서버 전송이나 추적 코드 없이 개인정보를 안전하게 보호합니다.",
    why2Title: "언제나 바탕화면에 상주", why2Desc: "매번 앱을 켰다 끌 필요가 없습니다. workerFlow의 위젯은 항상 바탕화면에 녹아들어 있고, slideFlow는 딜레이 없이 즉시 실행됩니다.",
    why3Title: "미니멀 UI & 군더더기 없는 디자인", why3Desc: "Windows Mica 투명 효과와 유리 질감의 UI로 바탕화면과 조화를 이룹니다. 군더더기 없는 레이아웃으로 오직 작업에만 몰입할 수 있습니다.",
    why4Title: "7개 국어 완벽 지원", why4Desc: "전 세계 사용자를 위해 한국어, 영어, 일본어, 중국어, 스페인어, 프랑스어, 독일어를 기본적으로 지원합니다.",
    why5Title: "Windows & macOS 최적화 호환성", why5Desc: "크로스 플랫폼 환경을 고려하여 각 OS의 네이티브 감성에 맞는 최적화된 경험을 제공합니다. 어디서나 동일한 작업 흐름을 유지하세요.",
    dlCenterBadge: "Download Center", dlCenterTitle: 'Flow Series<br><span class="gradient-text">다운로드 센터</span>', dlCenterDesc: "모든 제품의 최신 설치 파일 및 이전 버전 아카이브를 한곳에서 다운로드하실 수 있습니다.",
    dlLatestTitle: "최신 버전 다운로드", dlLatestSub: "운영체제(OS)에 맞는 최신 버전을 선택하여 즉시 설치하세요.",
    wfDlCardDesc: "바탕화면에 상주하는 타임라인 기반 스케줄 위젯", sfDlCardDesc: "불필요한 요소를 제거한 몰입형 미니멀 이미지 뷰어", goProductPage: "제품 상세 페이지 보기 ➔",
    dlArchiveTitle: "제품별 이전 버전 아카이브", dlArchiveSub: "이전 패치버전 설치 파일이 필요한 경우 아래 목록에서 다운로드하실 수 있습니다.",
    thSoftware: "소프트웨어", thVersion: "버전", thPlatform: "OS / 플랫폼", thReleaseDate: "출시일", thDownload: "다운로드", latestTag: "최신", olderTag: "이전버전", linkDl: "다운로드",
    wfHeroBadge: "🗓 Productivity · Windows & macOS", wfHeroTitle: '당신의 하루를<br><span class="gradient-text">항상 한눈에.</span>', wfHeroDesc: "workerFlow는 바탕화면에 자연스럽게 녹아드는 타임라인 기반 스케줄 위젯입니다. Google Calendar 동기화와 직관적인 타임라인으로 오늘 하루의 흐름을 한눈에 파악하세요.",
    wfDlTitle: "다운로드 옵션", wfDlWinLabel: "Windows 공식 설치 파일", wfDlMacLabel: "macOS 공식 설치 파일", wfDlInstaller: "공식 설치 파일", wfDlStore: "스토어에서 받기", wfPlatformNote: "Windows 10/11 & macOS Apple Silicon/Intel 지원", wfOldVersionLink: "이전 버전(아카이브) 다운로드",
    wfFeatTitle: "주요 기능", wfFeatSub: "업무에 방해되지 않고 일정만 직관적으로 보여주도록 설계되었습니다.",
    wfF1Title: "Google Calendar 동기화", wfF1Desc: "OAuth 2.0으로 안전하게 Google 계정을 연결합니다. 5분마다 자동으로 일정이 동기화되며, 앱에서 직접 일정을 추가, 수정, 삭제할 수 있습니다.",
    wfF2Title: "실시간 타임라인 뷰", wfF2Desc: "화면 가장자리에 고정된 수직 타임라인으로 하루 전체 일정을 한눈에 확인하세요. 빨간선으로 현재 시간을 실시간으로 표시해 줍니다.",
    wfF3Title: "월간 캘린더 뷰", wfF3Desc: "월간 개요로 쉽게 전환할 수 있습니다. 날짜를 클릭하면 해당 날짜의 타임라인으로 이동하며, 드래그하여 다일간 일정을 작성할 수 있습니다.",
    wfF4Title: "Windows Mica & 커스텀", wfF4Desc: "Windows 11의 Mica 소재를 적용하여 반투명한 유리 질감을 제공합니다. 색상, 투명도, 폰트 크기 조절, 상단 고정, 시작 프로그램 등록을 지원합니다.",
    wfSecTitle: "100% 로컬 보안 — 당신의 데이터는 PC 내부에서만 유지됩니다", wfSecDesc: "workerFlow는 OAuth 토큰, 일정 캐시, 로컬 이벤트 등 모든 데이터를 사용자의 기기에만 저장합니다. 외부 서버로 어떠한 개인정보도 전송되지 않으며, 로그아웃 또는 앱 삭제 시 모든 데이터는 영구적으로 파기됩니다.",
    wfSpecTitle: "권장 시스템 사양", specPlatform: "지원 플랫폼", specMica: "Mica 반투명 효과", specMicaVal: "Windows 11 전용 지원", specSync: "캘린더 연동", specStorage: "데이터 저장 방식", specStorageVal: "100% 로컬 오프라인 저장소", specLang: "지원 언어",
    sfHeroBadge: "🖼 Image Viewer · macOS & Windows", sfHeroTitle: '불필요한 모든 것을 숨기고,<br><span class="gradient-text">오직 이미지에만 몰입하세요.</span>', sfQuote: '"사진 그 자체에 온전히 몰입하는 가장 완벽한 경험."', sfHeroDesc: "디자이너, 개발자, 사진 애호가를 위한 미니멀 이미지 뷰어입니다. 한 번의 드래그로 완벽한 몰입감을 선사합니다.",
    sfBuyMac: "macOS 라이선스 구매", sfTrialMac: "무료 체험판 다운로드", sfPaddleNote: "Paddle을 통한 안전한 결제. 1회 구매로 평생 라이선스 제공.", sfWinLabel: "Windows 설치 파일", sfFeatTitle: "주요 기능", sfFeatSub: "모든 불필요한 요소를 제거하여 오직 이미지에만 집중할 수 있습니다.",
    sfF1Title: "스마트 풀스크린 모드", sfF1Desc: "V키를 누르거나 눈 아이콘을 클릭하여 타이틀바를 숨깁니다. 마우스를 가장자리로 이동할 때만 컨트롤이 나타나고 다시 감춰집니다.",
    sfF2Title: "스마트 드래그 앤 드롭", sfF2Desc: "이미지 단 한 장을 끌어다 놓아도 같은 폴더 안의 모든 이미지를 자동으로 인식합니다. (JPG, PNG, WebP, GIF, BMP 지원)",
    sfF3Title: "맞춤형 슬라이드쇼", sfF3Desc: "중앙 컨트롤 바에서 한 번의 터치로 재생/일시정지가 가능하며 슬라이더로 재생 간격을 자유롭게 조절할 수 있습니다.",
    sfF4Title: "반응형 핏(Fit) 모드", sfF4Desc: "우클릭으로 가로 맞춤, 세로 맞춤을 설정할 수 있어 어떤 화면 비율에서도 최적의 뷰를 제공합니다.",
    sfSpecTitle: "시스템 요구사항 & 사양", sfFormatSpec: "지원 포맷",
    ffHeroBadge: "🎯 Web App · Productivity & Task Flow", ffHeroTitle: '할 일 관리와 일정의 흐름을<br><span class="gradient-text">하나로 연결하세요.</span>', ffHeroDesc: "focusFlow는 별도의 설치 없이 웹 브라우저에서 바로 사용할 수 있는 직관적인 할 일 관리 웹 앱입니다. workerFlow와 연동되어 당신의 모든 과업과 타임라인을 유기적으로 이어줍니다.",
    ffAppLaunchTitle: "웹에서 바로 실행하기", ffAppLaunchLabel: "설치 없는 웹 서비스", ffAppNote: "모든 현대식 웹 브라우저 지원 · 로그인 없이 즉시 사용 가능",
    ffFeatTitle: "주요 기능", ffFeatSub: "복잡함은 줄이고, 온전히 오늘의 과업과 일정의 흐름에 집중했습니다.",
    ffF1Title: "직관적인 할 일(To-Do) 관리", ffF1Desc: "우선순위 설정과 태그 분류로 오늘 해결해야 할 할 일 목록을 빠르게 정리하고 체계적으로 관리할 수 있습니다.",
    ffF2Title: "workerFlow 완벽 연동", ffF2Desc: "데스크톱 위젯인 workerFlow와 실시간으로 연동되어, 작성한 할 일과 타임라인 일정을 Seamless하게 상호 참조할 수 있습니다.",
    ffF3Title: "일일 과업 완료 통계", ffF3Desc: "오늘 달성한 할 일의 개수와 진척도를 한눈에 시각적으로 확인하고 지속적인 목표 달성 동기를 부여받으세요.",
    ffF4Title: "무설치 웹 크로스 플랫폼", ffF4Desc: "Windows, macOS, 태블릿, 모바일 등 기기와 장소에 제한 없이 웹 브라우저만 있다면 즉시 접속 가능합니다.",
    ffSpecTitle: "서비스 정보", ffCostSpec: "이용 비용", ffCostVal: "무료 (Free Web Service)", ffIntegrationSpec: "제품 연동", ffIntegrationVal: "workerFlow 스케줄 위젯과 연동 지원",
    connectTitle: "고객센터 & 커넥트", connectSub: "제품 문의, 피드백, 또는 기술 지원이 필요하신가요?", btnContact: "문의하기 (Connect)",
    footConnect: "커넥트", footPrivacy: "개인정보보호정책", footTerms: "서비스 약관"
  },

  // 2. 영어 (English)
  en: {
    navProducts: "Products", subWf: "Schedule Widget", subSf: "Minimal Viewer", subFf: "To-Do & Focus",
    navDownloads: "Downloads", navConnect: "Support",
    heroBadge: "Next-Gen Workspace Tools",
    heroTitle: 'Seamless Flow for Work & Vision,<br><span class="gradient-text">Flow Series</span>',
    heroDesc: "From transparent schedule management to immersive slideshows. Stay focused with our intuitive desktop apps.",
    btnExplore: "Explore Products", btnDownload: "Download Center",
    productsTitle: "Product Lineup", productsSub: "Essential software tailored to elevate your focus and productivity.",
    wfDesc: "A timeline schedule widget that seamlessly blends into your desktop. Sync with Google Calendar to master your day at a glance.",
    wfF1: "Real-time Google Calendar sync", wfF2: "Timeline + Monthly calendar views", wfF3: "Translucent Windows Mica widget UI", wfF4: "100% local data security, no server required",
    btnGetWf: "Get workerFlow",
    sfDesc: "A distraction-free minimal image viewer for creators. Drag and drop photos or folders for pure visual immersion.",
    sfF1: "Immersive distraction-free full screen", sfF2: "Folder drag-and-drop navigation", sfF3: "Custom slideshows with interval control", sfF4: "Cross-platform: macOS & Windows",
    btnGetSf: "Get slideFlow",
    ffDesc: "An intuitive web-based To-Do app requiring no installation. Seamlessly syncs with workerFlow to integrate your tasks and schedule.",
    ffMainF1: "Intuitive To-Do list & priority management", ffMainF2: "Seamless integration with workerFlow widget", ffMainF3: "Daily task completion analytics", ffMainF4: "Zero-installation web cross platform",
    btnGetFf: "Explore focusFlow",
    whyLabel: "Design Philosophy", whyTitle: 'Less interface.<br><span class="gradient-text">More flow.</span>', whySub: "Flow Series crafts distraction-free software designed to seamlessly integrate into your daily workflow.",
    why1Title: "Privacy First", why1Desc: "All data stays exclusively on your local device. No external servers, no telemetry. Your privacy is fully guaranteed.",
    why2Title: "Always There", why2Desc: "Designed to live on your desktop — not to be opened and closed. WorkerFlow's widget is always visible, SlideFlow launches instantly.",
    why3Title: "Minimalist UI Design", why3Desc: "Featuring Windows Mica translucent material and frosted glass UI elements. Stay focused on your photography and tasks.",
    why4Title: "Multilingual Support", why4Desc: "Built-in native support for English, Korean, Japanese, Chinese, Spanish, French, and German.",
    why5Title: "Seamless Cross-Platform", why5Desc: "Engineered for both Windows and macOS environment. Experience consistent, native performance across all your devices.",
    dlCenterBadge: "Download Center", dlCenterTitle: 'Flow Series<br><span class="gradient-text">Download Center</span>', dlCenterDesc: "Download the latest installers and release archives for all Flow Series software.",
    dlLatestTitle: "Latest Version Downloads", dlLatestSub: "Choose the latest installer optimized for your operating system.",
    wfDlCardDesc: "Desktop-integrated timeline schedule widget", sfDlCardDesc: "Distraction-free minimal image viewer", goProductPage: "View Product Details ➔",
    dlArchiveTitle: "Release Archives by Product", dlArchiveSub: "Access previous releases and patch versions from the lists below.",
    thSoftware: "Software", thVersion: "Version", thPlatform: "OS / Platform", thReleaseDate: "Release Date", thDownload: "Download", latestTag: "Latest", olderTag: "Legacy", linkDl: "Download",
    wfHeroBadge: "🗓 Productivity · Windows & macOS", wfHeroTitle: 'Your day,<br><span class="gradient-text">always in view.</span>', wfHeroDesc: "WorkerFlow is a transparent timeline calendar widget that blends seamlessly into your desktop. See your entire schedule at a glance — synced with Google Calendar.",
    wfDlTitle: "Download Options", wfDlWinLabel: "Official Windows Installer", wfDlMacLabel: "Official macOS Installer", wfDlInstaller: "Official Installer", wfDlStore: "Get it on", wfPlatformNote: "Supports Windows 10/11 & macOS Apple Silicon/Intel", wfOldVersionLink: "Download Previous Versions (Archive)",
    wfFeatTitle: "Key Features", wfFeatSub: "Designed to surface your schedule without ever getting in the way.",
    wfF1Title: "Google Calendar Sync", wfF1Desc: "Connect your Google account securely via OAuth 2.0. Schedules sync automatically every 5 minutes and instantly on app focus.",
    wfF2Title: "Live Timeline View", wfF2Desc: "A vertical timeline pinned to the edge of your screen shows your full day at a glance. A live red line marks the current moment.",
    wfF3Title: "Monthly Calendar", wfF3Desc: "Switch to a full monthly overview. Click any date to jump the timeline to that day, or drag to select a date range.",
    wfF4Title: "Mica & Customization", wfF4Desc: "Applies Windows 11 Mica material for a translucent frosted glass UI. Adjust colors, transparency, and font size freely.",
    wfSecTitle: "100% Local — Your Data Never Leaves Your PC", wfSecDesc: "WorkerFlow stores all data—OAuth tokens, schedule cache, local events—exclusively on your local device. Nothing is transmitted to external servers.",
    wfSpecTitle: "System Specifications", specPlatform: "Platform", specMica: "Mica Effect", specMicaVal: "Windows 11 Only", specSync: "Calendar Sync", specStorage: "Data Storage", specStorageVal: "100% Local Offline Storage", specLang: "Supported Languages",
    sfHeroBadge: "🖼 Image Viewer · macOS & Windows", sfHeroTitle: 'Hide everything.<br><span class="gradient-text">See the image.</span>', sfQuote: '"The most perfect flow of hiding everything unnecessary, only immersing yourself in photography."', sfHeroDesc: "A minimalist image viewer for designers, developers, and photo enthusiasts. One drag — instant immersion.",
    sfBuyMac: "Buy for macOS", sfTrialMac: "Free Trial", sfPaddleNote: "Secure payment powered by Paddle. One-time purchase, lifetime license.", sfWinLabel: "Download for Windows", sfFeatTitle: "Features", sfFeatSub: "SlideFlow strips away every distraction so your photos can breathe.",
    sfF1Title: "Intelligent Fullscreen", sfF1Desc: "Press V or click the eye icon to erase the title bar. Move your mouse to the edge to show controls.",
    sfF2Title: "Smart Drag & Drop", sfF2Desc: "Drop a single image and SlideFlow automatically collects all sibling images in the folder (JPG, PNG, WebP, GIF, BMP).",
    sfF3Title: "Custom Slideshow", sfF3Desc: "One-touch play/pause and interval control sliders in the center control bar.",
    sfF4Title: "Responsive Fit Modes", sfF4Desc: "Right-click to fit horizontally or vertically for the best view on any monitor.",
    sfSpecTitle: "System Specifications", sfFormatSpec: "Supported Formats",
    ffHeroBadge: "🎯 Web App · Productivity & Task Flow", ffHeroTitle: 'Connect Tasks & Schedule<br><span class="gradient-text">In One Seamless Flow.</span>', ffHeroDesc: "FocusFlow is an intuitive web-based To-Do app that requires no installation. It seamlessly integrates with workerFlow to unify your tasks and timeline.",
    ffAppLaunchTitle: "Launch Web Application", ffAppLaunchLabel: "No Installation Required", ffAppNote: "Supports all modern web browsers · Start instantly without login",
    ffFeatTitle: "Features", ffFeatSub: "Stripped of complexity, built solely to connect your daily tasks and schedule.",
    ffF1Title: "Intuitive To-Do Management", ffF1Desc: "Organize and manage your daily task list effectively using priority settings and tags.",
    ffF2Title: "Seamless workerFlow Integration", ffF2Desc: "Syncs with the workerFlow desktop widget to seamlessly cross-reference your tasks and timeline schedule.",
    ffF3Title: "Daily Task Analytics", ffF3Desc: "Visually track your completed tasks and progress to build consistent daily momentum.",
    ffF4Title: "Zero-Installation Cross Platform", ffF4Desc: "Accessible on any device—Windows, macOS, tablet, or mobile—directly through your browser.",
    ffSpecTitle: "Service Details", ffCostSpec: "Pricing", ffCostVal: "Free Web Service", ffIntegrationSpec: "Integration", ffIntegrationVal: "Supported with workerFlow widget",
    connectTitle: "Support & Connect", connectSub: "Have questions, feedback, or need technical support?", btnContact: "Contact Us",
    footConnect: "Connect", footPrivacy: "Privacy Policy", footTerms: "Terms of Service"
  },

  // 3. 일본어 (Japanese)
  ja: {
    navProducts: "製品一覧", subWf: "日程ウィジェット", subSf: "画像ビューア", subFf: "ToDo & 集中",
    navDownloads: "ダウンロード", navConnect: "サポート",
    heroBadge: "Next-Gen Workspace Tools", heroTitle: '作業と創作の完璧な流れ,<br><span class="gradient-text">Flow Series</span>', heroDesc: "透明なスケジュール管理から圧倒的なビジュアルスライド体験まで。直感的なデスクトップソリューション。",
    btnExplore: "製品を見る", btnDownload: "ダウンロード", productsTitle: "製品ラインナップ", productsSub: "あなたのワークフローを最適化するデスクトップアプリです。",
    wfDesc: "デスクトップに自然に溶け込むタイムライン型スケジュールウィジェット。Googleカレンダー連携で1日の流れを一目で把握できます。",
    wfF1: "Googleカレンダーリアルタイム同期", wfF2: "タイムライン＆月間カレンダー表示", wfF3: "Windows Mica半透明ウィジェットUI", wfF4: "ローカル処理で安心のデータ管理", btnGetWf: "workerFlowを入手",
    sfDesc: "クリエイターのためのミニマルな画像ビューア。ドラッグ＆ドロップで画像やフォルダを全画面で楽しめます。",
    sfF1: "没入型フルスクリーン表示", sfF2: "フォルダのドラッグ＆ドロップ対応", sfF3: "再生間隔の調整が可能なスライドショー", sfF4: "macOS & Windows クロスプラットフォーム", btnGetSf: "slideFlowを入手",
    ffDesc: "インストール不要でWebから利用できる直感的なToDoアプリ。workerFlowと連動し、タスクとスケジュールをひとつに繋ぎます。",
    ffMainF1: "直感的なToDoリスト＆優先順位管理", ffMainF2: "workerFlowウィジェットとの連動", ffMainF3: "日次タスク達成状況の可視化", ffMainF4: "Webブラウザベースのクロスプラットフォーム", btnGetFf: "focusFlowを見る",
    dlTitle: "ダウンロードセンター", dlSub: "最新バージョンおよび過去のアーカイブを提供します。", archiveTitle: "リリース履歴アーカイブ", thSoftware: "アプリ", thVersion: "バージョン", thPlatform: "OS / プラットフォーム", thReleaseDate: "リリース日", thDownload: "ダウンロード", latestTag: "最新", olderTag: "旧バージョン", linkDl: "ダウンロード",
    connectTitle: "サポート＆コネクト", connectSub: "ご質問、フィードバック、技術的なサポートが必要ですか？", btnContact: "お問い合わせ", footConnect: "コネクト", footPrivacy: "プライバシーポリシー", footTerms: "利用規約"
  },

  // 4. 중국어 (Simplified Chinese)
  'zh-CN': {
    navProducts: "产品", subWf: "日程小部件", subSf: "极简查看器", subFf: "待办 & 专注", navDownloads: "下载", navConnect: "支持",
    heroBadge: "Next-Gen Workspace Tools", heroTitle: '工作与创意的完美流畅,<br><span class="gradient-text">Flow Series</span>', heroDesc: "从透明的日程管理到沉浸式幻灯片体验。使用直观的桌面应用保持专注。",
    btnExplore: "浏览产品", btnDownload: "下载中心", productsTitle: "产品系列", productsSub: "旨在提升您的工作效率和专注力的桌面软件。",
    wfDesc: "无缝融入桌面的时间线日程小部件。同步 Google 日历，一目了然掌握全天规划。",
    wfF1: "Google 日历实时同步", wfF2: "时间线 + 月历视图", wfF3: "Windows Mica 半透明小部件 UI", wfF4: "100% 本地数据安全，无需服务器", btnGetWf: "获取 workerFlow",
    sfDesc: "专为创作者设计的极简图片查看器。拖放照片或文件夹，享受纯粹的视觉沉浸感。",
    sfF1: "沉浸式无干扰全屏模式", sfF2: "支持文件夹拖放浏览", sfF3: "自定义间隔时间的幻灯片播放", sfF4: "跨平台支持：macOS & Windows", btnGetSf: "获取 slideFlow",
    ffDesc: "无需安装即可在 Web 上运行的直观待办应用。与 workerFlow 完美联动，将任务与日程融为一体。",
    ffMainF1: "直观的待办事项与优先级管理", ffMainF2: "与 workerFlow 桌面小部件联动", ffMainF3: "每日任务完成情况可视化", ffMainF4: "基于 Web 的跨平台无缝体验", btnGetFf: "了解 focusFlow",
    dlTitle: "下载中心", dlSub: "获取最新版本和历史版本归档。", archiveTitle: "版本发布历史", thSoftware: "软件", thVersion: "版本", thPlatform: "操作系统 / 平台", thReleaseDate: "发布日期", thDownload: "下载", latestTag: "最新", olderTag: "历史版本", linkDl: "下载",
    connectTitle: "客户支持", connectSub: "有疑问、建议或需要技术支持？", btnContact: "联系我们", footConnect: "联系", footPrivacy: "隐私政策", footTerms: "服务条款"
  },

  // 5. 스페인어 (Spanish)
  es: {
    navProducts: "Productos", subWf: "Widget de horario", subSf: "Visor minimalista", subFf: "Tareas y enfoque", navDownloads: "Descargas", navConnect: "Soporte",
    heroBadge: "Next-Gen Workspace Tools", heroTitle: 'Flujo perfecto para trabajo y visión,<br><span class="gradient-text">Flow Series</span>', heroDesc: "Desde la gestión transparente de horarios hasta experiencias visuales inmersivas. Mantente enfocado.",
    btnExplore: "Explorar productos", btnDownload: "Centro de descargas", productsTitle: "Línea de productos", productsSub: "Software esencial diseñado para elevar tu productividad.",
    wfDesc: "Un widget de cronograma que se integra con tu escritorio. Sincronízalo con Google Calendar.", wfF1: "Sincronización en tiempo real con Google Calendar", wfF2: "Vistas de cronograma y calendario mensual", wfF3: "Interfaz translúcida estilo Mica", wfF4: "Seguridad local total sin servidores", btnGetWf: "Obtener workerFlow",
    sfDesc: "Un visor de imágenes minimalista para creadores. Arrastra y suelta fotos para una inmersión pura.", sfF1: "Modo pantalla completa inmersivo", sfF2: "Navegación por carpetas mediante arrastrar y soltar", sfF3: "Presentación con control de intervalo", sfF4: "Multiplataforma: macOS y Windows", btnGetSf: "Obtener slideFlow",
    ffDesc: "Una aplicación de tareas basada en la web que no requiere instalación. Se integra perfectamente con workerFlow.",
    ffMainF1: "Gestión intuitiva de tareas y prioridades", ffMainF2: "Integración con el widget workerFlow", ffMainF3: "Visualización del progreso diario", ffMainF4: "Multiplataforma basada en navegador web", btnGetFf: "Explorar focusFlow",
    dlTitle: "Centro de descargas", dlSub: "Accede a las últimas versiones y archivos anteriores.", archiveTitle: "Historial de versiones", thSoftware: "Software", thVersion: "Versión", thPlatform: "SO / Plataforma", thReleaseDate: "Fecha", thDownload: "Descargar", latestTag: "Última", olderTag: "Anterior", linkDl: "Descargar",
    connectTitle: "Soporte y contacto", connectSub: "¿Tienes preguntas, comentarios o necesitas soporte técnico?", btnContact: "Contáctanos", footConnect: "Contacto", footPrivacy: "Política de privacidad", footTerms: "Términos de servicio"
  },

  // 6. 프랑스어 (French)
  fr: {
    navProducts: "Produits", subWf: "Widget de planning", subSf: "Visionneur minimal", subFf: "Tâches & Focus", navDownloads: "Téléchargements", navConnect: "Support",
    heroBadge: "Next-Gen Workspace Tools", heroTitle: 'Le flux parfait pour le travail et la vision,<br><span class="gradient-text">Flow Series</span>', heroDesc: "De la gestion transparente du calendrier aux diaporamas immersifs. Restez concentré.",
    btnExplore: "Explorer les produits", btnDownload: "Centre de téléchargement", productsTitle: "Gamme de produits", productsSub: "Des logiciels essentiels conçus pour booster votre productivité.",
    wfDesc: "Un widget de planning qui s'intègre à votre bureau. Synchronisez avec Google Calendar.", wfF1: "Synchro en temps réel avec Google Calendar", wfF2: "Vues chronologie et calendrier mensuel", wfF3: "Interface translucide Windows Mica", wfF4: "Sécurité 100% locale, sans serveur", btnGetWf: "Obtenir workerFlow",
    sfDesc: "Un visionneur d'images minimaliste. Glissez-déposez vos photos pour une immersion visuelle totale.", sfF1: "Mode plein écran immersif", sfF2: "Navigation par glisser-déposer de dossiers", sfF3: "Diaporama avec contrôle d'intervalle", sfF4: "Multiplateforme: macOS & Windows", btnGetSf: "Obtenir slideFlow",
    ffDesc: "Une application To-Do Web sans installation. S'intègre parfaitement avec workerFlow pour unifier vos tâches.",
    ffMainF1: "Gestion intuitive des tâches et des priorités", ffMainF2: "Intégration fluide avec le widget workerFlow", ffMainF3: "Visualisation de l'avancement quotidien", ffMainF4: "Multiplateforme basée sur navigateur", btnGetFf: "Découvrir focusFlow",
    dlTitle: "Centre de téléchargement", dlSub: "Accédez aux dernières versions et aux archives.", archiveTitle: "Historique des versions", thSoftware: "Logiciel", thVersion: "Version", thPlatform: "OS / Plateforme", thReleaseDate: "Date", thDownload: "Télécharger", latestTag: "Récents", olderTag: "Ancien", linkDl: "Télécharger",
    connectTitle: "Support & Contact", connectSub: "Vous avez des questions ou besoin d'aide technique ?", btnContact: "Nous contacter", footConnect: "Contact", footPrivacy: "Politique de confidentialité", footTerms: "Conditions d'utilisation"
  },

  // 7. 독일어 (German)
  de: {
    navProducts: "Produkte", subWf: "Zeitplan-Widget", subSf: "Minimaler Viewer", subFf: "To-Do & Fokus", navDownloads: "Downloads", navConnect: "Support",
    heroBadge: "Next-Gen Workspace Tools", heroTitle: 'Nahtloser Fluss für Arbeit & Vision,<br><span class="gradient-text">Flow Series</span>', heroDesc: "Von transparenter Zeitplanung bis zu immersiven Diashows. Bleiben Sie fokussiert mit unseren intuitiven Desktop-Apps.",
    btnExplore: "Produkte entdecken", btnDownload: "Download-Center", productsTitle: "Produktpalette", productsSub: "Essenzielle Software, entwickelt um Ihre Produktivität zu steigern.",
    wfDesc: "Ein Zeitplan-Widget, das sich nahtlos in Ihren Desktop einfügt. Synchronisieren Sie mit Google Calendar für den perfekten Überblick.",
    wfF1: "Echtzeit-Synchronisation mit Google Calendar", wfF2: "Zeitleiste & Monatskalender-Ansichten", wfF3: "Transparente Windows Mica Widget-UI", wfF4: "100% lokale Datensicherheit, kein Server erforderlich", btnGetWf: "workerFlow holen",
    sfDesc: "Ein ablenkungsfreier Bildbetrachter für Creator. Ziehen Sie Fotos oder Ordner hinein für visuelle Immersion.",
    sfF1: "Immersiver Vollbildmodus", sfF2: "Ordner-Drag-and-Drop-Navigation", sfF3: "Benutzerdefinierte Diashow mit Intervallsteuerung", sfF4: "Plattformübergreifend: macOS & Windows", btnGetSf: "slideFlow holen",
    ffDesc: "Eine intuitive Web-To-Do-App ohne Installation. Synchronisiert sich nahtlos mit workerFlow für Aufgaben und Zeitpläne.",
    ffMainF1: "Intuitive To-Do-Liste & Prioritätenverwaltung", ffMainF2: "Nahtlose Integration mit dem workerFlow-Widget", ffMainF3: "Tägliche Aufgaben-Fortschrittsanalyse", ffMainF4: "Installationsfreie Web-Plattform", btnGetFf: "focusFlow entdecken",
    dlTitle: "Download-Center", dlSub: "Greifen Sie auf die neuesten Versionen und Archive zu.", archiveTitle: "Versionshistorie", thSoftware: "Software", thVersion: "Version", thPlatform: "OS / Plattform", thReleaseDate: "Datum", thDownload: "Download", latestTag: "Neueste", olderTag: "Archiv", linkDl: "Download",
    connectTitle: "Support & Kontakt", connectSub: "Haben Sie Fragen, Feedback oder benötigen Sie technischen Support?", btnContact: "Kontaktieren Sie uns", footConnect: "Kontakt", footPrivacy: "Datenschutzrichtlinie", footTerms: "Nutzungsbedingungen"
  }
};

/**
 * 언어 변경 및 DOM 업데이트 함수
 */
function setLanguage(lang) {
  if (!translations[lang]) return;

  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      if (translations[lang][key].includes('<')) {
        el.innerHTML = translations[lang][key];
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });

  localStorage.setItem('preferred_lang', lang);
  const langSelect = document.getElementById('languageSelect');
  if (langSelect) langSelect.value = lang;
  document.documentElement.lang = lang;
}

/**
 * 초기화 이벤트 핸들러
 */
document.addEventListener('DOMContentLoaded', () => {
  const langSelect = document.getElementById('languageSelect');
  const savedLang = localStorage.getItem('preferred_lang');
  const browserLang = navigator.language.slice(0, 2);
  const initialLang = savedLang || (translations[browserLang] ? browserLang : 'ko');

  setLanguage(initialLang);

  if (langSelect) {
    langSelect.addEventListener('change', (e) => {
      setLanguage(e.target.value);
    });
  }
});