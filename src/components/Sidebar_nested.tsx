// src/components/Sidebar.tsx

"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsFire, BsTools } from "react-icons/bs";
import { FaTemperatureHigh } from "react-icons/fa6";
import { SlEnergy } from "react-icons/sl";
import { PiEngineBold } from "react-icons/pi";
import { GiClaymoreExplosive } from "react-icons/gi";
import { ChevronRight, ChevronDown } from "lucide-react";

interface SidebarProps {
    isSidebarExpanded: boolean;
}

// لامتناہی نیسٹنگ (Unlimited Depth) کے لیے انٹرفیس
export interface NavNode {
    href: string;
    label: string;
    icon?: React.ReactNode;
    children?: NavNode[];
}

export default function Sidebar({ isSidebarExpanded }: SidebarProps) {
    const pathname = usePathname();

    // آپ کا لامحدود نیسٹڈ ڈیٹا
    const navTree: NavNode[] = [
        {
            href: "/Chapter1_Tool_Trolley",
            label: "Ch.1 Tool Trolley",
            icon: <BsTools size={20} />,
            children: [
                {
                    href: "/Chapter1_Tool_Trolley/Box1",
                    label: "Box 1",
                    children: [
                        {
                            href: "/Chapter1_Tool_Trolley/Box1/Torque_Wrench",
                            label: "1. Torque Wrench",
                            children: [
                                { href: "/Chapter1_Tool_Trolley/Box1/Torque_Wrench/Parts", label: "Parts" },
                                { href: "/Chapter1_Tool_Trolley/Box1/Torque_Wrench/Description", label: "Description" },
                                { href: "/Chapter1_Tool_Trolley/Box1/Torque_Wrench/Maintenance", label: "Maintenance" },
                            ],
                        },
                        { href: "/Chapter1_Tool_Trolley/Box1/T_Handle_Wrench", label: "2. T-Handle Wrench" },
                    ],
                },
                {
                    href: "/Chapter1_Tool_Trolley/Box2",
                    label: "Box 2",
                    children: [
                        { href: "/Chapter1_Tool_Trolley/Box2/Piston_Ring_Expander", label: "1. Piston Ring Expander" },
                    ],
                },
            ],
        },
        { href: "/Chapter2_Fire_Triangle", label: "Ch.2 Fire Triangle", icon: <BsFire size={20} /> },
        { href: "/Chapter3_Points", label: "Ch.3 Points", icon: <FaTemperatureHigh size={20} /> },
        { href: "/Chapter4_Energy", label: "Ch.4 Energy types", icon: <SlEnergy size={20} /> },
        { href: "/Chapter5_Engine_Types", label: "Ch.5 Engine Types", icon: <PiEngineBold size={20} /> },
        { href: "/Chapter6_Engine_Base_System", label: "Ch.6 Engine Base System", icon: <GiClaymoreExplosive size={20} /> },
    ];

    return (
        <aside
            className={`bg-white border-r border-gray-200 flex flex-col transition-all duration-300 shrink-0 ${isSidebarExpanded ? "w-72" : "w-16"
                }`}
        >
            <nav className="flex-1 p-2 space-y-1 overflow-y-auto overflow-x-hidden pt-4">
                <ul>
                    {navTree.map((node) => (
                        <SidebarItem
                            key={node.href}
                            node={node}
                            pathname={pathname}
                            isSidebarExpanded={isSidebarExpanded}
                            level={0}
                        />
                    ))}
                </ul>
            </nav>
        </aside>
    );
}

// -------------------------------------------------------------
// ریکرسیو سب-کمپوننٹ (Recursive Sub-Component)
// -------------------------------------------------------------
interface SidebarItemProps {
    node: NavNode;
    pathname: string;
    isSidebarExpanded: boolean;
    level: number;
}

function SidebarItem({ node, pathname, isSidebarExpanded, level }: SidebarItemProps) {
    const hasChildren = Boolean(node.children && node.children.length > 0);

    // چیک کریں کہ موجودہ پاتھ یا اس کا کوئی چائلڈ ایکٹیو ہے یا نہیں
    const isActive = pathname === node.href;
    const isChildActive = pathname.startsWith(node.href + "/");

    // خودکار طریقے سے فولڈر کو کھول کر رکھیں اگر کوئی اندرونی پیج سلیکٹ ہو
    const [isOpen, setIsOpen] = useState(isChildActive);

    return (
        <li className="mb-0.5">
            <div
                className={`flex items-center justify-between rounded-md p-1.5 transition-colors ${isActive
                        ? "bg-blue-50 text-blue-600 font-semibold"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                style={{
                    // جیسے جیسے لیول (Depth) بڑھے گا، خودکار انڈینٹیشن (Padding) بڑھتی جائے گی
                    paddingLeft: isSidebarExpanded ? `${Math.max(0.5, level * 0.75)}rem` : "0.5rem",
                }}
            >
                <Link
                    href={node.href}
                    className="flex items-center gap-2.5 flex-1 min-w-0"
                    title={!isSidebarExpanded ? node.label : undefined}
                    onClick={() => {
                        if (hasChildren && !isOpen) setIsOpen(true);
                    }}
                >
                    {node.icon && <span className="shrink-0">{node.icon}</span>}
                    {isSidebarExpanded && (
                        <span
                            className={`truncate ${level === 0 ? "text-sm font-medium" : level === 1 ? "text-xs font-medium" : "text-[11px]"
                                }`}
                        >
                            {node.label}
                        </span>
                    )}
                </Link>

                {/* Unfold Arrow Icon */}
                {isSidebarExpanded && hasChildren && (
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setIsOpen((prev) => !prev);
                        }}
                        className="p-1 text-gray-400 hover:text-gray-600 rounded"
                    >
                        {isOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                    </button>
                )}
            </div>

            {/* Recursive Rendering of Children */}
            {isSidebarExpanded && hasChildren && isOpen && (
                <ul className="ml-2 border-l border-gray-200 pl-1 space-y-0.5">
                    {node.children!.map((childNode) => (
                        <SidebarItem
                            key={childNode.href}
                            node={childNode}
                            pathname={pathname}
                            isSidebarExpanded={isSidebarExpanded}
                            level={level + 1}
                        />
                    ))}
                </ul>
            )}
        </li>
    );
}