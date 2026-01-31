import React from 'react';

const PrivacyPolicy: React.FC = () => (
    <div className="legal-page py-12 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 title-gradient">개인정보처리방침</h1>
        <p className="mb-10 text-lg leading-relaxed text-dim">이미지 옵티마이저 프로는 사용자의 개인정보 보호를 최우선으로 생각합니다. 본 방침은 데이터 취급 방식을 설명합니다.</p>

        <div className="space-y-10">
            <section>
                <h2 className="text-2xl font-bold mb-4 text-white">1. 로컬 처리 원칙</h2>
                <p className="text-dim leading-relaxed">다른 온라인 변환 도구와 달리, 본 서비스는 클라이언트 측 JavaScript를 사용하여 브라우저 내에서 완전히 작동합니다. 사용자의 이미지는 <strong>절대 서버로 업로드되지 않으며</strong>, 모든 처리는 사용자의 기기에서 로컬로 진행됩니다.</p>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-4 text-white">2. 데이터 수집</h2>
                <p className="text-dim leading-relaxed">저희는 개인 정보를 수집하거나 이미지 데이터를 저장하지 않습니다. 사이트 성능 모니터링 및 사용자 경험 개선을 위해 표준 웹 분석 도구를 사용할 수 있습니다.</p>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-4 text-white">3. 쿠키 사용</h2>
                <p className="text-dim leading-relaxed">사이트 기능 유지 및 Google AdSense를 통한 비개인화 광고 게재를 위해 최소한의 쿠키를 사용할 수 있습니다.</p>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-4 text-white">4. 제3자 서비스</h2>
                <p className="text-dim leading-relaxed">저희는 광고 게재를 위해 Google AdSense를 사용합니다. Google은 사용자의 본 사이트 또는 다른 사이트 방문 기록을 바탕으로 광고를 게재하기 위해 쿠키를 사용할 수 있습니다.</p>
            </section>
        </div>
    </div>
);

export default PrivacyPolicy;
