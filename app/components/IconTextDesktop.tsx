import { IconType } from "react-icons";
import Link from "next/link";

type props = {
    icon: IconType;
    link: string;
};

export const IconTextDesktop = (props: props) => {
    return (
        <Link
            href="/"
            className="flex flex-col gap-0 py-2 hover:bg-gray-200 hover:rounded-xl"
        >
            <props.icon className="text-2xl text-center m-auto" />

            <span className="text-xs tracking-tighter">{props.link}</span>
        </Link>
    );
};
