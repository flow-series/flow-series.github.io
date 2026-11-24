# 🔎 Flow Series 프로젝트 분석 요약 (Analysis Summary)

## 🗓️ 기본 정보
*   **프로젝트 경로**: `/Users/jongwon/workspace/flow-series/flow-series.github.io`
*   **상태**: Clean (Git Status: (clean))
*   **목적**: 다양한 기능을 제공하는 웹 서비스 (FocusFlow, SlideFlow, WorkerFlow)

## 🌳 1. 디렉토리 및 파일 구조
프로젝트는 기능별로 모듈화되어 있으며, 공통 리소스와 다운로드 파일을 포함하고 있습니다.

| 디렉토리/파일 | 역할 | 주요 내용 |
| :--- | :--- | :--- |
| `index.html` | 루트 페이지 | 메인 랜딩 페이지. |
| `README.md` | 프로젝트 소개 | 프로젝트의 목적과 사용법 등을 설명. |
| `favicon.ico` | 웹사이트 아이콘 | 브라우저 탭에 표시되는 아이콘. |
| `css/style.css` | 스타일 시트 | 전역 CSS 스타일링을 담당. |
| `js/components.js` | UI 컴포넌트 로직 | 페이지의 헤더, 푸터, 네비게이션 로직을 담당하는 핵심 초기화 스크립트. |
| `js/i18n.js` | 국제화 로직 | 다국어 지원(i18n) 관련 함수와 데이터가 들어갈 것으로 추정됨. (`setLanguage` 함수가 정의되어 있을 것으로 보임). |
| `focusflow/` | 기능 모듈 | 할 일 관리 및 몰입(Focus) 관련 기능을 담고 있음. (`index.html`) |
| `slideflow/` | 기능 모듈 | 슬라이드 뷰어 기능을 담고 있음. (`index.html`, `privacy.html`, `service.html`) |
| `workerflow/` | 기능 모듈 | 스케줄/워크플로우 관련 기능을 담고 있음. (`index.html`, `privacy.html`, `service.html`) |
| `downloads/` | 다운로드 파일 | 각 워크플로우의 실행 파일(EXE) 및 관련 설정 파일 제공. |

## 💻 2. 핵심 로직 (js/components.js) 분석
`js/components.js` 파일은 `DOMContentLoaded` 이벤트 리스너 내에서 실행되며, 웹사이트의 **글로벌 UI를 구성**하고 **언어 설정을 초기화**하는 역할을 수행합니다.

### 📌 주요 기능 및 역할

1.  **`DOMContentLoaded` 이벤트 리스너**:
    *   **역할**: 페이지가 로드되는 즉시 실행되어, 웹사이트의 구조적 요소(헤더, 푸터)를 완성합니다.
    *   **로직**:
        *   **`basePath` 계산**: 현재 URL 경로에 따라 상대 경로(`./` 또는 `../`)를 자동 계산하여, 서브 폴더와 루트 페이지 간의 링크 오류를 방지합니다.
        *   **HTML 생성**: 미리 정의된 템플릿(`headerHTML`, `footerHTML`)을 사용하여 네비게이션 바와 푸터 콘텐츠를 생성합니다.
        *   **DOM 주입**: 생성된 HTML 문자열을 `<body>` 태그 내부의 `<header>`와 `<footer>` 요소에 삽입합니다.
        *   **언어 설정 적용**: 전역적으로 정의된 `setLanguage()` 함수를 호출하여, `localStorage`에 저장된 선호 언어(`preferred_lang`)로 UI를 초기화합니다.

### 📊 주요 구조체 (HTML Snippets)

#### 🌐 헤더 (`headerHTML`)
*   **주요 요소**: 로고, 상품 드롭다운 메뉴, 언어 선택 드롭다운.
*   **핵심 기능**: **상품별 기능 분기**: 네비게이션 메뉴에 `workerFlow`, `slideFlow`, `focusFlow` 기능을 묶어 제공합니다.
    *   *예시*: `workerFlow`는 '스케줄 위젯'으로, `slideFlow`는 '미니멀 뷰어'로 설명됩니다.
*   **입력/출력**: 입력값은 **없습니다**. 출력값은 HTML 문자열로, 페이지의 `<header>` DOM에 삽입됩니다.

#### 🦶 푸터 (`footerHTML`)
*   **주요 요소**: 회사명/로고, 저작권 정보, 정책/약관 링크.
*   **핵심 기능**: 법적 고지 및 고객 지원 링크를 제공합니다.
*   **입력/출력**: 입력값은 **없습니다**. 출력값은 HTML 문자열로, 페이지의 `<footer>` DOM에 삽입됩니다.

---
**✅ 결론:**
현재 사이트는 **정적인 랜딩 페이지** 성격을 강하게 띠고 있으며, JavaScript는 주로 **다국어 지원, 네비게이션 구조 유지, 그리고 기능 모듈 간의 링크 관리**와 같은 **"프론트엔드 뼈대 완성 및 초기화"**를 담당하고 있습니다.