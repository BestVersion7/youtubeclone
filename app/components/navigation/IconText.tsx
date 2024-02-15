import { IconType } from "react-icons";
import Link from "next/link";
import { GoDotFill } from "react-icons/go";

type props = {
    icon: IconType;
    link: string;
    color?: string;
    subscription?: boolean;
};

export const IconText = (props: props) => {
    return (
        <Link
            href="/"
            className="flex items-center gap-6 py-2 px-2 rounded-lg  hover:bg-gray-200"
        >
            <props.icon className={`${props.color ?? "black"} text-2xl`} />

            <span className="overflow-hidden">{props.link}</span>
            {props.subscription && <GoDotFill className="text-blue-500" />}
        </Link>
    );
};
