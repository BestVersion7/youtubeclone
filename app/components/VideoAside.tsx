import Image from "next/image";
import Link from "next/link";
import { VideoTypeWithPlayer } from "../utils/types";
import { SiYoutubeshorts } from "react-icons/si";

import {
    formatViews,
    formatPublishDate,
    formatVideoLength,
} from "../utils/format";
import { GoDotFill } from "react-icons/go";

export const VideoAside = async (props: VideoTypeWithPlayer) => {
    return (
        <div className="grid grid-cols-[170px,_auto] gap-4">
            <Link
                href={`${
                    props.player.embedHeight > 800
                        ? `/shorts/${props.id}`
                        : `/watch?v=${props.id}`
                }`}
                className="relative"
            >
                {/* <img
                    src={props.snippet.thumbnails.medium.url}
                    className="h-24 w-[170px] rounded-md object-contain"
                    alt="preview"
                /> */}
                <Image
                    alt="preview"
                    src={props.snippet.thumbnails.medium.url}
                    className="rounded-xl object-contain w-full"
                    width={170}
                    height={100}
                    unoptimized
                />
                <p className="flex absolute z-10 rounded-md right-2 bottom-1 ">
                    {props.player.embedHeight > 800 ? (
                        <span className="text-red-400 ">
                            <SiYoutubeshorts />
                        </span>
                    ) : (
                        <span className="bg-black px-1 text-white">
                            {formatVideoLength(props.contentDetails.duration)}
                        </span>
                    )}
                </p>
            </Link>

            <div>
                <Link href={`/watch?v=${props.id}`}>
                    <h3
                        className="video-title font-medium text-sm"
                        title={props.snippet.localized.title}
                    >
                        {props.snippet.localized.title}
                    </h3>
                </Link>
                <div className="text-xs">
                    <p>{props.snippet.channelTitle}</p>

                    <div className="flex items-center gap-1">
                        <p>{formatViews(props.statistics.viewCount)}</p>
                        <GoDotFill className="text-[7px]" />
                        <p>{formatPublishDate(props.snippet.publishedAt)}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
