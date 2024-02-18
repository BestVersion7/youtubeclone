import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const videoId = req.nextUrl.searchParams.get("video_id");
        const categoryId = req.nextUrl.searchParams.get("category_id");
        const limit = req.nextUrl.searchParams.get("limit");

        // all data
        let url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=${limit}&key=${process.env.GOOGLE_API_KEY}`;

        // one data
        if (videoId) {
            url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics%2Cplayer&maxWidth=${480}&id=${videoId}&key=${
                process.env.GOOGLE_API_KEY
            }`;
        }

        // by categoryId
        if (categoryId) {
            url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics%2Cplayer&maxWidth=${480}&chart=mostPopular&maxResults=${limit}&videoCategoryId=${categoryId}&key=${
                process.env.GOOGLE_API_KEY
            }`;
        }

        const res = await fetch(url);
        const data = await res.json();

        return NextResponse.json(data);
    } catch (err) {
        return NextResponse.json("fail", { status: 500 });
    }
}
