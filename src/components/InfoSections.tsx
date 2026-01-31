import React from 'react';

export const FeaturesSection: React.FC = () => (
    <section className="info-card glass p-8 mt-8">
        <h2 className="text-2xl font-bold mb-4 title-gradient">Key Features of Image Optimizer Pro</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="feature">
                <h3 className="font-semibold text-lg mb-2">🚀 Super Fast WebP Conversion</h3>
                <p className="text-sm text-dim">Convert your traditional JPG and PNG images to the modern WebP format instantly. Reduce file size without sacrificing visual quality.</p>
            </div>
            <div className="feature">
                <h3 className="font-semibold text-lg mb-2">🔒 Privacy First (Local Processing)</h3>
                <p className="text-sm text-dim">Your images never leave your computer. All processing happens locally in your browser, ensuring maximum security and data privacy.</p>
            </div>
            <div className="feature">
                <h3 className="font-semibold text-lg mb-2">⚡ Bulk Optimization</h3>
                <p className="text-sm text-dim">Upload hundreds of images at once. Our tool processes them in parallel, saving you hours of manual work.</p>
            </div>
        </div>
    </section>
);

export const FAQSection: React.FC = () => (
    <section className="info-card glass p-8 mt-6">
        <h2 className="text-2xl font-bold mb-4 title-gradient">Frequently Asked Questions</h2>
        <div className="space-y-4">
            <div className="faq-item">
                <h4 className="font-semibold">Why should I use WebP instead of JPEG?</h4>
                <p className="text-sm text-dim">WebP images are typically 25-35% smaller than JPEG images at equal quality. Smaller images mean faster page loads and better SEO for your website.</p>
            </div>
            <div className="faq-item">
                <h4 className="font-semibold">Is this tool free for commercial use?</h4>
                <p className="text-sm text-dim">Yes, Image Optimizer Pro is completely free to use for both personal and commercial projects unlimited times.</p>
            </div>
            <div className="faq-item">
                <h4 className="font-semibold">Does it work on mobile devices?</h4>
                <p className="text-sm text-dim">Absolutely. Our interface is fully responsive and works perfectly on smartphones and tablets, allowing you to optimize images on the go.</p>
            </div>
        </div>
    </section>
);

export const GuideSection: React.FC = () => (
    <section className="info-card glass p-8 mt-6">
        <h2 className="text-2xl font-bold mb-4 title-gradient">How to Optimize Your Images</h2>
        <ol className="list-decimal list-inside space-y-2 text-dim">
            <li><strong>Upload:</strong> Drag and drop your image files into the upload box above.</li>
            <li><strong>Configure:</strong> Adjust the quality slider and set a maximum size if needed.</li>
            <li><strong>Convert:</strong> Choose your target format (WebP is recommended for the web).</li>
            <li><strong>Download:</strong> Save your optimized files individually or as a batch ZIP.</li>
        </ol>
    </section>
);
