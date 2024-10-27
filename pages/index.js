import { BadgeMessage, BadgeGroup, BadgeIcon } from "@components/Badge";
import { SectionContainer } from "@components/Section";
import { PageTitle } from "@components/Title";
import { Layout } from "@components/Layout";
import { HomeBanner } from "@components/Banner";
import { Columns } from "@components/Columns";
import { ContentImage } from "@components/ContentImage";
import { Content } from "@components/Content";
import { Accordion } from "@components/Accordion";
import { MotionBTTContainer } from "@components/Motion";
import SEO from "@components/SEO/SEO";
import {
    CardBody,
    CardGroup,
    CardHeader,
    CardImage,
    Card
} from "@components/Card";

export default function Home() {
    return (
        <Layout className="">
            <SEO
                title="Gopale Cycle Town"
                description="Welcome to Gopale Cycle Town - Talegaon Dabhade’s trusted cycle shop! Discover quality bicycles, accessories, and repair services in Maval taluka. Visit us offline for expert guidance and exceptional customer service!"
            />
            <div className="main-wrapper bg-[#F3F5F8] relative z-10 pb-20 pt-20 ">
                {/* { Page Banner } */}
                <HomeBanner />
                {/* Components Container */}
                <SectionContainer className="components--container wrap wrap-px grid gap-8 sm:gap-24">
                    {/* Features */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer id="features" className="features">
                            <BadgeGroup alignment="center">
                                <BadgeMessage>Brands</BadgeMessage>
                            </BadgeGroup>
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                All Major Brands Available
                            </PageTitle>
                            <ContentImage />
                        </SectionContainer>
                    </MotionBTTContainer>
                    {/* Card Container Tabs */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer className="feature-tabs">
                            <BadgeGroup alignment="center">
                                <BadgeMessage>More Features</BadgeMessage>
                                <BadgeIcon icon="twemoji:waving-hand" />
                            </BadgeGroup>
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                Elevate Your Cycling Experience
                            </PageTitle>
                            <Content className="text-center" alignment="center">
                                <p>
                                    At Gopale Cycle Town, we empower you to
                                    enhance your cycling journey. Our
                                    user-friendly selection of bikes,
                                    customizable gear, and expert advice make it
                                    easy to take control of your ride. Whether
                                    you’re a beginner or a seasoned cyclist,
                                    achieving your cycling goals has never been
                                    easier!
                                </p>
                            </Content>
                            <CardGroup className="grid scroll-m-24 gap-8 grid-cols-1 max-w-4xl mx-auto mt-24 md:grid-cols-2">
                                <Card className="col-span-1 text-primary-900">
                                    <CardBody className="w-full bg-white-600/20 p-12">
                                        <CardImage
                                            src="/f1.jpg"
                                            alt="Personalize Your Cycling Experience"
                                        />
                                        <CardHeader className="!text-black !text-2xl !font-bold">
                                            Personalize Your Cycling Experience
                                        </CardHeader>
                                        <p>
                                            Enhance your biking journey with our
                                            customizable options. Tailor your
                                            bike, accessories, and gear to fit
                                            your unique style and riding
                                            preferences. Our knowledgeable staff
                                            is here to help you create the
                                            perfect setup for your needs.
                                        </p>
                                    </CardBody>
                                </Card>
                                <Card className="col-span-1 text-primary-900">
                                    <CardBody className="w-full bg-white-600/20 p-12">
                                        <CardImage
                                            src="/f2.jpg"
                                            alt="Peace Of Mind."
                                        />
                                        <CardHeader className="!text-black !text-2xl !font-bold">
                                            Warranty -Peace of Mind for Your
                                            Cycling Journey
                                        </CardHeader>
                                        <p>
                                            At Gopale Cycle Town, we stand by
                                            the quality of our bicycles. All our
                                            bikes come with a warranty that
                                            covers manufacturing defects,
                                            ensuring you can ride with
                                            confidence. Our knowledgeable team
                                            is here to assist you with any
                                            warranty questions or claims, so you
                                            can focus on enjoying your cycling
                                            experience!
                                        </p>
                                    </CardBody>
                                </Card>
                            </CardGroup>
                        </SectionContainer>
                    </MotionBTTContainer>
                    {/* Testimonials */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer
                            id="testimonials"
                            className="benefits"
                        >
                            <BadgeGroup alignment="left">
                                <BadgeMessage>Testimonials</BadgeMessage>
                                <BadgeIcon icon="twemoji:waving-hand" />
                            </BadgeGroup>
                            {/* <PageTitle className="" type="default">
                                This is what our customers have to say about
                                this template
                            </PageTitle> */}
                            <Columns />
                        </SectionContainer>
                    </MotionBTTContainer>
                    {/* Accordions */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer id="faq" className="faq">
                            <BadgeGroup alignment="center">
                                <BadgeMessage>FAQ</BadgeMessage>
                            </BadgeGroup>
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                Have questions about our cycles and services?{" "}
                                <br></br>
                                <br></br>No worries! We&apos;ve got the answers
                                you need:
                            </PageTitle>
                            <Accordion />
                        </SectionContainer>
                    </MotionBTTContainer>
                </SectionContainer>
            </div>
        </Layout>
    );
}
