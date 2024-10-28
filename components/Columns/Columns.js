import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
import { v4 as uuid } from "uuid";

const ColumnData = [
    {
        id: uuid(),
        title: "John D.",
        icon: "carbon:user-avatar-filled-alt",
        content:
            "Nutritrack has revolutionized my meal planning and nutrition journey. With its intuitive Notion template, I can effortlessly plan my meals, track my nutrition, and stay on top of my health goals. It's truly a game-changer!"
    },
    {
        id: uuid(),
        title: "Jane D.",
        icon: "carbon:user-avatar-filled-alt",
        content:
            "I've tried various meal planning tools, but Nutritrack stands out from the rest. The customizable layouts and seamless recipe integration make it a breeze to create delicious and healthy meals. It's become an essential part of my wellness routine."
    },
    {
        id: uuid(),
        title: "John D.",
        icon: "carbon:user-avatar-filled-alt",
        content:
            "Nutritrack has made meal planning and tracking nutrition so much easier and enjoyable. The comprehensive features and user-friendly interface have helped me stay on track with my health goals. I highly recommend it to anyone looking for a convenient and effective solution."
    },
    {
        id: uuid(),
        title: "Jane D.",
        icon: "carbon:user-avatar-filled-alt",
        content:
            "I can't imagine my nutrition journey without Nutritrack. It has simplified the way I plan my meals and track my progress. The ability to customize layouts and easily integrate recipes has made healthy eating a breeze. It's been a true lifesaver!"
    }
];

export const Columns = () => {
    return (
        <SectionContainer className="">
            <div
                className="elfsight-app-0bc7fa16-d2d5-4149-ae6d-c33a71f784d5"
                data-elfsight-app-lazy
            ></div>
        </SectionContainer>
    );
};
