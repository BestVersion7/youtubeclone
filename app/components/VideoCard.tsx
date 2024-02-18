import { VideoType } from "../utils/types";

export const VideoCard = (props: VideoType) => {
    return (
        <div>
            <iframe
                className="w-full h-[400px]"
                // ?autoplay=1
                src="https://www.youtube.com/embed/ggWZoH9PeIU"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
        </div>
    );
};
