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
    whyLabel: "Design Philosophy", whyTitle: 'インターフェースは最小限に、<br><span class="gradient-text">没入感と流れを最大限に。</span>', whySub: "Flow Seriesは複雑な機能を削ぎ落とし、日常のワークフローに自然に溶け込むソフトウェアを制作しています。",
    why1Title: "100%ローカル・プライバシー重視", why1Desc: "すべてのデータはローカルデバイスにのみ安全に保存されます。 外部サーバーへの送信や追跡コードはなく、完全なセキュリティを保証します。",
    why2Title: "常にデスクトップに常駐", why2Desc: "毎回アプリを起動・終了する必要はありません。 workerFlowのウィジェットは常にデスクトップに馴染み、slideFlowは遅延なく即座に起動します。",
    why3Title: "ミニマルUIデザイン", why3Desc: "Windows Micaの半透明素材とすりガラスUIを採用。 雑念を排除し、作業や写真の鑑賞に完全に没頭できます。",
    why4Title: "多言語ネイティブ対応", why4Desc: "世界中のユーザーのために、日本語、英語、韓国語、中国語、スペイン語、フランス語、ドイツ語を標準サポートしています。",
    why5Title: "シームレスなクロスプラットフォーム", why5Desc: "WindowsおよびmacOS環境に最適化設計。 どのデバイスでも一貫した快適な操作感を提供します。",
    dlCenterBadge: "Download Center", dlCenterTitle: 'Flow Series<br><span class="gradient-text">ダウンロードセンター</span>', dlCenterDesc: "すべてのFlow Series製品の最新インストーラーおよび過去のリリースアーカイブを一度に入手できます。",
    dlLatestTitle: "最新バージョンのダウンロード", dlLatestSub: "お使いのOSに最適化された最新のインストーラーを選択してください。",
    wfDlCardDesc: "デスクトップ統合型タイムライン・スケジュールウィジェット", sfDlCardDesc: "余計な要素を削ぎ落とした没入型ミニマル画像ビューア", goProductPage: "製品の詳細ページを見る ➔",
    dlArchiveTitle: "製品別リリースアーカイブ", dlArchiveSub: "過去のパッチバージョンが必要な場合は、以下のリストからダウンロードできます。",
    thSoftware: "アプリ", thVersion: "バージョン", thPlatform: "OS / プラットフォーム", thReleaseDate: "リリース日", thDownload: "ダウンロード", latestTag: "最新", olderTag: "旧バージョン", linkDl: "ダウンロード",
    wfHeroBadge: "🗓 Productivity · Windows & macOS", wfHeroTitle: 'あなたの1日を<br><span class="gradient-text">常にひと目で。</span>', wfHeroDesc: "workerFlowはデスクトップに自然に溶け込むタイムライン型スケジュールウィジェットです。Googleカレンダー連携で今日の予定を即座に把握できます。",
    wfDlTitle: "ダウンロードオプション", wfDlWinLabel: "Windows公式インストーラー", wfDlMacLabel: "macOS公式インストーラー", wfDlInstaller: "公式インストーラー", wfDlStore: "ストアで入手", wfPlatformNote: "Windows 10/11 & macOS Apple Silicon/Intel 対応", wfOldVersionLink: "過去バージョン（アーカイブ）のダウンロード",
    wfFeatTitle: "主な機能", wfFeatSub: "作業の邪魔をせず、スケジュールだけを直感的に表示するよう設計されています。",
    wfF1Title: "Googleカレンダーリアルタイム同期", wfF1Desc: "OAuth 2.0で安全にアカウントを連携。5分ごとに自動同期され、アプリ内から直接スケジュールの追加・編集・削除が可能です。",
    wfF2Title: "リアルタイム・タイムライン表示", wfF2Desc: "画面端に固定された垂直タイムラインで1日の流れを一目で確認。赤いラインが現在の時刻をリアルタイムで示します。",
    wfF3Title: "月間カレンダー表示", wfF3Desc: "全画面の月間ビューに簡単に切り替え可能。日付をクリックするとその日のタイムラインへ移動し、ドラッグで複数日の予定を作成できます。",
    wfF4Title: "Windows Mica & カスタマイズ", wfF4Desc: "Windows 11のMica素材を採用した美しい半透明ガラスUI。カラー、透明度、フォントサイズ調整、最前面固定に対応しています。",
    wfSecTitle: "100%ローカル処理 — データはPC内部にのみ保持されます", wfSecDesc: "OAuthトークン、キャッシュ、ローカルイベントなどの全データはユーザーの機器にのみ保存されます。外部サーバーへの送信は一切行われません。",
    wfSpecTitle: "推奨システム要件", specPlatform: "対応プラットフォーム", specMica: "Mica半透明エフェクト", specMicaVal: "Windows 11専用サポート", specSync: "カレンダー連携", specStorage: "データ保存方式", specStorageVal: "100%ローカルオフラインストレージ", specLang: "対応言語",
    sfHeroBadge: "🖼 Image Viewer · macOS & Windows", sfHeroTitle: '不要なものをすべて隠し、<br><span class="gradient-text">画像だけに没頭する。</span>', sfQuote: '"写真そのものに完全に没頭する、最も完璧な体験。"', sfHeroDesc: "デザイナー、開発者、写真愛好家のためのミニマル画像ビューア。ドラッグひとつで完璧な没入感を提供します。",
    sfBuyMac: "macOSライセンスを購入", sfTrialMac: "無料体験版をダウンロード", sfPaddleNote: "Paddleによる安全な決済。1回の購入で永久ライセンスを提供。", sfWinLabel: "Windows版をダウンロード", sfFeatTitle: "主な機能", sfFeatSub: "すべての雑念を取り払い、写真本来の魅力を引き出します。",
    sfF1Title: "スマートフルスクリーンモード", sfF1Desc: "Vキーを押すか目のアイコンをクリックしてタイトルバーを非表示に。カーソルを画面端に移動した時のみコントロールが現れます。",
    sfF2Title: "スマート・ドラッグ＆ドロップ", sfF2Desc: "1枚の画像をドロップするだけで、同一フォルダ内のすべての画像（JPG, PNG, WebP, GIF, BMP）を自動的に認識します。",
    sfF3Title: "カスタムスライドショー", sfF3Desc: "中央のコントロールバーでワンタッチで再生/一時停止が可能。スライダーで再生間隔を自由に調整できます。",
    sfF4Title: "レスポンシブ・フィットモード", sfF4Desc: "右クリックで横幅合わせ・縦幅合わせを設定可能。あらゆるアスペクト比のモニターで最適な表示を実現します。",
    sfSpecTitle: "システム要件 & 仕様", sfFormatSpec: "対応フォーマット",
    ffHeroBadge: "🎯 Web App · Productivity & Task Flow", ffHeroTitle: 'タスク管理とスケジュールの流れを<br><span class="gradient-text">ひとつに繋ぐ。</span>', ffHeroDesc: "focusFlowはインストール不要でブラウザから即座に使える直感的なToDoアプリです。workerFlowと連動し、タスクとタイムラインをシームレスに統合します。",
    ffAppLaunchTitle: "Webアプリを直接起動", ffAppLaunchLabel: "インストール不要のWebサービス", ffAppNote: "すべてのモダンブラウザ対応 · ログイン不要ですぐに利用可能",
    ffFeatTitle: "主な機能", ffFeatSub: "複雑さを削ぎ落とし、今日のタスクとスケジュールの連携だけに集中しました。",
    ffF1Title: "直感的なToDoリスト管理", ffF1Desc: "優先順位の設定やタグ分類により、今日やるべきタスクを迅速に整理・管理できます。",
    ffF2Title: "workerFlowとの完全連動", ffF2Desc: "デスクトップウィジェットのworkerFlowとリアルタイムで連動し、タスクとタイムラインの予定を相互参照できます。",
    ffF3Title: "日次タスク完了アナリティクス", ffF3Desc: "達成したタスク数と進捗率を視覚的に確認し、毎日の目標達成へのモチベーションを維持できます。",
    ffF4Title: "インストール不要のクロスプラットフォーム", ffF4Desc: "Windows、macOS、タブレット、スマホなど、ブラウザがあればどのデバイスからでも即座にアクセスできます。",
    ffSpecTitle: "サービス詳細", ffCostSpec: "利用料金", ffCostVal: "無料 (Free Web Service)", ffIntegrationSpec: "製品連携", ffIntegrationVal: "workerFlowウィジェットとの連動に対応",
    connectTitle: "サポート＆コネクト", connectSub: "ご質問、フィード백、技術的なサポートが必要ですか？", btnContact: "お問い合わせ", footConnect: "コネクト", footPrivacy: "プライバシーポリシー", footTerms: "利用規約"
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
    whyLabel: "Design Philosophy", whyTitle: '极简界面，<br><span class="gradient-text">极致专注与流畅。</span>', whySub: "Flow Series 致力于摒弃复杂功能，打造无干扰且能完美融入日常工作流程的软件。",
    why1Title: "100% 本地隐私安全", why1Desc: "所有数据仅保存在您的本地设备上。无外部服务器传输，无任何追踪代码，全方位保障您的隐私。",
    why2Title: "常驻桌面，随时随地", why2Desc: "无需频繁打开或关闭应用。workerFlow 始终呈现在桌面上，slideFlow 零延迟即刻启动。",
    why3Title: "极简 UI 设计", why3Desc: "采用 Windows Mica 半透明材质与磨砂玻璃元素。摒弃杂念，让您全神贯注于创作与工作。",
    why4Title: "原生多语言支持", why4Desc: "内置对中文、英文、韩文、日文、西班牙语、法语和德语的原生支持。",
    why5Title: "无缝跨平台体验", why5Desc: "针对 Windows 和 macOS 环境进行了专门优化。在所有设备上提供一致且高效的原生性能。",
    dlCenterBadge: "Download Center", dlCenterTitle: 'Flow Series<br><span class="gradient-text">下载中心</span>', dlCenterDesc: "在一处即可下载 Flow Series 所有产品的最新安装包及历史发布归档。",
    dlLatestTitle: "最新版本下载", dlLatestSub: "选择适合您操作系统的最新安装程序。",
    wfDlCardDesc: "桌面无缝集成的 Gantt/时间线日程小部件", sfDlCardDesc: "纯粹无干扰的沉浸式极简图片查看器", goProductPage: "查看产品详情页 ➔",
    dlArchiveTitle: "按产品划分的历史版本归档", dlArchiveSub: "如需历史补丁版本，可从下方列表中选择下载。",
    thSoftware: "软件", thVersion: "版本", thPlatform: "操作系统 / 平台", thReleaseDate: "发布日期", thDownload: "下载", latestTag: "最新", olderTag: "历史版本", linkDl: "下载",
    wfHeroBadge: "🗓 Productivity · Windows & macOS", wfHeroTitle: '让您的一天，<br><span class="gradient-text">时刻一目了然。</span>', wfHeroDesc: "workerFlow 是一款无缝融入桌面的时间线日程小部件。实时同步 Google 日历，全天规划即刻掌握。",
    wfDlTitle: "下载选项", wfDlWinLabel: "Windows 官方安装包", wfDlMacLabel: "macOS 官方安装包", wfDlInstaller: "官方安装包", wfDlStore: "从商店获取", wfPlatformNote: "支持 Windows 10/11 及 macOS Apple Silicon/Intel", wfOldVersionLink: "下载历史版本（归档）",
    wfFeatTitle: "核心功能", wfFeatSub: "专为高效呈现日程而设计，绝不打扰您的正常工作。",
    wfF1Title: "Google 日历实时同步", wfF1Desc: "通过 OAuth 2.0 认证安全连接账号。每 5 分钟自动同步，可在应用内直接添加、修改或删除日程。",
    wfF2Title: "实时时间线视图", wfF2Desc: "固定于屏幕边缘的垂直时间线直观显示全天日程。红线实时标出当前时刻。",
    wfF3Title: "月历视图", wfF3Desc: "轻松切换至全月视图。点击任意日期即可跳转至当日时间线，拖拽可快捷创建多日日程。",
    wfF4Title: "Windows Mica & 自定义", wfF4Desc: "应用 Windows 11 Mica 磨砂玻璃 UI。支持自由调节颜色、透明度、字体大小、窗口置顶及开机自启。",
    wfSecTitle: "100% 本地存储 — 您的数据绝不离开 PC", wfSecDesc: "workerFlow 将 OAuth 令牌、日程缓存等所有数据仅存放在本地设备中。绝不向外部服务器传输任何隐私数据。",
    wfSpecTitle: "系统配置要求", specPlatform: "支持平台", specMica: "Mica 半透明效果", specMicaVal: "仅限 Windows 11 支持", specSync: "日历同步", specStorage: "数据存储方式", specStorageVal: "100% 本地离线存储", specLang: "支持语言",
    sfHeroBadge: "🖼 Image Viewer · macOS & Windows", sfHeroTitle: '隐藏一切干扰，<br><span class="gradient-text">唯有图像沉浸。</span>', sfQuote: '"隐藏所有不必要的元素，全情沉浸于摄影本身。"', sfHeroDesc: "专为设计师、开发者和摄影爱好者打造的极简图片查看器。一次拖放，开启纯粹视觉体验。",
    sfBuyMac: "购买 macOS 许可证", sfTrialMac: "下载免费试用版", sfPaddleNote: "通过 Paddle 安全支付。一次购买，享终身许可证。", sfWinLabel: "下载 Windows 版", sfFeatTitle: "核心功能", sfFeatSub: "SlideFlow 褪去所有繁琐，让您的图片呼吸自由。",
    sfF1Title: "智能全屏模式", sfF1Desc: "按 V 键或点击眼睛图标即可隐藏标题栏。仅当鼠标移动至屏幕边缘时显示控制面板。",
    sfF2Title: "智能拖放浏览", sfF2Desc: "只需拖入单张图片，即可自动加载同文件夹下的所有图像（支持 JPG, PNG, WebP, GIF, BMP）。",
    sfF3Title: "自定义幻灯片播放", sfF3Desc: "中央控制栏支持一键播放/暂停，滑动条可自由调节播放间隔时间。",
    sfF4Title: "响应式自适应模式", sfF4Desc: "右键菜单可快速设置适应宽度或适应高度，在任何屏幕比例下均能呈现最佳视觉效果。",
    sfSpecTitle: "系统要求与规格", sfFormatSpec: "支持格式",
    ffHeroBadge: "🎯 Web App · Productivity & Task Flow", ffHeroTitle: '将待办事项与日程规划<br><span class="gradient-text">融为完美整体。</span>', ffHeroDesc: "focusFlow 是一款免安装、即开即用的网页版待办事项应用。它与 workerFlow 桌面部件无缝联动，统一您的任务与时间线。",
    ffAppLaunchTitle: "直接启动 Web 应用", ffAppLaunchLabel: "无需安装的网页服务", ffAppNote: "支持所有现代浏览器 · 无需登录，即刻体验",
    ffFeatTitle: "核心功能", ffFeatSub: "摒弃繁复，专注连接您每日的任务与日程流。",
    ffF1Title: "直观的待办事项管理", ffF1Desc: "利用优先级设置与标签分类，快速整理并高效执行今日的待办清单。",
    ffF2Title: "与 workerFlow 无缝联动", ffF2Desc: "与桌面小部件 workerFlow 实时同步，轻松跨平台交叉比对任务与日程规划。",
    ffF3Title: "每日任务完成分析", ffF3Desc: "可视化展示今日完成的任务数量与进度，为您提供源源不断的成就感与动力。",
    ffF4Title: "免安装跨平台访问", ffF4Desc: "无论 Windows、macOS、平板还是手机，只需浏览器即可随时随地接入使用。",
    ffSpecTitle: "服务详情", ffCostSpec: "使用费用", ffCostVal: "免费 (Free Web Service)", ffIntegrationSpec: "产品联动", ffIntegrationVal: "支持与 workerFlow 桌面部件联动",
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
    whyLabel: "Design Philosophy", whyTitle: 'Menos interfaz.<br><span class="gradient-text">Más flujo.</span>', whySub: "Flow Series crea software libre de distracciones diseñado para integrarse sin problemas en tu rutina diaria.",
    why1Title: "Privacidad Primero", why1Desc: "Todos los datos permanecen exclusivamente en tu dispositivo local. Sin servidores externos ni telemetría. Tu privacidad está garantizada.",
    why2Title: "Siempre Presente", why2Desc: "Diseñado para vivir en tu escritorio. El widget de workerFlow siempre está visible y slideFlow se inicia al instante.",
    why3Title: "Diseño UI Minimalista", why3Desc: "Con material translúcido Windows Mica y elementos de cristal esmerilado. Mantén la concentración en tus fotos y tareas.",
    why4Title: "Soporte Multilingüe", why4Desc: "Soporte nativo integrado para español, inglés, coreano, japonés, chino, francés y alemán.",
    why5Title: "Multiplataforma Fluido", why5Desc: "Diseñado tanto para entornos Windows como macOS. Experimenta un rendimiento nativo constante en todos tus dispositivos.",
    dlCenterBadge: "Download Center", dlCenterTitle: 'Flow Series<br><span class="gradient-text">Centro de descargas</span>', dlCenterDesc: "Descarga los últimos instaladores y archivos de versiones para todo el software de Flow Series.",
    dlLatestTitle: "Descargas de la última versión", dlLatestSub: "Elige el instalador más reciente optimizado para tu sistema operativo.",
    wfDlCardDesc: "Widget de cronograma integrado en el escritorio", sfDlCardDesc: "Visor de imágenes minimalista sin distracciones", goProductPage: "Ver detalles del producto ➔",
    dlArchiveTitle: "Archivos de versiones por producto", dlArchiveSub: "Accede a versiones anteriores y parches desde las siguientes listas.",
    thSoftware: "Software", thVersion: "Versión", thPlatform: "SO / Plataforma", thReleaseDate: "Fecha", thDownload: "Descargar", latestTag: "Última", olderTag: "Anterior", linkDl: "Descargar",
    wfHeroBadge: "🗓 Productivity · Windows & macOS", wfHeroTitle: 'Tu día,<br><span class="gradient-text">siempre a la vista.</span>', wfHeroDesc: "WorkerFlow es un widget de calendario transparente que se integra en tu escritorio. Mira todo tu horario de un vistazo, sincronizado con Google Calendar.",
    wfDlTitle: "Opciones de descarga", wfDlWinLabel: "Instalador oficial de Windows", wfDlMacLabel: "Instalador oficial de macOS", wfDlInstaller: "Instalador oficial", wfDlStore: "Consíguelo en", wfPlatformNote: "Compatible con Windows 10/11 y macOS Apple Silicon/Intel", wfOldVersionLink: "Descargar versiones anteriores (Archivo)",
    wfFeatTitle: "Características clave", wfFeatSub: "Diseñado para mostrar tu horario sin estorbar nunca.",
    wfF1Title: "Sincronización con Google Calendar", wfF1Desc: "Conecta tu cuenta de Google de forma segura mediante OAuth 2.0. Las agendas se sincronizan automáticamente cada 5 minutos.",
    wfF2Title: "Vista de cronograma en vivo", wfF2Desc: "Un cronograma vertical fijado al borde de tu pantalla muestra todo tu día de un vistazo. Una línea roja marca el momento actual.",
    wfF3Title: "Calendario mensual", wfF3Desc: "Cambia a una vista mensual completa. Haz clic en cualquier fecha para ir a ese día o arrastra para seleccionar un rango.",
    wfF4Title: "Mica y personalización", wfF4Desc: "Aplica el material Windows 11 Mica para una interfaz de cristal esmerilado translúcido. Ajusta colores, transparencia y tamaño de fuente.",
    wfSecTitle: "100% Local — Tus datos nunca salen de tu PC", wfSecDesc: "WorkerFlow almacena todos los datos (tokens OAuth, caché de horarios) exclusivamente en tu dispositivo local.",
    wfSpecTitle: "Especificaciones del sistema", specPlatform: "Plataforma", specMica: "Efecto Mica", specMicaVal: "Solo Windows 11", specSync: "Sincronización de calendario", specStorage: "Almacenamiento de datos", specStorageVal: "Almacenamiento 100% local sin conexión", specLang: "Idiomas soportados",
    sfHeroBadge: "🖼 Image Viewer · macOS & Windows", sfHeroTitle: 'Oculta todo.<br><span class="gradient-text">Mira la imagen.</span>', sfQuote: '"El flujo más perfecto para ocultar todo lo innecesario e sumergirte por completo en la fotografía."', sfHeroDesc: "Un visor de imágenes minimalista para diseñadores, desarrolladores y fotógrafos. Un arrastre: inmersión instantánea.",
    sfBuyMac: "Comprar para macOS", sfTrialMac: "Prueba gratuita", sfPaddleNote: "Pago seguro mediante Paddle. Compra única, licencia de por vida.", sfWinLabel: "Descargar para Windows", sfFeatTitle: "Características", sfFeatSub: "SlideFlow elimina cada distracción para que tus fotos puedan respirar.",
    sfF1Title: "Pantalla completa inteligente", sfF1Desc: "Presiona V o haz clic en el icono del ojo para ocultar la barra de título. Mueve el ratón al borde para mostrar los controles.",
    sfF2Title: "Arrastrar y soltar inteligente", sfF2Desc: "Arrastra una sola imagen y SlideFlow recopilará automáticamente todas las imágenes de la carpeta (JPG, PNG, WebP, GIF, BMP).",
    sfF3Title: "Presentación personalizada", sfF3Desc: "Controles de reproducción/pausa de un toque y deslizadores de intervalo en la barra de control central.",
    sfF4Title: "Modos de ajuste adaptativos", sfF4Desc: "Haz clic derecho para ajustar horizontal o verticalmente y obtener la mejor vista en cualquier monitor.",
    sfSpecTitle: "Especificaciones del sistema", sfFormatSpec: "Formatos soportados",
    ffHeroBadge: "🎯 Web App · Productivity & Task Flow", ffHeroTitle: 'Conecta tareas y agenda<br><span class="gradient-text">En un flujo continuo.</span>', ffHeroDesc: "FocusFlow es una aplicación web intuitiva de tareas que no requiere instalación. Se integra perfectamente con workerFlow para unificar tus tareas y tu horario.",
    ffAppLaunchTitle: "Iniciar aplicación Web", ffAppLaunchLabel: "Sin necesidad de instalación", ffAppNote: "Compatible con todos los navegadores modernos · Comienza al instante sin iniciar sesión",
    ffFeatTitle: "Características", ffFeatSub: "Sin complicaciones, creada únicamente para conectar tus tareas diarias con tu agenda.",
    ffF1Title: "Gestión intuitiva de tareas", ffF1Desc: "Organiza y gestiona tu lista de tareas diarias eficazmente con configuraciones de prioridad y etiquetas.",
    ffF2Title: "Integración fluida con workerFlow", ffF2Desc: "Se sincroniza con el widget de escritorio workerFlow para cruzar referencias de tus tareas y cronograma.",
    ffF3Title: "Análisis de tareas diarias", ffF3Desc: "Rastrea visualmente tus tareas completadas y el progreso para mantener el impulso diario.",
    ffF4Title: "Multiplataforma Web sin instalación", ffF4Desc: "Accesible en cualquier dispositivo (Windows, macOS, tablet o móvil) directamente desde tu navegador.",
    ffSpecTitle: "Detalles del servicio", ffCostSpec: "Precio", ffCostVal: "Servicio Web Gratuito", ffIntegrationSpec: "Integración", ffIntegrationVal: "Soportado con el widget workerFlow",
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
    whyLabel: "Design Philosophy", whyTitle: 'Moins d\'interface.<br><span class="gradient-text">Plus de flux.</span>', whySub: "Flow Series crée des logiciels sans distraction conçus pour s'intégrer parfaitement à votre travail quotidien.",
    why1Title: "Confidentialité d'abord", why1Desc: "Toutes les données restent exclusivement sur votre appareil local. Pas de serveurs externes, pas de télémétrie.",
    why2Title: "Toujours Présent", why2Desc: "Conçu pour vivre sur votre bureau. Le widget workerFlow est toujours visible et slideFlow se lance instantanément.",
    why3Title: "Design UI Minimaliste", why3Desc: "Matériau translucide Windows Mica et éléments en verre frosted. Restez concentré sur vos photos et vos tâches.",
    why4Title: "Support Multilingue Native", why4Desc: "Prise en charge native intégrée pour le français, l'anglais, le coréen, le japonais, le chinois, l'espagnol et l'allemand.",
    why5Title: "Multiplateforme Fluide", why5Desc: "Conçu pour les environnements Windows et macOS. Profitez de performances natives sur tous vos appareils.",
    dlCenterBadge: "Download Center", dlCenterTitle: 'Flow Series<br><span class="gradient-text">Centre de téléchargement</span>', dlCenterDesc: "Téléchargez les derniers installateurs et archives de versions pour tous les logiciels Flow Series.",
    dlLatestTitle: "Téléchargements de la dernière version", dlLatestSub: "Choisissez le dernier installateur optimisé pour votre système d'exploitation.",
    wfDlCardDesc: "Widget de planning intégré au bureau", sfDlCardDesc: "Visionneur d'images minimaliste sans distraction", goProductPage: "Voir les détails du produit ➔",
    dlArchiveTitle: "Archives des versions par produit", dlArchiveSub: "Accédez aux anciennes versions et correctifs à partir des listes ci-dessous.",
    thSoftware: "Logiciel", thVersion: "Version", thPlatform: "OS / Plateforme", thReleaseDate: "Date", thDownload: "Télécharger", latestTag: "Récents", olderTag: "Ancien", linkDl: "Télécharger",
    wfHeroBadge: "🗓 Productivity · Windows & macOS", wfHeroTitle: 'Votre journée,<br><span class="gradient-text">toujours visible.</span>', wfHeroDesc: "WorkerFlow est un widget de calendrier transparent qui s'intègre à votre bureau. Voyez tout votre planning d'un coup d'œil, synchronisé avec Google Calendar.",
    wfDlTitle: "Options de téléchargement", wfDlWinLabel: "Installateur officiel Windows", wfDlMacLabel: "Installateur officiel macOS", wfDlInstaller: "Installateur officiel", wfDlStore: "Obtenir sur", wfPlatformNote: "Compatible Windows 10/11 & macOS Apple Silicon/Intel", wfOldVersionLink: "Télécharger les anciennes versions (Archive)",
    wfFeatTitle: "Fonctionnalités clés", wfFeatSub: "Conçu pour afficher votre planning sans jamais vous gêner.",
    wfF1Title: "Synchro Google Calendar", wfF1Desc: "Connectez votre compte Google en toute sécurité via OAuth 2.0. Synchronisation automatique toutes les 5 minutes.",
    wfF2Title: "Vue chronologique en direct", wfF2Desc: "Une chronologie verticale épinglée au bord de votre écran affiche toute votre journée. Une ligne rouge indique l'heure actuelle.",
    wfF3Title: "Calendrier mensuel", wfF3Desc: "Passez à une vue mensuelle complète. Cliquez sur n'importe quelle date pour sauter à ce jour ou faites glisser pour sélectionner une plage.",
    wfF4Title: "Mica & Personnalisation", wfF4Desc: "Applique le matériau Windows 11 Mica pour une interface en verre frosted. Ajustez les couleurs, la transparence et la taille de la police.",
    wfSecTitle: "100% Local — Vos données ne quittent jamais votre PC", wfSecDesc: "WorkerFlow stocke toutes les données (jetons OAuth, cache du planning) exclusivement sur votre appareil local.",
    wfSpecTitle: "Spécifications système", specPlatform: "Plateforme", specMica: "Effet Mica", specMicaVal: "Windows 11 uniquement", specSync: "Synchro calendrier", specStorage: "Stockage des données", specStorageVal: "Stockage 100% local hors ligne", specLang: "Langues supportées",
    sfHeroBadge: "🖼 Image Viewer · macOS & Windows", sfHeroTitle: 'Masquez tout.<br><span class="gradient-text">Consultez l\'image.</span>', sfQuote: '"Le flux le plus parfait pour tout masquer et s\'immerger totalement dans la photographie."', sfHeroDesc: "Un visionneur d'images minimaliste pour designers, développeurs et passionnés. Un glisser-déposer : immersion instantanée.",
    sfBuyMac: "Acheter pour macOS", sfTrialMac: "Essai gratuit", sfPaddleNote: "Paiement sécurisé via Paddle. Achat unique, licence à vie.", sfWinLabel: "Télécharger pour Windows", sfFeatTitle: "Fonctionnalités", sfFeatSub: "SlideFlow élimine chaque distraction pour que vos photos puissent respirer.",
    sfF1Title: "Plein écran intelligent", sfF1Desc: "Appuyez sur V ou cliquez sur l'icône de l'œil pour masquer la barre de titre. Déplacez votre souris sur le bord pour afficher les commandes.",
    sfF2Title: "Glisser-déposer intelligent", sfF2Desc: "Déposez une seule image et SlideFlow rassemble automatiquement toutes les images du dossier (JPG, PNG, WebP, GIF, BMP).",
    sfF3Title: "Diaporama personnalisé", sfF3Desc: "Lecture/pause en une touche et curseurs de contrôle d'intervalle dans la barre de commande centrale.",
    sfF4Title: "Modes d'ajustement réactifs", sfF4Desc: "Clic droit pour ajuster horizontalement ou verticalement pour le meilleur affichage sur n'importe quel écran.",
    sfSpecTitle: "Spécifications système", sfFormatSpec: "Formats supportés",
    ffHeroBadge: "🎯 Web App · Productivity & Task Flow", ffHeroTitle: 'Reliez vos tâches et votre planning<br><span class="gradient-text">En un seul flux fluide.</span>', ffHeroDesc: "FocusFlow est une application To-Do Web intuitive sans installation. Elle s'intègre parfaitement à workerFlow pour unifier vos tâches et votre chronologie.",
    ffAppLaunchTitle: "Lancer l'application Web", ffAppLaunchLabel: "Aucune installation requise", ffAppNote: "Compatible avec tous les navigateurs modernes · Commencez instantanément sans connexion",
    ffFeatTitle: "Fonctionnalités", ffFeatSub: "Débarrassée de toute complexité, conçue uniquement pour connecter vos tâches quotidiennes à votre planning.",
    ffF1Title: "Gestion intuitive des tâches", ffF1Desc: "Organisez et gérez efficacement votre liste de tâches quotidiennes grâce aux priorités et aux étiquettes.",
    ffF2Title: "Intégration fluide avec workerFlow", ffF2Desc: "Se synchronise avec le widget de bureau workerFlow pour croiser vos tâches et votre planning chronologique.",
    ffF3Title: "Analyse des tâches quotidiennes", ffF3Desc: "Suivez visuellement vos tâches accomplies et votre progression pour maintenir un élan quotidien régulier.",
    ffF4Title: "Multiplateforme Web sans installation", ffF4Desc: "Accessible sur n'importe quel appareil (Windows, macOS, tablette ou mobile) directement via votre navigateur.",
    ffSpecTitle: "Détails du service", ffCostSpec: "Tarification", ffCostVal: "Service Web Gratuit", ffIntegrationSpec: "Intégration", ffIntegrationVal: "Prise en charge avec le widget workerFlow",
    connectTitle: "Support & Contact", connectSub: "Vous avez des questions ou besoin d'aide technique ?", btnContact: "Nous contacter", footConnect: "Contact", footPrivacy: "Politique de confidentialité", footTerms: "Conditions d'utilisation"
  },

  // 7. 독일어 (German)
  de: {
    navProducts: "Produkte", subWf: "Zeitplan-Widget", subSf: "Minimaler Viewer", subFf: "To-Do & Fokus", navDownloads: "Downloads", navConnect: "Support",
    heroBadge: "Next-Gen Workspace Tools", heroTitle: 'Nahtloser Fluss für Arbeit & Vision,<br><span class="gradient-text">Flow Series</span>', heroDesc: "Von transparenter Zeitplanung bis zu immersiven Diashows. Bleiben Sie fokussiert mit unseren intuitiven Desktop-Apps.",
    btnExplore: "Produkte entdecken", btnDownload: "Download-Center", productsTitle: "Produktpalette", productsSub: "Essenzielle Software, entwickelt um Ihre Produktivität zu steigern.",
    wfDesc: "Ein Zeitplan-Widget, das sich nahtlos in Ihren Desktop einfügt. Synchronisieren Sie mit Google Calendar für den perfekten Überblick.", wfF1: "Echtzeit-Synchronisation mit Google Calendar", wfF2: "Zeitleiste & Monatskalender-Ansichten", wfF3: "Transparente Windows Mica Widget-UI", wfF4: "100% lokale Datensicherheit, kein Server erforderlich", btnGetWf: "workerFlow holen",
    sfDesc: "Ein ablenkungsfreier Bildbetrachter für Creator. Ziehen Sie Fotos oder Ordner hinein für visuelle Immersion.", sfF1: "Immersiver Vollbildmodus", sfF2: "Ordner-Drag-and-Drop-Navigation", sfF3: "Benutzerdefinierte Diashow mit Intervallsteuerung", sfF4: "Plattformübergreifend: macOS & Windows", btnGetSf: "slideFlow holen",
    ffDesc: "Eine intuitive Web-To-Do-App ohne Installation. Synchronisiert sich nahtlos mit workerFlow für Aufgaben und Zeitpläne.",
    ffMainF1: "Intuitive To-Do-Liste & Prioritätenverwaltung", ffMainF2: "Nahtlose Integration mit dem workerFlow-Widget", ffMainF3: "Tägliche Aufgaben-Fortschrittsanalyse", ffMainF4: "Installationsfreie Web-Plattform", btnGetFf: "focusFlow entdecken",
    whyLabel: "Design Philosophy", whyTitle: 'Weniger Interface.<br><span class="gradient-text">Mehr Fluss.</span>', whySub: "Flow Series entwickelt ablenkungsfreie Software, die sich nahtlos in Ihren täglichen Arbeitsablauf einfügt.",
    why1Title: "Datenschutz an erster Stelle", why1Desc: "Alle Daten bleiben ausschließlich auf Ihrem lokalen Gerät. Keine externen Server, keine Telemetrie. Ihre Privatsphäre ist zu 100% garantiert.",
    why2Title: "Immer Da", why2Desc: "Entwickelt, um auf Ihrem Desktop zu leben. Das workerFlow-Widget ist immer sichtbar und slideFlow startet sofort.",
    why3Title: "Minimalistisches UI-Design", why3Desc: "Mit transparentem Windows Mica Material und Frosted-Glass-UI-Elementen. Konzentrieren Sie sich voll auf Ihre Fotos und Aufgaben.",
    why4Title: "Nativer Mehrsprachen-Support", why4Desc: "Integrierter nativer Support für Deutsch, Englisch, Koreanisch, Japanisch, Chinesisch, Spanisch und Französisch.",
    why5Title: "Nahtlose Plattformübergreifung", why5Desc: "Optimiert sowohl für Windows- als auch für macOS-Umgebungen. Erleben Sie konsistente, native Leistung auf all Ihren Geräten.",
    dlCenterBadge: "Download Center", dlCenterTitle: 'Flow Series<br><span class="gradient-text">Download-Center</span>', dlCenterDesc: "Laden Sie die neuesten Installer und Versionsarchive für alle Flow Series Software-Produkte herunter.",
    dlLatestTitle: "Downloads der neuesten Version", dlLatestSub: "Wählen Sie den neuesten Installer, der für Ihr Betriebssystem optimiert ist.",
    wfDlCardDesc: "In den Desktop integriertes Zeitleisten-Widget", sfDlCardDesc: "Ablenkungsfreier, minimaler Bildbetrachter", goProductPage: "Produktdetails anzeigen ➔",
    dlArchiveTitle: "Versionsarchive nach Produkt", dlArchiveSub: "Greifen Sie auf frühere Veröffentlichungen und Patch-Versionen aus den folgenden Listen zu.",
    thSoftware: "Software", thVersion: "Version", thPlatform: "OS / Plattform", thReleaseDate: "Datum", thDownload: "Download", latestTag: "Neueste", olderTag: "Archiv", linkDl: "Download",
    wfHeroBadge: "🗓 Productivity · Windows & macOS", wfHeroTitle: 'Ihr Tag,<br><span class="gradient-text">immer im Blick.</span>', wfHeroDesc: "WorkerFlow ist ein transparentes Zeitleisten-Widget, das sich nahtlos in Ihren Desktop einfügt. Sehen Sie Ihren gesamten Zeitplan auf einen Blick — synchronisiert mit Google Calendar.",
    wfDlTitle: "Download-Optionen", wfDlWinLabel: "Offizieller Windows-Installer", wfDlMacLabel: "Offizieller macOS-Installer", wfDlInstaller: "Offizieller Installer", wfDlStore: "Holen im Store", wfPlatformNote: "Unterstützt Windows 10/11 & macOS Apple Silicon/Intel", wfOldVersionLink: "Frühere Versionen herunterladen (Archiv)",
    wfFeatTitle: "Hauptmerkmale", wfFeatSub: "Entwickelt, um Ihren Zeitplan anzuzeigen, ohne jemals im Weg zu stehen.",
    wfF1Title: "Google Calendar Sync", wfF1Desc: "Verbinden Sie Ihr Google-Konto sicher über OAuth 2.0. Zeitpläne werden alle 5 Minuten automatisch synchronisiert.",
    wfF2Title: "Live-Zeitleistenansicht", wfF2Desc: "Eine vertikale Zeitleiste am Bildschirmrand zeigt Ihren gesamten Tag auf einen Blick. Eine rote Linie markiert den aktuellen Moment.",
    wfF3Title: "Monatskalender", wfF3Desc: "Wechseln Sie zu einer vollständigen Monatsübersicht. Klicken Sie auf ein Datum, um zum Tag zu springen, oder ziehen Sie, um einen Bereich auszuwählen.",
    wfF4Title: "Mica & Anpassung", wfF4Desc: "Nutzt Windows 11 Mica-Material für eine transparente Frosted-Glass-Benutzeroberfläche. Passen Sie Farben, Transparenz und Schriftgröße frei an.",
    wfSecTitle: "100% Lokal — Ihre Daten verlassen niemals Ihren PC", wfSecDesc: "WorkerFlow speichert alle Daten (OAuth-Token, Zeitplan-Cache) ausschließlich auf Ihrem lokalen Gerät.",
    wfSpecTitle: "Systemspezifikationen", specPlatform: "Plattform", specMica: "Mica-Effekt", specMicaVal: "Nur Windows 11", specSync: "Kalender-Sync", specStorage: "Datenspeicherung", specStorageVal: "100% lokale Offline-Speicherung", specLang: "Unterstützte Sprachen",
    sfHeroBadge: "🖼 Image Viewer · macOS & Windows", sfHeroTitle: 'Alles ausblenden.<br><span class="gradient-text">Das Bild sehen.</span>', sfQuote: '"Der meisterhafte Fluss, alles Unnötige auszublenden und vollständig in die Fotografie einzutauchen."', sfHeroDesc: "Ein minimalistischer Bildbetrachter für Designer, Entwickler und Fotoliebhaber. Ein Drag — sofortige Immersion.",
    sfBuyMac: "Für macOS kaufen", sfTrialMac: "Kostenlose Testversion", sfPaddleNote: "Sichere Zahlung über Paddle. Einmaliger Kauf, lebenslange Lizenz.", sfWinLabel: "Für Windows herunterladen", sfFeatTitle: "Funktionen", sfFeatSub: "SlideFlow entfernt jede Ablenkung, damit Ihre Fotos atmen können.",
    sfF1Title: "Intelligenter Vollbildmodus", sfF1Desc: "Drücken Sie V oder klicken Sie auf das Augensymbol, um die Titelleiste auszublenden. Bewegen Sie die Maus an den Rand, um Steuerelemente anzuzeigen.",
    sfF2Title: "Intelligentes Drag & Drop", sfF2Desc: "Ziehen Sie ein einzelnes Bild hinein und SlideFlow sammelt automatisch alle Bilder im Ordner (JPG, PNG, WebP, GIF, BMP).",
    sfF3Title: "Benutzerdefinierte Diashow", sfF3Desc: "Ein-Touch-Wiedergabe/Pause und Intervall-Steuerungsregler in der mittleren Steuerleiste.",
    sfF4Title: "Reaktive Anpassungsmodi", sfF4Desc: "Rechtsklick zur horizontalen oder vertikalen Anpassung für die beste Ansicht auf jedem Monitor.",
    sfSpecTitle: "Systemspezifikationen", sfFormatSpec: "Unterstützte Formate",
    ffHeroBadge: "🎯 Web App · Productivity & Task Flow", ffHeroTitle: 'Verbinden Sie Aufgaben & Zeitplan<br><span class="gradient-text">In einem nahtlosen Fluss.</span>', ffHeroDesc: "FocusFlow ist eine intuitive Web-To-Do-App, die keine Installation erfordert. Sie lässt sich nahtlos mit workerFlow integrieren, um Ihre Aufgaben und Zeitleiste zu vereinen.",
    ffAppLaunchTitle: "Web-Anwendung starten", ffAppLaunchLabel: "Keine Installation erforderlich", ffAppNote: "Unterstützt alle modernen Webbrowser · Starten Sie sofort ohne Login",
    ffFeatTitle: "Funktionen", ffFeatSub: "Befreit von Komplexität, einzig entwickelt, um Ihre täglichen Aufgaben mit Ihrem Zeitplan zu verbinden.",
    ffF1Title: "Intuitive Aufgabenverwaltung", ffF1Desc: "Organisieren und verwalten Sie Ihre tägliche Aufgabenliste effektiv mit Prioritätseinstellungen und Tags.",
    ffF2Title: "Nahtlose workerFlow-Integration", ffF2Desc: "Synchronisiert mit dem workerFlow Desktop-Widget, um Ihre Aufgaben und Ihren Zeitplan abzugleichen.",
    ffF3Title: "Tägliche Aufgabenanalyse", ffF3Desc: "Verfolgen Sie erledigte Aufgaben und den Fortschritt visuell, um eine tägliche Dynamik aufzubauen.",
    ffF4Title: "Installationsfreie Web-Plattform", ffF4Desc: "Auf jedem Gerät (Windows, macOS, Tablet oder Smartphone) direkt über Ihren Browser zugänglich.",
    ffSpecTitle: "Servicedetails", ffCostSpec: "Preise", ffCostVal: "Kostenloser Web-Service", ffIntegrationSpec: "Integration", ffIntegrationVal: "Unterstützt mit workerFlow-Widget",
    connectTitle: "Support & Kontakt", connectSub: "Haben Sie Fragen, Feedback oder benötigen Sie technischen Support?", btnContact: "Kontaktieren Sie uns", footConnect: "Kontakt", footPrivacy: "Datenschutzrichtlinie", footTerms: "Nutzungsbedingungen"
  }
};

