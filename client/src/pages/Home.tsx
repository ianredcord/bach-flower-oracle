import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Card } from "@/components/Card";
import { AudioPlayer } from "@/components/AudioPlayer";
import { ShareCard } from "@/components/ShareCard";
import { SharePreviewModal } from "@/components/SharePreviewModal";
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
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
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

  const handleShare = () => {
    setIsShareModalOpen(true);
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

        {/* Emergency Support Button */}
        <div className="fixed bottom-8 right-8 z-40 hidden md:block">
          <a 
            href="https://www.stark.works/categories/muni%E7%89%9F%E5%B0%BC%E7%B2%BE%E6%B2%B9"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full shadow-md hover:shadow-lg hover:bg-red-100 transition-all duration-300 border border-red-100 group"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            <span className="font-medium text-sm tracking-wide group-hover:font-bold">SOS 急救花精</span>
          </a>
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
                    className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 font-serif tracking-wider w-full min-w-[240px]"
                  >
                    分享今日指引
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
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Share Preview Modal */}
        {selectedCards.length > 0 && (
          <SharePreviewModal 
            isOpen={isShareModalOpen}
            onClose={() => setIsShareModalOpen(false)}
            remedy={shuffledRemedies[selectedCards[0]]}
          />
        )}

        {/* MUNI Product Showcase */}
        <section className="w-full max-w-4xl mx-auto mt-20 mb-12 px-4">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-stone-100">
            <div className="md:flex">
              <div className="md:w-1/2 relative h-64 md:h-auto">
                <img 
                  src="https://shoplineimg.com/5d22e02e9a76f00001037345/619f42004240720023456360/800x.webp?source_format=jpg" 
                  alt="MUNI 能量精油" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
              </div>
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-stone-50 to-white">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-xs font-bold tracking-wider rounded-full mb-3">
                    品牌推薦
                  </span>
                  <h2 className="font-serif text-3xl font-bold text-stone-800 mb-2">MUNI 能量精油</h2>
                  <p className="text-stone-500 italic font-serif">封存 40 種花精的療癒能量</p>
                </div>
                
                <p className="text-stone-600 mb-6 leading-relaxed">
                  MUNI 獨家研發，結合 38 種巴哈花精與 2 種急救花精的完整能量。
                  不只是精油，更是您隨身的能量守護者，隨時為身心充電。
                </p>
                
                <a 
                  href="https://www.stark.works/categories/muni%E7%89%9F%E5%B0%BC%E7%B2%BE%E6%B2%B9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-stone-800 text-white rounded-lg hover:bg-stone-700 transition-colors duration-300 shadow-md hover:shadow-lg group"
                >
                  <span className="font-medium tracking-wide">探索全系列產品</span>
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Info */}
        <footer className="mt-auto py-8 text-center text-stone-400 text-sm font-light flex flex-col items-center gap-4">
          <Link href="/encyclopedia">
            <a className="text-primary hover:text-primary/80 transition-colors font-serif border-b border-primary/30 pb-0.5 hover:border-primary">
              瀏覽花精百科
            </a>
          </Link>
          <p>© 2025 Bach Flower Oracle. Designed for Inner Peace.</p>
        </footer>
      </main>
    </div>
  );
}
