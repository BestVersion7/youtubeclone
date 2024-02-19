"use client";
import { useState } from "react";
import { formatShortenDesc } from "../utils/format";

export const VideoDesc = (props: { desc: string }) => {
    const [expand, setExpand] = useState(false);
    const limit = 220;

    // format desc to limit and add more after it
    const threeLinesDesc = formatShortenDesc(props.desc, limit);

    return (
        <p className="video-desc break-words">
            {expand ? (
                <>
                    {props.desc} <br />
                    <button
                        type="button"
                        onClick={() => setExpand(() => false)}
                        className="text-orange-500 font-bold"
                    >
                        Show less
                    </button>
                </>
            ) : (
                <>
                    {threeLinesDesc}

                    {props.desc.length > limit && (
                        <button
                            type="button"
                            onClick={() => setExpand(() => true)}
                            className="text-orange-500 font-bold"
                        >
                            ...more
                        </button>
                    )}
                </>
            )}
        </p>
    );
};
