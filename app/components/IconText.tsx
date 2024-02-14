import { IconType } from "react-icons";
import Link from "next/link";

type props = {
    icon: IconType;
    link: string;
    color?: string;
};

export const IconText = (props: props) => {
    return (
        <Link href="/" className="flex gap-6 py-2 hover:bg-gray-200">
            <props.icon className={`${props.color ?? "black"} text-2xl`} />
            {props.link}
        </Link>
    );
};
