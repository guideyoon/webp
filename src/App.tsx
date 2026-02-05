import React, { useState } from 'react';
import Layout from './Layout';
import { useImageOptimizer } from './utils/optimizer';
import type { OptimizedImage } from './utils/optimizer';
import { Download, Trash2, Image as ImageIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import JSZip from 'jszip';

import { FeaturesSection, FAQSection, GuideSection } from './components/InfoSections';

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
  const [isDragging, setIsDragging] = useState(false);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      processFiles(Array.from(e.target.files));
      e.target.value = '';
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processFiles(Array.from(e.dataTransfer.files));
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const processFiles = (files: File[]) => {
    const newPending = files.map(file => ({
      file,
      preview: URL.createObjectURL(file)
    }));
    setPendingFiles(prev => [...prev, ...newPending]);
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
    const img = images.find(img => img.id === id);
    if (img) URL.revokeObjectURL(img.dataUrl);
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
      zip.file(img.name, img.blob);
    });
    const content = await zip.generateAsync({ type: 'blob' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(content);
    link.download = `optimized_images_${new Date().getTime()}.zip`;
    link.click();
    setTimeout(() => URL.revokeObjectURL(link.href), 100);
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
  };

  const formatSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  };

  return (
    <Layout>
      <div className="tool-container">
        <div
          className={`upload-box ${isProcessing ? 'processing' : ''} ${isDragging ? 'dragging' : ''}`}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
        >
          <label className="upload-label">
            <input type="file" multiple accept="image/webp,image/png,image/jpeg" onChange={handleFileUpload} hidden disabled={isProcessing} />
            <div className="upload-content">
              <div className="cloud-icon">{isProcessing ? '⏳' : '☁️'}</div>
              <p className="upload-text">{isProcessing ? '변환 중입니다...' : '파일을 끌어다 놓거나 클릭하여 선택하세요'}</p>
              <p className="upload-subtext">{isProcessing ? '잠시만 기다려주세요.' : 'WebP, PNG, JPG (최대 10MB)'}</p>
            </div>
          </label>
        </div>

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
            <input type="range" min="10" max="100" value={quality} onChange={(e) => setQuality(Number(e.target.value))} className="quality-range" />
          </div>
          <div className="option-row">
            <label>최대 크기 (px)</label>
            <input type="number" value={maxSize} onChange={(e) => setMaxSize(Number(e.target.value))} className="format-select" />
          </div>
        </div>

        {pendingFiles.length > 0 && !isProcessing && (
          <div className="mb-10">
            <h3 className="list-title">변환 대기 목록 ({pendingFiles.length})</h3>
            <div className="card-list">
              {pendingFiles.map((item, i) => (
                <div key={i} className="list-card">
                  <div className="card-left">
                    <img src={item.preview} className="card-thumb thumb-img" alt="" style={{ width: 40, height: 40, borderRadius: 8 }} />
                    <div className="card-info">
                      <p className="card-name">{item.file.name}</p>
                      <span className="card-size-label">{formatSize(item.file.size)}</span>
                    </div>
                  </div>
                  <button onClick={() => removePendingFile(i)} className="btn-icon-gray"><Trash2 size={16} /></button>
                </div>
              ))}
            </div>
            <button onClick={startConversion} className="btn-convert-now mt-6">🚀 지금 바로 변환하기</button>
          </div>
        )}

        {isProcessing && (
          <div className="loading-container">
            <div className="spinner mx-auto mb-4"></div>
            <h3 className="loading-title">이미지를 최적화하고 있어요</h3>
          </div>
        )}

        {images.length > 0 && (
          <div className="results-wrapper">
            <div className="results-header">
              <h3 className="list-title">변환 완료 ({images.length})</h3>
              <div className="results-actions">
                <button onClick={resetAll} className="btn-reset">초기화</button>
                <button onClick={downloadAll} className="btn-save-all">전체 저장</button>
              </div>
            </div>
            <div className="card-list">
              {images.map((img) => (
                <div key={img.id} className="list-card">
                  <div className="card-left">
                    <img src={img.dataUrl} className="card-thumb thumb-img" alt="" style={{ width: 40, height: 40, borderRadius: 8 }} />
                    <div className="card-info">
                      <p className="card-name">{img.name}</p>
                      <span className="size-new">{formatSize(img.newSize)}</span>
                    </div>
                  </div>
                  <div className="card-actions">
                    <button onClick={() => downloadPair(img)} className="btn-icon-indigo"><Download size={16} /></button>
                    <button onClick={() => removeImage(img.id)} className="btn-icon-gray"><Trash2 size={16} /></button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="info-area">
        <GuideSection />
        <FeaturesSection />
        <FAQSection />
      </div>

      <style>{`
                .tool-container { background: #fff; margin-bottom: 4rem; }
                .upload-box { background-color: #f8fafc; border: 2px dashed #e2e8f0; border-radius: 16px; padding: 3rem 1rem; text-align: center; cursor: pointer; position: relative; transition: all 0.2s ease; }
                .upload-box.dragging { background-color: #eef2ff; border-color: #6366f1; transform: scale(1.01); }
                .upload-box.processing { pointer-events: none; opacity: 0.7; }
                .cloud-icon { font-size: 3rem; margin-bottom: 1rem; }
                .upload-text { font-weight: 700; color: #1e293b; }
                .upload-subtext { font-size: 0.8rem; color: #64748b; }
                .options-area { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1.5rem; margin: 2rem 0; background: #f8fafc; padding: 1.5rem; border-radius: 12px; }
                @media (max-width: 640px) { .options-area { grid-template-columns: 1fr; } }
                .option-row label { display: block; font-size: 0.85rem; font-weight: 700; margin-bottom: 0.5rem; }
                .format-select { width: 100%; padding: 0.5rem; border-radius: 8px; border: 1px solid #cbd5e1; }
                .quality-range { width: 100%; transition: all 0.2s; }
                .list-card { display: flex; justify-content: space-between; align-items: center; padding: 0.75rem; border: 1px solid #f1f5f9; border-radius: 16px; margin-bottom: 0.5rem; }
                .card-left { display: flex; align-items: center; gap: 0.75rem; }
                .btn-convert-now { width: 100%; padding: 1rem; border-radius: 16px; background: #6366f1; color: #fff; font-weight: 800; border: none; cursor: pointer; }
                .btn-reset { padding: 0.5rem 1rem; border-radius: 10px; border: 1px solid #e2e8f0; background: #fff; cursor: pointer; }
                .btn-save-all { padding: 0.5rem 1.25rem; border-radius: 10px; background: #6366f1; color: #fff; border: none; cursor: pointer; }
                .btn-icon-gray, .btn-icon-indigo { width: 32px; height: 32px; border-radius: 8px; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; }
                .btn-icon-gray { background: #f8fafc; color: #94a3b8; }
                .btn-icon-indigo { background: #eef2ff; color: #6366f1; }
                .spinner { width: 40px; height: 40px; border: 4px solid #f3f3f3; border-top: 4px solid #6366f1; border-radius: 50%; animation: spin 1s linear infinite; }
                @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
                .info-area { display: flex; flex-direction: column; gap: 2rem; margin-top: 4rem; }
            `}</style>
    </Layout>
  );
};

export default App;
