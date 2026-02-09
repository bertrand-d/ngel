import Image from "next/image";
import illustration from "../../assets/img/placeholder.png";

export default function BlockHero() {
    return (
        <section className="max-container flex flex gap-md">
            <div className="min-h-[320px] relative flex flex-col justify-center gap-5 flex-1">
                <Image src={illustration} alt="illustration" width={735} height={320} className="absolute opacity-50 z-[-1] full h-full object-cover" />
                <h1 className="h2-style text-secondary-1">Un projet de rénovation durable ?</h1>
                <h2 className="h1-style text-primary-1">Votre spécialiste Ngel proche de chez vous le réalise !</h2>
            </div>
            <div className="flex-1">
                Formulaire ici
            </div>
        </section>
    );
}