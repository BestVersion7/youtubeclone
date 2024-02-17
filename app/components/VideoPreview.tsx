import Image from "next/image";
import Link from "next/link";
import { VideoType } from "../utils/apiCalls";
import {
    formatViews,
    formatPublishDate,
    formatVideoLength,
} from "../utils/format";
import { GoDotFill } from "react-icons/go";
import { getThumbnailById } from "../utils/apiCalls";

export const VideoPreview = async (props: VideoType) => {
    const thumbnail = await getThumbnailById(props.snippet.channelId);

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
                <Image
                    src={thumbnail}
                    height={88}
                    width={88}
                    title={props.snippet.channelTitle}
                    alt={props.snippet.channelTitle}
                    className="mt-1 rounded-3xl"
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
                        <p>{formatViews(props.statistics.viewCount)}</p>
                        <GoDotFill className="text-[7px]" />
                        <p>{formatPublishDate(props.snippet.publishedAt)}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
