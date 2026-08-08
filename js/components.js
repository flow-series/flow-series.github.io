document.addEventListener("DOMContentLoaded", () => {
  // 현재 페이지 위치에 따라 상대 경로(basePath) 자동 계산
  // 예: 메인 페이지 -> "./" / 서브 페이지 -> "../"
  const depth = window.location.pathname.split('/').filter(p => p.length > 0);
  
  // github.io/repo-name/ 처럼 서브 경로가 포함된 경우 처리
  const isSubFolder = document.querySelector('script[src*="components.js"]')?.getAttribute('src')?.startsWith('../');
  const basePath = isSubFolder ? "../" : "./";

  // 1. 공통 헤더 HTML
  const headerHTML = `
    <div class="nav-container">
      <a href="${basePath}" class="brand-logo">Flow Series</a>
      
      <ul class="nav-menu">
        <li class="nav-item-dropdown">
          <a href="${basePath}#products">
            <span data-i18n="navProducts">상품들</span> <span style="font-size: 0.7rem;">▾</span>
          </a>
          <ul class="dropdown-menu">
            <li>
              <a href="${basePath}workerflow/" class="dropdown-item">
                <span class="dropdown-icon">📅</span>
                <div class="dropdown-text">
                  <span class="dropdown-title">workerFlow</span>
                  <span class="dropdown-desc" data-i18n="subWf">스케줄 위젯</span>
                </div>
              </a>
            </li>
            <li>
              <a href="${basePath}slideflow/" class="dropdown-item">
                <span class="dropdown-icon">🖼️</span>
                <div class="dropdown-text">
                  <span class="dropdown-title">slideFlow</span>
                  <span class="dropdown-desc" data-i18n="subSf">미니멀 뷰어</span>
                </div>
              </a>
            </li>
            <li>
              <a href="${basePath}focusflow/" class="dropdown-item">
                <span class="dropdown-icon">🎯</span>
                <div class="dropdown-text">
                  <span class="dropdown-title">focusFlow</span>
                  <span class="dropdown-desc" data-i18n="subFf">할일 & 몰입</span>
                </div>
              </a>
            </li>
          </ul>
        </li>

        <li><a href="${basePath}downloads/" data-i18n="navDownloads">다운로드</a></li>
        <li><a href="${basePath}#connect" data-i18n="navConnect">고객센터</a></li>
      </ul>

      <div class="lang-selector">
        <select class="lang-select" id="languageSelect">
          <option value="en">English</option>
          <option value="ko">한국어</option>
          <option value="ja">日本語</option>
          <option value="zh-CN">中文</option>
          <option value="es">Español</option>
          <option value="fr">Français</option>
          <option value="de">Deutsch</option>
        </select>
      </div>
    </div>
  `;

  // 2. 공통 푸터 HTML
  const footerHTML = `
    <div class="footer-container">
      <div>
        <p style="font-weight: 700; color: #FFF; font-size: 1.1rem; margin-bottom: 0.3rem;">Flow Series</p>
        <p style="font-size: 0.8rem;">© 2026 Flow Series. All rights reserved.</p>
      </div>
      
      <ul class="footer-links">
        <li><a href="${basePath}#connect" data-i18n="footConnect">커넥트</a></li>
        <li><a href="${basePath}privacy.html" class="footer-policy" data-i18n="footPrivacy">개인정보보호정책</a></li>
        <li><a href="${basePath}terms.html" class="footer-policy" data-i18n="footTerms">서비스 약관</a></li>
      </ul>
    </div>
  `;

  // DOM 요소 탐색 후 주입
  const headerElem = document.querySelector("header");
  const footerElem = document.querySelector("footer");

  if (headerElem) headerElem.innerHTML = headerHTML;
  if (footerElem) footerElem.innerHTML = footerHTML;

  // 헤더 주입 완료 후 i18n 번역 재적용 및 드롭다운 이벤트 재연결
  if (typeof setLanguage === "function") {
    const savedLang = localStorage.getItem('preferred_lang') || 'ko';
    setLanguage(savedLang);
  }
});