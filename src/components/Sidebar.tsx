"use client";

import { useState } from "react";
import Link from "next/link";
import { BsFire, BsTools } from "react-icons/bs";
import { FaArrowRightToBracket, FaTemperatureHigh } from "react-icons/fa6";
import { SlEnergy } from "react-icons/sl";
import { PiEngineBold } from "react-icons/pi";
import { GiClaymoreExplosive } from "react-icons/gi";
import { MdDoubleArrow } from "react-icons/md";

export default function Sidebar() {
    // Collapsed by default (collapsed = width 16 / w-16, expanded = width 64 / w-64)
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleSidebar = () => {
        setIsExpanded((prev) => !prev);
    };

    const navItems = [
        { href: "/Chapter1_Tool_Trolley", label: "Ch.1 Tool Trolley (8 tool boxes)", icon: <BsTools size={20} /> },
        { href: "/Chapter2_Fire_Triangle", label: "Ch.2 Fire Triangle", icon: <BsFire size={20} /> },
        { href: "/Chapter3_Points", label: "Ch.3 Points", icon: <FaTemperatureHigh size={20} /> },
        { href: "/Chapter4_Energy", label: "Ch.4 Energy types", icon: <SlEnergy size={20} /> },
        { href: "/Chapter5_Engine_Types", label: "Ch.5 Engine Types", icon: <PiEngineBold size={20} /> },
        { href: "/Chapter6_Engine_Base_System", label: "Ch.6 Engine Base System", icon: <GiClaymoreExplosive size={20} /> },
    ];

    return (
        <aside
            className={`bg-white border-r border-gray-200 flex flex-col transition-all duration-300 ${isExpanded ? "w-64" : "w-16"
                }`}
        >
            {/* Header / Toggle Section */}
            <div className="p-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                    {isExpanded && (
                        <Link href="/" className="overflow-hidden">
                            <h1 className="text-xl font-extrabold text-blue-900 whitespace-nowrap">
                                Engine Auto Mobile
                            </h1>
                        </Link>
                    )}

                    <button
                        onClick={toggleSidebar}
                        className="p-1 rounded-md hover:bg-gray-100 transition-colors focus:outline-none"
                        title={isExpanded ? "Collapse Sidebar" : "Expand Sidebar"}
                    >
                        <MdDoubleArrow   
                            size={24}
                            style={{
                                transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                                transition: "transform 0.3s ease",
                            }}
                        />
                    </button>
                </div>

                {isExpanded && (
                    <p className="text-slate-600 text-xs mt-2 whitespace-nowrap">
                        Engine -- Lecture Notes.
                    </p>
                )}
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 p-2 space-y-2 overflow-x-hidden">
                <ul className="space-y-2">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                className={`flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 transition-colors ${isExpanded ? "justify-start" : "justify-center"
                                    }`}
                                title={!isExpanded ? item.label : undefined}
                            >
                                <span className="shrink-0">{item.icon}</span>
                                {isExpanded && (
                                    <span className="whitespace-nowrap text-sm font-medium">
                                        {item.label}
                                    </span>
                                )}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
}