import { VideoTypeWithPlayer } from "../utils/types";
import Image from "next/image";
import { getChannelById } from "../utils/apiCalls";
import { VideoDesc } from "./VideoDesc";
import { formatViews, formatPublishDate } from "../utils/format";
import { LuThumbsUp, LuThumbsDown } from "react-icons/lu";
import { IoIosShareAlt } from "react-icons/io";
import { MdOutlineFileDownload } from "react-icons/md";

let autoplay = "";
if (process.env.NODE_ENV === "production") {
    autoplay = "?autoplay=1";
}

export const VideoCard = async (props: VideoTypeWithPlayer) => {
    const channelInfo = await getChannelById(props.snippet.channelId);

    return (
        <div>
            <div className="relative w-full pb-[56.25%]">
                <iframe
                    className="absolute h-full w-full rounded-2xl top-0 left-0"
                    src={`https://www.youtube.com/embed/${props.id}${autoplay}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>

            <h2 className="my-2 font-semibold text-lg">
                {props.snippet.title}
            </h2>

            <div className="flex flex-col gap-2">
                {/* channel */}
                <div className="flex md:items-center flex-col gap-2 md:flex-row md:justify-between">
                    <div className="flex gap-2 items-center">
                        <Image
                            src={channelInfo.snippet.thumbnails.default.url}
                            height={50}
                            width={50}
                            title={props.snippet.channelTitle}
                            alt={props.snippet.channelTitle}
                            className="mt-1 rounded-full border-2 border-black "
                        />
                        <div className="flex flex-col">
                            <p className="font-medium">
                                {channelInfo.snippet.title}
                            </p>
                            <p className="font-thin text-sm">
                                {formatViews(
                                    channelInfo.statistics.subscriberCount
                                )}{" "}
                                subscribers
                            </p>
                        </div>

                        <button
                            type="button"
                            className="px-3 ml-4 rounded-3xl bg-black text-white py-2"
                        >
                            Subscribe
                        </button>
                    </div>

                    {/* icons */}
                    <div className="flex gap-4 ">
                        <div className="flex  bg-gray-100 rounded-full ">
                            <button
                                type="button"
                                className="flex px-2 gap-1 rounded-l-full items-center hover:bg-gray-200"
                            >
                                <LuThumbsUp className="" />
                                {formatViews(props.statistics.likeCount)}
                            </button>
                            <span className="text-gray-300">|</span>
                            <button
                                type="button"
                                className="flex px-2 rounded-r-full items-center hover:bg-gray-200"
                                aria-label="dislike"
                            >
                                <LuThumbsDown />
                            </button>
                        </div>

                        <span className="video-icon ">
                            <IoIosShareAlt />
                            <span className="hidden sm:block">Share</span>
                        </span>
                        <span className="video-icon">
                            <MdOutlineFileDownload />
                            <span className="hidden sm:block">Download</span>
                        </span>
                        {/* <span className="video-icon gap-0 text-xs pl-5 pr-4">
                        <LuDot />
                        <LuDot className="mx-[-20px]" />
                        <LuDot />
                    </span> */}
                    </div>
                </div>

                {/* description */}
                <div className="bg-gray-100 rounded-xl px-3 py-2">
                    <div className="flex items-center gap-1 font-medium">
                        <p>
                            {Number(
                                props.statistics.viewCount
                            ).toLocaleString()}{" "}
                            views
                        </p>
                        <p>{formatPublishDate(props.snippet.publishedAt)}</p>
                    </div>
                    <div className="whitespace-pre-line video-description">
                        <VideoDesc desc={props.snippet.description} />
                    </div>
                </div>
            </div>
        </div>
    );
};
