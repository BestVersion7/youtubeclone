"use client";
import { useState, useRef } from "react";
import { IoIosSearch } from "react-icons/io";
import { AiFillAudio } from "react-icons/ai";
import { useOnClickOutside } from "../../utils/customHooks";

export const SearchBar = () => {
    const [searchVal, setSearchVal] = useState("");
    const [openSearch, setOpenSearch] = useState(false);
    // const formRef = useRef(null)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchVal(e.target.value);
    };

    // the cost for search is too HIGH at 100 quota
    // const suggestionVideoIds = await getSearchVideo(
    //     'input'
    // );
    // const mappedIds = suggestionVideoIds
    //     .map((item) => item.id.videoId)
    //     .join("%2c");

    // const suggestionVideos = await getVideoById(mappedIds);

    // useOnClickOutside(formRef, () => setSearchVal(() =>))

    return (
        <div className="">
            <form
                onSubmit={handleSubmit}
                className="rounded-3xl flex border border-gray-500"
            >
                <input
                    type="text"
                    value={searchVal}
                    onChange={handleChange}
                    placeholder="Search"
                    className="text-base rounded-l-3xl pl-6 py-[.4rem] border-r-2 w-full placeholder:text-gray-500 tracking-wide font-semibold "
                />
                <button
                    type="submit"
                    title="Search"
                    className="px-4 bg-slate-50 rounded-r-3xl hover:bg-slate-100"
                >
                    <IoIosSearch />
                </button>
            </form>
        </div>
    );
};
