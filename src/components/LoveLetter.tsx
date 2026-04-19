import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const LETTER = `From the moment I met you, everything changed. The colors of the world grew softer, the quiet hours became sweeter, and every ordinary day learned how to glow.

You are my favorite thought in the morning and my last whisper at night. With you, time slows just enough for me to memorize the way you laugh — and races forward when I imagine all the years ahead.

Thank you for being my home, my calm, my wonder. I love you. Endlessly.`;

export function LoveLetter() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });
  const [text, setText] = useState("");

  useEffect(() => {
    if (!inView) return;
    let i = 0;
    const id = setInterval(() => {
      i++;
      setText(LETTER.slice(0, i));
      if (i >= LETTER.length) clearInterval(id);
    }, 28);
    return () => clearInterval(id);
  }, [inView]);

  return (
    <section ref={ref} className="relative py-28 md:py-40 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-glow opacity-60" />
      <div className="relative max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <p className="font-script text-2xl text-primary mb-3">a letter for you</p>
          <h2 className="font-display text-4xl md:text-6xl italic">My Love,</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60, rotate: -1 }}
          animate={inView ? { opacity: 1, y: 0, rotate: -0.5 } : {}}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="glass rounded-3xl p-8 md:p-14 shadow-card relative"
        >
          <div className="absolute -top-4 -left-4 text-6xl text-primary/40 font-display">"</div>
          <div className="absolute -bottom-10 -right-4 text-6xl text-primary/40 font-display rotate-180">"</div>

          <p className="font-display text-xl md:text-2xl leading-relaxed text-foreground/85 whitespace-pre-line min-h-[280px]">
            {text}
            {text.length < LETTER.length && (
              <span className="inline-block w-[2px] h-6 bg-primary ml-1 align-middle animate-blink" />
            )}
          </p>

          <div className="mt-10 text-right">
            <p className="font-script text-3xl md:text-4xl text-primary">— Yours, always</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
