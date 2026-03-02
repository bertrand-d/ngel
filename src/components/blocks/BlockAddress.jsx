import ButtonPrimary from "@/components/ButtonPrimary";
import Image from "next/image";

export default function BlockAddress({ image, address }) {
    const hasImage = !!image;
    const data = address?.acf || null;

    const secteur1 = data?.secteur_1 || "Paris";
    const rue1 = data?.numero_et_rue_1 || "58 rue de Monceau";
    const ville1 = data?.code_postal_et_ville_1 || "75008 Paris";

    const secteur2 = data?.secteur_2 || "Paris Est";
    const rue2 = data?.numero_et_rue_2 || "7 rue Jean Prouvé";
    const ville2 = data?.code_postal_et_ville_2 || "94800 Villejuif";

    const secteur3 = data?.secteur_3 || "Paris Ouest";
    const rue3 = data?.numero_et_rue_3 || "5 rue Lavoisier";
    const ville3 = data?.code_postal_et_ville_3 || "92350 Le Plessis Robinson";
    return (
        <section className="max-container py-sm flex gap-md flex-col lg:flex-row lg:gap-xl">
            <div className="flex flex-col gap-5 justify-center flex-1">
                <div className="flex flex-col gap-5 h-full">
                    <h2 className="text-secondary-1 text-center lg:text-left">
                        La force du réseau <span className="text-primary-1">n|gel</span>{" "}
                        présent en France depuis{" "}
                        <span className="text-primary-1">2002</span> et à <br />Paris depuis{" "}
                        <span className="text-primary-1">2007</span> !
                    </h2>
                    <div className="flex flex-col lg:flex-row gap-5 justify-between my-auto">
                        <div className="text-secondary-1 text-center">
                            <p className="font-semibold text-[1rem]">
                                <span className="text-primary-1">n|gel</span>-{secteur1}
                            </p>
                            <p className="text-[1rem]">{rue1}</p>
                            <p className="text-[1rem]">{ville1}</p>
                        </div>
                        <div className="text-secondary-1 text-center">
                            <p className="font-semibold text-[1rem]">
                                <span className="text-primary-1">n|gel</span>-{secteur2}
                            </p>
                            <p className="text-[1rem]">{rue2}</p>
                            <p className="text-[1rem]">{ville2}</p>
                        </div>
                        <div className="text-secondary-1 text-center">
                            <p className="font-semibold text-[1rem]">
                                <span className="text-primary-1">n|gel</span>-{secteur3}
                            </p>
                            <p className="text-[1rem]">{rue3}</p>
                            <p className="text-[1rem]">{ville3}</p>
                        </div>
                    </div>
                </div>
                <ButtonPrimary className="mx-auto mt-auto lg:ml-auto" />
            </div>
            <div className="corner-right flex-1">
                <div className="h-full lg:max-h-[525px] overflow-hidden flex flex-1">
                    {hasImage && (
                        <Image
                            src={image}
                            alt="image"
                            width={525}
                            height={525}
                            className="object-cover h-full w-full object-[50%_50%]"
                        />
                    )}
                </div>
            </div>
        </section>
    );
}