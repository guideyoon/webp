import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout-container">
      {/* 상단 광고 슬롯 */}
      <div className="ad-slot ad-top glass">
        <span className="ad-label">광고 영역</span>
        {/* AdSense 코드가 여기에 들어갑니다 */}
      </div>

      <header className="main-header">
        <h1 className="title-gradient animate-float">이미지 옵티마이저 프로</h1>
        <p className="text-dim">브라우저에서 직접 처리되는 빠르고 안전한 이미지 압축 도구입니다.</p>
      </header>

      <main className="content-grid">
        <div className="main-content">
          {children}
        </div>

        {/* 사이드바 광고 슬롯 */}
        <aside className="ad-slot ad-sidebar glass">
          <span className="ad-label">광고 영역</span>
          {/* AdSense 코드가 여기에 들어갑니다 */}
        </aside>
      </main>

      <footer className="main-footer glass p-6">
        <div className="flex justify-between items-center gap-4">
          <div className="footer-info">
            <p className="text-sm font-semibold title-gradient">이미지 옵티마이저 프로</p>
            <p className="text-xs text-dim">© 2026. All rights reserved.</p>
          </div>
          <nav className="footer-links flex gap-6 text-xs font-medium">
            <a href="/" className="hover:text-accent transition-colors">홈</a>
            <a href="/privacy" className="hover:text-accent transition-colors">개인정보처리방침</a>
            <a href="/terms" className="hover:text-accent transition-colors">이용약관</a>
          </nav>
        </div>

        {/* 하단 광고 슬롯 */}
        <div className="ad-slot ad-bottom mt-6">
          <span className="ad-label">광고 영역</span>
          {/* AdSense 코드가 여기에 들어갑니다 */}
        </div>
      </footer>

      <style>{`
        .layout-container {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          padding-bottom: 4rem;
        }

        .main-header {
          text-align: center;
          margin-bottom: 1rem;
        }

        .main-header h1 {
          font-size: 3.5rem;
          margin-bottom: 0.5rem;
        }

        .content-grid {
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: 2rem;
        }

        .ad-slot {
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.03);
          border: 1px dashed var(--glass-border);
          min-height: 90px;
          position: relative;
        }

        .ad-top {
          width: 100%;
          min-height: 100px;
        }

        .ad-sidebar {
          width: 300px;
          min-height: 600px;
        }

        .ad-bottom {
          width: 100%;
          min-height: 90px;
        }

        .ad-label {
          font-size: 0.7rem;
          color: var(--text-dim);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        @media (max-width: 1024px) {
          .content-grid {
            grid-template-columns: 1fr;
          }
          .ad-sidebar {
            width: 100%;
            min-height: 100px;
          }
        }
      `}</style>
    </div>
  );
};

export default Layout;
