import { useState, useEffect } from 'react';
import { processBottleImage } from '@/utils/processBottleImage';
import bpc157BottleUrl from '@/assets/bpc157-bottle.png';

interface ProcessedBottleImageProps {
  peptideName: string;
  className?: string;
  alt?: string;
}

export const ProcessedBottleImage = ({ peptideName, className, alt }: ProcessedBottleImageProps) => {
  const [processedImageUrl, setProcessedImageUrl] = useState<string>(bpc157BottleUrl);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    if (peptideName.toLowerCase().includes('bpc-157') || peptideName.toLowerCase().includes('bpc 157')) {
      setIsProcessing(true);
      processBottleImage()
        .then(setProcessedImageUrl)
        .finally(() => setIsProcessing(false));
    }
  }, [peptideName]);

  const shouldUseBPC157 = peptideName.toLowerCase().includes('bpc-157') || peptideName.toLowerCase().includes('bpc 157');

  if (!shouldUseBPC157) {
    return null;
  }

  return (
    <div className="relative">
      <img 
        src={processedImageUrl} 
        alt={alt || `${peptideName} bottle`}
        className={className}
      />
      {isProcessing && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded">
          <div className="text-xs text-muted-foreground">Processing...</div>
        </div>
      )}
    </div>
  );
};