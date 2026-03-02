import ButtonPrimary from "@/components/ButtonPrimary";
import Image from "next/image";

export default function BlockAddress({image}) {
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
                                <span className="text-primary-1">n|gel</span>-Paris
                            </p>
                            <p className="text-[1rem]">58 rue de Monceau</p>
                            <p className="text-[1rem]">75008 Paris</p>
                        </div>
                        <div className="text-secondary-1 text-center">
                            <p className="font-semibold text-[1rem]">
                                <span className="text-primary-1">n|gel</span>-Paris Est
                            </p>
                            <p className="text-[1rem]">7 rue Jean Prouvé</p>
                            <p className="text-[1rem]">94800 Villejuif</p>
                        </div>
                        <div className="text-secondary-1 text-center">
                            <p className="font-semibold text-[1rem]">
                                <span className="text-primary-1">n|gel</span>-Paris Ouest
                            </p>
                            <p className="text-[1rem]">5 rue Lavoisier</p>
                            <p className="text-[1rem]">92350 Le Plessis Robinson</p>
                        </div>
                    </div>
                </div>
                <ButtonPrimary className="mx-auto mt-auto lg:ml-auto" />
            </div>
            <div className="corner-right flex-1">
                <div className="h-full lg:max-h-[525px] overflow-hidden flex flex-1">
                    <Image
                        src={image}
                        alt="image"
                        width={525}
                        height={525}
                        className="object-cover h-full w-full object-[50%_50%]"
                    />
                </div>
            </div>
        </section>
    );
}