/**
 * 언어 변경 및 DOM 전체 업데이트 함수
 */
function setLanguage(lang) {
  if (!translations[lang]) return;

  // 1. data-i18n 속성을 가진 모든 요소 텍스트/HTML 변경
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key] !== undefined) {
      if (translations[lang][key].includes('<')) {
        el.innerHTML = translations[lang][key];
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });

  // 2. 로컬 스토리지 저장 및 html lang 태그 변경
  localStorage.setItem('preferred_lang', lang);
  document.documentElement.lang = lang;

  // 3. 페이지 내 모든 언어 셀렉터의 선택값 동기화
  const langSelects = document.querySelectorAll('.lang-select, #languageSelect');
  langSelects.forEach(select => {
    select.value = lang;
  });
}

/**
 * 초기화 및 이벤트 위임(Event Delegation)
 */
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('preferred_lang');
  const browserLang = navigator.language.slice(0, 2);
  const initialLang = savedLang || (translations[browserLang] ? browserLang : 'ko');

  setLanguage(initialLang);
});

// 문서 전체에 이벤트를 걸어 동적으로 추가된 #languageSelect 변경도 감지 (이벤트 위임)
document.addEventListener('change', (e) => {
  if (e.target && (e.target.id === 'languageSelect' || e.target.classList.contains('lang-select'))) {
    setLanguage(e.target.value);
  }
});