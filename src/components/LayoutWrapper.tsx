"use client";

import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Sidebar_nested from "./Sidebar_nested";

export default function LayoutWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isHeaderExpanded, setIsHeaderExpanded] = useState(true);
    const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

     const toggleHeader = () => {
        setIsHeaderExpanded((prev) => !prev);
    };
    const toggleSidebar = () => {
        setIsSidebarExpanded((prev) => !prev);
    };

    return (
        <>
            {/* Top Header spanning full width */}
            <Header 
            toggleHeader={toggleHeader} 
            isHeaderExpanded={isHeaderExpanded} 
            toggleSidebar={toggleSidebar} 
            isSidebarExpanded={isSidebarExpanded} />

            {/* Main Container below Header */}
            <div className="flex flex-1 overflow-hidden">
                <Sidebar isSidebarExpanded={isSidebarExpanded} />
                {/* <Sidebar_nested isSidebarExpanded={isSidebarExpanded} /> */}

                <main className="flex-1 p-4 md:p-8 overflow-y-auto min-w-0">
                    <div className="mx-auto bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        {children}
                    </div>
                </main>
            </div>
        </>
    );
}