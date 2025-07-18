"use client"

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface AudioPlayerProps {
  audioSrc: string;
  className?: string;
}

export default function AudioPlayer({ audioSrc, className = "" }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [autoPlayBlocked, setAutoPlayBlocked] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const playAudio = async () => {
      if (audioRef.current) {
        try {
          await audioRef.current.play();
          setIsPlaying(true);
          setAutoPlayBlocked(false);
        } catch (error) {
          console.log('Autoplay blocked by browser:', error);
          setAutoPlayBlocked(true);
          setIsPlaying(false);
        }
      }
    };
    playAudio();
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = async () => {
    if (audioRef.current) {
      try {
        if (isPlaying) {
          audioRef.current.pause();
          setIsPlaying(false);
        } else {
          await audioRef.current.play();
          setIsPlaying(true);
          setAutoPlayBlocked(false);
        }
      } catch (error) {
        console.error('Error toggling play:', error);
      }
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
  };

  return (
    <div className={`fixed bottom-4 right-4 bg-black/80 backdrop-blur-sm rounded-lg p-4 text-white z-50 ${className}`}>
      <audio
        ref={audioRef}
        src={audioSrc}
        onEnded={handleEnded}
        preload="metadata"
      />
      
      <div className="flex items-center gap-3">
        <Button
          onClick={togglePlay}
          variant="ghost"
          size="sm"
          className="text-white hover:bg-white/20"
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </Button>
        
        {autoPlayBlocked && (
          <span className="text-xs text-yellow-300">
            Clique para tocar
          </span>
        )}
        
        <div className="flex items-center gap-2">
          <Button
            onClick={toggleMute}
            variant="ghost"
            size="sm"
            className="text-white hover:bg-white/20"
          >
            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </Button>
          
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={handleVolumeChange}
            className="w-20 h-1 bg-white/30 rounded-lg appearance-none cursor-pointer slider"
            style={{
              background: `linear-gradient(to right, white 0%, white ${volume * 100}%, rgba(255,255,255,0.3) ${volume * 100}%, rgba(255,255,255,0.3) 100%)`
            }}
          />
        </div>
      </div>
    </div>
  );
} 