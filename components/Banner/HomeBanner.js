import { BadgeGroup, BadgeIcon, BadgeMessage } from "@components/Badge";
import { Button, ButtonGroup } from "@components/Button";
import { Content } from "@components/Content";
import { MotionBTTContainer, MotionInfiniteImage } from "@components/Motion";
import { SectionContainer } from "@components/Section";
import { PageTitle } from "@components/Title";
import { Icon } from "@iconify/react";
import Image from "next/image";

export const HomeBanner = () => {
    return (
        <SectionContainer className="page-banner--container pt-12 pb-16 md:py-16">
            <SectionContainer className="page-banner--inner-container wrap wrap-px z-10">
                {/* Appear First */}
                {/* <MotionBTTContainer transition={{ delay: 0.2, duration: 0.5 }}>
                    <BadgeGroup alignment="center">
                        <BadgeMessage>Discover NutriTrack!</BadgeMessage>
                        <BadgeIcon icon="game-icons:meal" />
                    </BadgeGroup>
                </MotionBTTContainer> */}
                {/* Appear Second */}
                <MotionBTTContainer transition={{ delay: 0.4, duration: 0.5 }}>
                    <PageTitle className="text-center mx-auto" type="heavy">
                        <div className="text-center md:pt-10">
                            <h1 className="text-5xl md:text-6xl font-extrabold text-black drop-shadow-[0_0_5px_rgba(255, 255, 0, 0.7)]">
                                Maval&apos;s Trusted Cycle Shop
                            </h1>
                            <p className="text-2xl md:text-3xl text-yellow-400 mt-4 drop-shadow-[0_0_2px rgba(234, 179, 8, 0.5)]">
                                Quality Bikes &amp; Expert Service!
                            </p>
                        </div>
                    </PageTitle>
                </MotionBTTContainer>
                {/* Appear Third */}
                <MotionBTTContainer transition={{ delay: 0.6, duration: 0.5 }}>
                    <Content className="text-center" alignment="center">
                        <p>
                            Explore Top-Quality Bicycles, Accessories, and
                            Reliable Repairs for Every Rider&apos;s Needs.
                        </p>
                    </Content>
                    <div className="mt-6 mb-16 text-center">
                        <ButtonGroup alignment="center">
                            <a
                                role="button"
                                href="https://g.co/kgs/DLs4GP4"
                                className="btn btn--secondary"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Visit Us
                                <Icon icon="material-symbols:arrow-forward-rounded" />
                            </a>
                        </ButtonGroup>
                    </div>
                </MotionBTTContainer>
                {/* Appear Fourth */}
                <MotionBTTContainer transition={{ delay: 0.8, duration: 0.5 }}>
                    <div className="page-banner--image">
                        <Image
                            src="/hero-banner.jpeg"
                            width={1024}
                            height={680}
                            alt="Page Banner"
                            className="mx-auto"
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                </MotionBTTContainer>
            </SectionContainer>
        </SectionContainer>
    );
};
