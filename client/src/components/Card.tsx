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
        "relative w-32 h-52 sm:w-40 sm:h-64 cursor-pointer perspective-1000",
        isSelected && "shadow-xl"
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
        <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-xl overflow-hidden bg-white shadow-lg border border-stone-200 flex flex-col p-4 text-center justify-between">
          <div className="absolute inset-0 bg-[url('/images/hero-bg.png')] opacity-10 bg-cover bg-center" />
          
          {content && (
            <div className="relative z-10 h-full flex flex-col justify-between py-2">
              <div>
                <h3 className="font-serif text-lg font-bold text-primary mb-1">{content.name_zh}</h3>
                <p className="text-xs text-stone-500 italic font-serif">{content.name_en}</p>
              </div>
              
              <div className="my-2">
                <img src="/images/flower-icon.png" alt="Flower" className="w-12 h-12 mx-auto opacity-80" />
              </div>

              <div className="space-y-2">
                <div className="bg-stone-50/80 p-2 rounded-lg border border-stone-100">
                  <p className="text-[10px] text-stone-400 uppercase tracking-wider mb-1">情緒</p>
                  <p className="text-xs text-stone-700 line-clamp-2">{content.emotion}</p>
                </div>
                
                <div className="bg-primary/5 p-2 rounded-lg border border-primary/10">
                  <p className="text-[10px] text-primary/60 uppercase tracking-wider mb-1">正向</p>
                  <p className="text-xs text-primary-foreground font-medium line-clamp-2">{content.positive}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
