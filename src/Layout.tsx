import React from 'react';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="w-full flex justify-center bg-[#f1f5f9] min-h-screen py-0 md:py-10">
            {/* Central White Card Container - Fixed Width on Desktop */}
            <div className="w-full max-w-[600px] bg-white shadow-2xl flex flex-col md:rounded-2xl overflow-hidden min-h-screen md:min-h-fit">

                <header className="main-header">
                    <h1 className="main-title">WebP JPG 변환</h1>
                    <p className="main-subtitle">화질 저하 없이 빠르고 안전한 온라인 WebP 변환기</p>
                </header>

                <main className="flex-1 px-6 pb-12 w-full">
                    {children}
                </main>

                <footer className="main-footer">
                    <div className="footer-links">
                        <a href="/">홈</a>
                        <span className="divider">|</span>
                        <a href="/privacy">개인정보</a>
                        <span className="divider">|</span>
                        <a href="/terms">이용약관</a>
                    </div>
                    <p className="copyright">© 2026 Image Optimizer Pro.</p>
                    <p className="footer-contact">문의: peoplenetworks.help@gmail.com</p>
                </footer>

            </div>

            <style>{`
        /* Header styling */
        .main-header {
            padding: 2rem 1.5rem 1rem;
            text-align: center;
            background: #fff;
        }
        .main-title {
            font-size: 1.75rem;
            font-weight: 900;
            margin-bottom: 0.5rem;
            background: linear-gradient(135deg, #6366f1, #8b5cf6);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            letter-spacing: -0.025em;
        }
        .main-subtitle {
            font-size: 0.9rem;
            color: #64748b;
            font-weight: 500;
        }

        /* Footer styling */
        .main-footer {
            margin-top: auto;
            padding: 3rem 1.5rem;
            text-align: center;
            background: #fafafa;
            border-top: 1px solid #f1f5f9;
        }
        .footer-links {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 2.5rem; /* Large gap as requested */
            margin-bottom: 1.5rem;
            font-size: 0.9rem;
            font-weight: 500;
        }
        .footer-links a {
            color: #64748b;
            text-decoration: none;
            transition: color 0.2s;
        }
        .footer-links a:hover {
            color: #6366f1;
        }
        .divider {
            color: #e2e8f0;
            font-weight: 300;
        }
        .copyright {
            font-size: 0.75rem;
            color: #94a3b8;
            margin-bottom: 0.25rem;
        }
        .footer-contact {
            font-size: 0.7rem;
            color: #cbd5e1;
        }

        /* Legal Page Styles */
        .legal-container {
            padding: 1rem 0 3rem;
        }
        .legal-header {
            text-align: center;
            margin-bottom: 3rem;
        }
        .legal-title {
            font-size: 2rem;
            font-weight: 900;
            margin-bottom: 1rem;
            color: #1e293b;
        }
        .legal-subtitle {
            font-size: 1rem;
            color: #64748b;
            line-height: 1.6;
            max-width: 500px;
            margin: 0 auto;
        }
        .legal-card {
            background: #fff;
            border: 1px solid #f1f5f9;
            border-radius: 20px;
            padding: 2rem;
            margin-bottom: 1.5rem;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);
        }
        .legal-section-title {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            font-size: 1.25rem;
            font-weight: 800;
            color: #1e293b;
            margin-bottom: 1rem;
        }
        .section-num {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 28px;
            height: 28px;
            background: #eef2ff;
            color: #6366f1;
            border-radius: 8px;
            font-size: 0.9rem;
            font-weight: 900;
        }
        .legal-text {
            color: #475569;
            line-height: 1.7;
            font-size: 0.95rem;
        }
        .legal-text strong {
            color: #1e293b;
            font-weight: 700;
        }
        .back-home-container {
            margin-top: 3rem;
            text-align: center;
        }
        .btn-back-home {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.75rem 1.5rem;
            background: #f8fafc;
            color: #64748b;
            text-decoration: none;
            border-radius: 12px;
            font-weight: 700;
            font-size: 0.9rem;
            transition: all 0.2s;
            border: 1px solid #e2e8f0;
        }
        .btn-back-home:hover {
            background: #fff;
            color: #6366f1;
            border-color: #6366f1;
            transform: translateY(-1px);
        }

        /* Global override to ensure background is gray outside */
        body, html { 
            background-color: #f1f5f9; 
            margin: 0;
            padding: 0;
        }
      `}</style>
        </div>
    );
};

export default Layout;
