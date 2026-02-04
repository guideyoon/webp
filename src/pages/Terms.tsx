import React from 'react';
import { Link } from 'react-router-dom';

const Terms: React.FC = () => (
    <div className="legal-container">
        <header className="legal-header">
            <h1 className="legal-title">이용약관</h1>
            <p className="legal-subtitle">본 서비스를 이용함으로써 귀하는 다음 약관에 동의하게 됩니다.</p>
        </header>

        <div className="legal-card">
            <h2 className="legal-section-title">
                <span className="section-num">1</span>
                서비스 정의
            </h2>
            <p className="legal-text">
                본 서비스는 사용자의 브라우저 메모리를 활용해 이미지를 변환하는 무료 도구입니다.
            </p>
        </div>

        <div className="legal-card">
            <h2 className="legal-section-title">
                <span className="section-num">2</span>
                면책 조항
            </h2>
            <p className="legal-text">
                사용자의 로컬 환경에서 발생하는 데이터 손실이나 서비스 이용 중 발생한 결과물에 대해 당사는 법적 책임을 지지 않습니다.
            </p>
        </div>

        <div className="back-home-container">
            <Link to="/" className="btn-back-home">
                🏠 홈으로 돌아가기
            </Link>
        </div>
    </div>
);

export default Terms;
