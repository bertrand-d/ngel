import BlockHero from "@/components/blocks/BlockHero";
import CarouselInfinite from "@/components/CarouselInfinite";
import BlockArgs from "@/components/blocks/BlockArgs";
import BlockRange from "@/components/blocks/BlockRange";
import BlockTroubleshooting from "@/components/blocks/BlockTroubleshooting";

export default function Home() {
  return (
    <main className="mt-[140px]">
      <BlockHero />
      <section className="max-container pt-sm">
        <CarouselInfinite />
      </section>
      <BlockArgs />
      <BlockRange />
      <BlockTroubleshooting />
    </main>
  );
}
