"use client";

import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import Link from "next/link";
import { IconText } from "./IconText";
import { GoHome, GoVideo } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions, MdOutlineWatchLater } from "react-icons/md";
import { PiUserSquareThin } from "react-icons/pi";
import { MdHistory } from "react-icons/md";
import { LiaDownloadSolid } from "react-icons/lia";
import { BiLike, BiMovie } from "react-icons/bi";
import { FaFire, FaYoutube, FaRegNewspaper } from "react-icons/fa6";
import { FiShoppingBag } from "react-icons/fi";
import { CgMediaLive } from "react-icons/cg";
import { SiYoutubegaming, SiYoutubemusic } from "react-icons/si";
import { MdLightbulbOutline, MdOutlinePodcasts } from "react-icons/md";
import { GiClothesline } from "react-icons/gi";
import { LuHexagon } from "react-icons/lu";
import { TbBrandYoutubeKids } from "react-icons/tb";
import { CiSettings, CiFlag1, CiTrophy, CiYoutube } from "react-icons/ci";
import {
    IoHelpCircleOutline,
    IoPersonCircleOutline,
    IoMusicalNoteOutline,
} from "react-icons/io5";
import { RiFeedbackLine } from "react-icons/ri";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { IconTextDesktop } from "./IconTextDesktop";
import { DrawerAside } from "./DrawerAside";

import { useOnClickOutside } from "../../utils/customHooks";
import { useRef } from "react";

export const Drawer = () => {
    const [showDrawer, setShowDrawer] = useState(false);

    const handleShowDrawer = () => {
        setShowDrawer((val) => !val);
        const drawer = document.getElementById("drawer-nav");
        const main = document.querySelector("#main-home");
        if (drawer) {
            const drawerStyle = window.getComputedStyle(drawer, null);
            console.log(drawerStyle.width);
            // if (drawerStyle.width === "141.825px") {
            //     main.style.marginLeft = "500.825px";
            // } else {
            //     main.style.marginLeft = "100px";
            // }
        }
    };

    const drawerRef = useRef(null);
    useOnClickOutside(drawerRef, () => setShowDrawer(false));

    return (
        <div>
            <div className="flex h-16 gap-5 items-center">
                <button
                    type="button"
                    aria-label="drawer"
                    onClick={handleShowDrawer}
                >
                    <RxHamburgerMenu />
                </button>

                <Link href="/" title="Youtube Home" className="flex">
                    <FaYoutube className="text-3xl text-red-500" />
                    <h2 className="tracking-[-0.1em] text-xl font-medium">
                        Premium
                    </h2>
                </Link>
            </div>

            {/* desktop */}
            <aside id="drawer-nav">
                {!showDrawer ? (
                    <div className="hidden md:grid w-16 text-center absolute left-0">
                        <IconTextDesktop icon={GoHome} link="Home" />
                        <IconTextDesktop icon={SiYoutubeshorts} link="Shorts" />
                        <IconTextDesktop
                            icon={MdOutlineSubscriptions}
                            link="Subscriptions"
                        />
                        <IconTextDesktop
                            icon={BsMusicNoteBeamed}
                            link="Music"
                        />
                        <IconTextDesktop icon={CiYoutube} link="You" />
                        <IconTextDesktop
                            icon={LiaDownloadSolid}
                            link="Downloads"
                        />
                    </div>
                ) : (
                    <div>
                        <div className="fixed inset-0 bg-black bg-opacity-20"></div>

                        <div
                            className="w-64 absolute top-0 left-0 z-30 bg-white"
                            ref={drawerRef}
                        >
                            <div className="flex pl-5 gap-5 items-center h-16">
                                <button
                                    type="button"
                                    aria-label="drawer"
                                    onClick={handleShowDrawer}
                                >
                                    <RxHamburgerMenu />
                                </button>
                                <Link
                                    href="/"
                                    title="Youtube Home"
                                    className="flex"
                                >
                                    <FaYoutube className="text-3xl text-red-500" />
                                    <h2 className="tracking-[-0.1em] text-xl font-medium">
                                        Premium
                                    </h2>
                                </Link>
                            </div>

                            <DrawerAside />
                        </div>
                    </div>
                )}
            </aside>
        </div>
    );
};
