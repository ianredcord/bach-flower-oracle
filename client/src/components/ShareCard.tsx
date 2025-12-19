import { QRCodeSVG } from 'qrcode.react';
import { forwardRef, useEffect, useState } from 'react';
import { Remedy } from '../data/types';


interface ShareCardProps {
  remedy: Remedy;
}

// Helper to convert image URL to Base64
const toBase64 = (url: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(img, 0, 0);
        resolve(canvas.toDataURL('image/png'));
      } else {
        reject(new Error('Canvas context is null'));
      }
    };
    img.onerror = (error) => reject(error);
    img.src = url;
  });
};

export const ShareCard = forwardRef<HTMLDivElement, ShareCardProps>(({ remedy }, ref) => {
  const currentUrl = window.location.href;
  const [bgBase64, setBgBase64] = useState<string>('');
  const [flowerBase64, setFlowerBase64] = useState<string>('');

  useEffect(() => {
    // Pre-load background image as Base64
    toBase64('/images/hero-bg.png')
      .then(setBgBase64)
      .catch(err => console.error('Failed to load bg:', err));

    // Pre-load flower image as Base64
    toBase64(`/images/flowers/${remedy.id}.png`)
      .then(setFlowerBase64)
      .catch(err => console.error('Failed to load flower:', err));
  }, [remedy.id]);

  return (
      <div
        ref={ref}
        className="w-[1080px] h-[1920px] bg-[#F9F7F2] flex flex-col items-center justify-between py-32 px-16 relative overflow-hidden"
        style={{ 
          fontFamily: '"Noto Serif TC", serif',
          // Ensure background color is explicitly set for image generation
          backgroundColor: '#F9F7F2',
        }}
      >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        {bgBase64 && (
          <img 
            src={bgBase64} 
            alt="" 
            className="w-full h-full object-cover" 
          />
        )}
      </div>
      
      {/* Header */}
      <div className="z-10 text-center space-y-6">
        <h2 className="text-5xl text-[#6B8E6B] tracking-[0.2em] font-medium">牟尼巴哈花精指引</h2>
        <div className="w-16 h-1 bg-[#6B8E6B]/30 mx-auto rounded-full" />
      </div>

      {/* Main Content */}
      <div className="z-10 flex flex-col items-center space-y-16 w-full max-w-2xl">
        {/* Card Visual */}
        <div className="relative w-[600px] aspect-[2/3] bg-white rounded-[40px] shadow-2xl p-12 flex flex-col items-center justify-center border border-[#E8E4D9]">
          <div className="absolute inset-4 border border-[#E8E4D9] rounded-[32px] pointer-events-none" />
          
          <h1 className="text-7xl font-bold text-[#5C7A5C] mb-4">{remedy.name_zh}</h1>
          <p className="text-4xl text-[#8C9E8C] italic font-serif mb-12">{remedy.name_en}</p>
          
          <div className="w-64 h-64 mb-12 rounded-full overflow-hidden border-4 border-[#F9F7F2] shadow-inner bg-[#F9F7F2]">
            {flowerBase64 && (
              <img 
                src={flowerBase64} 
                alt={remedy.name_en} 
                className="w-full h-full object-cover"
              />
            )}
          </div>

          <div className="text-center space-y-6 w-full px-8">
            {/* Emotion */}
            <div className="space-y-3 mb-8">
              <p className="text-2xl text-[#A6A6A6] uppercase tracking-widest">Current Emotion</p>
              <p className="text-3xl text-[#6B8E6B] font-medium leading-relaxed">
                {remedy.emotion}
              </p>
            </div>

            {/* Positive */}
            <div className="space-y-3">
              <p className="text-2xl text-[#A6A6A6] uppercase tracking-widest">Positive Transformation</p>
              <p className="text-4xl text-[#4A5D4A] font-medium leading-relaxed">
                {remedy.positive}
              </p>
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="text-center space-y-4">
          <p className="text-3xl text-[#6B8E6B] tracking-widest">今日指引</p>
          <p className="text-2xl text-[#8C9E8C]">願花精的能量陪伴你，找回內心的平靜</p>
        </div>
      </div>

      {/* Footer with QR Code */}
      <div className="z-10 flex flex-col items-center space-y-6 bg-white/50 p-8 rounded-3xl backdrop-blur-sm border border-[#E8E4D9]">
        <div className="p-4 bg-white rounded-2xl shadow-sm">
          <QRCodeSVG value={currentUrl} size={160} fgColor="#4A5D4A" />
        </div>
        <p className="text-2xl text-[#6B8E6B] tracking-wider font-medium">掃描抽牌</p>
      </div>
    </div>
  );
});

ShareCard.displayName = 'ShareCard';
