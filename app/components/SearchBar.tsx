"use client";
import { useRef, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { AiFillAudio } from "react-icons/ai";

export const SearchBar = () => {
    const searchRef = useRef(null);
    const [searchVal, setSearchVal] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchVal(e.target.value);
    };

    return (
        <div className="flex gap-4">
            <form
                onSubmit={handleSubmit}
                className=" text-lg rounded-3xl flex items-center border-2"
            >
                <input
                    type="text"
                    value={searchVal}
                    onChange={handleChange}
                    placeholder="Search"
                    className="rounded-l-3xl pl-5 z-10 py-2 border-r-2"
                />
                <button
                    type="submit"
                    title="Search"
                    className="px-4 bg-slate-50 rounded-r-3xl text-2xl h-11"
                >
                    <IoIosSearch />
                </button>
            </form>
            <button
                type="button"
                className="bg-slate-100 px-2 rounded-full"
                title="Search with your voice"
            >
                <AiFillAudio />
            </button>
        </div>
    );
};
