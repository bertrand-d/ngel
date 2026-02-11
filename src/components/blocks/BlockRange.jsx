import Image from "next/image";
import image1 from "@/assets/img/PHOTO 3.jpg";
import image2 from "@/assets/img/PHOTO 4.jpeg";
import image3 from "@/assets/img/PHOTO 5.jpg";
import image4 from "@/assets/img/PHOTO 6.jpg";
import image5 from "@/assets/img/PHOTO 7 - 1.jpg";
import image6 from "@/assets/img/PHOTO 7 - 2.jpg";

export default function BlockRange() {
    return (
        <section className="bg-primary-1">
            <div className="max-container grid grid-cols-2 gap-xl py-sm">
                <div className="flex flex-col gap-5 justify-center">
                    <h2 className="text-white mb-5">Nos gammes de produits</h2>
                    <div className="bg-white">
                        <div className="p-5 bg-white text-primary-1 text-xl">
                            Nos fenêtres et portes fenêtres
                        </div>
                        <div className="p-5 pt-0 grid grid-cols-2 gap-5">
                            <Image src={image5} alt="image" width={278} height={370} className="object-cover w-full h-full object-[50%_50%]" />
                            <Image src={image6} alt="image" width={278} height={370} className="object-cover w-full h-full object-[50%_50%]" />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-xxs">
                    <div className="min-h-[370px] max-h-[370px] w-[278px] overflow-hidden">
                        <Image
                            src={image1}
                            alt="image"
                            width={278}
                            height={370}
                            className="object-cover w-full h-full object-[50%_50%]"
                        />
                    </div>
                    <div className="min-h-[370px] max-h-[370px] w-[278px] overflow-hidden">
                        <Image
                            src={image2}
                            alt="image"
                            width={278}
                            height={370}
                            className="object-cover w-full h-full object-[50%_50%]"
                        />
                    </div>
                    <div className="min-h-[370px] max-h-[370px] w-[278px] overflow-hidden">
                        <Image src={image3} alt="image" width={278} height={370} className="object-cover w-full h-full object-[50%_50%]" />
                    </div>
                    <div className="min-h-[370px] max-h-[370px] w-[278px] overflow-hidden">
                        <Image src={image4} alt="image" width={278} height={370} className="object-cover w-full h-full object-[50%_50%]" />
                    </div>
                </div>
            </div>
        </section>
    )
}