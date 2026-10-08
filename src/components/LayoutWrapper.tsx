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
            <div className="app-layout-main-container flex flex-1 overflow-hidden">
                {/* <Sidebar isSidebarExpanded={isSidebarExpanded} /> */}
                <Sidebar_nested isSidebarExpanded={isSidebarExpanded} />

                <main className="app-layout-main flex-1 p-4 md:p-8 overflow-y-auto min-w-0">
                    <div className="app-layout-content mx-auto bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        {children}
                    </div>
                </main>
            </div>
        </>
    );
}