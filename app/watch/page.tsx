import { VideoAside } from "../components/VideoAside";
import { VideoCard } from "../components/VideoCard";
import {
    getVideoById,
    getSuggestionVideoIdsByCategoryId,
} from "../utils/apiCalls";

export default async function WatchPage(props: {
    searchParams: { v: string };
}) {
    const videoId = props.searchParams.v;
    const videoInfo = await getVideoById(videoId);

    const suggestionVideoIds = await getSuggestionVideoIdsByCategoryId(
        videoInfo.items[0].snippet.categoryId
    );
    const mappedIds = suggestionVideoIds
        .map((item) => item.id.videoId)
        .join("%2c");

    const suggestionVideos = await getVideoById(mappedIds);

    return (
        <main className="flex flex-col">
            <div className="">
                <VideoCard {...videoInfo.items[0]} />
            </div>
            <aside className="overflow-y-scroll">
                {suggestionVideos.items.map((item, index) => (
                    <VideoAside key={index} {...item} />
                ))}
            </aside>
        </main>
    );
}
