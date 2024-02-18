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
type player = {
    embedHtml: string;
    embedHeight: number;
    embedWidth: number;
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

export type VideoTypeWithPlayer = VideoType & { player: player };

export type SuggestionVideoType = {
    id: {
        videoId: string;
    };
};

export type ChannelThumbnail = {
    thumbnail: string;
};

export type ChannelType = {
    snippet: {
        title: string;
        thumbnails: {
            default: {
                url: string;
            };
        };
    };
    statistics: {
        subscriberCount: number;
    };
};
