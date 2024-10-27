import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

const ContentImageData = [
    {
        id: uuid(),
        title: "Effortless Planning",
        content:
            "Say goodbye to meal planning stress! With NutriTrack, planning your meals becomes a breeze. Our user-friendly Notion template lets you create customized daily or weekly meal plans effortlessly. Enjoy a balanced and nutritious diet without the hassle.",
        align: "right",
        image: "/features1.png"
    },
    {
        id: uuid(),
        title: "Shopping List",
        content:
            "We've got your grocery shopping covered! NutriTrack includes a handy shopping list feature. As you plan your meals, the template automatically generates a comprehensive shopping list. No more forgotten items or aimless wandering in the supermarket. Shopping for healthy ingredients has never been easier!",
        align: "left",
        image: "/features2.png"
    }
];

export const ContentImage = () => {
    const allBrands = [
        {
            name: "KTM",
            logo: "https://www.svgrepo.com/show/303486/ktm-10-logo.svg"
        },
        {
            name: "Kross",
            logo: "https://sanrocycles.com/wp-content/uploads/2024/01/Kross.png"
        },
        {
            name: "Hercules",
            logo: "data:image/png;base64,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"
        },
        {
            name: "Match City",
            logo: "https://sanrocycles.com/wp-content/uploads/2024/01/mach-city.png"
        },
        {
            name: "Mach City",
            logo: "https://sanrocycles.com/wp-content/uploads/2024/01/1.png"
        },
        {
            name: "Hercules",
            logo: "https://sanrocycles.com/wp-content/uploads/2024/01/1.png"
        }
        // Add more brands if needed to ensure continuous sliding
    ];

    const [visibleBrands, setVisibleBrands] = useState(allBrands.slice(0, 6));

    useEffect(() => {
        const intervalId = setInterval(() => {
            setVisibleBrands((prevBrands) => {
                const nextBrands = [...prevBrands];
                const firstBrand = nextBrands.shift();
                nextBrands.push(firstBrand);
                return nextBrands;
            });
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(intervalId);
    }, []);

    return (
        <SectionContainer className="process-items mt-16 space-y-16">
            <div className="relative h-[44em] flex items-center justify-center overflow-hidden">
                <Image
                    src="https://sanrocycles.com/wp-content/uploads/2024/01/14733KG-GreenSquareCyclingCourse-GreenSquareCyclingCourse-Highres-7859a.jpg"
                    alt="People riding bicycles"
                    layout="fill"
                    objectFit="cover"
                    className="absolute z-0"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20 z-10"></div>
                <div className="relative z-20 w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
                    <div className="text-white mb-8">
                        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
                            CHOOSE FROM BRANDS
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 overflow-hidden">
                        {visibleBrands.map((brand, index) => (
                            <div
                                key={index}
                                className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center transform transition-all duration-500 ease-in-out"
                                style={{
                                    opacity: index < 6 ? 1 : 0,
                                    transform: `translateX(${
                                        index < 6 ? "0%" : "100%"
                                    })`
                                }}
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
