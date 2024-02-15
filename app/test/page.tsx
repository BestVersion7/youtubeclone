"use client";
import { SearchBar } from "../components/SearchBar";
export default function TestPage() {
    return (
        <main className="relative">
            <div className="flex fixed top-0 w-full z-50 bg-green-400">
                <button>Icon</button>
                <div className="bg-green-300 w-full">
                    <form action="" className="flex py-1">
                        <input
                            className="w-full sm:w-auto"
                            type="text"
                            placeholder="fds"
                        />
                        <button>X</button>
                    </form>
                </div>

                <button>Icon2</button>
            </div>
        </main>
    );
}
