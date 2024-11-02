import { SectionContainer } from "@components/Section";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export const ShopColumns = () => {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [
        Autoplay({ playOnInit: true, delay: 3000 })
    ]);

    // Generate an array of image paths from 1 to 5
    const shopImages = Array.from(
        { length: 5 }, // 5 images from 1 to 5
        (_, i) => `/shop/${i + 1}.jpg` // Adjusting path to match the shop images
    );

    return (
        <SectionContainer className="">
            <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                    {shopImages.map((src, index) => (
                        <div
                            key={index}
                            className="embla__slide h-80 sm:h-[30rem] md:h-[38rem]"
                        >
                            <Image
                                src={src}
                                alt={`Shop Image ${index + 1}`} // Updated alt text
                                fill
                                style={{
                                    objectFit: "cover",
                                    objectPosition: "center"
                                }}
                                priority={false}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </SectionContainer>
    );
};
