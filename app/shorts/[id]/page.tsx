import { getVideoById } from "@/app/utils/apiCalls";

export default async function ShortsPage(props: { params: { id: string } }) {
    const id = props.params.id;
    const video = await getVideoById(id);

    return (
        <main className="m-auto">
            <div
                dangerouslySetInnerHTML={{
                    __html: video.items[0].player.embedHtml,
                }}
            />
        </main>
    );
}
