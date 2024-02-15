import { VideoPreview } from "./components/VideoPreview";
import { get10Videos } from "./utils/apiCalls";
import { Drawer } from "./components/navigation/Drawer";
import { SearchBar } from "./components/navigation/SearchBar";
import { Voice } from "./components/navigation/Voice";
import { RightNav } from "./components/navigation/RightNav";

export default async function Home() {
    // const videos = await get10Videos();
    return (
        <>
            <header className="sticky top-0">
                <nav className="text-2xl flex items-center text-center justify-between gap-4 px-5">
                    <Drawer />
                    <div className="hidden sm:flex lg:ml-0 items-center gap-2 w-full max-w-xl">
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

            <main className="m-auto max-w-[2000px]" id="main-home">
                <div className="flex">
                    <div className="bg-green-100 ">dsa</div>
                </div>

                {/* <h2>Recommended: </h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                    {videos.items.map((item, index) => (
                        <VideoPreview key={index} {...item} />
                    ))}
                </div> */}
            </main>
        </>
    );
}
