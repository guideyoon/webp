import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
    return (
        <div className="legal-container">
            <header className="legal-header">
                <h1 className="legal-title">개인정보처리방침</h1>
                <p className="legal-subtitle">사용자의 소중한 개인정보를 어떻게 보호하는지 안내해 드립니다.</p>
            </header>

            <div className="legal-card">
                <h2 className="legal-section-title">
                    <span className="section-num">1</span>
                    데이터 수집 및 처리
                </h2>
                <p className="legal-text">
                    본 서비스는 사용자의 이미지를 서버로 전송하거나 수집하지 않습니다.
                    모든 변환 작업은 사용자의 웹 브라우저 내에서 100% 로컬로 처리됩니다.
                </p>
            </div>

            <div className="legal-card">
                <h2 className="legal-section-title">
                    <span className="section-num">2</span>
                    쿠키 사용 안내
                </h2>
                <p className="legal-text">
                    Google AdSense 등 제3자 광고 서비스를 통해 맞춤형 광고를 제공하기 위해 쿠키가 사용될 수 있습니다.
                </p>
            </div>

            <div className="back-home-container">
                <Link to="/" className="btn-back-home">
                    🏠 홈으로 돌아가기
                </Link>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
