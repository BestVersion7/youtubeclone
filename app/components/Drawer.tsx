"use client";

import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import Link from "next/link";
import { FaYoutube } from "react-icons/fa6";
import { IconText } from "./IconText";
import { GoHome, GoVideo } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions, MdOutlineWatchLater } from "react-icons/md";
import { FaMusic } from "react-icons/fa";
import { PiUserSquareThin } from "react-icons/pi";
import { MdHistory } from "react-icons/md";
import { LiaDownloadSolid } from "react-icons/lia";
import { BiLike } from "react-icons/bi";
import { FaFire } from "react-icons/fa6";
import { FiShoppingBag } from "react-icons/fi";
import { IoMusicalNoteOutline } from "react-icons/io5";
import { BiMovie } from "react-icons/bi";
import { CgMediaLive } from "react-icons/cg";
import { SiYoutubegaming } from "react-icons/si";
import { FaRegNewspaper } from "react-icons/fa6";
import { CiTrophy } from "react-icons/ci";
import { MdLightbulbOutline } from "react-icons/md";
import { GiClothesline } from "react-icons/gi";
import { MdOutlinePodcasts } from "react-icons/md";

export const Drawer = () => {
    const [showDrawer, setShowDrawer] = useState(false);

    return (
        <div>
            <div className="flex gap-4">
                <button
                    type="button"
                    aria-label="drawer"
                    onClick={() => setShowDrawer((val) => !val)}
                >
                    <RxHamburgerMenu />
                </button>
                <Link
                    href="/"
                    title="Youtube Home"
                    className="flex items-center"
                >
                    <FaYoutube className="text-3xl text-red-500" />
                    <h2 className="tracking-[-0.1em] text-xl font-medium">
                        Premium
                    </h2>
                </Link>
            </div>
            {!showDrawer && (
                <div>
                    <div className="fixed inset-0 bg-black bg-opacity-20"></div>

                    <div className="fixed top-0 left-0  z-30 bg-white">
                        <div className="flex gap-4 py-[1.31rem] px-4">
                            <button
                                type="button"
                                aria-label="drawer"
                                onClick={() => setShowDrawer((val) => !val)}
                            >
                                <RxHamburgerMenu />
                            </button>
                            <Link
                                href="/"
                                title="Youtube Home"
                                className="flex items-center"
                            >
                                <FaYoutube className="text-3xl text-red-500" />
                                <h2 className="tracking-[-0.1em] text-xl font-medium">
                                    Premium
                                </h2>
                            </Link>
                        </div>
                        <div className="overflow-y-scroll h-[calc(100vh-4.4rem)] px-5 text-base">
                            <div>
                                <IconText icon={GoHome} link="Home" />
                                <IconText
                                    icon={SiYoutubeshorts}
                                    link="Shorts"
                                />
                                <IconText
                                    icon={MdOutlineSubscriptions}
                                    link="Subscriptions"
                                />
                                <IconText icon={FaMusic} link="YouTube Music" />
                            </div>
                            <div>
                                <h2>You {`>`}</h2>
                                <IconText
                                    icon={PiUserSquareThin}
                                    link="Your channel"
                                />
                                <IconText icon={MdHistory} link="History" />
                                <IconText icon={GoVideo} link="Your videos" />
                                <IconText
                                    icon={MdOutlineWatchLater}
                                    link="Watch later"
                                />
                                <IconText
                                    icon={LiaDownloadSolid}
                                    link="Downloads"
                                />
                                <IconText icon={BiLike} link="Liked videos" />
                            </div>
                            <div>
                                <h2>Subscriptions</h2>
                            </div>
                            <div>
                                <h2>Explore</h2>
                                <IconText icon={FaFire} link="Trending" />
                                <IconText
                                    icon={FiShoppingBag}
                                    link="Shopping"
                                />
                                <IconText
                                    icon={IoMusicalNoteOutline}
                                    link="Music"
                                />
                                <IconText icon={BiMovie} link="Movies & TV" />
                                <IconText icon={CgMediaLive} link="Live" />
                                <IconText
                                    icon={SiYoutubegaming}
                                    link="Gaming"
                                />
                                <IconText icon={FaRegNewspaper} link="News" />
                                <IconText icon={CiTrophy} link="Sports" />
                                <IconText
                                    icon={MdLightbulbOutline}
                                    link="Learning"
                                />
                                <IconText
                                    icon={GiClothesline}
                                    link="Fashion & beauty"
                                />
                                <IconText
                                    icon={MdOutlinePodcasts}
                                    link="Podcasts"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
