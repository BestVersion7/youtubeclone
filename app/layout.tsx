import type { Metadata } from "next";
import "./globals.css";
import GoogleAnalytics from "./components/GoogleAnalytics";
import { AsideNav } from "./components/navigation/AsideNav";
import { SearchBar } from "./components/navigation/SearchBar";
import { Voice } from "./components/navigation/Voice";
import { RightNav } from "./components/navigation/RightNav";

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
            <GoogleAnalytics />
            <body>
                <header className="z-30 sticky top-0 bg-white ">
                    <nav className="text-2xl h-16 flex items-center justify-between gap-4 mx-2 sm:mx-3">
                        <AsideNav modal={true} />
                        <div className="hidden sm:flex items-center gap-2 w-full max-w-xl ">
                            <div className="w-full ">
                                <SearchBar />
                            </div>
                            <div className="bg-gray-100 rounded-full">
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
