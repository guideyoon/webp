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
        <div className="flex flex-col">
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
                    대량의 파일을 한 번에 처리할 수 있나요?
                    <span className="text-slate-300 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-sm text-dim mt-4 pl-4 leading-loose">
                    물론입니다. 여러 장의 이미지를 동시에 드래그하여 업로드하면 일괄적으로 변환이 진행되며,
                    ZIP 파일 형태로 한 번에 다운로드할 수도 있습니다.
                </p>
            </details>
        </div>
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
