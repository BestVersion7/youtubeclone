"use client";
import { RiVideoAddLine } from "react-icons/ri";
import { IoIosNotificationsOutline, IoIosSearch } from "react-icons/io";
import { IoPersonCircleOutline } from "react-icons/io5";
import { AiFillAudio } from "react-icons/ai";
import { useState } from "react";
import { SearchBar } from "./SearchBar";
import { IoMdArrowBack } from "react-icons/io";
import { useRef } from "react";
import { useOnClickOutside } from "../../utils/customHooks";
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
                    className="fixed bg-white h-16 top-0 right-0 left-0 items-center flex justify-between px-4 sm:hidden"
                    ref={searchRef}
                >
                    <button
                        aria-label="search"
                        type="button"
                        onClick={() => setShowSearch((val) => !val)}
                        className="icon"
                    >
                        <IoMdArrowBack />
                    </button>
                    <div className="w-full">
                        <SearchBar />
                    </div>
                    <Voice />
                </div>
            )}

            <div className="flex items-center">
                <div className="sm:hidden">
                    <button
                        onClick={handleOpenSearchBar}
                        type="button"
                        title="Search"
                        className="icon"
                    >
                        <IoIosSearch />
                    </button>
                </div>

                {/* <div className="hidden">
                    <Voice />
                </div> */}

                <div>
                    <button type="button" title="Create" className="icon">
                        <RiVideoAddLine />
                    </button>
                </div>
                <div>
                    <button
                        type="button"
                        title="Notifications"
                        className="icon"
                    >
                        <IoIosNotificationsOutline />
                    </button>
                </div>

                <div>
                    <button type="button" aria-label="user" className="icon">
                        <IoPersonCircleOutline />
                    </button>
                </div>
            </div>
        </div>
    );
};
