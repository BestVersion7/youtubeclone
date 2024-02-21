import {
    getVideoById,
    get20CommentsByVideoId,
    getChannelById,
} from "@/app/utils/apiCalls";
import {
    formatEmbedIframe,
    formatShortenDesc,
    formatViews,
} from "@/app/utils/format";
import { AsideIconNavMap } from "@/app/components/navigation/AsideIconNavMap";
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { CiYoutube } from "react-icons/ci";
import { LiaDownloadSolid } from "react-icons/lia";
import { AsideNav } from "@/app/components/navigation/AsideNav";
import { ShortsIconsMapped } from "@/app/components/ShortsIconsMapped";
import Image from "next/image";

export default async function ShortsPage(props: { params: { id: string } }) {
    let autoplay = "";
    if (process.env.NODE_ENV === "production") {
        autoplay = "?autoplay=1";
    }
    const id = props.params.id;
    const video = await getVideoById(id);
    const iframe = formatEmbedIframe(video.player.embedHtml);
    const channelInfo = await getChannelById(video.snippet.channelId);
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

            <div className=" flex h-[calc(98vh-72px)] justify-center gap-4 text-white">
                <div className="relative flex w-full max-w-[calc((98vh-72px)/1.78)] max-h-[calc(98vh-72px)]">
                    <iframe
                        className="absolute rounded-2xl left-0 top-0 w-full h-full"
                        src={`https://www.youtube.com/embed/${id}${autoplay}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                    {/* description */}
                    <div className="text-sm z-10 absolute bottom-4 left-4 w-[calc((98vh-72px)/1.78-83px)]">
                        <div className="flex items-center gap-2">
                            <img
                                src={channelInfo.snippet.thumbnails.default.url}
                                alt={channelInfo.snippet.title}
                                className="rounded-full h-10 w-10"
                                title={channelInfo.snippet.title}
                            />
                            {/* <Image
                                src={channelInfo.snippet.thumbnails.default.url}
                                alt={channelInfo.snippet.title}
                                className="rounded-full"
                                height={40}
                                width={40}
                            /> */}
                            <span className="text-base overflow-hidden whitespace-nowrap text-ellipsis">
                                {channelInfo.snippet.title}
                            </span>
                        </div>
                        <p className="video-title">
                            {video.snippet.description}
                        </p>
                    </div>

                    {/* icons sm */}
                    <div className="absolute z-10 bottom-4 right-4 flex flex-col items-center md:hidden">
                        <ShortsIconsMapped {...video} />
                        <br />
                        <img
                            src={channelInfo.snippet.thumbnails.default.url}
                            alt={channelInfo.snippet.title}
                            className="rounded-full h-10 w-10"
                            title={channelInfo.snippet.title}
                        />
                        {/* <Image
                            src={channelInfo.snippet.thumbnails.default.url}
                            alt={channelInfo.snippet.title}
                            className="rounded-full"
                            height={40}
                            width={40}
                            title={channelInfo.snippet.title}
                        /> */}
                    </div>
                </div>
                {/* icons sm & up*/}
                <div className="hidden md:flex flex-col justify-end items-center mb-4 text-black">
                    <ShortsIconsMapped {...video} />
                    <br />
                    <img
                        src={channelInfo.snippet.thumbnails.default.url}
                        alt={channelInfo.snippet.title}
                        className="rounded-full h-10 w-10"
                        title={channelInfo.snippet.title}
                    />
                    {/* <Image
                        src={channelInfo.snippet.thumbnails.default.url}
                        alt={channelInfo.snippet.title}
                        className="rounded-full"
                        height={40}
                        width={40}
                        title={channelInfo.snippet.title}
                    /> */}
                </div>
            </div>
        </main>
    );
}
