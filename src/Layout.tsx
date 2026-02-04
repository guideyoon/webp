import React from 'react';
import { Link } from 'react-router-dom';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="w-full flex justify-center bg-[#f1f5f9] min-h-screen py-0 md:py-10">
            {/* Central White Card Container */}
            <div className="w-full max-w-[600px] bg-white shadow-2xl flex flex-col md:rounded-2xl overflow-hidden min-h-screen md:min-h-fit">

                <header className="main-header">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <h1 className="main-title">WebP JPG 변환</h1>
                    </Link>
                    <p className="main-subtitle">화질 저하 없이 빠르고 안전한 온라인 WebP 변환기</p>
                </header>

                <main className="flex-1 px-6 pb-12 w-full">
                    {children}
                </main>

                <footer className="main-footer">
                    <div className="footer-links">
                        <Link to="/">홈</Link>
                        <span className="divider">|</span>
                        <Link to="/privacy">개인정보</Link>
                        <span className="divider">|</span>
                        <Link to="/terms">이용약관</Link>
                    </div>
                    <p className="copyright">© 2026 WebP JPG 변환</p>
                    <p className="footer-contact">본 서비스는 서버로 파일을 전송하지 않습니다.</p>
                </footer>

                <style>{`
                    .main-header { padding: 2rem 1.5rem 1rem; text-align: center; background: #fff; }
                    .main-title { font-size: 1.75rem; font-weight: 900; margin-bottom: 0.5rem; background: linear-gradient(135deg, #6366f1, #8b5cf6); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; letter-spacing: -0.025em; }
                    .main-subtitle { font-size: 0.9rem; color: #64748b; font-weight: 500; }
                    .main-footer { margin-top: auto; padding: 2rem 1.5rem; text-align: center; background: #fafafa; border-top: 1px solid #f1f5f9; }
                    .footer-links { display: flex; justify-content: center; align-items: center; gap: 1.5rem; margin-bottom: 1rem; font-size: 0.85rem; }
                    .footer-links a { color: #64748b; text-decoration: none; font-weight: 600; }
                    .footer-links a:hover { color: #6366f1; }
                    .divider { color: #e2e8f0; }
                    .copyright { font-size: 0.75rem; color: #94a3b8; margin-bottom: 0.25rem; }
                    .footer-contact { font-size: 0.7rem; color: #cbd5e1; }

                    /* Legal Styles */
                    .legal-container { padding: 1rem 0 3rem; }
                    .legal-header { text-align: center; margin-bottom: 2rem; }
                    .legal-title { font-size: 1.75rem; font-weight: 900; color: #1e293b; }
                    .legal-subtitle { font-size: 0.9rem; color: #64748b; }
                    .legal-card { background: #fff; border: 1px solid #f1f5f9; border-radius: 16px; padding: 1.5rem; margin-bottom: 1rem; }
                    .legal-section-title { display: flex; align-items: center; gap: 0.5rem; font-size: 1.1rem; font-weight: 800; margin-bottom: 0.5rem; }
                    .section-num { background: #eef2ff; color: #6366f1; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; border-radius: 6px; font-size: 0.8rem; }
                    .legal-text { color: #475569; font-size: 0.9rem; line-height: 1.6; }
                    .back-home-container { margin-top: 2rem; text-align: center; }
                    .btn-back-home { display: inline-block; padding: 0.75rem 1.5rem; background: #f8fafc; color: #64748b; text-decoration: none; border-radius: 12px; font-weight: 700; border: 1px solid #e2e8f0; }
                `}</style>
            </div>
        </div>
    );
};

export default Layout;
