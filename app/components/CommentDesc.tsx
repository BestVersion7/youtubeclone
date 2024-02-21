"use client";
import { useState } from "react";
import { formatShortenDesc } from "../utils/format";
import DomPurify from "dompurify";

export const CommentDesc = (props: { desc: string }) => {
    const sanitizedString = DomPurify.sanitize(props.desc);
    const [expand, setExpand] = useState(false);
    const limit = 200;
    // format desc to limit and add more after it
    const threeLinesDesc = formatShortenDesc(sanitizedString, limit);

    return (
        <p className="video-desc break-words">
            {expand ? (
                <>
                    <span
                        dangerouslySetInnerHTML={{ __html: sanitizedString }}
                    />{" "}
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
                    <span
                        dangerouslySetInnerHTML={{ __html: threeLinesDesc }}
                    />

                    {sanitizedString.length > limit && (
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
