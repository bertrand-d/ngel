import BlockHero from "@/components/blocks/BlockHero";
import CarouselInfinite from "@/components/CarouselInfinite";
import BlockArgs from "@/components/blocks/BlockArgs";
import BlockRange from "@/components/blocks/BlockRange";
import BlockTroubleshooting from "@/components/blocks/BlockTroubleshooting";
import Image from "next/image";
import image1 from "@/assets/img/marque.jpg";
import image2 from "@/assets/img/marque.jpg";
import image3 from "@/assets/img/QUALIBAT RGE.jpg";

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
      <section className="max-container py-sm">
        <h2 className="text-secondary-1 text-center mb-md">Nos garanties !</h2>
        <div className="flex gap-5 justify-around">
          <Image src={image1} alt="image" width={320} height={122} />
          <Image src={image2} alt="image" width={320} height={122} />
          <Image src={image3} alt="image" width={150} height={150} />
        </div>
      </section>
    </main>
  );
}
