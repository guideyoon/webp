import React from 'react';

const PrivacyPolicy: React.FC = () => (
    <div className="legal-container">
        <header className="legal-header">
            <h1 className="legal-title">개인정보처리방침</h1>
            <p className="legal-subtitle">이미지 옵티마이저 프로는 사용자의 개인정보 보호를 최우선으로 생각합니다.</p>
        </header>

        <div className="legal-card">
            <h2 className="legal-section-title">
                <span className="section-num">1</span>
                로컬 처리 원칙
            </h2>
            <p className="legal-text">
                다른 온라인 변환 도구와 달리, 본 서비스는 클라이언트 측 JavaScript를 사용하여 브라우저 내에서 완전히 작동합니다.
                사용자의 이미지는 <strong>절대 서버로 업로드되지 않으며</strong>, 모든 처리는 사용자의 기기에서 로컬로 진행됩니다.
            </p>
        </div>

        <div className="legal-card">
            <h2 className="legal-section-title">
                <span className="section-num">2</span>
                데이터 수집
            </h2>
            <p className="legal-text">
                저희는 사용자의 개인 이미지를 수집하거나 저장하지 않습니다.
                다만, 서비스 품질 개선을 위해 방문 횟수 등 익명의 통계 정보를 수집할 수 있습니다.
            </p>
        </div>

        <div className="legal-card">
            <h2 className="legal-section-title">
                <span className="section-num">3</span>
                쿠키 및 광고
            </h2>
            <p className="legal-text">
                본 서비스는 Google AdSense를 통해 광고를 게재하며, 이를 위해 쿠키가 사용될 수 있습니다.
                쿠키는 사용자의 브라우징 경험을 분석하는 데 사용되며, 개인을 식별할 수 있는 정보는 포함하지 않습니다.
            </p>
        </div>

        <div className="legal-card">
            <h2 className="legal-section-title">
                <span className="section-num">4</span>
                문의 사항
            </h2>
            <p className="legal-text">
                본 방침에 대해 궁금한 점이 있으시면 아래 이메일로 언제든지 문의해 주세요.
                <br />
                <strong>peoplenetworks.help@gmail.com</strong>
            </p>
        </div>

        <div className="back-home-container">
            <a href="/" className="btn-back-home">
                🏠 홈으로 돌아가기
            </a>
        </div>
    </div>
);

export default PrivacyPolicy;
