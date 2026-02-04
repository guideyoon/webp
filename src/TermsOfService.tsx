import React from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';

const TermsOfService: React.FC = () => {
    return (
        <Layout>
            <div className="privacy-page">
                <Link to="/" className="back-link">← 메인으로 돌아가기</Link>

                <h2 className="page-title">이용약관</h2>
                <p className="last-updated">최종 수정일: 2026년 2월 4일</p>

                <section className="policy-section">
                    <h3>1. 서비스 이용</h3>
                    <p>
                        본 서비스("WebP JPG 변환")는 온라인으로 이미지를 변환하고 최적화하는 기능을 제공합니다.
                        사용자는 본 약관을 준수하는 범위 내에서 무료로 서비스를 이용할 수 있습니다.
                    </p>
                </section>

                <section className="policy-section">
                    <h3>2. 고지 및 책임 제한</h3>
                    <p>
                        본 서비스는 100% 사용자의 웹 브라우저 내에서 작동하며, 어떠한 이미지도 서버로 업로드하거나 전송하지 않습니다.
                        따라서 당사는 사용자가 변환하는 콘텐츠의 내용이나 데이터 손실에 대해 책임을 지지 않습니다.
                        서비스는 "있는 그대로" 제공되며, 특정 목적에의 적합성이나 무중단 서비스를 보장하지 않습니다.
                    </p>
                </section>

                <section className="policy-section">
                    <h3>3. 지식재산권</h3>
                    <p>
                        사용자가 업로드하는 이미지의 저작권은 사용자 본인에게 있습니다.
                        본 서비스는 사용자의 저작물을 어떠한 방식으로도 소유하거나 보관하지 않습니다.
                        서비스 자체의 구성 요소(코드, 디자인 등)는 본 서비스에 귀속됩니다.
                    </p>
                </section>

                <section className="policy-section">
                    <h3>4. 서비스의 변경 및 중단</h3>
                    <p>
                        당사는 사전 고지 없이 서비스의 일부 또는 전부를 변경하거나 중단할 권리를 보유합니다.
                        무료 서비스의 특성상 이로 인해 발생할 수 있는 피해에 대해 보상할 의무가 없습니다.
                    </p>
                </section>

                <section className="policy-section">
                    <h3>5. 약관의 변경</h3>
                    <p>
                        본 약관은 법령의 변화나 서비스 정책에 따라 수시로 변경될 수 있습니다.
                        변경된 약관은 웹사이트에 게시되는 즉시 효력이 발생합니다.
                    </p>
                </section>

                <section className="policy-section">
                    <h3>6. 문의</h3>
                    <p>
                        약관이나 서비스 이용에 관한 문의는 contact@webp2jpg.me로 연락 주시기 바랍니다.
                    </p>
                </section>

                <style>{`
          /* PrivacyPolicy.tsx와 동일한 스타일 적용 (클래스명 재사용) */
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
          }
          .last-updated {
            color: var(--text-muted);
            font-size: 0.875rem;
            margin-bottom: 2rem;
          }
          .policy-section {
            margin-bottom: 2rem;
          }
          .policy-section h3 {
            font-size: 1.25rem;
            font-weight: 600;
            margin-bottom: 1rem;
            color: var(--text-main);
          }
          .policy-section p {
            line-height: 1.8;
            color: var(--text-muted);
            margin-bottom: 1rem;
          }
        `}</style>
            </div>
        </Layout>
    );
};

export default TermsOfService;
