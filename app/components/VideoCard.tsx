import { VideoTypeWithPlayer } from "../utils/types";
import Link from "next/link";
import Image from "next/image";
import { getChannelById } from "../utils/apiCalls";
import {
    formatViews,
    formatPublishDate,
    formatEmbedIframe,
} from "../utils/format";

export const VideoCard = async (props: VideoTypeWithPlayer) => {
    const channelInfo = await getChannelById(props.snippet.channelId);
    return (
        <div>
            <iframe
                className="m-auto w-full h-60 md:h-80 md:w-[720px] lg:w-full lg:h-96 xl:h-[470px]"
                src={`https://www.youtube.com/embed/${props.id}?autoplay=1`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>

            <h2 className="my-2 font-semibold text-lg">
                {props.snippet.title}
            </h2>
            <div className="grid gap-3 mt-2">
                <div className="flex gap-8 items-center">
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
                            <p className="font-thin">
                                {formatViews(
                                    channelInfo.statistics.subscriberCount
                                )}{" "}
                                subscribers
                            </p>
                        </div>
                    </div>
                    <button
                        type="button"
                        className="px-4 rounded-3xl bg-black text-white py-2"
                    >
                        Subscribe
                    </button>
                </div>

                <div className="bg-gray-100 rounded-xl px-3 py-2">
                    <div className="flex items-center gap-1">
                        <p>
                            {Number(
                                props.statistics.viewCount
                            ).toLocaleString()}{" "}
                            views
                        </p>
                        <p>{formatPublishDate(props.snippet.publishedAt)}</p>
                    </div>
                    <p className="h-24 overflow-scroll">
                        {props.snippet.description}
                    </p>
                </div>
            </div>
        </div>
    );
};
