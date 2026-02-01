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
                { q: "WebP JPG 변환은 무료인가요?", a: "네, 본 서비스는 별도의 가입이나 결제 없이 100% 무료로 제공되는 WebP JPG 변환 도구입니다." },
                { q: "여러 개의 WebP 파일을 한 번에 JPG로 변환할 수 있나요?", a: "물론입니다. 여러 개의 WebP 파일을 한꺼번에 드래그하여 업로드하면 일괄 변환이 진행됩니다." },
                { q: "WebP JPG 변환 시 개인정보가 노출될 위험은 없나요?", a: "저희 도구는 서버로 파일을 업로드하지 않고 사용자의 브라우저 내에서만 로컬로 변환하므로 매우 안전합니다." }
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
