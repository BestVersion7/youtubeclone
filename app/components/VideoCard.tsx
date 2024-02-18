import { VideoType } from "../utils/types";

export const VideoCard = (props: VideoType) => {
    return (
        <div>
            <iframe
                className="w-full rounded-xl"
                // ?autoplay=1
                src={`https://www.youtube.com/embed/${props.id}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
        </div>
    );
};
