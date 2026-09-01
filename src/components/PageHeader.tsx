"use client";

import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";





export default function PageHeader({
    children,
}: {
    children: React.ReactNode;
}) {
    const [IsSidebarExpanded, setIsExpanded] = useState(false);

    const toggleSidebar = () => {
        setIsExpanded((prev) => !prev);
    };

    return (
        <>
            {/* Top Header spanning full width */}
            <Header toggleSidebar={toggleSidebar} isSidebarExpanded={IsSidebarExpanded} />

            {/* Main Container below Header */}
            <div className="flex flex-1 overflow-hidden">
                <Sidebar isSidebarExpanded={IsSidebarExpanded} />

                <main className="flex-1 p-4 md:p-8 overflow-y-auto min-w-0">
                    <div className="mx-auto bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        {children}
                    </div>
                </main>
            </div>
        </>
    );
}