import { Icon } from "@iconify/react";

export const BadgeIcon = ({ icon = "", className = "" }) => {
    return (
        <div className={`badge-group--icon ${className}`}>
            <Icon icon={icon} className="w-5 h-5" />
        </div>
    );
};
