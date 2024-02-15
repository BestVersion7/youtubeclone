"use client";
import { RiVideoAddLine } from "react-icons/ri";
import { IoIosNotificationsOutline, IoIosSearch } from "react-icons/io";
import { IoPersonCircleOutline } from "react-icons/io5";
import { AiFillAudio } from "react-icons/ai";
import { useState } from "react";
import { SearchBar } from "./SearchBar";
import { IoMdArrowBack } from "react-icons/io";
import { useRef } from "react";
import { useOnClickOutside } from "../utils/customHooks";
import { Voice } from "./Voice";

export const RightNav = () => {
    const [showSearch, setShowSearch] = useState(false);

    const searchRef = useRef(null);
    const handleOpenSearchBar = () => {
        setShowSearch(() => true);
    };

    useOnClickOutside(searchRef, () => setShowSearch(() => false));

    return (
        <div>
            {showSearch && (
                <div
                    className="fixed py-2 top-0 right-0 left-0 z-50  items-center flex justify-between px-4 gap-4 bg-white sm:hidden"
                    ref={searchRef}
                >
                    <button
                        aria-label="search"
                        type="button"
                        onClick={() => setShowSearch((val) => !val)}
                    >
                        <IoMdArrowBack />
                    </button>
                    <div className="w-full">
                        <SearchBar />
                    </div>
                    <Voice />
                </div>
            )}

            <div className="flex gap-6 items-center">
                <button
                    onClick={handleOpenSearchBar}
                    type="button"
                    title="Search"
                    className="sm:hidden"
                >
                    <IoIosSearch />
                </button>
                <div className="sm:hidden">
                    <Voice />
                </div>
                <button type="button" title="Create">
                    <RiVideoAddLine />
                </button>
                <button type="button" title="Notifications">
                    <IoIosNotificationsOutline />
                </button>
                <IoPersonCircleOutline />
            </div>
        </div>
    );
};
