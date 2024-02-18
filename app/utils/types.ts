export type IconProps = {
    icon: React.ReactNode;
    label: string;
    color?: string;
    subscription?: boolean;
};

type snippet = {
    publishedAt: Date;
    channelId: string;
    title: string;
    description: string;
    tags: string[];
    categoryId: number;
    thumbnails: {
        default: {
            url: string;
        };
        medium: {
            url: string;
        };
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

export type VideoType = {
    id: string;
    snippet: snippet;
    contentDetails: {
        duration: string;
    };
    statistics: {
        viewCount: number;
        likeCount: number;
        commentCount: number;
    };
};

export type SuggestionVideoType = {
    id: {
        videoId: string;
    };
};

export type ChannelThumbnail = {
    thumbnail: string;
};
