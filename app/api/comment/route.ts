import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const videoId = req.nextUrl.searchParams.get("video_id");
        const limit = req.nextUrl.searchParams.get("limit");
        const pageToken = req.nextUrl.searchParams.get("page_token");

        let url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&maxResults=${limit}&key=${process.env.GOOGLE_API_KEY}`;

        if (pageToken) {
            url = `https://youtube.googleapis.com/youtube/v3/commentThreads??part=snippet&videoId=${videoId}&maxResults=${limit}&pageToken=${pageToken}&key=${process.env.GOOGLE_API_KEY}`;
        }

        const res = await fetch(url);
        const data = await res.json();

        return NextResponse.json(data);
    } catch (err) {
        return NextResponse.json("fail", { status: 500 });
    }
}
