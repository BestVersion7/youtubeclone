import Image from "next/image";
import Link from "next/link";
import { VideoType } from "../utils/types";
import {
    formatViews,
    formatPublishDate,
    formatVideoLength,
} from "../utils/format";
import { GoDotFill } from "react-icons/go";
import { getChannelThumbnailById } from "../utils/apiCalls";

type props = VideoType & { index?: number };

export const VideoPreview = async (props: props) => {
    const thumbnail = await getChannelThumbnailById(props.snippet.channelId);

    return (
        <div id={`home-video-${props.index && props.index}`}>
            <div className="overflow-hidden relative rounded-xl">
                <Link
                    href={`/watch?v=${props.id}`}
                    className="hover:opacity-80"
                >
                    {/* <img
                        alt="preview"
                        className=" my-[-10%] "
                        src={props.snippet.thumbnails.standard.url}
                    /> */}
                    <Image
                        alt="preview"
                        className="my-[-10%]"
                        src={props.snippet.thumbnails.standard.url}
                        width="640"
                        height="480"
                        unoptimized
                    />
                    <p className="absolute z-10 bg-black rounded-md text-white right-2 bottom-1 px-1">
                        {formatVideoLength(props.contentDetails.duration)}
                    </p>
                </Link>
            </div>

            <div className="grid grid-cols-[37px,auto] gap-3 mt-2">
                {/* <img
                    src={thumbnail}
                    title={props.snippet.channelTitle}
                    alt={props.snippet.channelTitle}
                    className="mt-1 rounded-3xl w-[37px] h-[37px]"
                /> */}
                <Image
                    src={thumbnail}
                    height={88}
                    width={88}
                    title={props.snippet.channelTitle}
                    alt={props.snippet.channelTitle}
                    className="mt-1 rounded-3xl"
                    unoptimized
                />

                <div>
                    <Link href={`/watch?v=${props.id}`}>
                        <h3
                            className="video-title font-medium"
                            title={props.snippet.localized.title}
                        >
                            {props.snippet.localized.title}
                        </h3>
                    </Link>
                    <p>{props.snippet.channelTitle}</p>

                    <div className="flex items-center gap-1">
                        <p>{formatViews(props.statistics.viewCount)} views</p>
                        <GoDotFill className="text-[7px]" />
                        <p>{formatPublishDate(props.snippet.publishedAt)}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
