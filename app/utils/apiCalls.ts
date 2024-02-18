import {
    VideoType,
    VideoTypeWithPlayer,
    SuggestionVideoType,
    ChannelType,
} from "./types";

let base_url = "http://localhost:3000";
if (process.env.NODE_ENV === "production") {
    base_url = "https://watchyoutube.vercel.app";
}

const revalidateTime = 60 * 60 * 1;

export const get50Videos = async () => {
    const res = await fetch(`${base_url}/api/video?limit=50`, {
        next: {
            revalidate: revalidateTime,
        },
    });
    const data = await res.json();
    const data2: VideoType[] = data.items;
    return data2;
};

export const get20VideosByCategoryId = async (categoryId: number) => {
    const res = await fetch(
        `${base_url}/api/video?category_id=${categoryId}&limit=20`,
        {
            cache: "no-cache",
        }
    );
    const data = await res.json();
    const data2: VideoTypeWithPlayer[] = data.items;
    return data2;
};

export const getVideoById = async (videoId: string) => {
    const res = await fetch(`${base_url}/api/video?video_id=${videoId}`, {
        next: { revalidate: revalidateTime },
    });
    const data: { items: VideoTypeWithPlayer[] } = await res.json();
    return data;
};

export const getChannelThumbnailById = async (channelId: string) => {
    const res = await fetch(
        `${base_url}/api/channel?channel_id=${channelId}&thumbnailOnly=1`,
        {
            next: {
                revalidate: revalidateTime,
            },
        }
    );
    const data: string = await res.json();
    return data;
};

export const getChannelById = async (channelId: string) => {
    const res = await fetch(`${base_url}/api/channel?channel_id=${channelId}`, {
        cache: "no-cache",
    });
    const data = await res.json();
    const data2: ChannelType = await data.items[0];
    return data2;
};

export const getSearchVideo = async (query: string) => {
    const res = await fetch(`${base_url}/api/search?q=${query}`, {
        next: {
            revalidate: revalidateTime,
        },
    });
    const data = await res.json();
    const data2: SuggestionVideoType[] = data.items;
    return data2;
};
