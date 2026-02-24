import Image from "next/image";
import image1 from "@/assets/img/la-fenetre-garantie.png";
import image2 from "@/assets/img/pose-sans-degat.png";
import image3 from "@/assets/img/logo-rge.png";

export default function BlockWaranty() {
    return (
        <section className="max-container py-sm">
            <h2 className="text-secondary-1 text-center mb-md text-[2.5rem]">Nos garanties !</h2>
            <div className="grid grid-cols-3 gap-2 justify-between items-center w-[80%] mx-auto">
                <Image src={image1} alt="image" width={230} height={150} className="mt-[-50px]" />
                <div className="flex justify-center items-center">
                    <Image src={image2} alt="image" width={150} height={150} />
                </div>
                <Image src={image3} alt="image" width={150} height={150} className="ml-auto" />
            </div>
        </section>
    );
}