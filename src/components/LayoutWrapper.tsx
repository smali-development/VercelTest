"use client";

import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function LayoutWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleSidebar = () => {
        setIsExpanded((prev) => !prev);
    };

    return (
        <>
            {/* Top Header spanning full width */}
            <Header toggleSidebar={toggleSidebar} isExpanded={isExpanded} />

            {/* Main Container below Header */}
            <div className="flex flex-1 overflow-hidden">
                <Sidebar isExpanded={isExpanded} />

                <main className="flex-1 p-4 md:p-8 overflow-y-auto min-w-0">
                    <div className="mx-auto bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        {children}
                    </div>
                </main>
            </div>
        </>
    );
}