import { VideoPreview } from "./components/VideoPreview";
import { get10Videos } from "./utils/apiCalls";
import { Drawer } from "./components/navigation/Drawer";
import { SearchBar } from "./components/navigation/SearchBar";
import { Voice } from "./components/navigation/Voice";
import { RightNav } from "./components/navigation/RightNav";

export default async function Home() {
    const videos = await get10Videos();

    return (
        <>
            <header className="z-10 sticky top-0 bg-white border-b">
                <nav className="text-2xl flex items-center justify-between gap-4 px-4 sm:px-6">
                    <Drawer />
                    <div className="hidden sm:flex items-center gap-2 w-full max-w-xl">
                        <div className="w-full">
                            <SearchBar />
                        </div>
                        <div className="bg-gray-100 px-2 rounded-3xl">
                            <Voice />
                        </div>
                    </div>

                    <RightNav />
                </nav>
            </header>

            <main className="main-home">
                <div id="main-home">
                    <h2 className="text-lg">Recommended: </h2>
                    <div className="grid gap-x-4 gap-y-7 sm:grid-cols-2 lg:grid-cols-3 min-[1400px]:grid-cols-4 min-[1720px]:grid-cols-5">
                        {videos.items.map((item, index) => (
                            <VideoPreview key={index} {...item} />
                        ))}
                    </div>
                </div>
            </main>
        </>
    );
}
