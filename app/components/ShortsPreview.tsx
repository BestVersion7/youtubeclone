import Image from "next/image";
import Link from "next/link";
import { VideoType } from "../utils/types";
import { formatViews } from "../utils/format";

export const ShortsPreview = async (props: VideoType) => {
    return (
        <Link href={`/shorts/${props.id}`} className="hover:opacity-80">
            <div className="relative aspect-[5/9] ">
                <Image
                    src={props.snippet.thumbnails.standard.url}
                    alt="preview"
                    className="w-full h-full object-cover rounded-xl"
                    width={480}
                    height={640}
                    unoptimized
                />
            </div>
            <p className="video-title">{props.snippet.title}</p>
            <p>{formatViews(props.statistics.viewCount)} views</p>
        </Link>
    );
};
