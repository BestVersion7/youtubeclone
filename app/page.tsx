import { VideoPreview } from "./components/VideoPreview";
import {
    get50Videos,
    getChannelById,
    get30PlayListItemByPlaylistId,
    getVideoById,
} from "./utils/apiCalls";
import { AsideNav } from "./components/navigation/AsideNav";
import { AsideIconNavMap } from "./components/navigation/AsideIconNavMap";
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { CiYoutube } from "react-icons/ci";
import { LiaDownloadSolid } from "react-icons/lia";
import { ShortsPreview } from "./components/ShortsPreview";
import { HorizontalSwiper } from "./components/HorizontalSwiper";
import { defaultShortsChannelId } from "./utils/constants";

export default async function Home() {
    const videos = await get50Videos();

    // this is for getting the same layout
    // longform => shorts => longform
    const first5Videos = videos.slice(0, 5);
    const last45Videos = videos.slice(5);

    // shorts
    const channel = await getChannelById(defaultShortsChannelId);
    const playlist = await get30PlayListItemByPlaylistId(
        channel.contentDetails.relatedPlaylists.uploads
    );

    const videoIds = playlist.items
        .map((item) => item.contentDetails.videoId)
        .join("%2C");
    const shortVideos = await getVideoById(videoIds);
    const take10FilterVertical = shortVideos.items
        .filter((item) => item.player.embedHeight > 800)
        .slice(0, 10);
    const mappedShorts = take10FilterVertical.map((item, index) => (
        <ShortsPreview key={index} {...item} />
    ));

    return (
        <main className="max-w-[2000px] m-auto p-0">
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

            {/* long */}
            <section className="py-2 px-4 sm:px-6 md:ml-16 xl:ml-64 min-[2550px]:ml-0 grid gap-x-4 gap-y-7 sm:grid-cols-2 lg:grid-cols-3 min-[1400px]:grid-cols-4 min-[1720px]:grid-cols-5">
                {first5Videos.map((item, index) => (
                    <VideoPreview key={index} {...item} index={index} />
                ))}
            </section>
            {/* shorts */}
            <section className="py-2 px-4 sm:px-6 md:ml-16 xl:ml-64 min-[2550px]:ml-0 ">
                <h2 className="flex items-center gap-2 ">
                    <span className="text-red-500 text-2xl">
                        <SiYoutubeshorts />
                    </span>{" "}
                    <span className="text-xl font-medium">Shorts</span>
                </h2>
                <br />
                <HorizontalSwiper cards={mappedShorts} />
            </section>
            <br />
            {/* long */}
            <section className="py-2 px-4 sm:px-6 md:ml-16 xl:ml-64 min-[2550px]:ml-0 grid gap-x-4 gap-y-7 sm:grid-cols-2 lg:grid-cols-3 min-[1400px]:grid-cols-4 min-[1720px]:grid-cols-5">
                {last45Videos.map((item, index) => (
                    <VideoPreview key={index} {...item} />
                ))}
            </section>
        </main>
    );
}
