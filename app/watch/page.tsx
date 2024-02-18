import { VideoAside } from "../components/VideoAside";
import { VideoCard } from "../components/VideoCard";
import { getVideoById, get20VideosByCategoryId } from "../utils/apiCalls";

export default async function WatchPage(props: {
    searchParams: { v: string };
}) {
    const videoId = props.searchParams.v;
    const videoInfo = await getVideoById(videoId);

    // the cost for search is too HIGH at 100 quota
    // const suggestionVideoIds = await getSearchVideo(
    //     'input'
    // );
    // const mappedIds = suggestionVideoIds
    //     .map((item) => item.id.videoId)
    //     .join("%2c");

    // const suggestionVideos = await getVideoById(mappedIds);

    const suggestionVideos = await get20VideosByCategoryId(
        videoInfo.items[0].snippet.categoryId
    );

    // filter
    suggestionVideos.map((item, index) => {
        if (item.id === videoId) {
            return suggestionVideos.splice(index, 1);
        } else {
            return;
        }
    });

    return (
        <main className="flex flex-col gap-4">
            <div className="">
                <VideoCard {...videoInfo.items[0]} />
            </div>
            <aside className=" flex flex-col gap-3">
                {suggestionVideos.map((item, index) => (
                    <VideoAside key={index} {...item} />
                ))}
            </aside>
        </main>
    );
}
