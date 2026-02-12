import Image from "next/image";
import Qualibat from "@/assets/img/QUALIBAT RGE.jpg";
import Warranty from "@/assets/img/logo-garantie.png";

export default function BlockHero() {
    return (
        <section className="max-container flex flex gap-xl">
            <div
                className="relative min-h-[535px] flex flex-col justify-center gap-5 flex-1 p-10 hero-bg"
            >
                <h1 className="h2-style text-secondary-1 text-center mb-3">Un projet de rénovation durable ?</h1>
                <h2 className="h1-style text-primary-1 text-center mb-2">Votre spécialiste Ngel proche de <span className="text-tertiary-1">chez vous</span> le réalise !</h2>
                <div className="flex gap-5 justify-around">
                    <Image src={Warranty} alt="Warranty" width={100} height={100} />
                    <Image src={Qualibat} alt="Qualibat" width={100} height={100} />
                </div>
            </div>
            <div className="flex-1">
                Formulaire ici
            </div>
        </section>
    );
}