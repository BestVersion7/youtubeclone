export type VideoType = {
    id: string;
    snippet: {
        publishedAt: Date;
        thumbnails: {
            default: {
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
    statistics: {
        viewCount: number;
    };
};

const revalidateTime = 60 * 60;

export const get10Videos = async () => {
    const res = await fetch(`http://localhost:3000/api/video`, {
        next: {
            revalidate: revalidateTime,
        },
    });
    const data: { items: VideoType[] } = await res.json();
    return data;
};

export const getVideoById = async (videoId: string) => {
    const res = await fetch(
        `http://localhost:3000/api/video?video_id=${videoId}`,
        {
            next: {
                revalidate: revalidateTime,
            },
        }
    );
    const data: VideoType = await res.json();
    return data;
};
