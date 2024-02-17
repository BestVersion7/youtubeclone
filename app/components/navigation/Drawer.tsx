import { RxHamburgerMenu } from "react-icons/rx";
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
import { DrawerClient } from "./DrawerClient";
import { DrawerClientOnlyHome } from "./DrawerClientOnlyHome";

export const Drawer = (props: { home: boolean }) => {
    return (
        <>
            {props.home ? (
                <DrawerClientOnlyHome
                    youtubeIcon={<FaYoutube />}
                    hamburgerIcon={<RxHamburgerMenu />}
                    desktopIcons={[
                        { label: "Home", icon: <GoHome /> },
                        {
                            label: "Shorts",
                            icon: <SiYoutubeshorts />,
                            color: "text-red-500",
                        },
                        {
                            label: "Subscriptions",
                            icon: <MdOutlineSubscriptions />,
                        },
                        { label: "Music", icon: <BsMusicNoteBeamed /> },
                        { label: "You", icon: <CiYoutube /> },
                        { label: "Downloads", icon: <LiaDownloadSolid /> },
                    ]}
                    drawerIcons1={[
                        { label: "Home", icon: <GoHome /> },
                        {
                            label: "Shorts",
                            icon: <SiYoutubeshorts />,
                            color: "text-red-500",
                        },
                        {
                            label: "Subscriptions",
                            icon: <MdOutlineSubscriptions />,
                        },
                        { label: "Music", icon: <BsMusicNoteBeamed /> },
                    ]}
                    drawerIcons2={[
                        { label: "Your channel", icon: <PiUserSquareThin /> },
                        { label: "History", icon: <MdHistory /> },
                        {
                            label: "Your videos",
                            icon: <GoVideo />,
                        },
                        { label: "Watch later", icon: <MdOutlineWatchLater /> },
                        { label: "Downloads", icon: <LiaDownloadSolid /> },
                        { label: "Liked videos", icon: <BiLike /> },
                    ]}
                    drawerIcons3={[
                        {
                            label: "Jamila Musayeva",
                            icon: <IoPersonCircleOutline />,
                        },
                    ]}
                    drawerIcons4={[
                        { label: "Trending", icon: <FaFire /> },
                        { label: "Shopping", icon: <FiShoppingBag /> },
                        {
                            label: "Music",
                            icon: <IoMusicalNoteOutline />,
                        },
                        { label: "Movies & TV", icon: <BiMovie /> },
                        { label: "Live", icon: <CgMediaLive /> },
                        { label: "Gaming", icon: <SiYoutubegaming /> },
                        { label: "News", icon: <FaRegNewspaper /> },
                        { label: "Sports", icon: <CiTrophy /> },
                        { label: "Learning", icon: <MdLightbulbOutline /> },
                        { label: "Fashion & beauty", icon: <GiClothesline /> },
                        { label: "Podcasts", icon: <MdOutlinePodcasts /> },
                    ]}
                    drawerIcons5={[
                        {
                            label: "YouTube Studio",
                            icon: <LuHexagon />,
                        },
                        { label: "Youtube TV", icon: <FaYoutube /> },
                        { label: "Youtube Music", icon: <SiYoutubemusic /> },
                        { label: "Youtube Kids", icon: <TbBrandYoutubeKids /> },
                    ]}
                    drawerIcons6={[
                        {
                            label: "Settings",
                            icon: <CiSettings />,
                        },
                        { label: "Report history", icon: <CiFlag1 /> },
                        { label: "Help", icon: <IoHelpCircleOutline /> },
                        { label: "Send feedback", icon: <RiFeedbackLine /> },
                    ]}
                />
            ) : (
                <DrawerClient
                    youtubeIcon={<FaYoutube />}
                    hamburgerIcon={<RxHamburgerMenu />}
                    drawerIcons1={[
                        { label: "Home", icon: <GoHome /> },
                        {
                            label: "Shorts",
                            icon: <SiYoutubeshorts />,
                            color: "text-red-500",
                        },
                        {
                            label: "Subscriptions",
                            icon: <MdOutlineSubscriptions />,
                        },
                        { label: "Music", icon: <BsMusicNoteBeamed /> },
                    ]}
                    drawerIcons2={[
                        { label: "Your channel", icon: <PiUserSquareThin /> },
                        { label: "History", icon: <MdHistory /> },
                        {
                            label: "Your videos",
                            icon: <GoVideo />,
                        },
                        { label: "Watch later", icon: <MdOutlineWatchLater /> },
                        { label: "Downloads", icon: <LiaDownloadSolid /> },
                        { label: "Liked videos", icon: <BiLike /> },
                    ]}
                    drawerIcons3={[
                        {
                            label: "Jamila Musayeva",
                            icon: <IoPersonCircleOutline />,
                        },
                    ]}
                    drawerIcons4={[
                        { label: "Trending", icon: <FaFire /> },
                        { label: "Shopping", icon: <FiShoppingBag /> },
                        {
                            label: "Music",
                            icon: <IoMusicalNoteOutline />,
                        },
                        { label: "Movies & TV", icon: <BiMovie /> },
                        { label: "Live", icon: <CgMediaLive /> },
                        { label: "Gaming", icon: <SiYoutubegaming /> },
                        { label: "News", icon: <FaRegNewspaper /> },
                        { label: "Sports", icon: <CiTrophy /> },
                        { label: "Learning", icon: <MdLightbulbOutline /> },
                        { label: "Fashion & beauty", icon: <GiClothesline /> },
                        { label: "Podcasts", icon: <MdOutlinePodcasts /> },
                    ]}
                    drawerIcons5={[
                        {
                            label: "YouTube Studio",
                            icon: <LuHexagon />,
                        },
                        { label: "Youtube TV", icon: <FaYoutube /> },
                        { label: "Youtube Music", icon: <SiYoutubemusic /> },
                        { label: "Youtube Kids", icon: <TbBrandYoutubeKids /> },
                    ]}
                    drawerIcons6={[
                        {
                            label: "Settings",
                            icon: <CiSettings />,
                        },
                        { label: "Report history", icon: <CiFlag1 /> },
                        { label: "Help", icon: <IoHelpCircleOutline /> },
                        { label: "Send feedback", icon: <RiFeedbackLine /> },
                    ]}
                />
            )}
        </>
    );
};
