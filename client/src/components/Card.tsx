import { cn } from "@/lib/utils";

import { motion } from "framer-motion";

interface CardProps {
  id: number;
  index: number;
  isSelected: boolean;
  isRevealed: boolean;
  onClick: () => void;
  content?: {
    name_zh: string;
    name_en: string;
    emotion: string;
    positive: string;
  };
}

export function Card({ id, index, isSelected, isRevealed, onClick, content }: CardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: 1, 
        y: isSelected ? -20 : 0,
        scale: isSelected ? 1.05 : 1,
        zIndex: isSelected ? 10 : 1
      }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.05,
        type: "spring",
        stiffness: 200,
        damping: 20
      }}
      className={cn(
        "relative cursor-pointer perspective-1000 transition-all duration-500",
        isRevealed 
          ? "w-72 h-[28rem] sm:w-80 sm:h-[30rem]" 
          : "w-24 h-40 sm:w-32 sm:h-52",
        isSelected && !isRevealed && "shadow-xl scale-105"
      )}
      onClick={onClick}
    >
      <motion.div
        className="w-full h-full relative preserve-3d transition-all duration-700"
        animate={{ rotateY: isRevealed ? 180 : 0 }}
      >
        {/* Card Back */}
        <div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden shadow-md border-2 border-white/50">
          <img 
            src="/images/card-back.png" 
            alt="Card Back" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
        </div>

        {/* Card Front */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-xl overflow-hidden bg-white shadow-lg border border-stone-200 flex flex-col p-6 text-center justify-between">
          <div className="absolute inset-0 bg-[url('/images/hero-bg.png')] opacity-10 bg-cover bg-center" />
          
          {content && (
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="mt-2">
                <h3 className="font-serif text-2xl font-bold text-primary mb-1">{content.name_zh}</h3>
                <p className="text-sm text-stone-500 italic font-serif">{content.name_en}</p>
              </div>
              
              <div className="my-4 flex-grow flex items-center justify-center">
                <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-stone-100 shadow-inner bg-stone-50">
                  <img 
                    src={`/images/flowers/${id}.png`}
                    alt={content.name_en}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    loading="eager"
                  />
                </div>
              </div>

              <div className="space-y-4 mb-2">
                <div className="bg-stone-50/90 p-4 rounded-xl border border-stone-100 shadow-sm">
                  <p className="text-xs text-stone-400 uppercase tracking-wider mb-2 font-medium">當下情緒</p>
                  <p className="text-sm text-stone-700 leading-relaxed">{content.emotion}</p>
                </div>
                
                <div className="bg-primary/10 p-4 rounded-xl border border-primary/20 shadow-sm">
                  <p className="text-xs text-primary uppercase tracking-wider mb-2 font-medium">正向轉化</p>
                  <p className="text-sm text-primary font-medium leading-relaxed">{content.positive}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
