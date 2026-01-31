import React from 'react';

export const FeaturesSection: React.FC = () => (
    <section className="py-16 border-b border-gray-100">
        <h2 className="text-3xl font-bold mb-12 title-gradient text-center">이미지 옵티마이저 프로의 주요 기능</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="feature text-center">
                <div className="mb-5 text-5xl">🚀</div>
                <h3 className="font-bold text-xl mb-4">빠른 WebP 패키징</h3>
                <p className="text-dim leading-relaxed">기존의 JPG, PNG 이미지를 최신 WebP 형식으로 즉시 변환합니다. 화질 저하 없이 파일 크기를 획기적으로 줄여보세요.</p>
            </div>
            <div className="feature text-center">
                <div className="mb-5 text-5xl">🔒</div>
                <h3 className="font-bold text-xl mb-4">프라이버시 우선</h3>
                <p className="text-dim leading-relaxed">사용자의 이미지는 서버로 전송되지 않습니다. 모든 처리는 브라우저 내에서 로컬로 진행되어 보안과 개인정보를 완벽하게 보호합니다.</p>
            </div>
            <div className="feature text-center">
                <div className="mb-5 text-5xl">⚡</div>
                <h3 className="font-bold text-xl mb-4">대량 최적화</h3>
                <p className="text-dim leading-relaxed">수백 장의 이미지도 한 번에 업로드하세요. 병합 및 병렬 처리를 통해 시간을 크게 절약해 드립니다.</p>
            </div>
        </div>
    </section>
);

export const FAQSection: React.FC = () => (
    <section className="py-16 border-b border-gray-100">
        <h2 className="text-3xl font-bold mb-12 title-gradient text-center">자주 묻는 질문 (FAQ)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 max-w-4xl mx-auto">
            <div className="faq-item">
                <h4 className="font-bold text-lg mb-3">왜 JPEG 대신 WebP를 사용해야 하나요?</h4>
                <p className="text-dim leading-relaxed">WebP는 JPEG보다 파일 크기가 약 25~35% 더 작습니다. 이미지 크기가 작아지면 웹사이트 로딩 속도가 빨라지고 SEO 성능이 향상됩니다.</p>
            </div>
            <div className="faq-item">
                <h4 className="font-bold text-lg mb-3">상업적 용도로 무료 사용이 가능한가요?</h4>
                <p className="text-dim leading-relaxed">네, 이미지 옵티마이저 프로는 개인 및 상업적 프로젝트 모두에서 횟수 제한 없이 완전 무료로 사용할 수 있습니다.</p>
            </div>
            <div className="faq-item">
                <h4 className="font-bold text-lg mb-3">모바일 기기에서도 작동하나요?</h4>
                <p className="text-dim leading-relaxed">네, 반응형 인터페이스를 지원하여 스마트폰과 태블릿에서도 원활하게 작동합니다.</p>
            </div>
        </div>
    </section>
);

export const GuideSection: React.FC = () => (
    <section className="py-16">
        <h2 className="text-3xl font-bold mb-12 title-gradient text-center">사용 방법 안내</h2>
        <div className="max-w-2xl mx-auto">
            <ul className="relative border-l-2 border-gray-200 ml-4 space-y-10 list-none">
                <li className="ml-8 relative">
                    <span className="absolute -left-11 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold text-sm">1</span>
                    <h3 className="font-bold text-lg mb-2">이미지 업로드</h3>
                    <p className="text-dim">최적화할 이미지를 상단 영역에 드래그 앤 드롭 하세요.</p>
                </li>
                <li className="ml-8 relative">
                    <span className="absolute -left-11 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold text-sm">2</span>
                    <h3 className="font-bold text-lg mb-2">설정 조절</h3>
                    <p className="text-dim">품질 슬라이더와 최대 크기(해상도)를 원하는 대로 조절합니다.</p>
                </li>
                <li className="ml-8 relative">
                    <span className="absolute -left-11 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold text-sm">3</span>
                    <h3 className="font-bold text-lg mb-2">변환 및 다운로드</h3>
                    <p className="text-dim">출력 형식을 선택하고 변환된 파일을 다운로드 받으세요.</p>
                </li>
            </ul>
        </div>
    </section>
);
