import BlockHero from "@/components/blocks/BlockHero";
import CarouselInfinite from "@/components/blocks/CarouselInfinite";
import Image from "next/image";
import image from "../assets/img/PHOTO 2.jpg";

export default function Home() {
  return (
    <main className="mt-[140px]">
      <BlockHero />
      <section className="max-container pt-sm">
        <CarouselInfinite />
      </section>
      <section className="max-container grid grid-cols-2 gap-md py-sm">
        <div className="flex flex-col gap-xxs">
          <h2 className="text-secondary-1">
            Les experts-installateurs{" "}
            <span className="text-primary-1">n/gel</span> pour une rénovation
            durable en toute confiance!
          </h2>
          <p className="text-secondary-1">
            <span className="text-primary-1">Pose sans dégâts :</span> Nos Spécialistes vous garantissent les meilleurs
            travaux et une finition irréprochable.
          </p>
          <p>Qualité de la mise en oeuvre!</p>
          <ul>
            <li>Chantier propre et sécurisé</li>
            <li>Engagement sur les rendez-vous et les délais</li>
            <li>Respect des normes de mise en oeuvre</li>
            <li>Réception de chantier avec vous</li>
            <li>Respect de l'environnement</li>
          </ul>
        </div>
        <div className="max-h-[525px] overflow-hidden">
          <Image
            src={image}
            alt="image"
            width={525}
            height={525}
            className="object-cover w-full object-[50%_20%]"
          />
        </div>
      </section>
    </main>
  );
}
