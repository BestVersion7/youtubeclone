import { VideoPreview } from "./components/VideoPreview";
import { get50Videos } from "./utils/apiCalls";
import { AsideNav } from "./components/navigation/AsideNav";
import { AsideIconNavMap } from "./components/navigation/AsideIconNavMap";
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { CiYoutube } from "react-icons/ci";
import { LiaDownloadSolid } from "react-icons/lia";

export default async function Home() {
    const videos = await get50Videos();

    return (
        <main className="max-w-[2000px] p-0">
            {/* aside small -xl*/}
            <aside className="hidden fixed left-0 md:block xl:hidden mx-1 w-16">
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

            {/* aside xl and up */}
            <aside className="hidden fixed left-0 pl-3 sm:pl-4 xl:block top-16 z-40 bg-white w-64 overflow-y-scroll h-[calc(100vh-4rem)] ">
                <AsideNav modal={false} />
            </aside>

            {/* shorts
               <section>
               <h2>
                    <SiYoutubeshorts className="bg-red-500"/>
                    Shorts
               </h2>
                    <VideoPreview />
               </section> */}
            <div className="py-2 px-4 sm:px-6 md:ml-16 xl:ml-64 min-[2550px]:ml-0 grid gap-x-4 gap-y-7 sm:grid-cols-2 lg:grid-cols-3 min-[1400px]:grid-cols-4 min-[1720px]:grid-cols-5">
                {videos.map((item, index) => (
                    <VideoPreview key={index} {...item} />
                ))}
            </div>
        </main>
    );
}
