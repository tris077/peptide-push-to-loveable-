import { removeBackground, loadImageFromUrl } from './backgroundRemoval';
import bpc157BottleUrl from '@/assets/bpc157-bottle.png';

export const processBottleImage = async (): Promise<string> => {
  try {
    console.log('Loading BPC-157 bottle image...');
    const image = await loadImageFromUrl(bpc157BottleUrl);
    
    console.log('Removing background...');
    const processedBlob = await removeBackground(image);
    
    // Convert blob to data URL for immediate use
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(processedBlob);
    });
  } catch (error) {
    console.error('Failed to process bottle image:', error);
    // Fallback to original image
    return bpc157BottleUrl;
  }
};