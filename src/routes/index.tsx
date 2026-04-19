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
      { title: "For Lizë, my loqki ❤️" },
      {
        name: "description",
        content:
          "A small piece of how much you mean to me, Lizë — a love letter, our memories, and a surprise just for my loqki.",
      },
      { property: "og:title", content: "For Lizë, my loqki ❤️" },
      {
        property: "og:description",
        content: "A romantic journey made just for you, loqki.",
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
