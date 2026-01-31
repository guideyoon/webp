import React from 'react';

const Terms: React.FC = () => (
    <div className="legal-page glass p-10 mt-8">
        <h1 className="text-3xl font-bold mb-6 title-gradient">Terms of Service</h1>
        <p className="mb-4">By using Image Optimizer Pro, you agree to the following terms.</p>

        <h2 className="text-xl font-bold mt-6 mb-2">1. Acceptable Use</h2>
        <p className="text-dim mb-4">You are free to use this tool for any personal or commercial purpose. Any attempt to disrupt the service or use it for malicious intent is prohibited.</p>

        <h2 className="text-xl font-bold mt-6 mb-2">2. No Warranty</h2>
        <p className="text-dim mb-4">This tool is provided "as is" without any warranties. While we strive for the best results, we are not responsible for any data loss or quality issues resulting from the use of this software.</p>

        <h2 className="text-xl font-bold mt-6 mb-2">3. Limitation of Liability</h2>
        <p className="text-dim mb-4">In no event shall Image Optimizer Pro be liable for any damages arising out of the use or inability to use the tool.</p>
    </div>
);

export default Terms;
