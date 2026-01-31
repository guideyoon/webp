import React from 'react';

const PrivacyPolicy: React.FC = () => (
    <div className="legal-page glass p-10 mt-8">
        <h1 className="text-3xl font-bold mb-6 title-gradient">Privacy Policy</h1>
        <p className="mb-4">At Image Optimizer Pro, we prioritize your privacy. This policy explains how we handle your data.</p>

        <h2 className="text-xl font-bold mt-6 mb-2">1. Local Processing</h2>
        <p className="text-dim mb-4">Unlike other online converters, our tool works entirely in your browser using Client-Side JavaScript. Your images are <strong>never uploaded to our servers</strong>. All processing occurs locally on your machine.</p>

        <h2 className="text-xl font-bold mt-6 mb-2">2. Data Collection</h2>
        <p className="text-dim mb-4">We do not collect personal information or store any image data. We may use standard web analytics to monitor site performance and improve user experience.</p>

        <h2 className="text-xl font-bold mt-6 mb-2">3. Cookies</h2>
        <p className="text-dim mb-4">We use minimal cookies for site functionality and to serve non-personalized advertisements via Google AdSense.</p>

        <h2 className="text-xl font-bold mt-6 mb-2">4. Third-Party Services</h2>
        <p className="text-dim mb-4">We use Google AdSense to serve advertisements. Google may use cookies to serve ads based on a user's prior visits to this website or other websites.</p>
    </div>
);

export default PrivacyPolicy;
