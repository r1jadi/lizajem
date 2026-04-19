import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// Soft ambient royalty-free romantic loop
const TRACK_URL =
  "https://cdn.pixabay.com/download/audio/2022/10/30/audio_347111d654.mp3?filename=romantic-piano-emotional-115150.mp3";

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = 0.35;
  }, []);

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) {
      a.pause();
      setPlaying(false);
    } else {
      a.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    }
  };

  return (
    <>
      <audio ref={audioRef} src={TRACK_URL} loop preload="none" />
      <motion.button
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 3, duration: 0.6 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        onClick={toggle}
        aria-label={playing ? "Pause music" : "Play music"}
        className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full glass shadow-glow flex items-center justify-center text-primary"
      >
        <span className="text-2xl">{playing ? "❚❚" : "♪"}</span>
        {playing && (
          <span className="absolute -inset-1 rounded-full border border-primary/40 animate-pulse-glow pointer-events-none" />
        )}
      </motion.button>
    </>
  );
}
