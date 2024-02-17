import Link from "next/link";
import { IconProps } from "@/app/utils/types";

export const IconTextDesktop = (props: IconProps) => {
    return (
        <div>
            <Link
                href="/"
                className="flex m-auto flex-col gap-0 pt-2 pb-3 hover:bg-gray-200 hover:rounded-xl"
            >
                <span className={`${props.color ?? "black"} m-auto text-2xl`}>
                    {props.icon}
                </span>
                <span className="text-xs tracking-tighter">{props.label}</span>
            </Link>
        </div>
    );
};
