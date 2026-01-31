import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout-container">
      {/* Top Ad Slot */}
      <div className="ad-slot ad-top glass">
        <span className="ad-label">Advertisement</span>
        {/* AdSense code would go here */}
      </div>

      <header className="main-header">
        <h1 className="title-gradient animate-float">Image Optimizer Pro</h1>
        <p className="text-dim">Fast, secure, and trendy image compression in your browser.</p>
      </header>

      <main className="content-grid">
        <div className="main-content">
          {children}
        </div>

        {/* Sidebar Ad Slot */}
        <aside className="ad-slot ad-sidebar glass">
          <span className="ad-label">Advertisement</span>
          {/* AdSense code would go here */}
        </aside>
      </main>

      <footer className="main-footer glass p-6">
        <div className="flex justify-between items-center gap-4">
          <div className="footer-info">
            <p className="text-sm font-semibold title-gradient">Image Optimizer Pro</p>
            <p className="text-xs text-dim">© 2026. All rights reserved.</p>
          </div>
          <nav className="footer-links flex gap-6 text-xs font-medium">
            <a href="/" className="hover:text-accent transition-colors">Home</a>
            <a href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-accent transition-colors">Terms of Service</a>
          </nav>
        </div>

        {/* Bottom Ad Slot */}
        <div className="ad-slot ad-bottom mt-6">
          <span className="ad-label">Advertisement</span>
          {/* AdSense code would go here */}
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
