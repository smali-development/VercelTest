"use client";

import { FaBars } from "react-icons/fa6";
import Link from "next/link";
import { FaAngleDoubleUp } from "react-icons/fa";

interface HeaderProps {
    toggleHeader: () => void;
    isHeaderExpanded: boolean;
    toggleSidebar: () => void;
    isSidebarExpanded: boolean;
}

export default function Header({ toggleHeader, isHeaderExpanded: IsHeaderExpanded, toggleSidebar, isSidebarExpanded: isSidebarExpanded }: HeaderProps) {
    return (
        <header className={`relative w-full 
        ${IsHeaderExpanded ? "h-16" : "h-0"}
         bg-white border-b border-gray-200 px-4 flex items-center justify-between shrink-0 z-10`}>
            <div className="flex items-center gap-4">
                {/* Toggle Icon positioned top-left */}

                {IsHeaderExpanded && (
                    <div className="flex items-right gap-4">

                        <button
                            onClick={toggleSidebar}
                            className="p-2 rounded-md hover:bg-gray-100 transition-colors focus:outline-none"
                            title="Toggle Navigation"
                        >
                            <FaBars size={22} className="text-gray-700" />
                        </button>

                        <Link href="/">
                            <h1 className="text-xl font-extrabold text-blue-900">
                                Engine Auto Mobile
                            </h1>
                        </Link>
                    </div>
                )}
                <button
                    onClick={toggleHeader}
                    className="absolute top-full right-2 p-2 rounded-md hover:bg-gray-100 transition-colors focus:outline-none md:hidden bg-white shadow-md z-10"
                    title="Toggle header"
                >
                    <FaAngleDoubleUp
                        size={22}
                        className={`text-gray-700 transition-transform duration-200 ${!IsHeaderExpanded ? "rotate-180" : ""
                            }`}
                    />
                </button>
            </div>

            <div className="text-xs text-slate-500 hidden sm:block">
                Engine -- Lecture Notes
            </div>
        </header>
    );
}