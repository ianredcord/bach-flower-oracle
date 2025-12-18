import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio('/audio/forest-ambience.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3; // Set initial volume to 30%

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((error) => {
        console.error("Audio playback failed:", error);
      });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <Button
        variant="outline"
        size="icon"
        onClick={togglePlay}
        className={cn(
          "rounded-full w-10 h-10 bg-white/80 backdrop-blur-sm border-stone-200 shadow-sm hover:bg-white transition-all duration-300",
          isPlaying && "text-primary border-primary/30 bg-primary/5"
        )}
        title={isPlaying ? "關閉背景音效" : "開啟背景音效"}
      >
        {isPlaying ? (
          <Volume2 className="h-5 w-5" />
        ) : (
          <VolumeX className="h-5 w-5 text-stone-400" />
        )}
      </Button>
    </div>
  );
}
