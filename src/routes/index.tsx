import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Hero } from "@/components/Hero";
import { LoveLetter } from "@/components/LoveLetter";
import { Memories } from "@/components/Memories";
import { Timeline } from "@/components/Timeline";
import { Reasons } from "@/components/Reasons";
import { Surprise } from "@/components/Surprise";
import { Footer } from "@/components/Footer";
import { MusicPlayer } from "@/components/MusicPlayer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "For the Love of My Life ❤️" },
      {
        name: "description",
        content:
          "A small piece of how much you mean to me — a love letter, our memories, and a surprise just for you.",
      },
      { property: "og:title", content: "For the Love of My Life ❤️" },
      {
        property: "og:description",
        content: "A romantic journey made just for you.",
      },
    ],
  }),
});

function Index() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  const scrollToLetter = () => {
    document.getElementById("letter")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="relative">
      <LoadingScreen />
      <Hero onBegin={scrollToLetter} />
      <div id="letter">
        <LoveLetter />
      </div>
      <Memories />
      <Timeline />
      <Reasons />
      <Surprise />
      <Footer />
      <MusicPlayer />
    </main>
  );
}
