import Link from "next/link";
import { GoDotFill } from "react-icons/go";
import { IconProps } from "@/app/utils/types";

export const IconText = (props: IconProps) => {
    return (
        <div>
            <Link
                href="/"
                className="flex items-center gap-6 py-2 px-2 rounded-lg  hover:bg-gray-200"
            >
                <span className={`${props.color ?? "black"} text-2xl`}>
                    {props.icon}
                </span>

                <span className="overflow-hidden text-sm">{props.label}</span>
                {props.subscription && (
                    <GoDotFill className="text-blue-500 text-sm" />
                )}
            </Link>
        </div>
    );
};
