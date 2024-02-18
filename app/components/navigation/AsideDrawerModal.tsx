"use client";

import { IconProps } from "@/app/utils/types";
import { useRef, useState } from "react";
import Link from "next/link";
import { useOnClickOutside } from "@/app/utils/customHooks";
import { AsideDrawerFixed } from "./AsideDrawerFixed";

type props = {
    youtubeIcon: React.ReactNode;
    hamburgerIcon: React.ReactNode;
    drawerIcons1: IconProps[];
    drawerIcons2: IconProps[];
    drawerIcons3: IconProps[];
    drawerIcons4: IconProps[];
    drawerIcons5: IconProps[];
    drawerIcons6: IconProps[];
};

export const AsideDrawerModal = (props: props) => {
    const [showDrawer, setShowDrawer] = useState(false);
    const drawerRef = useRef(null);

    useOnClickOutside(drawerRef, () => setShowDrawer(() => false));
    const handleShowDrawer = () => {
        setShowDrawer((val) => !val);
    };

    return (
        <div>
            <div className="flex gap-3 items-center ">
                <button
                    type="button"
                    aria-label="drawer"
                    onClick={handleShowDrawer}
                    className="hidden sm:block xl:hidden icon"
                >
                    {props.hamburgerIcon}
                </button>
                <button
                    type="button"
                    aria-label="drawer"
                    className="hidden xl:block icon"
                >
                    {props.hamburgerIcon}
                </button>

                <Link
                    href="/"
                    title="Youtube Home"
                    className="flex ml-2 sm:ml-0"
                >
                    <span className="text-3xl text-red-500">
                        {props.youtubeIcon}
                    </span>
                    <h2 className="tracking-[-0.1em] text-xl font-medium">
                        Premium
                    </h2>
                </Link>
            </div>

            <div className="xl:ml-36 xl:hidden">
                {showDrawer && (
                    <div className="">
                        <div className="fixed inset-0 bg-black bg-opacity-20"></div>
                        <div
                            className="w-64 absolute top-0 left-0 z-20 bg-white"
                            ref={drawerRef}
                        >
                            <div className="flex gap-5 items-center h-16 pl-2 sm:pl-3">
                                <button
                                    type="button"
                                    aria-label="drawer"
                                    onClick={handleShowDrawer}
                                    className="icon"
                                >
                                    {props.hamburgerIcon}
                                </button>
                                <Link
                                    href="/"
                                    title="Youtube Home"
                                    className="flex"
                                >
                                    <span className="text-3xl text-red-500">
                                        {props.youtubeIcon}
                                    </span>
                                    <h2 className="tracking-[-0.1em] text-xl font-medium">
                                        Premium
                                    </h2>
                                </Link>
                            </div>

                            <div className="pl-3 sm:pl-4 overflow-y-scroll h-[calc(100vh-4rem)] ">
                                <AsideDrawerFixed
                                    drawerIcons1={props.drawerIcons1}
                                    drawerIcons2={props.drawerIcons2}
                                    drawerIcons3={props.drawerIcons3}
                                    drawerIcons4={props.drawerIcons4}
                                    drawerIcons5={props.drawerIcons5}
                                    drawerIcons6={props.drawerIcons6}
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
