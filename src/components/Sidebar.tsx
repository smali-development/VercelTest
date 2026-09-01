"use client";

import Link from "next/link";
import { BsFire, BsTools } from "react-icons/bs";
import { FaTemperatureHigh } from "react-icons/fa6";
import { SlEnergy } from "react-icons/sl";
import { PiEngineBold } from "react-icons/pi";
import { GiClaymoreExplosive } from "react-icons/gi";

interface SidebarProps {
    isSidebarExpanded: boolean;
}

export default function Sidebar({ isSidebarExpanded: IsSidebarExpanded }: SidebarProps) {
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
            className={`bg-white border-r border-gray-200 flex flex-col transition-all duration-300 shrink-0 ${IsSidebarExpanded ? "w-64" : "w-16"
                }`}
        >
            <nav className="flex-1 p-2 space-y-2 overflow-x-hidden pt-4">
                <ul className="space-y-2">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                className={`flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 transition-colors ${IsSidebarExpanded ? "justify-start" : "justify-center"
                                    }`}
                                title={!IsSidebarExpanded ? item.label : undefined}
                            >
                                <span className="shrink-0">{item.icon}</span>
                                {IsSidebarExpanded && (
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