export default function BlockRange() {
    return (
        <section className="bg-primary-1">
            <div className="max-container grid grid-cols-2 gap-xl py-sm">
                <div>
                    <h2 className="text-white">Nos gammes de produits</h2>
                    <div></div>
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