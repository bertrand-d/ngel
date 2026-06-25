import ButtonPrimary from "@/components/ButtonPrimary";
import Image from "next/image";

export default function BlockAddress({ image, address }) {
    const hasImage = !!image;
    const data = address || null;

    const secteur1 = data?.secteur_1 || "Data error";
    const rue1 = data?.numero_et_rue_1 || "Data error";
    const ville1 = data?.code_postal_et_ville_1 || "Data error";

    const secteur2 = data?.secteur_2 || "Data error";
    const rue2 = data?.numero_et_rue_2 || "Data error";
    const ville2 = data?.code_postal_et_ville_2 || "Data error";

    const secteur3 = data?.secteur_3 || "Data error";
    const rue3 = data?.numero_et_rue_3 || "Data error";
    const ville3 = data?.code_postal_et_ville_3 || "Data error";
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