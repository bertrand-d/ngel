import Image from "next/image";
import image1 from "@/assets/img/la-fenetre-garantie.png";
import image2 from "@/assets/img/pose-sans-degat.png";
import image3 from "@/assets/img/logo-rge.png";

export default function BlockWaranty() {
    return (
        <section className="max-container py-sm">
            <h2 className="text-secondary-1 text-center mb-md text-[2.5rem]">Nos garanties !</h2>
            <div className="flex flex-col gap-5 justify-between items-center mx-auto lg:grid lg:w-[80%] lg:grid-cols-3">
                <Image src={image1} alt="image" width={230} height={150} className="lg:mt-[-50px] mr-[-80px]" />
                <div className="flex lg:justify-center lg:items-center">
                    <Image src={image2} alt="image" width={150} height={150} />
                </div>
                <Image src={image3} alt="image" width={150} height={150} className="lg:ml-auto" />
            </div>
        </section>
    );
}