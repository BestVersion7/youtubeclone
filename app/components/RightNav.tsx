"use client";
import { RiVideoAddLine } from "react-icons/ri";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoPersonCircleOutline } from "react-icons/io5";

export const RightNav = () => {
    return (
        <div className="flex gap-6">
            <button type="button" title="Create">
                <RiVideoAddLine />
            </button>
            <button type="button" title="Notifications">
                <IoIosNotificationsOutline />
            </button>
            <IoPersonCircleOutline />
        </div>
    );
};
