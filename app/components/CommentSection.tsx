"use client";
import { get20CommentsByVideoId } from "../utils/apiCalls";
import { useState, useEffect } from "react";
import { CommentType } from "../utils/types";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { formatPublishDate } from "../utils/format";
import { CommentDesc } from "./CommentDesc";
import { LuThumbsUp, LuThumbsDown } from "react-icons/lu";
import { ImSpinner2 } from "react-icons/im";

export const CommentSection = () => {
    const [comments, setComments] = useState<CommentType[]>([]);
    const [isInView, setIsInView] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const id = useSearchParams().get("v");

    const fetchData = async (signal: AbortSignal) => {
        const data = await get20CommentsByVideoId(id ?? "", signal);
        setComments(data.items);
    };

    const handleScroll = () => {
        const targetElement = document.getElementById("comment-section");
        if (targetElement) {
            // get position relative to viewport
            const { top } = targetElement.getBoundingClientRect();
            // if in viewport, set in view
            setIsInView(top >= 0 && top <= window.innerHeight);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isInView && comments.length === 0) {
            const controller = new AbortController();
            const signal = controller.signal;
            console.log("fetching comments");
            setIsLoading(() => true);
            fetchData(signal);
            setIsLoading(() => false);
            return () => controller.abort();
        }
    }, [isInView, comments]);

    if (isLoading) {
        return <ImSpinner2 className="text-2xl text-orange-400" />;
    }

    return (
        <div id="comment-section" className="flex flex-col gap-3">
            {comments.length > 0 &&
                comments.map((item, index) => (
                    <div
                        key={index}
                        className="grid grid-cols-[50px,auto] gap-2"
                    >
                        {/* <img
                            src={
                                item.snippet.topLevelComment.snippet
                                    .authorProfileImageUrl
                            }
                            className="h-12 w-12 mt-1 rounded-full border-2 border-black"
                            alt="channel"
                            loading="lazy"
                        /> */}
                        <Image
                            src={
                                item.snippet.topLevelComment.snippet
                                    .authorProfileImageUrl
                            }
                            height={50}
                            width={50}
                            alt="channel"
                            className="mt-1 rounded-full border-2 border-black "
                            unoptimized
                        />
                        <div className="flex flex-col mt-1 gap-1">
                            <span className="text-sm">
                                <span className="font-medium">
                                    {
                                        item.snippet.topLevelComment.snippet
                                            .authorDisplayName
                                    }
                                </span>{" "}
                                {formatPublishDate(
                                    item.snippet.topLevelComment.snippet
                                        .publishedAt
                                )}
                            </span>
                            <div>
                                <CommentDesc
                                    desc={
                                        item.snippet.topLevelComment.snippet
                                            .textDisplay
                                    }
                                />
                            </div>
                            {/* icons */}
                            <div className="flex gap-2">
                                <button
                                    type="button"
                                    className="icon p-2"
                                    aria-label="like"
                                >
                                    <LuThumbsUp />
                                </button>
                                <button
                                    type="button"
                                    className="icon p-2"
                                    aria-label="dislike"
                                >
                                    <LuThumbsDown />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    );
};
