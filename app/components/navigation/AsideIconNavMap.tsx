import { IconProps } from "@/app/utils/types";
import { IconTextDesktop } from "./IconTextDesktop";

type props = {
    desktopIcons: IconProps[];
};

export const AsideIconNavMap = (props: props) => {
    return (
        <div className="text-center ">
            {props.desktopIcons.map((item, index) => (
                <IconTextDesktop key={index} {...item} />
            ))}
        </div>
    );
};
