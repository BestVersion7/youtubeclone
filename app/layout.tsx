import type { Metadata } from "next";
import "./globals.css";
import { SearchBar } from "./components/SearchBar";
import { Drawer } from "./components/Drawer";
import { RightNav } from "./components/RightNav";
import { Voice } from "./components/Voice";

export const metadata: Metadata = {
    title: "Youtube",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <header>
                    <nav className="flex justify-between py-2 px-4  items-center text-xl gap-4">
                        <Drawer />

                        {/* search and voicebar */}
                        <div className="hidden sm:flex gap-4 w-full max-w-xl">
                            <div className="w-full">
                                <SearchBar />
                            </div>
                            <div className="bg-gray-100 py-1 px-2 rounded-3xl">
                                <Voice />
                            </div>
                        </div>

                        <RightNav />
                    </nav>
                </header>
                {children}
            </body>
        </html>
    );
}
