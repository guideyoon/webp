import React from 'react';

export const FeaturesSection: React.FC = () => (
    <section className="info-section">
        <h2 className="section-title">주요 기능</h2>
        <div className="feature-list">
            {[
                "100% 브라우저 기반 처리 (서버 전송 X)",
                "여러 파일 동시 변환 지원",
                "고화질 JPG 및 PNG 출력",
                "무료로 사용 가능",
                "ZIP 파일로 일괄 다운로드",
                "모든 기기 및 브라우저 지원"
            ].map((feature, i) => (
                <div key={i} className="feature-item">
                    <span className="check-icon">✓</span>
                    <span className="feature-text">{feature}</span>
                </div>
            ))}
        </div>
    </section>
);

export const FAQSection: React.FC = () => (
    <section className="info-section">
        <h2 className="section-title">자주 묻는 질문(FAQ)</h2>
        <div className="faq-list">
            {[
                { q: "WebP(Web Picture)란 무엇인가요?", a: "WebP는 구글이 개발한 이미지 형식으로, 웹 이미지의 파일 크기를 줄이는 동시에 높은 품질을 유지하도록 설계되었습니다." },
                { q: "변환 형식을 어떻게 선택하나요?", a: "사진이나 복잡한 그라디언트가 있는 이미지는 JPG를, 투명 배경이나 텍스트/선이 많은 이미지는 PNG를 추천합니다." },
                { q: "개인정보는 안전한가요?", a: "네, 모든 처리는 사용자의 브라우저 내부에서만 이루어지며 서버로 전송되지 않습니다." }
            ].map((item, i) => (
                <div key={i} className="faq-item">
                    <h3 className="faq-question">{item.q}</h3>
                    <p className="faq-answer">{item.a}</p>
                </div>
            ))}
        </div>
    </section>
);

export const GuideSection: React.FC = () => (
    <section className="info-section">
        <h2 className="section-title">사용 방법</h2>
        <ol className="guide-list">
            <li>변환하려는 WebP 이미지 파일을 하나 또는 여러 개 선택합니다.</li>
            <li>원하는 출력 형식(JPG 또는 PNG)을 선택합니다.</li>
            <li>'변환하기' 버튼을 클릭합니다.</li>
            <li>변환된 이미지를 개별적으로 다운로드하거나 '모두 다운로드' 버튼을 클릭하여 저장합니다.</li>
        </ol>
    </section>
);
