"use client";

import { IconProps } from "@/app/utils/types";
import { IconText } from "./IconText";
import { useRef, useState } from "react";
import { IconTextDesktop } from "./IconTextDesktop";
import Link from "next/link";
import { useOnClickOutside } from "@/app/utils/customHooks";

type props = {
    youtubeIcon: React.ReactNode;
    hamburgerIcon: React.ReactNode;
    desktopIcons: IconProps[];
    drawerIcons1: IconProps[];
    drawerIcons2: IconProps[];
    drawerIcons3: IconProps[];
    drawerIcons4: IconProps[];
    drawerIcons5: IconProps[];
    drawerIcons6: IconProps[];
};

export const DrawerClient = (props: props) => {
    const [showDrawer, setShowDrawer] = useState(false);
    const drawerRef = useRef(null);
    const handleShowDrawer = () => {
        setShowDrawer((val) => !val);
    };
    useOnClickOutside(drawerRef, () => setShowDrawer(() => false));

    return (
        <div>
            <div className="flex h-16 gap-5 items-center">
                <button
                    type="button"
                    aria-label="drawer"
                    onClick={handleShowDrawer}
                >
                    {props.hamburgerIcon}
                </button>

                <Link href="/" title="Youtube Home" className="flex">
                    <span className="text-3xl text-red-500">
                        {props.youtubeIcon}
                    </span>
                    <h2 className="tracking-[-0.1em] text-xl font-medium">
                        Premium
                    </h2>
                </Link>
            </div>

            <aside>
                {!showDrawer ? (
                    <div className="hidden md:grid w-16 text-center absolute left-0">
                        {props.desktopIcons.map((item, index) => (
                            <IconTextDesktop key={index} {...item} />
                        ))}
                    </div>
                ) : (
                    <div>
                        <div className="fixed inset-0 bg-black bg-opacity-20"></div>
                        <div
                            className="w-64 absolute top-0 left-0 z-10 bg-white"
                            ref={drawerRef}
                        >
                            <div className="flex pl-5 gap-5 items-center h-16">
                                <button
                                    type="button"
                                    aria-label="drawer"
                                    onClick={handleShowDrawer}
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

                            <div className="overflow-y-scroll h-[calc(100vh-4rem)] ">
                                <div className="px-3">
                                    {props.drawerIcons1.map((item, index) => (
                                        <IconText key={index} {...item} />
                                    ))}

                                    <hr className="my-3" />
                                </div>
                                <div className="px-3">
                                    <h2 className="drawer-title">You {`>`}</h2>
                                    {props.drawerIcons2.map((item, index) => (
                                        <IconText key={index} {...item} />
                                    ))}
                                </div>

                                <hr className="my-3" />

                                <div className="px-3">
                                    <h2 className="drawer-title">
                                        Subscriptions
                                    </h2>
                                    {props.drawerIcons3.map((item, index) => (
                                        <IconText
                                            key={index}
                                            {...item}
                                            subscription={true}
                                        />
                                    ))}
                                </div>
                                <hr className="my-3" />

                                <div className="px-3">
                                    <h2 className="drawer-title">Explore</h2>
                                    {props.drawerIcons4.map((item, index) => (
                                        <IconText key={index} {...item} />
                                    ))}
                                </div>
                                <hr className="my-3" />
                                <div className="px-3">
                                    <h2 className="drawer-title">
                                        More from Youtube
                                    </h2>
                                    {props.drawerIcons5.map((item, index) => (
                                        <IconText
                                            key={index}
                                            {...item}
                                            color="text-red-500"
                                        />
                                    ))}
                                </div>
                                <hr className="my-3" />
                                <div className="px-3 ">
                                    {props.drawerIcons6.map((item, index) => (
                                        <IconText key={index} {...item} />
                                    ))}
                                </div>
                                <hr className="my-3" />

                                <div className="px-5 grid gap-3 text-sm text-gray-600 font-semibold">
                                    <div className="">
                                        <Link
                                            className="inline-block mr-2"
                                            href="/"
                                        >
                                            About
                                        </Link>
                                        <Link
                                            className="inline-block mr-2"
                                            href="/"
                                        >
                                            Press
                                        </Link>
                                        <Link
                                            className="inline-block mr-2"
                                            href="/"
                                        >
                                            Copyright
                                        </Link>
                                        <Link
                                            className="inline-block mr-2"
                                            href="/"
                                        >
                                            Contact us
                                        </Link>
                                        <Link
                                            className="inline-block mr-2"
                                            href="/"
                                        >
                                            Creators
                                        </Link>
                                        <Link
                                            className="inline-block mr-2"
                                            href="/"
                                        >
                                            Advertise
                                        </Link>
                                        <Link
                                            className="inline-block mr-2"
                                            href="/"
                                        >
                                            Developers
                                        </Link>
                                    </div>
                                    <div>
                                        <Link
                                            className="inline-block mr-2"
                                            href="/"
                                        >
                                            Terms
                                        </Link>
                                        <Link
                                            className="inline-block mr-2"
                                            href="/"
                                        >
                                            Privacy
                                        </Link>
                                        <Link
                                            className="inline-block mr-2"
                                            href="/"
                                        >
                                            Policy & Safety
                                        </Link>
                                        <Link
                                            className="inline-block mr-2"
                                            href="/"
                                        >
                                            How Youtube works
                                        </Link>
                                        <Link
                                            className="inline-block mr-2"
                                            href="/"
                                        >
                                            Test new features
                                        </Link>
                                        <Link
                                            className="inline-block mr-2"
                                            href="/"
                                        >
                                            NFL Sunday Ticket
                                        </Link>
                                    </div>
                                    <p className="mb-5 text-xs text-gray-400">
                                        &copy; 2024 Google LLC
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </aside>
        </div>
    );
};
