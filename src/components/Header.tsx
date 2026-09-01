"use client";

import { FaBars } from "react-icons/fa6";
import Link from "next/link";

interface HeaderProps {
    toggleSidebar: () => void;
    isExpanded: boolean;
}

export default function Header({ toggleSidebar }: HeaderProps) {
    return (
        <header className="w-full h-16 bg-white border-b border-gray-200 px-4 flex items-center justify-between shrink-0 z-10">
            <div className="flex items-center gap-4">
                {/* Toggle Icon positioned top-left */}
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

            <div className="text-xs text-slate-500 hidden sm:block">
                Engine -- Lecture Notes
            </div>
        </header>
    );
}