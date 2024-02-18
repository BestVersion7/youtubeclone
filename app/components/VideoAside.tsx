import Image from "next/image";
import Link from "next/link";
import { VideoType } from "../utils/types";

import {
    formatViews,
    formatPublishDate,
    formatVideoLength,
} from "../utils/format";
import { GoDotFill } from "react-icons/go";

export const VideoAside = async (props: VideoType) => {
    return (
        <div className="grid grid-cols-[170px,_auto] gap-4">
            <div className="relative">
                <Link href={`/watch?v=${props.id}`}>
                    <Image
                        sizes="100vw"
                        alt="preview"
                        src={props.snippet.thumbnails.medium.url}
                        className="rounded-xl"
                        width="170"
                        height="120"
                    />
                    <p className="absolute z-10 bg-black rounded-md text-white right-2 bottom-1 px-1">
                        {formatVideoLength(props.contentDetails.duration)}
                    </p>
                </Link>
            </div>

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
