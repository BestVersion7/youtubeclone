import { VideoAside } from "../components/VideoAside";
import { VideoCard } from "../components/VideoCard";
import { getVideoById, get20VideosByCategoryId } from "../utils/apiCalls";
import { CommentSection } from "../components/CommentSection";

export default async function WatchPage(props: {
    searchParams: { v: string };
}) {
    const videoId = props.searchParams.v;
    const videoInfo = await getVideoById(videoId);

    const suggestionVideos = await get20VideosByCategoryId(
        videoInfo.snippet.categoryId
    );

    // filter the height remove shorts and current playing video
    // const filteredSuggestionVideos = suggestionVideos
    //     .filter((item) => Number(item.player.embedHeight) < 271)
    //     .filter((item) => item.id !== videoId);

    return (
        <main className="mt-4 max-w-[1600px] m-auto flex flex-col gap-4 lg:gap-6 lg:grid lg:grid-cols-[_1fr,auto]">
            <div>
                <VideoCard {...videoInfo} />
                {/* Comments this will be client rendered */}
                <br />
                <h3 className="text-lg font-medium">
                    {Number(videoInfo.statistics.commentCount).toLocaleString()}{" "}
                    Comments
                </h3>
                <CommentSection />
            </div>
            <aside className=" flex flex-col gap-3 lg:w-[350px] xl:w-[450px]">
                {suggestionVideos.map((item, index) => (
                    <VideoAside key={index} {...item} />
                ))}
            </aside>
        </main>
    );
}
