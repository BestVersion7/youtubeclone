let base_url = "http://localhost:3000";
if (process.env.NODE_ENV === "production") {
    base_url = "https://watchyoutube.vercel.app";
}

export type VideoType = {
    id: string;
    snippet: {
        publishedAt: Date;
        channelId: string;
        thumbnails: {
            standard: {
                url: string;
            };
            maxres: {
                url: string;
            };
        };
        channelTitle: string;

        localized: {
            title: string;
        };
    };
    contentDetails: {
        duration: string;
    };
    statistics: {
        viewCount: number;
        likeCount: number;
        commentCount: number;
    };
};

export type ChannelThumbnail = {
    thumbnail: string;
};

const revalidateTime = 60 * 60;

export const get10Videos = async () => {
    const res = await fetch(`${base_url}/api/video`, {
        next: {
            revalidate: revalidateTime,
        },
    });
    const data: { items: VideoType[] } = await res.json();
    return data;
};

export const getVideoById = async (videoId: string) => {
    const res = await fetch(`${base_url}/api/video?video_id=${videoId}`, {
        next: {
            revalidate: revalidateTime,
        },
    });
    const data: VideoType = await res.json();
    return data;
};

export const getThumbnailById = async (channelId: string) => {
    const res = await fetch(`${base_url}/api/channel?channel_id=${channelId}`, {
        next: {
            revalidate: revalidateTime,
        },
    });
    const data: string = await res.json();
    return data;
};
