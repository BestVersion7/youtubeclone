import { VideoType, SuggestionVideoType } from "./types";

let base_url = "http://localhost:3000";
if (process.env.NODE_ENV === "production") {
    base_url = "https://watchyoutube.vercel.app";
}

const revalidateTime = 60 * 60 * 1;

export const get50Videos = async () => {
    const res = await fetch(`${base_url}/api/video`, {
        next: {
            revalidate: revalidateTime,
        },
    });
    const data = await res.json();
    const data2: VideoType[] = data.items;
    return data2;
};

export const getVideoById = async (videoId: string) => {
    const res = await fetch(`${base_url}/api/video?video_id=${videoId}`, {
        next: {
            revalidate: revalidateTime,
        },
    });
    const data: { items: VideoType[] } = await res.json();
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

export const getSuggestionVideoIdsByCategoryId = async (categoryId: number) => {
    const res = await fetch(
        `${base_url}/api/search?category_id=${categoryId}`,
        {
            next: {
                revalidate: revalidateTime,
            },
        }
    );
    const data = await res.json();
    const data2: SuggestionVideoType[] = data.items;
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
