import Image from "next/image";
import Link from "next/link";
import { VideoType } from "../utils/apiCalls";
import {
    formatViews,
    formatPublishDate,
    formatShortenTitle,
} from "../utils/format";
import { GoDotFill } from "react-icons/go";
import { FaRegUserCircle } from "react-icons/fa";

export const VideoPreview = async (props: VideoType) => {
    return (
        <div>
            <div className="overflow-hidden rounded-xl">
                <Link href={`/watch?v=${props.id}`}>
                    <Image
                        sizes="100vw"
                        alt="preview"
                        className="my-[-10%]"
                        src={props.snippet.thumbnails.standard.url}
                        width="640"
                        height="480"
                    />
                </Link>
            </div>

            <div className="grid grid-cols-[37px,auto] gap-3 mt-2">
                <FaRegUserCircle className="text-4xl text-red-600 mt-1" />

                <div>
                    <Link href={`/watch?v=${props.id}`}>
                        <h3
                            className="font-medium text-lg "
                            title={props.snippet.localized.title}
                        >
                            {formatShortenTitle(props.snippet.localized.title)}
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
