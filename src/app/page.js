import BlockHero from "@/components/blocks/BlockHero";
import CarouselInfinite from "@/components/blocks/CarouselInfinite";
import Image from "next/image";
import image from "../assets/img/PHOTO 2.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mt-[140px]">
      <BlockHero />
      <section className="max-container pt-sm">
        <CarouselInfinite />
      </section>
      <section className="max-container grid grid-cols-2 gap-md py-sm">
        <div className="flex flex-col gap-xxs justify-center">
          <h2 className="text-secondary-1">
            Les experts-installateurs{" "}
            <span className="text-primary-1">n/gel</span> pour une rénovation
            durable en toute confiance !
          </h2>
          <p className="text-secondary-1">
            <span className="text-primary-1">Pose sans dégâts :</span> Nos
            Spécialistes vous garantissent les meilleurs travaux et une finition
            irréprochable.
          </p>
          <p className="bg-secondary-1 block px-xs py-xxs w-fit font-bold text-white">
            Qualité de la mise en oeuvre!
          </p>
          <ul className="list-disc list-inside">
            <li className="text-primary-1 text-xl">Chantier propre et sécurisé</li>
            <li className="text-primary-1 text-xl">
              Engagement sur les rendez-vous et les délais
            </li>
            <li className="text-primary-1 text-xl">
              Respect des normes de mise en oeuvre
            </li>
            <li className="text-primary-1 text-xl">Réception de chantier <span className="text-tertiary-1">avec vous</span></li>
            <li className="text-primary-1 text-xl">Respect de l'environnement</li>
          </ul>
          <Link
            href="/"
            className="bg-primary-1 py-3 px-4 text-white text-center font-bold w-fit ml-auto mt-auto"
          >
            DEMANDER UN DEVIS <br />
            <span className="font-normal text-sm">
              Précis - clair - sans surprise
            </span>
          </Link>
        </div>
        <div className="max-h-[525px] overflow-hidden flex">
          <Image
            src={image}
            alt="image"
            width={525}
            height={525}
            className="object-cover w-full object-[50%_50%]"
          />
        </div>
      </section>
    </main>
  );
}
