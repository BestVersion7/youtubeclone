import { VideoPreview } from "./components/VideoPreview";
import { get10Videos } from "./utils/apiCalls";
import { Drawer } from "./components/navigation/Drawer";
import { AsideIconNavMap } from "./components/navigation/AsideIconNavMap";
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { CiYoutube } from "react-icons/ci";
import { LiaDownloadSolid } from "react-icons/lia";

export default async function Home() {
    const videos = await get10Videos();

    return (
        <main className="main-home">
            <div className="flex gap-5">
                {/* this aside #1 */}
                <aside className="hidden sm:block xl:hidden ml-[-19.5px]">
                    <AsideIconNavMap
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
                    />
                </aside>

                {/* aside #2 */}
                <div className="hidden xl:block ">
                    <Drawer home={true} />
                </div>

                <div className="grid gap-x-4  gap-y-7 sm:grid-cols-2 lg:grid-cols-3 min-[1400px]:grid-cols-4 min-[1720px]:grid-cols-5">
                    {videos.items.map((item, index) => (
                        <VideoPreview key={index} {...item} />
                    ))}
                </div>
            </div>
        </main>
    );
}
