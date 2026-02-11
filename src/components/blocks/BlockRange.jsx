"use client";

import { useState } from "react";
import Image from "next/image";
import image1 from "@/assets/img/PHOTO 3.jpg";
import image2 from "@/assets/img/PHOTO 4.jpeg";
import image3 from "@/assets/img/PHOTO 5.jpg";
import image4 from "@/assets/img/PHOTO 6.jpg";
import image5 from "@/assets/img/PHOTO 7 - 1.jpg";
import image6 from "@/assets/img/PHOTO 7 - 2.jpg";
import image7 from "@/assets/img/PHOTO 8 - 1.jpg";
import image8 from "@/assets/img/PHOTO 8 - 2.jpg";
import image9 from "@/assets/img/PHOTO 9 - 1.jpg";
import image10 from "@/assets/img/PHOTO 9 - 2.jpg";
import image11 from "@/assets/img/PHOTO 10 - 1.jpeg";
import image12 from "@/assets/img/PHOTO 10 - 2.jpg";
import image13 from "@/assets/img/PHOTO 11 - 1.jpg";
import image14 from "@/assets/img/PHOTO 11 - 2.jpg";

const ranges = [
    {
        title: "Nos Fenêtres et Portes fenêtres",
        images: [image5, image6],
    },
    {
        title: "Nos Portes d'entrée",
        images: [image7, image8],
    },
    {
        title: "Nos Volets",
        images: [image9, image10],
    },
    {
        title: "Nos Stores et Moustiquaires",
        images: [image11, image12],
    },
    {
        title: "Nos Portes de Garage",
        images: [image13, image14],
    },
];

export default function BlockRange() {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section className="bg-primary-1">
            <div className="max-container flex gap-xl py-sm">
                <div className="flex flex-col gap-5 justify-center flex-1">
                    <h2 className="text-white mb-5">Nos gammes de produits</h2>
                    <div className="flex flex-col gap-xxs">
                        {ranges.map((range, index) => {
                            const isOpen = openIndex === index;

                            return (
                                <div key={range.title} className="bg-white cursor-pointer"
                                    onClick={() =>
                                        setOpenIndex((prev) => (prev === index ? null : index))
                                    }>
                                    <div className="flex w-full items-center justify-between p-5 bg-white text-primary-1 text-xl"
                                    >
                                        <span>{range.title}</span>
                                        <span className="text-md text-tertiary-1">
                                            {isOpen ? "–" : "+"}
                                        </span>
                                    </div>
                                    <div
                                        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${isOpen ? "max-h-[500px]" : "max-h-0"
                                            }`}
                                    >
                                        <div className="p-5 pt-0 grid grid-cols-2 gap-5">
                                            {range.images.map((img, i) => (
                                                <Image
                                                    key={i}
                                                    src={img}
                                                    alt="image"
                                                    width={278}
                                                    height={370}
                                                    className="object-cover w-full h-full object-[50%_50%]"
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-xxs flex-1">
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
    );
}