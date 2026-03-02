import Image from "next/image";

export default function BlockTroubleshooting({image}) {
    return (
        <section className="max-container py-md grid lg:grid-cols-2 gap-md lg:gap-xl">
            <div className="corner-left flex-1 flex">
                <Image src={image} alt="image" width={700} height={700} />
            </div>
            <div className="flex flex-col gap-3">
                <h2 className="text-secondary-1">
                    Les experts de confiance reconnus depuis 25 ans !
                </h2>
                <p className="text-primary-1">
                    Nous faire confiance, c’est faire confiance à des experts. Et
                    l’expertise, ça s’applique au quotidien au travers de nos
                    spécialistes n|gel. Votre expert-technique a suivi une formation
                    complète et est votre interlocuteur unique du devis jusqu’à la fin
                    de votre chantier.
                </p>
                <h3 className="text-secondary-1">
                    Qualité du dépannage et du SAV !
                </h3>
                <p className="text-primary-1">
                    n|gel s'engage à apporter une réponse concrète dans la journée
                    suivant la demande.
                </p>
                <a
                    href="mailto:fd@ngel.io"
                    className="bg-secondary-1 py-3 px-10 text-white text-center font-bold w-fit ml-auto mt-auto hover:bg-primary-1 transition-colors duration-300"
                >
                    DEPANNAGE
                </a>
            </div>
        </section>
    );
}