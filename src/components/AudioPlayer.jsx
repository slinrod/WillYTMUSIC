import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import YouTubeMusicClone from '../App';

const AudioPlayer = ({ song }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="flex items-center gap-4 bg-white/5 rounded-lg p-4">
      <button
        onClick={togglePlay}
        className="p-2 rounded-full hover:bg-white/10 transition-colors"
      >
        {isPlaying ? (
          <Pause className="w-6 h-6" />
        ) : (
          <Play className="w-6 h-6" />
        )}
      </button>

      <div className="flex-1">
        <div className="text-sm font-medium mb-1">{song?.title}</div>
        <div className="text-xs text-gray-400">{song?.artist}</div>
      </div>

      <button
        onClick={toggleMute}
        className="p-2 rounded-full hover:bg-white/10 transition-colors"
      >
        {isMuted ? (
          <VolumeX className="w-6 h-6" />
        ) : (
          <Volume2 className="w-6 h-6" />
        )}
      </button>

      <audio
        ref={audioRef}
        src={song?.url}
        className="hidden"
        onEnded={() => setIsPlaying(false)}
      />
    </div>
  );
};

export default YouTubeMusicClone;