import { SectionContainer } from "@components/Section";
import Link from "next/link";
import Image from "next/image";
import { ButtonGroup } from "@components/Button";
import { Icon } from "@iconify/react";
import { BadgeGroup, BadgeIcon, BadgeMessage } from "@components/Badge";

const DATA = [
    {
        title: "Company",
        items: [
            {
                label: "Brands",
                href: "#brands"
            },

            {
                label: "Happy Customers",
                href: "#testimonials"
            },
            {
                label: "Shop Showcase",
                href: "#shop-gallery"
            },
            {
                label: "FAQ",
                href: "#faq"
            },
            {
                label: "Contact Us",
                href: "#contact-us"
            }
        ]
    }
    // {
    //     title: "Company",
    //     items: [
    //         {
    //             label: "About",
    //             // href: "https://github.com/christian-luntok/",
    //             target: "_blank"
    //         },
    //         {
    //             label: "Twitter",
    //             // href: "https://github.com/christian-luntok/",
    //             target: "_blank"
    //         },
    //         {
    //             label: "Instagram",
    //             // href: "https://github.com/christian-luntok/",
    //             target: "_blank"
    //         },
    //         {
    //             label: "Facebook",
    //             // href: "https://github.com/christian-luntok/",
    //             target: "_blank"
    //         }
    //     ]
    // }
];

export const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer id="footer" className="bg-white">
            {/* Footer Links */}
            <SectionContainer className="footer--container wrap wrap-px relative z-10">
                <div className="footer--content-container py-16">
                    <div className="footer-links mb-12 grid grid-cols-2 gap-8 md:mb-16 md:grid-cols-8 lg:grid-cols-12">
                        <div className="col-span-6">
                            <div className="footer--logo grid gap-8">
                                <Link href="/">
                                    <Image
                                        src="/main.png"
                                        alt="logo"
                                        className="h-[56px] w-[86px] md:h-[84px] md:w-[126px]"
                                        height="25"
                                        width="100"
                                        priority
                                    />
                                </Link>

                                <div
                                    className="badge-group--phone-numbers flex flex-wrap"
                                    id="contact-us"
                                >
                                    <BadgeIcon
                                        icon="twemoji:telephone-receiver"
                                        className="ml-0 mr-0"
                                    />
                                    {["9284643679", "8181939382"].map(
                                        (number, index) => (
                                            <a
                                                key={index}
                                                href={`tel:${number}`}
                                                className={`badge-group--phone-link 
                bg-blue-100 text-blue-800 font-semibold 
                py-1 px-3 rounded-md transition-all
                hover:bg-blue-200 hover:text-blue-900
                ${index < 1 ? "mr-4" : ""}`}
                                            >
                                                {number.replace(
                                                    /(\d{3})(\d{3})(\d{4})/,
                                                    "$1_$2_$3"
                                                )}{" "}
                                            </a>
                                        )
                                    )}
                                </div>

                                {/* Get Template button; remove if not used */}
                                <ButtonGroup alignment="left">
                                    <a
                                        role="button"
                                        href="https://g.co/kgs/DLs4GP4"
                                        className="btn btn--secondary"
                                    >
                                        Visit Us
                                        <Icon icon="material-symbols:arrow-forward-rounded" />
                                    </a>
                                </ButtonGroup>
                            </div>
                        </div>
                        <div className="col-span-6">
                            <div className="footer-menu grid grid-cols-2 md:grid-cols-8 lg:grid-cols-12">
                                {DATA.map((footerLinks) => (
                                    <div
                                        key={footerLinks.title}
                                        className="footer-menu--container col-span-1 md:col-span-4"
                                    >
                                        <h3 className="font-bold text-base mb-2">
                                            {footerLinks.title}
                                        </h3>
                                        <ul className="footer-menu--list">
                                            {footerLinks.items.map(
                                                (footerItem) => (
                                                    <li
                                                        key={footerItem.label}
                                                        className="footer-menu--list-item gap-2"
                                                    >
                                                        <a
                                                            className="mb-2 block w-auto font-medium transition-colors duration-300 hover:underline"
                                                            href={
                                                                footerItem.href
                                                            }
                                                            target={
                                                                footerItem.target
                                                            }
                                                        >
                                                            {footerItem.label}
                                                        </a>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </SectionContainer>
            {/* Footer Credits */}
            <SectionContainer className="footer-credits relative z-10">
                <div className="wrap wrap-px py-6">
                    <p className="my-0">
                        © {year} Gopale Cycle Town. All rights reserved
                    </p>
                </div>
            </SectionContainer>
            <div className="footer--background"></div>
        </footer>
    );
};
