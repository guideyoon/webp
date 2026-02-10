import React from 'react';

export const FeaturesSection: React.FC = () => (
    <section className="card p-12 section-animate">
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-secondary">02.</span> 핵심 기능 소개
        </h3>
        <div className="grid grid-cols-2 gap-x-8 gap-y-10">
            <div className="feature-item flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center mb-3">
                    <span className="text-2xl">🔒</span>
                </div>
                <p className="font-bold text-slate-800">개인정보 보호</p>
                <p className="text-xs text-dim">100% 브라우저 처리</p>
            </div>
            <div className="feature-item flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center mb-3">
                    <span className="text-2xl">📦</span>
                </div>
                <p className="font-bold text-slate-800">일괄 변환</p>
                <p className="text-xs text-dim">다중 파일 동시 처리</p>
            </div>
            <div className="feature-item flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center mb-3">
                    <span className="text-2xl">📐</span>
                </div>
                <p className="font-bold text-slate-800">스마트 리사이징</p>
                <p className="text-xs text-dim">해상도 최적화 지원</p>
            </div>
            <div className="feature-item flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center mb-3">
                    <span className="text-2xl">✨</span>
                </div>
                <p className="font-bold text-slate-800">무료 무제한</p>
                <p className="text-xs text-dim">비용 없는 무제한 사용</p>
            </div>
        </div>
    </section>
);

export const FAQSection: React.FC = () => (
    <section className="card p-12 section-animate">
        <h3 className="text-2xl font-bold mb-8">자주 묻는 질문 (FAQ)</h3>
        <div className="flex flex-col faq-wrap">
            <details className="faq-item py-5 border-b border-slate-100 cursor-pointer group">
                <summary className="font-semibold text-slate-800 outline-none flex justify-between items-center">
                    브라우저 기반 변환은 안전한가요?
                    <span className="text-slate-300 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-sm text-dim mt-4 pl-4 leading-loose">
                    네, 매우 안전합니다. <strong>클라이언트 사이드 렌더링</strong> 방식을 사용하므로 사용자의 이미지가 서버로 전송되지 않습니다.
                    모든 과정이 브라우저 내부에서만 수행되어 보안이 완벽합니다.
                </p>
            </details>
            <details className="faq-item py-5 border-b border-slate-100 cursor-pointer group">
                <summary className="font-semibold text-slate-800 outline-none flex justify-between items-center">
                    WebP를 JPG로 변환하면 화질이 많이 떨어지나요?
                    <span className="text-slate-300 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-sm text-dim mt-4 pl-4 leading-loose">
                    원본 해상도와 품질 옵션에 따라 달라집니다. 사진 콘텐츠는 JPG로 변환해도 용량 대비 품질이 안정적이며,
                    텍스트/아이콘 중심 이미지는 PNG 또는 WebP를 유지하는 것이 더 선명할 수 있습니다.
                </p>
            </details>
            <details className="faq-item py-5 border-b border-slate-100 cursor-pointer group">
                <summary className="font-semibold text-slate-800 outline-none flex justify-between items-center">
                    JPG, PNG, WebP 중 SEO에 유리한 형식은 무엇인가요?
                    <span className="text-slate-300 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-sm text-dim mt-4 pl-4 leading-loose">
                    검색엔진은 파일 형식 자체보다 <strong>페이지 속도와 이미지 품질</strong>를 더 중요하게 봅니다.
                    일반적으로 WebP가 용량 최적화에 유리하고, 필요 시 JPG/PNG로 목적에 맞게 변환하는 전략이 효율적입니다.
                </p>
            </details>
            <details className="faq-item py-5 border-b border-slate-100 cursor-pointer group">
                <summary className="font-semibold text-slate-800 outline-none flex justify-between items-center">
                    대량의 파일을 한 번에 처리할 수 있나요?
                    <span className="text-slate-300 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-sm text-dim mt-4 pl-4 leading-loose">
                    가능합니다. 여러 장을 한 번에 업로드해 일괄 변환할 수 있고, 변환 결과는 ZIP으로 묶어 한 번에 다운로드할 수 있습니다.
                </p>
            </details>
            <details className="faq-item py-5 border-b border-slate-100 cursor-pointer group">
                <summary className="font-semibold text-slate-800 outline-none flex justify-between items-center">
                    블로그/쇼핑몰용 이미지 권장 설정은 어떻게 되나요?
                    <span className="text-slate-300 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-sm text-dim mt-4 pl-4 leading-loose">
                    보통 가로 1200~1600px, 품질 75~85 범위가 많이 사용됩니다. 상세페이지처럼 글자가 많은 이미지는 PNG,
                    일반 제품/썸네일은 WebP 또는 JPG로 저장하면 품질과 용량 균형을 맞추기 쉽습니다.
                </p>
            </details>
            <details className="faq-item py-5 border-b border-slate-100 cursor-pointer group">
                <summary className="font-semibold text-slate-800 outline-none flex justify-between items-center">
                    변환 후 파일명/원본 비율은 유지되나요?
                    <span className="text-slate-300 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-sm text-dim mt-4 pl-4 leading-loose">
                    네. 기본적으로 원본 비율을 유지하며, 파일명도 원본 기준으로 저장됩니다. 필요하면 포맷과 최대 크기만 바꿔서
                    플랫폼 요구사항에 맞게 빠르게 재생성할 수 있습니다.
                </p>
            </details>
        </div>
        <style>{`
          html {
            scrollbar-gutter: stable;
          }

          .faq-wrap {
            overflow-anchor: none;
          }

          .faq-item summary {
            list-style: none;
            gap: 12px;
          }

          .faq-item summary::-webkit-details-marker {
            display: none;
          }

          .faq-item p {
            animation: faqFadeIn 180ms ease-out;
          }

          @keyframes faqFadeIn {
            from {
              opacity: 0;
              transform: translateY(-2px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @supports not (scrollbar-gutter: stable) {
            body {
              overflow-y: scroll;
            }
          }
        `}</style>
    </section>
);

export const GuideSection: React.FC = () => (
    <section className="card p-12 section-animate">
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-secondary">01.</span> 간편한 사용 방법
        </h3>
        <ul className="flex flex-col gap-4 text-dim">
            <li className="flex gap-2">
                <span className="text-secondary">•</span>
                변환을 원하는 파일을 업로드 영역에 드래그하거나 선택합니다.
            </li>
            <li className="flex gap-2">
                <span className="text-secondary">•</span>
                압축 품질과 출력 형식을 설정하여 사용자에게 최적화된 옵션을 선택합니다.
            </li>
            <li className="flex gap-2">
                <span className="text-secondary">•</span>
                변환된 결과를 확인하고 이미지 또는 ZIP 전체 파일을 다운로드합니다.
            </li>
        </ul>
    </section>
);
