import Image from "next/image";
import image from "../../assets/img/PHOTO 2.jpg";
import Link from "next/link";
import ButtonPrimary from "../ButtonPrimary";

export default function BlockArgs() {
    return (
        <section className="max-container grid lg:grid-cols-2 gap-md lg:gap-xl py-sm">
            <div className="flex flex-col gap-xxs justify-center">
                <h2 className="text-secondary-1">
                    Les experts-installateurs{" "}
                    <span className="text-primary-1">n|gel</span> pour une rénovation
                    durable en toute confiance !
                </h2>
                <p className="text-secondary-1">
                    <span className="text-primary-1">Pose sans dégât :</span> Nos
                    Spécialistes vous garantissent les meilleurs travaux et une finition
                    irréprochable.
                </p>
                <p className="font-semibold text-secondary-1 text-[2rem]">
                    Qualité de la mise en oeuvre !
                </p>
                <ul className="list-disc list-inside list-marker-secondary-1">
                    <li className="text-primary-1 text-xl">Chantier propre et sécurisé</li>
                    <li className="text-primary-1 text-xl">
                        Engagement sur les rendez-vous et les délais
                    </li>
                    <li className="text-primary-1 text-xl">
                        Respect des normes de mise en oeuvre
                    </li>
                    <li className="text-primary-1 text-xl">Réception de chantier <span className="text-secondary-1">avec vous</span></li>
                    <li className="text-primary-1 text-xl">Respect de l'environnement</li>
                </ul>
                <ButtonPrimary className="ml-auto mt-auto" />
            </div>
            <div className="corner-right flex-1">
                <div className="max-h-[525px] overflow-hidden flex">
                    <Image
                        src={image}
                        alt="image"
                        width={525}
                        height={525}
                        className="object-cover w-full object-[50%_50%]"
                    />
                </div>
            </div>
        </section>
    )
}