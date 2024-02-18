import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const queryTag = req.nextUrl.searchParams.get("q");
        const categoryId = req.nextUrl.searchParams.get("category_id");

        let url;
        if (queryTag) {
            url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${queryTag}&key=${process.env.GOOGLE_API_KEY}`;
        } else if (categoryId) {
            url = `https://youtube.googleapis.com/youtube/v3/search?maxResults=25&videoCategoryId=${Number(
                categoryId
            )}&type=video&key=${process.env.GOOGLE_API_KEY}`;
        } else {
            return NextResponse.json("not a method", { status: 500 });
        }
        const res = await fetch(url);
        const data = await res.json();

        return NextResponse.json(data);
    } catch (err) {
        return NextResponse.json("fail", { status: 500 });
    }
}
