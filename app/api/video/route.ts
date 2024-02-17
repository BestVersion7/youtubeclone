import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const videoId = req.nextUrl.searchParams.get("video_id");

        let url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&chart=mostPopular&key=${process.env.GOOGLE_API_KEY}`;

        // '%2player'
        // player => embedHtml
        if (videoId) {
            url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${process.env.GOOGLE_API_KEY}`;
        }
        const res = await fetch(url);
        const data = await res.json();

        return NextResponse.json(data);
    } catch (err) {
        return NextResponse.json("fail", { status: 500 });
    }
}
