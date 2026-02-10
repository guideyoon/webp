import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout';

const PrivacyPolicy: React.FC = () => {
    return (
        <Layout>
            <div className="privacy-page">
                <Link to="/" className="back-link">← 메인으로 돌아가기</Link>

                <h2 className="page-title">개인정보처리방침</h2>
                <p className="last-updated">최종 수정일: 2026년 2월 10일</p>

                <section className="policy-section">
                    <h3>1. 수집하는 개인정보</h3>
                    <p>
                        본 서비스는 회원가입이나 로그인 기능을 제공하지 않으며, 이름/이메일/전화번호와 같은 개인식별정보를
                        별도로 수집하거나 저장하지 않습니다.
                    </p>
                </section>

                <section className="policy-section">
                    <h3>2. 이미지 데이터 처리 방식</h3>
                    <p>
                        업로드된 이미지는 사용자의 브라우저 내에서만 처리되며, 서버로 전송되지 않습니다.
                        따라서 당사는 원본 파일이나 변환 결과물을 보관하지 않습니다.
                    </p>
                </section>

                <section className="policy-section">
                    <h3>3. 쿠키 및 제3자 서비스</h3>
                    <p>
                        사이트는 서비스 품질 향상과 광고 제공을 위해 쿠키를 사용할 수 있습니다. Google AdSense 등 외부 서비스는
                        각 제공자의 정책에 따라 데이터를 처리할 수 있으며, 관련 설정은 브라우저에서 제어할 수 있습니다.
                    </p>
                </section>

                <section className="policy-section">
                    <h3>4. 정책 변경 및 문의</h3>
                    <p>
                        본 개인정보처리방침은 법령 및 서비스 운영 정책에 따라 변경될 수 있습니다. 변경 사항은 본 페이지를 통해
                        공지되며, 문의는 contact@webp2jpg.me로 접수해 주세요.
                    </p>
                </section>

                <style>{`
          .privacy-page {
            max-width: 800px;
            margin: 0 auto;
            padding: 2rem 1rem;
            color: var(--text-main);
          }
          .back-link {
            display: inline-block;
            margin-bottom: 2rem;
            color: var(--primary);
            text-decoration: none;
            font-weight: 500;
          }
          .back-link:hover {
            text-decoration: underline;
          }
          .page-title {
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
            color: var(--text-main);
            line-height: 1.35;
          }
          .last-updated {
            color: var(--text-muted);
            font-size: 0.875rem;
            margin-bottom: 2rem;
            line-height: 1.6;
          }
          .policy-section {
            margin-bottom: 2rem;
          }
          .policy-section h3 {
            font-size: 1.25rem;
            font-weight: 600;
            margin-bottom: 1rem;
            color: var(--text-main);
            line-height: 1.5;
          }
          .policy-section p {
            line-height: 1.8;
            color: var(--text-muted);
            margin-bottom: 1rem;
          }

          @media (max-width: 768px) {
            .privacy-page {
              padding: 1.25rem 1rem 2rem;
            }
            .page-title {
              font-size: 1.5rem;
            }
            .last-updated {
              margin-bottom: 1.25rem;
              font-size: 0.82rem;
            }
            .policy-section {
              margin-bottom: 1rem;
            }
            .policy-section h3 {
              font-size: 1rem;
            }
            .policy-section p {
              font-size: 0.92rem;
              line-height: 1.75;
              word-break: keep-all;
            }
          }

          @media (max-width: 480px) {
            .privacy-page {
              padding: 1rem 0.8rem 1.75rem;
            }
            .page-title {
              font-size: 1.35rem;
            }
            .policy-section p {
              font-size: 0.88rem;
              line-height: 1.7;
            }
          }
        `}</style>
            </div>
        </Layout>
    );
};

export default PrivacyPolicy;
