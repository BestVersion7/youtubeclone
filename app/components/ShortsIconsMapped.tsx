import { formatViews } from "../utils/format";
import { IoIosShareAlt } from "react-icons/io";
import { VideoType } from "../utils/types";
import { BiCommentDetail } from "react-icons/bi";
import { VideoIcons } from "./VideoIcons";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa6";
import { MdComment } from "react-icons/md";

export const ShortsIconsMapped = (props: VideoType) => {
    return (
        <div className="flex flex-col gap-4 items-center text-center">
            <VideoIcons
                icon={<FaThumbsUp />}
                iconTitle="I like this"
                text={formatViews(props.statistics.likeCount)}
            />
            <VideoIcons
                icon={<FaThumbsDown />}
                iconTitle="I dislike this"
                text="Dislike"
            />
            <VideoIcons
                icon={<MdComment />}
                iconTitle="Comments"
                text={formatViews(props.statistics.commentCount)}
            />
            <VideoIcons
                icon={<IoIosShareAlt />}
                iconTitle="Share"
                text="Share"
            />
        </div>
    );
};
