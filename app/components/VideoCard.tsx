"use client";
import { useState, useRef, useEffect } from "react";
export const VideoCard = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const handlePlayPause = () => {
        if (isPlaying) {
            videoRef.current?.pause();
        } else {
            videoRef.current?.play();
        }
        setIsPlaying(!isPlaying);
    };
    return (
        <article>
            {/* {isPlaying ? (
                <YouTube
                    videoId={props.videoId}
                    opts={{ playerVars: { autoplay: 1 } }}
                    
                />
            ) : (
                <img src={thumbnail} alt="Preview" onClick={handlePlayPause} />
            )} */}
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/60PqVW-2mKE"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
        </article>
    );
};
