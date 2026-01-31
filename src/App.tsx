import React, { useState } from 'react';
import Layout from './Layout';
import { useImageOptimizer } from './utils/optimizer';
import type { OptimizedImage } from './utils/optimizer';
import { Download, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import JSZip from 'jszip';

import { FeaturesSection, FAQSection, GuideSection } from './components/InfoSections';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';

interface PendingFile {
  file: File;
  preview: string;
}

const App: React.FC = () => {
  const { optimize, isProcessing } = useImageOptimizer();
  const [images, setImages] = useState<OptimizedImage[]>([]);
  const [pendingFiles, setPendingFiles] = useState<PendingFile[]>([]);
  const [quality, setQuality] = useState(80);
  const [maxSize, setMaxSize] = useState(1600);
  const [format, setFormat] = useState('jpg');

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const files = Array.from(e.target.files);
      const newPending = files.map(file => ({
        file,
        preview: URL.createObjectURL(file)
      }));
      setPendingFiles(prev => [...prev, ...newPending]);
      e.target.value = '';
    }
  };

  const startConversion = async () => {
    if (pendingFiles.length === 0) return;

    const newOptimizedImages: OptimizedImage[] = [];

    for (const item of pendingFiles) {
      try {
        const result = await optimize(item.file, {
          quality: quality,
          maxWidthOrHeight: maxSize,
          format: format
        });
        newOptimizedImages.push(result);
        // Clean up preview URL
        URL.revokeObjectURL(item.preview);
      } catch (error) {
        console.error("Error optimizing file", item.file.name, error);
      }
    }

    setImages(prev => [...prev, ...newOptimizedImages]);
    setPendingFiles([]);

    if (newOptimizedImages.length > 0) {
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
    }
  };

  const removeImage = (id: string) => {
    setImages(images.filter(img => img.id !== id));
  };

  const removePendingFile = (index: number) => {
    const item = pendingFiles[index];
    URL.revokeObjectURL(item.preview);
    setPendingFiles(pendingFiles.filter((_, i) => i !== index));
  };

  const downloadAll = async () => {
    if (images.length === 0) return;
    const zip = new JSZip();
    images.forEach((img) => {
      const data = img.dataUrl.split(',')[1];
      zip.file(img.name, data, { base64: true });
    });
    const content = await zip.generateAsync({ type: 'blob' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(content);
    link.download = 'converted_images.zip';
    link.click();
  };

  const downloadPair = (img: OptimizedImage) => {
    const link = document.createElement('a');
    link.href = img.dataUrl;
    link.download = img.name;
    link.click();
  };

  const resetAll = () => {
    images.forEach(img => URL.revokeObjectURL(img.dataUrl));
    pendingFiles.forEach(item => URL.revokeObjectURL(item.preview));
    setImages([]);
    setPendingFiles([]);
    setQuality(80);
    setMaxSize(1600);
    setFormat('jpg');
  };

  const formatSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  };

  const renderContent = () => {
    const path = window.location.pathname;

    if (path === '/privacy') return <PrivacyPolicy />;
    if (path === '/terms') return <Terms />;

    return (
      <>
        <div className="tool-container">
          {/* 1. Upload Box */}
          <div className={`upload-box ${isProcessing ? 'processing' : ''}`}>
            <label className="upload-label">
              <input type="file" multiple accept="image/webp,image/png,image/jpeg" onChange={handleFileUpload} hidden disabled={isProcessing} />
              <div className="upload-content">
                <div className="cloud-icon">{isProcessing ? '⏳' : '☁️'}</div>
                <p className="upload-text">{isProcessing ? '변환 중입니다...' : '파일을 끌어다 놓거나 클릭하여 선택하세요'}</p>
                <p className="upload-subtext">{isProcessing ? '잠시만 기다려주세요.' : 'WebP, PNG, JPG (최대 10MB)'}</p>
              </div>
            </label>
          </div>
          <p className="small-note">Ctrl 또는 Shift 키를 누른 상태로 여러 파일을 선택할 수 있습니다.</p>

          {/* 2. Options */}
          <div className="options-area">
            <div className="option-row">
              <label>변환 형식:</label>
              <select value={format} onChange={(e) => setFormat(e.target.value)} className="format-select">
                <option value="jpg">JPG</option>
                <option value="png">PNG</option>
                <option value="webp">WebP</option>
              </select>
            </div>
            <div className="option-row">
              <label>품질 ({quality}%)</label>
              <input
                type="range" min="10" max="100" value={quality}
                onChange={(e) => setQuality(Number(e.target.value))}
                className="quality-range"
              />
            </div>
            <div className="option-row">
              <label>최대 크기 (px)</label>
              <input
                type="number" value={maxSize}
                onChange={(e) => setMaxSize(Number(e.target.value))}
                className="format-select"
              />
            </div>
          </div>

          {/* Pending Files List */}
          {pendingFiles.length > 0 && !isProcessing && (
            <div className="mb-10">
              <div className="list-title-container">
                <h3 className="list-title">
                  <span className="dot indigo"></span>
                  변환 대기 목록 ({pendingFiles.length})
                </h3>
              </div>
              <div className="card-list">
                {pendingFiles.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="list-card"
                  >
                    <div className="card-left">
                      <div className="card-thumb">
                        <img src={item.preview} className="thumb-img" alt="" />
                      </div>
                      <div className="card-info">
                        <p className="card-name">{item.file.name}</p>
                        <div className="card-meta">
                          <span className="badge-type">{item.file.name.split('.').pop()?.toUpperCase()}</span>
                          <span className="card-size-label">{formatSize(item.file.size)}</span>
                        </div>
                      </div>
                    </div>
                    <button onClick={() => removePendingFile(i)} className="btn-icon-gray">
                      <Trash2 size={16} />
                    </button>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6">
                <button onClick={startConversion} className="btn-convert-now">
                  🚀 지금 바로 변환하기
                </button>
              </div>
            </div>
          )}

          {/* Loading State */}
          {isProcessing && (
            <div className="loading-container">
              <div className="loading-spinner-box">
                <div className="spinner"></div>
                <div className="spinner-center">⏳</div>
              </div>
              <h3 className="loading-title">이미지를 최적화하고 있어요</h3>
              <p className="loading-sub">로컬에서 안전하게 변환 중입니다. 잠시만 기다려주세요!</p>
            </div>
          )}

          {/* 3. Results */}
          {images.length > 0 && (
            <div className="results-wrapper">
              <div className="results-header">
                <h3 className="list-title">
                  <span className="dot green"></span>
                  변환 완료 ({images.length})
                </h3>
                <div className="results-actions">
                  <button onClick={resetAll} className="btn-reset">초기화</button>
                  <button onClick={downloadAll} className="btn-save-all">전체 저장</button>
                </div>
              </div>
              <div className="card-list">
                <AnimatePresence>
                  {images.map((img) => (
                    <motion.div
                      key={img.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="list-card"
                    >
                      <div className="card-left">
                        <div className="card-thumb">
                          <img src={img.dataUrl} className="thumb-img" alt="" />
                        </div>
                        <div className="card-info">
                          <div className="name-with-badge">
                            <span className="card-name">{img.name}</span>
                            <span className="badge-saving">-{Math.round(((img.origSize - img.newSize) / img.origSize) * 100)}%</span>
                          </div>
                          <div className="card-size-compare">
                            <span className="size-old">{formatSize(img.origSize)}</span>
                            <span className="size-arrow">→</span>
                            <span className="size-new">{formatSize(img.newSize)}</span>
                          </div>
                        </div>
                      </div>
                      <div className="card-actions">
                        <button onClick={() => downloadPair(img)} className="btn-icon-indigo">
                          <Download size={16} />
                        </button>
                        <button onClick={() => removeImage(img.id)} className="btn-icon-gray">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          )}
        </div>

        <div className="info-area">
          <GuideSection />
          <FeaturesSection />
          <FAQSection />
        </div>
      </>
    );
  };

  return (
    <Layout>
      {renderContent()}

      <style>{`
        .tool-container {
            background: #fff;
            padding: 0;
            margin-bottom: 4rem;
        }
        .tool-header {
            margin-bottom: 0.5rem;
            text-align: center;
        }
        .tool-desc {
            margin-bottom: 2rem;
            text-align: center;
        }
        
        .upload-box {
            background-color: #f8fafc;
            border: 2px dashed #e2e8f0;
            border-radius: 16px;
            padding: 3rem 1rem;
            text-align: center;
            transition: all 0.2s;
            cursor: pointer;
            margin-bottom: 0.5rem;
            position: relative;
        }
        .upload-box:hover {
            border-color: #6366f1;
            background-color: #e0e7ff;
        }
        .upload-box.processing {
            pointer-events: none;
            opacity: 0.7;
        }
        .cloud-icon { font-size: 3rem; margin-bottom: 1rem; opacity: 0.8; }
        .upload-text { font-weight: 700; color: #1e293b; margin-bottom: 0.25rem; }
        .upload-subtext { font-size: 0.8rem; color: #64748b; }
        .small-note { font-size: 0.75rem; color: #94a3b8; margin-bottom: 2rem; text-align: center; }

        .options-area {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 1.5rem;
            margin-bottom: 2rem;
            background: #f8fafc;
            padding: 1.5rem;
            border-radius: 12px;
            border: 1px solid #f1f5f9;
        }
        @media (max-width: 640px) { .options-area { grid-template-columns: 1fr; } }
        .option-row label { display: block; font-size: 0.85rem; font-weight: 700; margin-bottom: 0.5rem; color: #475569; }
        .format-select { width: 100%; padding: 0.5rem; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 0.9rem; }
        .quality-range { width: 100%; height: 6px; appearance: none; background: #e2e8f0; border-radius: 999px; outline: none; }
        .quality-range::-webkit-slider-thumb { appearance: none; width: 18px; height: 18px; background: #6366f1; border-radius: 50%; cursor: pointer; border: 2px solid white; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }

        .list-title-container { margin-bottom: 1rem; padding: 0 0.5rem; }
        .list-title { display: flex; align-items: center; gap: 0.75rem; font-size: 1.1rem; font-weight: 800; color: #1e293b; }
        .dot { width: 8px; height: 24px; border-radius: 999px; }
        .dot.indigo { background: #6366f1; }
        .dot.green { background: #22c55e; }

        .card-list { display: flex; flex-direction: column; gap: 0.75rem; }
        .list-card {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: #fff;
            padding: 0.75rem;
            border: 1px solid #f1f5f9;
            border-radius: 16px;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03);
            transition: all 0.2s;
        }
        .list-card:hover { border-color: #6366f1; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); }
        .card-left { display: flex; align-items: center; gap: 0.75rem; flex: 1; min-width: 0; }
        .card-thumb { width: 40px; height: 40px; border-radius: 10px; background: #f8fafc; border: 1px solid #f1f5f9; overflow: hidden; flex-shrink: 0; display: flex; align-items: center; justify-content: center; }
        .thumb-img { width: 100%; height: 100%; object-fit: cover; }
        .card-info { flex: 1; min-width: 0; }
        .card-name { font-size: 0.85rem; font-weight: 700; color: #1e293b; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .card-meta { display: flex; align-items: center; gap: 0.5rem; margin-top: 2px; }
        .badge-type { font-size: 9px; font-weight: 800; color: #6366f1; background: #eef2ff; padding: 1px 4px; border-radius: 4px; }
        .card-size-label { font-size: 11px; color: #94a3b8; }

        .btn-convert-now {
            width: 100%; padding: 1rem; border-radius: 16px; background: #6366f1; color: #fff; font-size: 1.1rem; font-weight: 800; 
            border: none; cursor: pointer; box-shadow: 0 10px 15px -3px rgba(99, 102, 241, 0.2); transition: all 0.2s; 
        }
        .btn-convert-now:hover { background: #4f46e5; transform: translateY(-1px); }
        .btn-convert-now:active { transform: translateY(0); }

        .loading-container { padding: 3rem 0; text-align: center; background: #f8fafc; border: 2px dashed #e2e8f0; border-radius: 24px; margin-bottom: 2.5rem; }
        .loading-spinner-box { position: relative; display: inline-block; margin-bottom: 1.5rem; }
        .spinner { width: 64px; height: 64px; border: 4px solid #e2e8f0; border-top-color: #6366f1; border-radius: 50%; animation: spin 1s linear infinite; }
        .spinner-center { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; }
        @keyframes spin { to { transform: rotate(360deg); } }
        .loading-title { font-size: 1.25rem; font-weight: 900; color: #1e293b; margin-bottom: 0.5rem; }
        .loading-sub { color: #64748b; font-size: 0.95rem; }

        .results-wrapper { margin-top: 2.5rem; border-top: 1px solid #f1f5f9; padding-top: 2.5rem; }
        .results-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; padding: 0 0.5rem; }
        .results-actions { display: flex; gap: 0.75rem; }
        .btn-reset { padding: 0.5rem 1rem; border-radius: 10px; border: 1px solid #e2e8f0; color: #64748b; font-size: 0.85rem; font-weight: 700; background: #fff; cursor: pointer; }
        .btn-reset:hover { color: #ef4444; border-color: #fee2e2; background: #fff1f2; }
        .btn-save-all { padding: 0.5rem 1.25rem; border-radius: 10px; background: #6366f1; color: #fff; font-size: 0.85rem; font-weight: 800; border: none; cursor: pointer; box-shadow: 0 4px 6px -1px rgba(99, 102, 241, 0.2); }
        .btn-save-all:hover { background: #4f46e5; }

        .name-with-badge { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 2px; }
        .badge-saving { font-size: 9px; font-weight: 900; color: #15803d; background: #dcfce7; padding: 1px 6px; border-radius: 999px; }
        .card-size-compare { display: flex; align-items: center; gap: 0.5rem; }
        .size-old { font-size: 10px; color: #94a3b8; text-decoration: line-through; }
        .size-arrow { font-size: 10px; color: #cbd5e1; }
        .size-new { font-size: 11px; font-weight: 800; color: #6366f1; }

        .card-actions { display: flex; gap: 0.5rem; }
        .btn-icon-gray { width: 32px; height: 32px; border-radius: 8px; border: none; background: #f8fafc; color: #94a3b8; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.2s; }
        .btn-icon-gray:hover { background: #fee2e2; color: #ef4444; }
        .btn-icon-indigo { width: 32px; height: 32px; border-radius: 8px; border: none; background: #eef2ff; color: #6366f1; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.2s; }
        .btn-icon-indigo:hover { background: #6366f1; color: #fff; }

        .info-area { display: flex; flex-direction: column; gap: 2rem; }
      `}</style>
    </Layout>
  );
};

export default App;
