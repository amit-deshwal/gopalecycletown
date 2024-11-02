import Link from "next/link";
import { SectionContainer } from "@components/Section/";
import { getTextAlign } from "@utils/helper";

export const BadgeGroup = ({
    alignment,
    link,
    phoneNumbers = [],
    children,
    className
}) => {
    const Element = link ? Link : "div";
    const href = link && typeof link === "string" ? link : link?.href || "";
    const alignClass = getTextAlign(alignment);

    return (
        <SectionContainer className="badge-group w-full">
            <Element
                href={href}
                className={`badge-group--container flex items-center space-x-2 
                    ${link ? "badge-group--link" : ""} 
                    ${alignClass || ""} 
                    ${className || ""}`}
            >
                {/* Render children like icons or messages */}
                {children}

                {/* Render phone numbers as separate clickable links if provided */}
                {phoneNumbers.length > 0 && (
                    <div className="badge-group--phone-numbers flex">
                        {phoneNumbers.map((number, index) => (
                            <a
                                key={index}
                                href={`tel:${number}`}
                                className={`badge-group--phone-link 
                                    bg-blue-100 text-blue-800 font-semibold 
                                    py-1 px-3 rounded-md transition-all
                                    hover:bg-blue-200 hover:text-blue-900
                                    ${
                                        index < phoneNumbers.length - 1
                                            ? "mr-4"
                                            : ""
                                    }`}
                            >
                                {number}
                            </a>
                        ))}
                    </div>
                )}
            </Element>
        </SectionContainer>
    );
};
