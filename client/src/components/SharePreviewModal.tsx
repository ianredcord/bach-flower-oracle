import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ShareCard } from "./ShareCard";
import { useRef, useState } from "react";
import { toPng, toBlob } from 'html-to-image';
import { Loader2, Share2, Download } from "lucide-react";

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

  const handleShare = async () => {
    if (!shareCardRef.current) return;

    try {
      setIsGenerating(true);
      
      // Wait a bit for images to load
      await new Promise(resolve => setTimeout(resolve, 500));

      // Use toBlob directly for better performance, but fallback to toPng if needed
      let blob: Blob | null = null;
      
      try {
        // Try toBlob first
        blob = await toBlob(shareCardRef.current, {
          quality: 0.95,
          backgroundColor: '#F9F7F2',
          cacheBust: true,
          pixelRatio: 2,
        });
      } catch (e) {
        console.warn('toBlob failed, falling back to toPng', e);
        // Fallback to toPng -> fetch -> blob
        const dataUrl = await toPng(shareCardRef.current, {
          quality: 0.95,
          backgroundColor: '#F9F7F2',
          cacheBust: true,
          pixelRatio: 2,
        });
        const res = await fetch(dataUrl);
        blob = await res.blob();
      }

      if (!blob) throw new Error('無法生成圖片');

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
        link.href = URL.createObjectURL(blob);
        link.click();
        
        // Clean up
        setTimeout(() => URL.revokeObjectURL(link.href), 1000);
      }
      
      onClose();
    } catch (error) {
      console.error('Share failed:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      alert(`分享失敗 (${errorMessage})，請嘗試長按圖片儲存。`);
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
          <div className="relative shadow-xl rounded-xl overflow-hidden transform scale-90 sm:scale-100 origin-top">
            <div ref={shareCardRef}>
              <ShareCard remedy={remedy} />
            </div>
          </div>

          <div className="flex gap-3 w-full max-w-xs">
            <Button 
              onClick={handleShare} 
              disabled={isGenerating}
              className="flex-1 bg-primary hover:bg-primary/90 text-white rounded-full h-12 text-lg font-serif"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  處理中...
                </>
              ) : (
                <>
                  <Share2 className="mr-2 h-5 w-5" />
                  分享圖片
                </>
              )}
            </Button>
          </div>
          
          <p className="text-xs text-stone-400 text-center pb-4">
            如果分享按鈕沒有反應，您可以直接長按上方圖片進行儲存
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
