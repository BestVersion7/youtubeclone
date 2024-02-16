import Image from "next/image";
import Link from "next/link";
import { VideoType } from "../utils/apiCalls";
import { formatViews, formatPublishDate } from "../utils/format";
import { GoDotFill } from "react-icons/go";
import { FaRegUserCircle } from "react-icons/fa";

export const VideoPreview = async (props: VideoType) => {
    return (
        <div className="py-3">
            <Link href={`/watch?v=${props.id}`}>
                <Image
                    sizes="100vw"
                    alt="preview"
                    className="w-full h-auto rounded-xl"
                    src={props.snippet.thumbnails.maxres.url}
                    width="1280"
                    height="720"
                />
            </Link>

            <div className="flex gap-3 mt-2">
                <FaRegUserCircle className="text-4xl text-blue-600" />

                <div>
                    <Link href={`/watch?v=${props.id}`}>
                        <h3
                            className="font-medium text-lg "
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
