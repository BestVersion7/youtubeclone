import Image from "next/image";
import Link from "next/link";
import { VideoType } from "../utils/apiCalls";

export const VideoPreview = async (props: VideoType) => {
    return (
        <div>
            <Link href={`/watch?v=${props.id}`}>
                <Image
                    sizes="100vw"
                    alt="preview"
                    className="w-full h-auto rounded-xl"
                    src={props.snippet.thumbnails.maxres.url}
                    width="1280"
                    height="720"
                />
                <h3>{props.snippet.localized.title}</h3>
                <p>{props.snippet.channelTitle}</p>
                <p>{props.statistics.viewCount}</p>
                <p>{props.snippet.publishedAt}</p>
            </Link>
        </div>
    );
};
