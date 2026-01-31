import React, { useState } from 'react';
import Layout from './Layout';
import { useImageOptimizer } from './utils/optimizer';
import type { OptimizedImage } from './utils/optimizer';
import { Upload, Settings, Download, X, Image as ImageIcon, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

import { FeaturesSection, FAQSection, GuideSection } from './components/InfoSections';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';

const App: React.FC = () => {
  const { optimize, isProcessing } = useImageOptimizer();
  const [images, setImages] = useState<OptimizedImage[]>([]);
  const [quality, setQuality] = useState(80);
  const [maxSize, setMaxSize] = useState(1600);
  const [format, setFormat] = useState('webp');
  const [batchRange, setBatchRange] = useState('');

  // Simple state-based routing
  const [path, setPath] = useState(window.location.pathname);

  // Sync state with browser navigation (simple version)
  React.useEffect(() => {
    const handleLocationChange = () => setPath(window.location.pathname);
    window.addEventListener('popstate', handleLocationChange);

    // Intercept link clicks
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.origin === window.location.origin) {
        e.preventDefault();
        window.history.pushState({}, '', target.pathname);
        setPath(target.pathname);
        window.scrollTo(0, 0);
      }
    };
    document.addEventListener('click', handleLinkClick);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;

    const results: OptimizedImage[] = [];
    for (const file of files) {
      try {
        const result = await optimize(file, { quality, maxWidthOrHeight: maxSize, format });
        results.push(result);
      } catch (err) {
        console.error(err);
      }
    }
    setImages(prev => [...prev, ...results]);
    if (results.length > 0) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#9d50bb', '#6e48aa', '#00f2fe']
      });
    }
  };

  const removeImage = (id: string) => {
    setImages(prev => prev.filter(img => img.id !== id));
  };

  const downloadAll = async () => {
    // Basic implementation: trigger clicks for all
    // For a real production app, we'd use JSZip, but keeping it simple as requested
    for (const img of images) {
      const link = document.createElement('a');
      link.href = img.dataUrl;
      link.download = img.name;
      link.click();
    }
  };

  const downloadPair = (img: OptimizedImage) => {
    // Specific naming convention: l{num}_left.webp / l{num}_right.webp
    const num = batchRange || '10';
    const leftName = `l${num}_left.webp`;
    const rightName = `l${num}_right.webp`;

    [leftName, rightName].forEach(name => {
      const link = document.createElement('a');
      link.href = img.dataUrl;
      link.download = name;
      link.click();
    });
  };

  const renderContent = () => {
    if (path === '/privacy') return <PrivacyPolicy />;
    if (path === '/terms') return <Terms />;

    return (
      <>
        <div className="app-grid">
          {/* 업로드 섹션 */}
          <section className="glass p-6 flex flex-col gap-4">
            <div className="flex items-center gap-2 mb-2">
              <Upload size={20} className="text-secondary" />
              <h2 className="text-xl font-bold">이미지 업로드</h2>
            </div>
            <label className="upload-dropzone">
              <input type="file" multiple accept="image/*" onChange={handleFileUpload} hidden />
              <div className="flex flex-col items-center gap-2">
                <Upload size={48} className="text-dim opacity-50" />
                <p>파일을 여기로 끌어다 놓거나 <span className="text-secondary font-semibold">찾아보기</span></p>
                <p className="text-xs text-dim">JPG, PNG, WebP, AVIF 지원</p>
              </div>
            </label>
          </section>

          {/* 설정 섹션 */}
          <section className="glass p-6">
            <div className="flex items-center gap-2 mb-4">
              <Settings size={20} className="text-secondary" />
              <h2 className="text-xl font-bold">최적화 설정</h2>
            </div>
            <div className="flex flex-col gap-4">
              <div className="setting-item">
                <label>압축 품질 ({quality}%)</label>
                <input
                  type="range" min="10" max="100" value={quality}
                  onChange={(e) => setQuality(Number(e.target.value))}
                />
              </div>
              <div className="setting-item">
                <label>최대 긴 변 크기 (px)</label>
                <input
                  type="number" value={maxSize}
                  onChange={(e) => setMaxSize(Number(e.target.value))}
                  placeholder="0 입력 시 원본 크기 유지"
                />
              </div>
              <div className="setting-item">
                <label>대상 형식</label>
                <select value={format} onChange={(e) => setFormat(e.target.value)}>
                  <option value="webp">WebP (최적화 권장)</option>
                  <option value="jpg">JPEG</option>
                </select>
              </div>
              <div className="setting-item">
                <label>일괄 명명 (시작 번호)</label>
                <input
                  type="text" value={batchRange}
                  onChange={(e) => setBatchRange(e.target.value)}
                  placeholder="예: 10"
                />
              </div>
            </div>
          </section>

          {/* 결과 섹션 */}
          <section className="col-span-full">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <CheckCircle size={20} className="text-accent" />
                <h2 className="text-xl font-bold">처리 결과 ({images.length})</h2>
              </div>
              {images.length > 0 && (
                <button className="btn-primary" onClick={downloadAll}>
                  <Download size={18} /> 전체 다운로드
                </button>
              )}
            </div>

            <div className="results-list">
              <AnimatePresence>
                {images.map((img) => (
                  <motion.div
                    key={img.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="result-card glass"
                  >
                    <img src={img.dataUrl} alt={img.name} className="result-thumb" />
                    <div className="result-info">
                      <p className="font-semibold truncate">{img.name}</p>
                      <p className="text-xs text-dim">
                        {img.origDim} → {img.newDim} |
                        {(img.newSize / 1024).toFixed(1)} KB (
                        <span className="text-accent">
                          -{Math.round((1 - img.newSize / img.origSize) * 100)}% 절감
                        </span>)
                      </p>
                    </div>
                    <div className="result-actions">
                      <button onClick={() => downloadPair(img)} title="좌/우 쌍으로 다운로드">
                        <Download size={18} />
                      </button>
                      <button onClick={() => removeImage(img.id)} className="text-red-400">
                        <X size={18} />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              {images.length === 0 && !isProcessing && (
                <div className="text-center p-12 glass opacity-50">
                  <ImageIcon size={48} className="mx-auto mb-2" />
                  <p>처리된 이미지가 없습니다.</p>
                </div>
              )}
              {isProcessing && (
                <div className="text-center p-12">
                  <div className="spinner mx-auto mb-2"></div>
                  <p>최적화 진행 중...</p>
                </div>
              )}
            </div>
          </section>
        </div>

        {/* SEO 정보 섹션 */}
        <GuideSection />
        <FeaturesSection />
        <FAQSection />
      </>
    );
  };

  return (
    <Layout>
      {renderContent()}

      <style>{`
        .app-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        @media (max-width: 768px) {
          .app-grid { 
            grid-template-columns: 1fr; 
            gap: 1.5rem;
          }
        }

        .col-span-full { grid-column: 1 / -1; }

        .p-6 { padding: 1.5rem; }
        .flex { display: flex; }
        .flex-col { flex-direction: column; }
        .items-center { align-items: center; }
        .justify-between { justify-content: space-between; }
        .gap-2 { gap: 0.5rem; }
        .gap-4 { gap: 1rem; }
        .mb-2 { margin-bottom: 0.5rem; }
        .mb-4 { margin-bottom: 1rem; }
        .text-xl { font-size: 1.25rem; }
        .font-bold { font-weight: 700; }
        .font-semibold { font-weight: 600; }
        .truncate { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .text-xs { font-size: 0.75rem; }
        .text-dim { color: var(--text-dim); }
        .text-accent { color: var(--accent); }
        .text-secondary { color: var(--secondary); }

        .upload-dropzone {
          border: 2px dashed var(--glass-border);
          border-radius: var(--card-radius);
          padding: clamp(1.5rem, 5vw, 3rem);
          text-align: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .upload-dropzone:hover {
          background: rgba(255,255,255,0.05);
          border-color: var(--secondary);
        }

        .setting-item {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .setting-item label {
          font-size: 0.9rem;
          font-weight: 500;
        }

        .setting-item input[type="range"] {
          accent-color: var(--primary);
        }

        .setting-item input[type="number"],
        .setting-item input[type="text"],
        .setting-item select {
          padding: 0.6rem;
          border-radius: 8px;
          background: rgba(0,0,0,0.2);
          border: 1px solid var(--glass-border);
          color: white;
          outline: none;
        }

        .btn-primary {
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          color: white;
          padding: 0.6rem 1.2rem;
          border-radius: 12px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          border: none;
          cursor: pointer;
          transition: transform 0.2s;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          filter: brightness(1.1);
        }

        .results-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .result-card {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 1rem;
        }

        .result-thumb {
          width: 60px;
          height: 60px;
          object-fit: cover;
          border-radius: 12px;
        }

        .result-info {
          flex: 1;
        }

        .result-actions {
          display: flex;
          gap: 1rem;
        }

        .result-actions button {
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          opacity: 0.6;
          transition: opacity 0.2s;
        }

        .result-actions button:hover {
          opacity: 1;
        }

        .spinner {
          width: 30px;
          height: 30px;
          border: 3px solid rgba(255,255,255,0.1);
          border-top-color: var(--accent);
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </Layout>
  );
};

export default App;
