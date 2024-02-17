import Link from "next/link";
import { IconProps } from "@/app/utils/types";

export const IconTextDesktop = (props: IconProps) => {
    return (
        <div>
            <Link
                href="/"
                className="flex flex-col items-center py-2 rounded-lg  hover:bg-gray-200"
            >
                <span className={`${props.color ?? "black"} text-2xl`}>
                    {props.icon}
                </span>
                <span className="text-xs tracking-tighter">{props.label}</span>
            </Link>
        </div>
    );
};
