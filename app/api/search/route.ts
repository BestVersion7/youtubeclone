import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const queryTag = req.nextUrl.searchParams.get("q");
        const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${queryTag}&key=${process.env.GOOGLE_API_KEY}`;

        const res = await fetch(url);
        const data = await res.json();

        return NextResponse.json(data);
    } catch (err) {
        return NextResponse.json("fail", { status: 500 });
    }
}
