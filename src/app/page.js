import BlockHero from "@/components/blocks/BlockHero";
import CarouselInfinite from "@/components/blocks/CarouselInfinite";

export default function Home() {
  return (
    <main className="mt-[140px]">
      <BlockHero />
      <section className="max-container">
        <CarouselInfinite />
      </section>
    </main>
  );
}
