"use client";

import { useEffect, useState } from "react";
import BlockHero from "@/components/blocks/BlockHero";
import CarouselInfinite from "@/components/CarouselInfinite";
import BlockArgs from "@/components/blocks/BlockArgs";
import BlockRange from "@/components/blocks/BlockRange";
import BlockTroubleshooting from "@/components/blocks/BlockTroubleshooting";
import BlockWaranty from "@/components/blocks/BlockWaranty";
import BlockAddress from "@/components/blocks/BlockAddress";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const MIN_LOADER_TIME = 900; // durée minimale en ms
    const startTime = Date.now();

    const finishLoading = () => {
      setIsLoading(false);
      // Laisser le temps à la transition d'opacité de se jouer
      setTimeout(() => setShowOverlay(false), 400);
    };

    const handleLoad = () => {
      const elapsed = Date.now() - startTime;
      const remaining = MIN_LOADER_TIME - elapsed;
      if (remaining <= 0) {
        finishLoading();
      } else {
        setTimeout(finishLoading, remaining);
      }
    };

    if (document.readyState === "complete") {
      handleLoad();
      return;
    }

    window.addEventListener("load", handleLoad);
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <main className="relative mt-[140px]">
      {showOverlay && (
        <div
          className={`fixed top-[101.05px] left-0 w-full h-[calc(100vh-101.05px)] bg-white z-20 flex items-center justify-center transition-opacity duration-500 ${
            isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <span className="loader" aria-label="Chargement du site" />
        </div>
      )}

      <BlockHero />
      <section className="max-container pt-sm">
        <CarouselInfinite />
      </section>
      <BlockArgs />
      <BlockRange />
      <BlockTroubleshooting />
      <BlockWaranty />
      <BlockAddress />
    </main>
  );
}
