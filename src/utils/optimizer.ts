import { useState, useCallback } from 'react';
import imageCompression from 'browser-image-compression';

export interface OptimizedImage {
    id: string;
    file: File;
    name: string;
    origSize: number;
    newSize: number;
    origDim: string;
    newDim: string;
    dataUrl: string;
    blob: Blob;
}

export const useImageOptimizer = () => {
    const [isProcessing, setIsProcessing] = useState(false);

    const optimize = useCallback(async (
        file: File,
        options: { quality: number, maxWidthOrHeight: number, format?: string }
    ): Promise<OptimizedImage> => {
        setIsProcessing(true);
        try {
            // 1. Get original dimensions
            const img = new Image();
            img.src = URL.createObjectURL(file);
            await new Promise((resolve) => (img.onload = resolve));
            const origDim = `${img.width}x${img.height}`;

            // 2. Optimization options
            let fileType = 'image/webp';
            if (options.format === 'jpg') fileType = 'image/jpeg';
            else if (options.format === 'png') fileType = 'image/png';

            const compressionOptions = {
                maxSizeMB: 1,
                maxWidthOrHeight: options.maxWidthOrHeight || undefined,
                useWebWorker: true,
                initialQuality: options.quality / 100,
                fileType: fileType
            };

            const compressedFile = await imageCompression(file, compressionOptions);

            // 3. Get new dimensions
            const compressedImg = new Image();
            const compressedUrl = URL.createObjectURL(compressedFile);
            compressedImg.src = compressedUrl;
            await new Promise((resolve) => (compressedImg.onload = resolve));
            const newDim = `${compressedImg.width}x${compressedImg.height}`;

            return {
                id: Math.random().toString(36).substr(2, 9),
                file: file,
                name: compressedFile.name,
                origSize: file.size,
                newSize: compressedFile.size,
                origDim,
                newDim,
                dataUrl: compressedUrl,
                blob: compressedFile
            };
        } catch (error) {
            console.error('Optimization failed:', error);
            throw error;
        } finally {
            setIsProcessing(false);
        }
    }, []);

    return { optimize, isProcessing };
};
