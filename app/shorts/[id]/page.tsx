import { getVideoById, get20CommentsByVideoId } from "@/app/utils/apiCalls";
import { formatEmbedIframe, formatViews } from "@/app/utils/format";

export default async function ShortsPage(props: { params: { id: string } }) {
    const id = props.params.id;
    const video = await getVideoById(id);
    const iframe = formatEmbedIframe(video.player.embedHtml);
    // const comments = await get20CommentsByVideoId(id);

    return (
        <main className="flex justify-center">
            <div dangerouslySetInnerHTML={{ __html: iframe }} />
        </main>
    );
}
