import ButtonPrimary from "@/components/ButtonPrimary";
import Image from "next/image";
import image from "@/assets/img/PHOTO 13.jpg";

export default function BlockAddress() {
    return (
        <section className="max-container py-sm flex gap-xl">
            <div className="flex flex-col gap-5 justify-center flex-1">
                <div className="flex flex-col gap-5 justify-center my-auto">
                    <h2 className="text-secondary-1">
                        La force du réseau <span className="text-primary-1">N|gel</span>{" "}
                        présent en France depuis{" "}
                        <span className="text-primary-1">2002</span> et à Paris depuis{" "}
                        <span className="text-primary-1">2007</span> !
                    </h2>
                    <div className="grid grid-cols-3 gap-5">
                        <div className="text-secondary-1">
                            <p className="font-semibold text-[1rem]">
                                <span className="text-primary-1">N|gel</span> - Paris Ouest
                            </p>
                            <p className="text-[1rem]">5 rue Lavoisier</p>
                            <p className="text-[1rem]">92350 - LE PLESSIS ROBINSON</p>
                        </div>
                        <div className="text-secondary-1">
                            <p className="font-semibold text-[1rem]">
                                <span className="text-primary-1">N|gel</span> - Paris Est
                            </p>
                            <p className="text-[1rem]">7 rue jean prouvé</p>
                            <p className="text-[1rem]">94800 - VILLEJUIF</p>
                        </div>
                        <div className="text-secondary-1">
                            <p className="font-semibold text-[1rem]">
                                <span className="text-primary-1">N|gel</span> - Paris
                            </p>
                            <p className="text-[1rem]">58 rue de Monceau</p>
                            <p className="text-[1rem]">75008 - PARIS</p>
                        </div>
                    </div>
                </div>
                <ButtonPrimary className="mt-auto" />
            </div>
            <div className="max-h-[525px] overflow-hidden flex flex-1">
                <Image
                    src={image}
                    alt="image"
                    width={525}
                    height={525}
                    className="object-cover w-full object-[50%_50%]"
                />
            </div>
        </section>
    );
}