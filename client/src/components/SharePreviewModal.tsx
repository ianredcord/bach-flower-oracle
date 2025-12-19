import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ShareCard } from "./ShareCard";
import { useRef, useState } from "react";
import { toPng } from 'html-to-image';
import { Loader2, Share2, Facebook } from "lucide-react";

// Custom Line Icon since lucide-react might not have it
const LineIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} height="1em" width="1em">
    <path d="M20.3 10c0-4.4-4.2-8-9.3-8S1.7 5.6 1.7 10c0 4 3.4 7.4 8.2 7.9.3 0 .7.2.8.5v1.9c0 .3-.1.6-.4.6-.2 0-.3 0-.4-.1-1.6-.9-4.3-2.7-5.9-4.6-.2-.2-.5-.3-.8-.1-.3.2-.3.5-.1.8 1.9 2.3 5.2 4.6 7.9 4.6 5.1 0 9.3-3.6 9.3-8zm-14.6 2.3c-.4 0-.7-.3-.7-.7V9.3c0-.4.3-.7.7-.7s.7.3.7.7v1.6h1.6c.4 0 .7.3.7.7s-.3.7-.7.7h-2.3zm4.2 0c-.4 0-.7-.3-.7-.7V9.3c0-.4.3-.7.7-.7s.7.3.7.7v2.3c0 .4.3.7.7.7zm4.2 0c-.4 0-.7-.3-.7-.7V9.3c0-.4.3-.7.7-.7s.7.3.7.7v1.2l-1.7-1.9c-.2-.2-.4-.3-.6-.3-.4 0-.7.3-.7.7v2.3c0 .4.3.7.7.7s.7-.3.7-.7v-1.2l1.7 1.9c.2.2.4.3.6.3.4 0 .7-.3.7-.7zm4.2 0c-.4 0-.7-.3-.7-.7V9.3c0-.4.3-.7.7-.7s.7.3.7.7v1.6h1.6c.4 0 .7.3.7.7s-.3.7-.7.7h-2.3z" />
  </svg>
);

interface Remedy {
  id: number;
  name_en: string;
  name_zh: string;
  category: string;
  emotion: string;
  positive: string;
}

interface SharePreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  remedy: Remedy;
}

export function SharePreviewModal({ isOpen, onClose, remedy }: SharePreviewModalProps) {
  const shareCardRef = useRef<HTMLDivElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const shareUrl = window.location.href;
  const shareText = `我抽到了「${remedy.name_zh}」，它給我的指引是：${remedy.positive}\n\n✨ 牟尼巴哈花精指引 ✨\n${shareUrl}`;

  const handleLineShare = () => {
    const url = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;
    window.open(url, '_blank');
  };

  const handleFacebookShare = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`;
    window.open(url, '_blank');
  };

  const handleImageShare = async () => {
    if (!shareCardRef.current) return;
    
    setIsGenerating(true);
    
    try {
      // Wait for fonts with timeout
      try {
        await Promise.race([
          document.fonts.ready,
          new Promise((_, reject) => setTimeout(() => reject(new Error('Font load timeout')), 2000))
        ]);
      } catch (e) {
        console.warn('Font loading timed out, proceeding anyway');
      }

      // Generate image with timeout
      const dataUrl = await Promise.race([
        toPng(shareCardRef.current, {
          quality: 0.8,
          backgroundColor: '#F9F7F2',
          cacheBust: true,
          pixelRatio: 1,
          filter: (node) => !node.classList?.contains('exclude-from-capture'),
        }),
        new Promise<string>((_, reject) => setTimeout(() => reject(new Error('Image generation timeout')), 5000))
      ]);

      const res = await fetch(dataUrl);
      const blob = await res.blob();
      const fileName = `bach-flower-${remedy.name_en.toLowerCase().replace(/\s+/g, '-')}.png`;
      const file = new File([blob], fileName, { type: 'image/png' });

      // Check if Web Share API is supported
      if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          title: '牟尼巴哈花精指引',
          text: `我抽到了「${remedy.name_zh}」，它給我的指引是：${remedy.positive}`,
          files: [file],
        });
      } else {
        // Fallback to download
        const link = document.createElement('a');
        link.download = fileName;
        link.href = dataUrl;
        link.click();
      }
    } catch (error) {
      console.error('Image generation/share failed:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      alert(`圖片生成失敗 (${errorMessage})，請嘗試截圖分享。`);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md w-[95vw] max-h-[90vh] overflow-y-auto bg-[#F9F7F2] border-none p-0">
        <DialogHeader className="p-4 pb-0">
          <DialogTitle className="text-center text-primary font-serif">分享今日指引</DialogTitle>
        </DialogHeader>
        
        <div className="flex flex-col items-center p-4 gap-6">
          {/* Preview Area */}
          <div className="relative shadow-xl rounded-xl overflow-hidden transform scale-90 sm:scale-100 origin-top">
            <div ref={shareCardRef}>
              <ShareCard remedy={remedy} />
            </div>
          </div>

          {/* Quick Share Buttons */}
          <div className="w-full max-w-xs space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <Button 
                onClick={handleLineShare}
                className="bg-[#06C755] hover:bg-[#05b34c] text-white rounded-full h-12 text-base font-medium"
              >
                <LineIcon className="mr-2 h-5 w-5" />
                Line 分享
              </Button>
              <Button 
                onClick={handleFacebookShare}
                className="bg-[#1877F2] hover:bg-[#166fe5] text-white rounded-full h-12 text-base font-medium"
              >
                <Facebook className="mr-2 h-5 w-5" />
                FB 分享
              </Button>
            </div>

            <div className="relative py-2">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-stone-300" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-[#F9F7F2] px-2 text-stone-500">或</span>
              </div>
            </div>

            <Button 
              onClick={handleImageShare} 
              disabled={isGenerating}
              variant="outline"
              className="w-full border-primary text-primary hover:bg-primary/5 rounded-full h-12 text-base font-serif"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  生成圖片中...
                </>
              ) : (
                <>
                  <Share2 className="mr-2 h-5 w-5" />
                  下載 / 分享圖片
                </>
              )}
            </Button>
          </div>
          
          <p className="text-xs text-stone-400 text-center pb-4">
            點擊上方按鈕即可快速分享連結，或選擇生成圖片分享
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
