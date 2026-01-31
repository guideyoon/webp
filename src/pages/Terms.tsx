import React from 'react';

const Terms: React.FC = () => (
    <div className="legal-container">
        <header className="legal-header">
            <h1 className="legal-title">이용약관</h1>
            <p className="legal-subtitle">이미지 옵티마이저 프로를 이용함으로써 귀하는 다음 약관에 동의하게 됩니다.</p>
        </header>

        <div className="legal-card">
            <h2 className="legal-section-title">
                <span className="section-num">1</span>
                허용된 사용
            </h2>
            <p className="legal-text">
                귀하는 본 도구를 개인적 또는 상업적 목적으로 자유롭게 사용할 수 있습니다.
                다만, 서비스 운영을 방해하거나 악의적인 용도로 사용하는 행위는 엄격히 금지됩니다.
            </p>
        </div>

        <div className="legal-card">
            <h2 className="legal-section-title">
                <span className="section-num">2</span>
                보증 및 책임
            </h2>
            <p className="legal-text">
                본 도구는 "있는 그대로" 제공됩니다. 저희는 최상의 품질을 제공하기 위해 노력하지만,
                소프트웨어 사용으로 인해 발생하는 데이터 손실이나 결과물에 대해 법적 책임을 지지 않습니다.
            </p>
        </div>

        <div className="legal-card">
            <h2 className="legal-section-title">
                <span className="section-num">3</span>
                서비스 변경 및 중단
            </h2>
            <p className="legal-text">
                저희는 사전 고지 없이 서비스의 일부 또는 전부를 변경하거나 중단할 수 있는 권리를 보유합니다.
                새로운 기능 추가나 안정성 확보를 위해 최선을 다하겠습니다.
            </p>
        </div>

        <div className="back-home-container">
            <a href="/" className="btn-back-home">
                🏠 홈으로 돌아가기
            </a>
        </div>
    </div>
);

export default Terms;
