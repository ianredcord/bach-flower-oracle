import { useState, useEffect } from "react";
import { Card } from "@/components/Card";
import { AudioPlayer } from "@/components/AudioPlayer";
import { ShareCard } from "@/components/ShareCard";
import html2canvas from "html2canvas";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import remediesData from "@/data/remedies.json";
import { cn } from "@/lib/utils";

interface Remedy {
  id: number;
  name_en: string;
  name_zh: string;
  category: string;
  emotion: string;
  positive: string;
}

export default function Home() {
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const shareCardRef = useRef<HTMLDivElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const [shuffledRemedies, setShuffledRemedies] = useState<Remedy[]>([]);

  // Shuffle cards on mount
  useEffect(() => {
    shuffleCards();
  }, []);

  const shuffleCards = () => {
    const shuffled = [...remediesData.remedies].sort(() => Math.random() - 0.5);
    setShuffledRemedies(shuffled);
    setSelectedCards([]);
    setIsRevealed(false);
  };

  const handleCardClick = (index: number) => {
    if (isRevealed) return;

    if (selectedCards.includes(index)) {
      setSelectedCards([]);
    } else {
      setSelectedCards([index]);
    }
  };

  const handleReveal = () => {
    if (selectedCards.length > 0) {
      setIsRevealed(true);
    }
  };

  const handleShare = async () => {
    if (!shareCardRef.current) return;
    
    try {
      setIsGenerating(true);
      const canvas = await html2canvas(shareCardRef.current, {
        scale: 2, // Higher quality
        useCORS: true,
        backgroundColor: '#F9F7F2',
        allowTaint: true,
      });
      
      const selectedRemedy = shuffledRemedies[selectedCards[0]];
      const fileName = `bach-flower-${selectedRemedy.name_en.toLowerCase().replace(/\s+/g, '-')}.png`;
      
      // Convert canvas to blob
      const blob = await new Promise<Blob | null>(resolve => canvas.toBlob(resolve, 'image/png'));
      if (!blob) throw new Error('Failed to create image blob');

      // Check if Web Share API is supported and can share files
      if (navigator.share && navigator.canShare && navigator.canShare({ files: [new File([blob], fileName, { type: 'image/png' })] })) {
        const file = new File([blob], fileName, { type: 'image/png' });
        await navigator.share({
          title: '牟尼巴哈花精指引',
          text: `我抽到了「${selectedRemedy.name_zh}」，它給我的指引是：${selectedRemedy.positive}`,
          files: [file],
        });
      } else {
        // Fallback to download
        const link = document.createElement('a');
        link.download = fileName;
        link.href = canvas.toDataURL('image/png');
        link.click();
      }
    } catch (error) {
      console.error('Failed to share:', error);
      // Fallback to download if share fails
      try {
        const canvas = await html2canvas(shareCardRef.current!, {
          scale: 2,
          useCORS: true,
          backgroundColor: '#F9F7F2',
        });
        const selectedRemedy = shuffledRemedies[selectedCards[0]];
        const link = document.createElement('a');
        link.download = `bach-flower-${selectedRemedy.name_en.toLowerCase().replace(/\s+/g, '-')}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
      } catch (e) {
        console.error('Fallback download failed:', e);
      }
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F7F2] text-stone-800 font-sans overflow-x-hidden">
      <AudioPlayer />
      {/* Hero Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/images/hero-bg.png')] bg-cover bg-center opacity-30 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-[#F9F7F2]" />
      </div>

      <main className="relative z-10 container mx-auto px-4 py-8 min-h-screen flex flex-col items-center">
        {/* Header */}
        <header className="text-center mb-12 mt-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4 tracking-wide">
              牟尼巴哈花精指引
            </h1>
            <p className="text-stone-500 text-lg max-w-2xl mx-auto font-light leading-relaxed">
              在大自然的智慧中尋找心靈的平衡。請靜下心來，專注於您當下的情緒，
              然後憑直覺選取 1 張牌卡。
            </p>
          </motion.div>
        </header>

        {/* Card Grid Area */}
        <div className="w-full max-w-6xl mb-12">
          <AnimatePresence mode="wait">
            {!isRevealed ? (
              <motion.div 
                className="flex flex-wrap justify-center gap-4 md:gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: 20 }}
              >
                <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2 sm:gap-4 max-w-5xl mx-auto perspective-1000">
                  {shuffledRemedies.map((remedy, index) => (
                    <motion.div
                      key={remedy.id}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.02 }}
                      className="relative"
                    >
                      <div 
                        onClick={() => handleCardClick(index)}
                        className={cn(
                          "w-16 h-24 sm:w-20 sm:h-32 rounded-lg cursor-pointer transition-all duration-300 transform hover:-translate-y-2",
                          selectedCards.includes(index) ? "ring-2 ring-primary ring-offset-2 -translate-y-4 shadow-lg z-10" : "hover:shadow-md",
                          "bg-white overflow-hidden border border-stone-200"
                        )}
                      >
                        <img 
                          src="/images/card-back.png" 
                          alt="Card Back" 
                          className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div 
                className="flex flex-wrap justify-center gap-8 md:gap-12 items-center min-h-[60vh] py-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {selectedCards.map((index) => (
                  <div key={shuffledRemedies[index].id} className="flex flex-col items-center transform transition-all duration-500 hover:scale-105">
                    <Card
                      id={shuffledRemedies[index].id}
                      index={index}
                      isSelected={true}
                      isRevealed={true}
                      onClick={() => {}}
                      content={shuffledRemedies[index]}
                    />
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Action Bar */}
        <div className="fixed bottom-8 z-50">
          <AnimatePresence>
            {!isRevealed && selectedCards.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
              >
                <Button 
                  size="lg" 
                  onClick={handleReveal}
                  className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 font-serif tracking-wider"
                >
                  揭示指引
                </Button>
              </motion.div>
            )}

            {isRevealed && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
              >
                <div className="flex flex-col items-center gap-4">
                  <Button 
                    size="lg"
                    onClick={handleShare}
                    disabled={isGenerating}
                    className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 font-serif tracking-wider w-full min-w-[240px]"
                  >
                    {isGenerating ? '生成中...' : '分享今日指引'}
                  </Button>
                  
                  <Button 
                    size="lg" 
                    variant="ghost"
                    onClick={shuffleCards}
                    className="text-primary hover:bg-primary/5 rounded-full px-8 py-4 text-base transition-all duration-300 font-serif tracking-wider"
                  >
                    重新抽牌
                  </Button>
                </div>

                {/* Hidden Share Card for Generation */}
                <div className="fixed left-[-9999px] top-[-9999px]">
                  {selectedCards.length > 0 && (
                    <ShareCard ref={shareCardRef} remedy={shuffledRemedies[selectedCards[0]]} />
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer Info */}
        <footer className="mt-auto py-8 text-center text-stone-400 text-sm font-light">
          <p>© 2025 Bach Flower Oracle. Designed for Inner Peace.</p>
        </footer>
      </main>
    </div>
  );
}
