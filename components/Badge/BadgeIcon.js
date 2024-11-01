import { Icon } from "@iconify/react";

export const BadgeIcon = ({ icon = "" }) => {
    return (
        <div className="badge-group--icon">
            <Icon icon={icon} className="w-5 h-5" />
        </div>
    );
};
