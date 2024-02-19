"use client";
import { useState } from "react";

export const VideoDesc = (props: { desc: string }) => {
    const [expand, setExpand] = useState(false);
    const limit = 220;

    // format desc to limit and add more after it
    const shortenDesc = props.desc.slice(0, limit);

    const threeLinesDesc = shortenDesc.split("\n").slice(0, 3).join("\n");

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

                    <button
                        type="button"
                        onClick={() => setExpand(() => true)}
                        className="text-orange-500 font-bold"
                    >
                        ...more
                    </button>
                </>
            )}
        </p>
    );
};
