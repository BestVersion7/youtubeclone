import { getVideoById, get20CommentsByVideoId } from "@/app/utils/apiCalls";
import { formatEmbedIframe, formatViews } from "@/app/utils/format";
import { AsideIconNavMap } from "@/app/components/navigation/AsideIconNavMap";
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { CiYoutube } from "react-icons/ci";
import { LiaDownloadSolid } from "react-icons/lia";
import { AsideNav } from "@/app/components/navigation/AsideNav";

export default async function ShortsPage(props: { params: { id: string } }) {
    const id = props.params.id;
    const video = await getVideoById(id);
    const iframe = formatEmbedIframe(video.player.embedHtml);
    // const comments = await get20CommentsByVideoId(id);

    return (
        <main className="">
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
            <div dangerouslySetInnerHTML={{ __html: iframe }} />
        </main>
    );
}
