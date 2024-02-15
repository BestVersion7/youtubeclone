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
import { CiSettings, CiFlag1, CiTrophy } from "react-icons/ci";
import {
    IoHelpCircleOutline,
    IoPersonCircleOutline,
    IoMusicalNoteOutline,
} from "react-icons/io5";
import { RiFeedbackLine } from "react-icons/ri";
import { BsMusicNoteBeamed } from "react-icons/bs";

export const DrawerAside = () => {
    return (
        <div className="overflow-y-scroll h-[calc(100vh-4rem)] text-sm">
            <div className="px-3">
                <IconText icon={GoHome} link="Home" />
                <IconText
                    icon={SiYoutubeshorts}
                    link="Shorts"
                    color="text-red-600"
                />
                <IconText icon={MdOutlineSubscriptions} link="Subscriptions" />
                <IconText icon={BsMusicNoteBeamed} link="YouTube Music" />
            </div>
            <hr className="my-3" />
            <div className="px-3">
                <h2 className="drawer-title">You {`>`}</h2>
                <IconText icon={PiUserSquareThin} link="Your channel" />
                <IconText icon={MdHistory} link="History" />
                <IconText icon={GoVideo} link="Your videos" />
                <IconText icon={MdOutlineWatchLater} link="Watch later" />
                <IconText icon={LiaDownloadSolid} link="Downloads" />
                <IconText icon={BiLike} link="Liked videos" />
            </div>

            <hr className="my-3" />

            <div className="px-3">
                <h2 className="drawer-title">Subscriptions</h2>
                <IconText
                    icon={IoPersonCircleOutline}
                    link="Jamila Musayeva"
                    subscription={true}
                />
            </div>
            <hr className="my-3" />

            <div className="px-3">
                <h2 className="drawer-title">Explore</h2>
                <IconText icon={FaFire} link="Trending" />
                <IconText icon={FiShoppingBag} link="Shopping" />
                <IconText icon={IoMusicalNoteOutline} link="Music" />
                <IconText icon={BiMovie} link="Movies & TV" />
                <IconText icon={CgMediaLive} link="Live" />
                <IconText icon={SiYoutubegaming} link="Gaming" />
                <IconText icon={FaRegNewspaper} link="News" />
                <IconText icon={CiTrophy} link="Sports" />
                <IconText icon={MdLightbulbOutline} link="Learning" />
                <IconText icon={GiClothesline} link="Fashion & beauty" />
                <IconText icon={MdOutlinePodcasts} link="Podcasts" />
            </div>
            <hr className="my-3" />
            <div className="px-3">
                <h2 className="drawer-title">More from Youtube</h2>
                <IconText
                    icon={LuHexagon}
                    link="YouTube Studio"
                    color="text-red-500"
                />
                <IconText
                    icon={FaYoutube}
                    link="Youtube TV"
                    color="text-red-500"
                />
                <IconText
                    icon={SiYoutubemusic}
                    link="Youtube Music"
                    color="text-red-500"
                />
                <IconText
                    icon={TbBrandYoutubeKids}
                    link="Youtube Kids"
                    color="text-red-500"
                />
            </div>
            <hr className="my-3" />
            <div className="px-3 ">
                <IconText icon={CiSettings} link="Settings" />
                <IconText icon={CiFlag1} link="Report history" />
                <IconText icon={IoHelpCircleOutline} link="Help" />
                <IconText icon={RiFeedbackLine} link="Send feedback" />
            </div>
            <hr className="my-3" />

            <div className="px-5 grid gap-3 text-sm text-gray-600 font-semibold">
                <div className="">
                    <Link className="inline-block mr-2" href="/">
                        About
                    </Link>
                    <Link className="inline-block mr-2" href="/">
                        Press
                    </Link>
                    <Link className="inline-block mr-2" href="/">
                        Copyright
                    </Link>
                    <Link className="inline-block mr-2" href="/">
                        Contact us
                    </Link>
                    <Link className="inline-block mr-2" href="/">
                        Creators
                    </Link>
                    <Link className="inline-block mr-2" href="/">
                        Advertise
                    </Link>
                    <Link className="inline-block mr-2" href="/">
                        Developers
                    </Link>
                </div>
                <div>
                    <Link className="inline-block mr-2" href="/">
                        Terms
                    </Link>
                    <Link className="inline-block mr-2" href="/">
                        Privacy
                    </Link>
                    <Link className="inline-block mr-2" href="/">
                        Policy & Safety
                    </Link>
                    <Link className="inline-block mr-2" href="/">
                        How Youtube works
                    </Link>
                    <Link className="inline-block mr-2" href="/">
                        Test new features
                    </Link>
                    <Link className="inline-block mr-2" href="/">
                        NFL Sunday Ticket
                    </Link>
                </div>
                <p className="mb-5 text-xs text-gray-400">
                    &copy; 2024 Google LLC
                </p>
            </div>
        </div>
    );
};
