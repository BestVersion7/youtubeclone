import { VideoAside } from "../components/VideoAside";
import { VideoCard } from "../components/VideoCard";
import { getVideoById, get20VideosByCategoryId } from "../utils/apiCalls";
import { formatEmbedIframe } from "../utils/format";

export default async function WatchPage(props: {
    searchParams: { v: string };
}) {
    const videoId = props.searchParams.v;
    const videoInfo = await getVideoById(videoId);

    const suggestionVideos = await get20VideosByCategoryId(
        videoInfo.items[0].snippet.categoryId
    );

    // filter the height remove shorts and current playing video
    // const filteredSuggestionVideos = suggestionVideos
    //     .filter((item) => Number(item.player.embedHeight) < 271)
    //     .filter((item) => item.id !== videoId);

    return (
        <main className="mt-4 max-w-[1600px] m-auto flex flex-col gap-4 lg:gap-6 lg:grid lg:grid-cols-[_1fr,auto]">
            <div className="">
                <VideoCard {...videoInfo.items[0]} />
            </div>
            <aside className=" flex flex-col gap-3 lg:w-[450px] ">
                {suggestionVideos.map((item, index) => (
                    <VideoAside key={index} {...item} />
                ))}
            </aside>
        </main>
    );
}
