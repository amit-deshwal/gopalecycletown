import { SectionContainer } from "@components/Section";
import Image from "next/image";
import { useEffect, useState } from "react";

export const ContentImage = () => {
    const allBrands = [
        { name: "KTM", logo: "/brands/3.png" },
        { name: "Ninety one", logo: "/brands/1.png" },
        { name: "91 E-Series", logo: "/brands/2.png" },
        { name: "Fantom", logo: "/brands/5.png" },
        { name: "Gang", logo: "/brands/6.png" },
        { name: "Hercules", logo: "/brands/4.png" },
        { name: "Addo India", logo: "/brands/7.png" },
        { name: "WIFI Bikes", logo: "/brands/8.png" }
    ];

    const getRandomBrands = () => {
        // Shuffle the brands array and take the first 6
        const shuffled = allBrands.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 8);
    };

    const [visibleBrands, setVisibleBrands] = useState(getRandomBrands());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setVisibleBrands(getRandomBrands());
        }, 3000); // Change selection every 3 seconds

        return () => clearInterval(intervalId);
    }, []);

    return (
        <SectionContainer className="process-items mt-16 space-y-16">
            <div className="relative h-[44em] flex items-center justify-center overflow-hidden">
                <Image
                    src="https://sanrocycles.com/wp-content/uploads/2024/01/14733KG-GreenSquareCyclingCourse-GreenSquareCyclingCourse-Highres-7859a.jpg"
                    alt="People riding bicycles"
                    layout="fill"
                    className="absolute z-0"
                    style={{ objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20 z-10"></div>
                <div className="relative z-20 w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
                    <div className="text-white mb-8">
                        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
                            CHOOSE FROM BRANDS
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                        {visibleBrands.map((brand, index) => (
                            <div
                                key={index}
                                className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center"
                            >
                                <Image
                                    src={brand.logo}
                                    alt={`${brand.name} logo`}
                                    width={200}
                                    height={60}
                                    className="max-w-full h-auto"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </SectionContainer>
    );
};
