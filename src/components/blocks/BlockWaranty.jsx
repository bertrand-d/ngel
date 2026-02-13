import Image from "next/image";
import image1 from "@/assets/img/marque.jpg";
import image2 from "@/assets/img/logo-garantie.png";
import image3 from "@/assets/img/QUALIBAT RGE.jpg";

export default function BlockWaranty() {
    return (
        <section className="max-container py-sm">
            <h2 className="text-secondary-1 text-center mb-md">Nos garanties !</h2>
            <div className="flex gap-5 justify-around items-center">
                <Image src={image1} alt="image" width={320} height={122} />
                <Image src={image2} alt="image" width={128} height={100} />
                <Image src={image3} alt="image" width={150} height={150} />
            </div>
        </section>
    );
}