import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const playlistId = req.nextUrl.searchParams.get("playlistId");
        const limit = req.nextUrl.searchParams.get("limit");

        let url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&part=contentDetails&playlistId=${playlistId}&maxResults=${limit}&key=${process.env.GOOGLE_API_KEY}`;

        const res = await fetch(url);
        const data = await res.json();

        return NextResponse.json(data);
    } catch (err) {
        return NextResponse.json("fail", { status: 500 });
    }
}
