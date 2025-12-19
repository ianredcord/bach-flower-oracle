import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ShareCard } from "./ShareCard";
import { useRef, useState } from "react";
import { toPng } from 'html-to-image';
import { Loader2, Share2, Facebook, Instagram } from "lucide-react";

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
  const [isFbGenerating, setIsFbGenerating] = useState(false);

  const shareUrl = window.location.href;
  const shareText = `我抽到了「${remedy.name_zh}」，它給我的指引是：${remedy.positive}\n\n✨ 牟尼巴哈花精指引 ✨\n${shareUrl}`;

  const handleInstagramShare = async () => {
    // Copy text to clipboard
    try {
      await navigator.clipboard.writeText(shareText);
      alert('已複製指引文字！即將開啟 Instagram，您可以直接貼上分享。');
      
      // Try to open Instagram app or website
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      if (isMobile) {
        window.location.href = 'instagram://story-camera';
        // Fallback to web if app not installed (after a short delay)
        setTimeout(() => {
          window.open('https://www.instagram.com/', '_blank');
        }, 500);
      } else {
        window.open('https://www.instagram.com/', '_blank');
      }
    } catch (err) {
      console.error('Failed to copy text: ', err);
      alert('複製失敗，請手動複製文字後分享。');
    }
  };

  const handleFacebookShare = async () => {
    if (!shareCardRef.current) return;
    
    setIsFbGenerating(true);
    
    try {
      // 1. Generate Image
      try {
        await Promise.race([
          document.fonts.ready,
          new Promise((_, reject) => setTimeout(() => reject(new Error('Font load timeout')), 2000))
        ]);
      } catch (e) {
        console.warn('Font loading timed out, proceeding anyway');
      }

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

      // 2. Try Web Share API (Mobile)
      if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          files: [file],
          // Facebook often ignores text when sharing files, but we include it just in case
          // or for other apps if user selects them from the share sheet
        });
      } else {
        // 3. Fallback for Desktop: Download image + Open Facebook
        const link = document.createElement('a');
        link.download = fileName;
        link.href = dataUrl;
        link.click();
        
        alert('圖片已下載！即將開啟 Facebook，請手動上傳圖片分享。');
        window.open('https://www.facebook.com/', '_blank');
      }
    } catch (error) {
      console.error('FB Share failed:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      alert(`分享失敗 (${errorMessage})，請嘗試使用下方「下載/分享圖片」按鈕。`);
    } finally {
      setIsFbGenerating(false);
    }
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
                onClick={handleInstagramShare}
                className="bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-90 text-white rounded-full h-12 text-base font-medium"
              >
                <Instagram className="mr-2 h-5 w-5" />
                IG 分享
              </Button>
              <Button 
                onClick={handleFacebookShare}
                disabled={isFbGenerating}
                className="bg-[#1877F2] hover:bg-[#166fe5] text-white rounded-full h-12 text-base font-medium"
              >
                {isFbGenerating ? (
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                ) : (
                  <Facebook className="mr-2 h-5 w-5" />
                )}
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
