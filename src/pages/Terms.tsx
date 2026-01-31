import React from 'react';

const Terms: React.FC = () => (
    <div className="legal-page py-12 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 title-gradient">이용약관</h1>
        <p className="mb-10 text-lg leading-relaxed text-dim">이미지 옵티마이저 프로를 이용함으로써 귀하는 다음 약관에 동의하게 됩니다.</p>

        <div className="space-y-10">
            <section>
                <h2 className="text-2xl font-bold mb-4 text-white">1. 허용된 사용</h2>
                <p className="text-dim leading-relaxed">귀하는 본 도구를 개인적 또는 상업적 목적으로 자유롭게 사용할 수 있습니다. 서비스 운영을 방해하거나 악의적인 용도로 사용하는 행위는 금지됩니다.</p>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-4 text-white">2. 보증의 부인</h2>
                <p className="text-dim leading-relaxed">본 도구는 "있는 그대로" 제공되며 어떠한 형태의 보증도 제공하지 않습니다. 최상의 결과를 위해 노력하지만, 소프트웨어 사용으로 인해 발생하는 데이터 손실이나 품질 문제에 대해 책임을 지지 않습니다.</p>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-4 text-white">3. 책임의 제한</h2>
                <p className="text-dim leading-relaxed">이미지 옵티마이저 프로는 도구의 사용 또는 사용 불능으로 인해 발생하는 어떠한 손해에 대해서도 책임을 지지 않습니다.</p>
            </section>
        </div>
    </div>
);

export default Terms;
