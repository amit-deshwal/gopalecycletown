import { SectionContainer } from "@components/Section";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export const Columns = () => {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [
        Autoplay({ playOnInit: true, delay: 3000 })
    ]);

    // Generate an array of image paths from 2 to 13
    const reviewImages = Array.from(
        { length: 12 }, // 12 images from 2 to 13
        (_, i) => `/reviews/${i + 2}.jpg`
    );

    return (
        <SectionContainer className="">
            <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                    {reviewImages.map((src, index) => (
                        <div
                            key={index}
                            className="embla__slide h-80 sm:h-[30rem] md:h-[38rem]"
                        >
                            <Image
                                src={src}
                                alt={`Review Image ${index + 2}`}
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
