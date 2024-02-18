import prisma from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// 10K requests per day and channel count can easily run 60 api requests per user so we will run it from our own db

export async function GET(req: NextRequest) {
    const channelId = req.nextUrl.searchParams.get("channel_id");
    const thumbnailOnly = req.nextUrl.searchParams.get("thumbnailOnly");
    const youtubeChannel = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${process.env.GOOGLE_API_KEY}`;

    try {
        if (channelId && thumbnailOnly) {
            let thumbnail;
            // find thumbnail
            const findChannel = await prisma.channel.findUnique({
                where: {
                    channelId,
                },
                select: {
                    thumbnail: true,
                },
            });

            if (findChannel) {
                thumbnail = findChannel.thumbnail;
            } else {
                const res = await fetch(youtubeChannel);
                const youtubeData = await res.json();
                thumbnail = youtubeData.items[0].snippet.thumbnails.default.url;

                // create the thumbnail
                await prisma.channel.create({
                    data: {
                        channelId,
                        thumbnail,
                    },
                });
            }

            return NextResponse.json(thumbnail);
        } else if (channelId) {
            const res = await fetch(youtubeChannel);
            const data = await res.json();

            return NextResponse.json(data);
        } else {
            return NextResponse.json("bad req", { status: 400 });
        }
    } catch (err) {
        return NextResponse.json("fail", { status: 500 });
    }
}
