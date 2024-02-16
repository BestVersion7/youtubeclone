"use client";

import { IconProps } from "@/app/utils/types";
import { IconText } from "./IconText";
import { useRef, useState } from "react";
import { IconTextDesktop } from "./IconTextDesktop";
import Link from "next/link";
import { useMarginLeft, useOnClickOutside } from "@/app/utils/customHooks";

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
    const [showDrawerDesktop, setShowDrawerDesktop] = useState(false);
    const drawerRef = useRef(null);

    useMarginLeft(showDrawer, showDrawerDesktop);

    useOnClickOutside(drawerRef, () => setShowDrawer(() => false));

    const handleShowDrawer = () => {
        setShowDrawer((val) => !val);
    };
    const handleShowDrawerDesktop = () => {
        setShowDrawerDesktop((val) => !val);
    };

    return (
        <div>
            <div className="flex h-16 gap-5 items-center">
                <button
                    type="button"
                    aria-label="drawer"
                    onClick={handleShowDrawer}
                    className="xl:hidden"
                >
                    {props.hamburgerIcon}
                </button>
                <button
                    type="button"
                    aria-label="drawer"
                    onClick={handleShowDrawerDesktop}
                    className="hidden xl:block"
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

            {/* small screens to xl */}
            <aside className="xl:hidden" id="aside-small">
                {!showDrawer ? (
                    <div
                        id="desktop-aside-mini"
                        className="hidden md:grid pl-[4.5px] text-center absolute left-0"
                    >
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
                            <div className="flex pl-4 sm:pl-6 gap-5 items-center h-16">
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

                            <div className="pl-2 sm:pl-4 overflow-y-scroll h-[calc(100vh-4rem)] ">
                                {props.drawerIcons1.map((item, index) => (
                                    <IconText key={index} {...item} />
                                ))}

                                <hr className="my-3" />
                                <h2 className="drawer-title">You {`>`}</h2>
                                {props.drawerIcons2.map((item, index) => (
                                    <IconText key={index} {...item} />
                                ))}

                                <hr className="my-3" />

                                <h2 className="drawer-title">Subscriptions</h2>
                                {props.drawerIcons3.map((item, index) => (
                                    <IconText
                                        key={index}
                                        {...item}
                                        subscription={true}
                                    />
                                ))}
                                <hr className="my-3" />

                                <h2 className="drawer-title">Explore</h2>
                                {props.drawerIcons4.map((item, index) => (
                                    <IconText key={index} {...item} />
                                ))}
                                <hr className="my-3" />

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
                                <hr className="my-3" />

                                {props.drawerIcons6.map((item, index) => (
                                    <IconText key={index} {...item} />
                                ))}
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
                                    <p className="mb-5 text-gray-400">
                                        &copy; 2024 Google LLC
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </aside>

            {/* xl screens and up */}
            <aside className="hidden xl:block">
                {!showDrawerDesktop ? (
                    <div
                        id="desktop-aside"
                        className="hidden xl:block w-64 absolute left-0 top-16 z-10  bg-white"
                    >
                        <div className="pl-2 sm:pl-4 overflow-y-scroll h-[calc(100vh-4rem)] ">
                            {props.drawerIcons1.map((item, index) => (
                                <IconText key={index} {...item} />
                            ))}

                            <hr className="my-3" />
                            <h2 className="drawer-title">You {`>`}</h2>
                            {props.drawerIcons2.map((item, index) => (
                                <IconText key={index} {...item} />
                            ))}

                            <hr className="my-3" />

                            <h2 className="drawer-title">Subscriptions</h2>
                            {props.drawerIcons3.map((item, index) => (
                                <IconText
                                    key={index}
                                    {...item}
                                    subscription={true}
                                />
                            ))}
                            <hr className="my-3" />

                            <h2 className="drawer-title">Explore</h2>
                            {props.drawerIcons4.map((item, index) => (
                                <IconText key={index} {...item} />
                            ))}
                            <hr className="my-3" />

                            <h2 className="drawer-title">More from Youtube</h2>
                            {props.drawerIcons5.map((item, index) => (
                                <IconText
                                    key={index}
                                    {...item}
                                    color="text-red-500"
                                />
                            ))}
                            <hr className="my-3" />

                            {props.drawerIcons6.map((item, index) => (
                                <IconText key={index} {...item} />
                            ))}
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
                                <p className="mb-5 text-gray-400">
                                    &copy; 2024 Google LLC
                                </p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="pl-[4.5px] text-center absolute left-0">
                        {props.desktopIcons.map((item, index) => (
                            <IconTextDesktop key={index} {...item} />
                        ))}
                    </div>
                )}
            </aside>
        </div>
    );
};
