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
                    href: "/Chapter1_Tool_Trolley/box1",
                    label: "Box 1",
                    children: [
                        { href: "/Chapter1_Tool_Trolley/box1/Torque_Wrench", label: "1. Torque Wrench" },
                        { href: "/Chapter1_Tool_Trolley/box1/T_Handle_Wrench", label: "2. T-Handle Wrench" },
                        { href: "/Chapter1_Tool_Trolley/box1/T_Handle_Socket_Wrench", label: "3. T-Handle Socket Wrench" },
                        { href: "/Chapter1_Tool_Trolley/box1/Phillips_Screwdriver", label: "4. Phillips Screwdriver" },
                        { href: "/Chapter1_Tool_Trolley/box1/Flat_Head_Screwdriver", label: "5. Flat Head Screwdriver" },
                        { href: "/Chapter1_Tool_Trolley/box1/Tyre_Lever", label: "6. Tyre Lever" },
                        { href: "/Chapter1_Tool_Trolley/box1/Two_Jaw_Puller", label: "7. Two-Jaw Puller" },
                        { href: "/Chapter1_Tool_Trolley/box1/Three_Jaw_Puller", label: "8. Three-Jaw Puller" },
                    ],
                },
                {
                    href: "/Chapter1_Tool_Trolley/box2",
                    label: "Box 2",
                    children: [
                        { href: "/Chapter1_Tool_Trolley/box2/Piston_Ring_Expander", label: "1. Piston Ring Expander" },
                        { href: "/Chapter1_Tool_Trolley/box2/Grip_Pliers", label: "2. Grip Pliers" },
                        { href: "/Chapter1_Tool_Trolley/box2/Monkey_Pliers", label: "3. Monkey Pliers" },
                        { href: "/Chapter1_Tool_Trolley/box2/Slip_Joint_Pliers", label: "4. Slip Joint Pliers" },
                        { href: "/Chapter1_Tool_Trolley/box2/Combination_Pliers", label: "5. Combination Pliers" },
                        { href: "/Chapter1_Tool_Trolley/box2/Cutter_Nose_Pliers", label: "6. Cutter Nose Pliers" },
                        { href: "/Chapter1_Tool_Trolley/box2/Long_Nose_Pliers", label: "7. Long Nose Pliers" },
                        { href: "/Chapter1_Tool_Trolley/box2/Circlip_Pliers_Internal", label: "8. Circlip Pliers (Internal)" },
                        { href: "/Chapter1_Tool_Trolley/box2/Circlip_Pliers_External", label: "9. Circlip Pliers (External)" },
                    ],
                },
                {
                    href: "/Chapter1_Tool_Trolley/box3",
                    label: "Box 3",
                    children: [
                        { href: "/Chapter1_Tool_Trolley/box3/Combination_Spanner", label: "1. Combination Spanner" },
                        { href: "/Chapter1_Tool_Trolley/box3/Ring_Spanner", label: "2. Ring Spanner" },
                        { href: "/Chapter1_Tool_Trolley/box3/box_End_Spanner", label: "3. Box End Spanner" },
                        { href: "/Chapter1_Tool_Trolley/box3/Open_End_Spanner", label: "4. Open End Spanner" },
                        { href: "/Chapter1_Tool_Trolley/box3/Adjustable_Dock_Spanner", label: "5. Adjustable (Dock) Spanner" },
                    ],
                },
                {
                    href: "/Chapter1_Tool_Trolley/box4",
                    label: "Box 4",
                    children: [
                        { href: "/Chapter1_Tool_Trolley/box4/Speed_Handle", label: "1. Speed Handle" },
                        { href: "/Chapter1_Tool_Trolley/box4/Star_Allen_Key", label: "2. Star Allen Key" },
                        { href: "/Chapter1_Tool_Trolley/box4/Six_Point_Hex_Allen_Key", label: "3. Six-Point (Hex) Allen Key" },
                        { href: "/Chapter1_Tool_Trolley/box4/Feeler_Gauge", label: "4. Feeler Gauge" },
                        { href: "/Chapter1_Tool_Trolley/box4/Socket_Set", label: "5. Socket Set" },
                        { href: "/Chapter1_Tool_Trolley/box4/Deep_Socket", label: "6. Deep Socket" },
                        { href: "/Chapter1_Tool_Trolley/box4/Universal_Joint", label: "7. Universal Joint" },
                        { href: "/Chapter1_Tool_Trolley/box4/Ratchet_Handle", label: "8. Ratchet Handle" },
                        { href: "/Chapter1_Tool_Trolley/box4/Sliding_T_Handle", label: "9. Sliding T-Handle" },
                        { href: "/Chapter1_Tool_Trolley/box4/Half_Extension_Bar", label: "10. Half Extension Bar" },
                        { href: "/Chapter1_Tool_Trolley/box4/Full_Extension_Bar", label: "11. Full Extension Bar" },
                        { href: "/Chapter1_Tool_Trolley/box4/L_Handle_Tommy_Bar", label: "12. L-Handle Tommy Bar" },
                    ],
                },
                {
                    href: "/Chapter1_Tool_Trolley/box5",
                    label: "Box 5",
                    children: [
                        { href: "/Chapter1_Tool_Trolley/box5/Wheel_Spanner", label: "1. Wheel Spanner" },
                        { href: "/Chapter1_Tool_Trolley/box5/Oil_Can", label: "2. Oil Can" },
                        { href: "/Chapter1_Tool_Trolley/box5/Chisel", label: "3. Chisel" },
                        { href: "/Chapter1_Tool_Trolley/box5/Oil_Filter_Wrench", label: "4. Oil Filter Wrench" },
                        { href: "/Chapter1_Tool_Trolley/box5/Center_Punch", label: "5. Center Punch" },
                        { href: "/Chapter1_Tool_Trolley/box5/Scraper", label: "6. Scraper" },
                    ],
                },
                {
                    href: "/Chapter1_Tool_Trolley/box6",
                    label: "Box 6",
                    children: [
                        { href: "/Chapter1_Tool_Trolley/box6/Hacksaw", label: "1. Hacksaw" },
                        { href: "/Chapter1_Tool_Trolley/box6/Nylon_Brush", label: "2. Nylon Brush" },
                        { href: "/Chapter1_Tool_Trolley/box6/Steel_Wire_Brush", label: "3. Steel Wire Brush" },
                        { href: "/Chapter1_Tool_Trolley/box6/Flat_File", label: "4. Flat File" },
                        { href: "/Chapter1_Tool_Trolley/box6/Triangular_File", label: "5. Triangular File" },
                        { href: "/Chapter1_Tool_Trolley/box6/Square_File", label: "6. Square File" },
                        { href: "/Chapter1_Tool_Trolley/box6/Round_File", label: "7. Round File" },
                        { href: "/Chapter1_Tool_Trolley/box6/Half_Round_File", label: "8. Half-Round File" },
                    ],
                },
                {
                    href: "/Chapter1_Tool_Trolley/box7",
                    label: "Box 7",
                    children: [
                        { href: "/Chapter1_Tool_Trolley/box7/Valve_Lifter", label: "1. Valve Lifter" },
                        { href: "/Chapter1_Tool_Trolley/box7/Valve_Lapper", label: "2. Valve Lapper" },
                        { href: "/Chapter1_Tool_Trolley/box7/Valve_Grinding_Paste", label: "3. Valve Grinding Paste" },
                        { href: "/Chapter1_Tool_Trolley/box7/Adjustable_Wrench", label: "4. Adjustable Wrench" },
                        { href: "/Chapter1_Tool_Trolley/box7/Pipe_Wrench", label: "5. Pipe Wrench" },
                    ],
                },
                {
                    href: "/Chapter1_Tool_Trolley/box8",
                    label: "Box 8",
                    children: [
                        { href: "/Chapter1_Tool_Trolley/box8/Hammer", label: "1. Hammer" },
                        { href: "/Chapter1_Tool_Trolley/box8/Ball_Peen_Hammer", label: "2. Ball Peen Hammer" },
                        { href: "/Chapter1_Tool_Trolley/box8/Claw_Hammer", label: "3. Claw Hammer" },
                        { href: "/Chapter1_Tool_Trolley/box8/Rubber_Mallet", label: "4. Rubber Mallet" },
                        { href: "/Chapter1_Tool_Trolley/box8/Piston_Ring_Compressor", label: "5. Piston Ring Compressor" },
                        { href: "/Chapter1_Tool_Trolley/box8/Stud_Remover", label: "6. Stud Remover" },
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