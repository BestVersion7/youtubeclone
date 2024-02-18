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
        <div>
            <div className="overflow-hidden relative rounded-xl">
                <Link href={`/watch?v=${props.id}`}>
                    <Image
                        sizes="100vw"
                        alt="preview"
                        className="my-[-10%]"
                        src={props.snippet.thumbnails.standard.url}
                        width="640"
                        height="480"
                    />
                    <p className="absolute z-10 bg-black rounded-md text-white right-2 bottom-1 px-1">
                        {formatVideoLength(props.contentDetails.duration)}
                    </p>
                </Link>
            </div>

            <div className="grid grid-cols-[37px,auto] gap-3 mt-2">
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
                        <p>{formatViews(props.statistics.viewCount)}</p>
                        <GoDotFill className="text-[7px]" />
                        <p>{formatPublishDate(props.snippet.publishedAt)}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
