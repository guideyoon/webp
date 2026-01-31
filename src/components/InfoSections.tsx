import React from 'react';

export const FeaturesSection: React.FC = () => (
    <section className="info-card glass p-8 mt-8">
        <h2 className="text-2xl font-bold mb-4 title-gradient">이미지 옵티마이저 프로의 주요 기능</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="feature">
                <h3 className="font-semibold text-lg mb-2">🚀 빠른 WebP 패키징</h3>
                <p className="text-sm text-dim">기존의 JPG, PNG 이미지를 최신 WebP 형식으로 즉시 변환합니다. 화질 저하 없이 파일 크기를 획기적으로 줄여보세요.</p>
            </div>
            <div className="feature">
                <h3 className="font-semibold text-lg mb-2">🔒 프라이버시 우선 (로컬 처리)</h3>
                <p className="text-sm text-dim">사용자의 이미지는 서버로 전송되지 않습니다. 모든 처리는 브라우저 내에서 로컬로 진행되어 보안과 데이터 개인정보를 완벽하게 보호합니다.</p>
            </div>
            <div className="feature">
                <h3 className="font-semibold text-lg mb-2">⚡ 대량 최적화</h3>
                <p className="text-sm text-dim">수백 장의 이미지도 한 번에 업로드하세요. 병합 및 병렬 처리를 통해 시간을 크게 절약해 드립니다.</p>
            </div>
        </div>
    </section>
);

export const FAQSection: React.FC = () => (
    <section className="info-card glass p-8 mt-6">
        <h2 className="text-2xl font-bold mb-4 title-gradient">자주 묻는 질문 (FAQ)</h2>
        <div className="space-y-4">
            <div className="faq-item">
                <h4 className="font-semibold">왜 JPEG 대신 WebP를 사용해야 하나요?</h4>
                <p className="text-sm text-dim">WebP는 JPEG보다 파일 크기가 약 25~35% 더 작습니다. 이미지 크기가 작아지면 웹사이트 로딩 속도가 빨라지고 SEO 성능이 향상됩니다.</p>
            </div>
            <div className="faq-item">
                <h4 className="font-semibold">상업적 용도로 무료 사용이 가능한가요?</h4>
                <p className="text-sm text-dim">네, 이미지 옵티마이저 프로는 개인 및 상업적 프로젝트 모두에서 횟수 제한 없이 완전 무료로 사용할 수 있습니다.</p>
            </div>
            <div className="faq-item">
                <h4 className="font-semibold">모바일 기기에서도 작동하나요?</h4>
                <p className="text-sm text-dim">네, 반응형 인터페이스를 지원하여 스마트폰과 태블릿에서도 원활하게 작동합니다.</p>
            </div>
        </div>
    </section>
);

export const GuideSection: React.FC = () => (
    <section className="info-card glass p-8 mt-6">
        <h2 className="text-2xl font-bold mb-4 title-gradient">사용 방법 안내</h2>
        <ol className="list-decimal list-inside space-y-2 text-dim">
            <li><strong>업로드:</strong> 최적화할 이미지를 위 영역에 드래그 앤 드롭 하세요.</li>
            <li><strong>설정:</strong> 품질 슬라이더와 최대 크기(해상도)를 원하는 대로 조절합니다.</li>
            <li><strong>변환:</strong> 출력 대상 형식을 선택합니다 (WebP를 권장합니다).</li>
            <li><strong>다운로드:</strong> 최적화된 파일을 개별 다운로드하거나 ZIP으로 한 번에 받으세요.</li>
        </ol>
    </section>
);
