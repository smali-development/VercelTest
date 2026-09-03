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
                        { href: "?", label: "1. Torque Wrench" },
                        { href: "?", label: "2. T-Handle Wrench" },
                        { href: "?", label: "3. T-Handle Socket Wrench" },
                        { href: "?", label: "4. Phillips Screwdriver" },
                        { href: "?", label: "5. Flat Head Screwdriver" },
                        { href: "?", label: "6. Tyre Lever" },
                        { href: "?", label: "7. Two-Jaw Puller" },
                        { href: "?", label: "8. Three-Jaw Puller" },
                    ],
                },
                {
                    href: "/Chapter1_Tool_Trolley/box2",
                    label: "Box 2",
                    children: [
                        { href: "?", label: "1. Piston Ring Expander" },
                        { href: "?", label: "2. Grip Pliers" },
                        { href: "?", label: "3. Monkey Pliers" },
                        { href: "?", label: "4. Slip Joint Pliers" },
                        { href: "?", label: "5. Combination Pliers" },
                        { href: "?", label: "6. Cutter Nose Pliers" },
                        { href: "?", label: "7. Long Nose Pliers" },
                        { href: "?", label: "8. Circlip Pliers (Internal)" },
                        { href: "?", label: "9. Circlip Pliers (External)" },
                    ],
                },
                {
                    href: "/Chapter1_Tool_Trolley/box3",
                    label: "Box 3",
                    children: [
                        { href: "?", label: "1. Combination Spanner" },
                        { href: "?", label: "2. Ring Spanner" },
                        { href: "?", label: "3. Box End Spanner" },
                        { href: "?", label: "4. Open End Spanner" },
                        { href: "?", label: "5. Adjustable (Dock) Spanner" },
                    ],
                },
                {
                    href: "/Chapter1_Tool_Trolley/box4",
                    label: "Box 4",
                    children: [
                        { href: "?", label: "1. Speed Handle" },
                        { href: "?", label: "2. Star Allen Key" },
                        { href: "?", label: "3. Six-Point (Hex) Allen Key" },
                        { href: "?", label: "4. Feeler Gauge" },
                        { href: "?", label: "5. Socket Set" },
                        { href: "?", label: "6. Deep Socket" },
                        { href: "?", label: "7. Universal Joint" },
                        { href: "?", label: "8. Ratchet Handle" },
                        { href: "?", label: "9. Sliding T-Handle" },
                        { href: "?", label: "10. Half Extension Bar" },
                        { href: "?", label: "11. Full Extension Bar" },
                        { href: "?", label: "12. L-Handle Tommy Bar" },
                    ],
                },
                {
                    href: "/Chapter1_Tool_Trolley/box5",
                    label: "Box 5",
                    children: [
                        { href: "?", label: "1. Wheel Spanner" },
                        { href: "?", label: "2. Oil Can" },
                        { href: "?", label: "3. Chisel" },
                        { href: "?", label: "4. Oil Filter Wrench" },
                        { href: "?", label: "5. Center Punch" },
                        { href: "?", label: "6. Scraper" },
                    ],
                },
                {
                    href: "/Chapter1_Tool_Trolley/box6",
                    label: "Box 6",
                    children: [
                        { href: "?", label: "1. Hacksaw" },
                        { href: "?", label: "2. Nylon Brush" },
                        { href: "?", label: "3. Steel Wire Brush" },
                        { href: "?", label: "4. Flat File" },
                        { href: "?", label: "5. Triangular File" },
                        { href: "?", label: "6. Square File" },
                        { href: "?", label: "7. Round File" },
                        { href: "?", label: "8. Half-Round File" },
                    ],
                },
                {
                    href: "/Chapter1_Tool_Trolley/box7",
                    label: "Box 7",
                    children: [
                        { href: "?", label: "1. Valve Lifter" },
                        { href: "?", label: "2. Valve Lapper" },
                        { href: "?", label: "3. Valve Grinding Paste" },
                        { href: "?", label: "4. Adjustable Wrench" },
                        { href: "?", label: "5. Pipe Wrench" },
                    ],
                },
                {
                    href: "/Chapter1_Tool_Trolley/box8",
                    label: "Box 8",
                    children: [
                        { href: "?", label: "1. Hammer" },
                        { href: "?", label: "2. Ball Peen Hammer" },
                        { href: "?", label: "3. Claw Hammer" },
                        { href: "?", label: "4. Rubber Mallet" },
                        { href: "?", label: "5. Piston Ring Compressor" },
                        { href: "?", label: "6. Stud Remover" },
                    ],
                },
            ],
        },
        {
            href: "/Chapter2_Fire_Triangle",
            label: "Ch.2 Fire Triangle",
            icon: <BsFire size={20} />,
            children: [
                {
                    href: "/Chapter2_Fire_Triangle/fire_triangle_elements",
                    label: "Fire Triangle Elements",
                    children: [

                    ],
                }

            ],
        },
        { href: "/Chapter3_Points", label: "Ch.3 Points", icon: <FaTemperatureHigh size={20} /> },
        // { href: "/Chapter4_Energy", label: "Ch.4 Energy types", icon: <SlEnergy size={20} /> },
        {
            href: "/Chapter4_Energy",
            label: "Ch.4 Energy types",
            icon: <SlEnergy size={20} />,
            children: [
                { href: "?", label: "1. Mechanical Energy" },
                { href: "?", label: "2. Electrical Energy" },
                { href: "?", label: "3. Heat Energy" },
                { href: "?", label: "4. Chemical Energy" },
                { href: "?", label: "5. Light Energy" },
                { href: "?", label: "6. Wind Energy" },
                { href: "?", label: "7. Hydropower Energy" },
                { href: "?", label: "8. Nuclear Power Energy" },
                { href: "?", label: "9. Biomass Energy" },
                { href: "?", label: "10. Sound Energy" },
            ],
        },
        // { href: "/Chapter5_Engine_Types", label: "Ch.5 Engine Types", icon: <PiEngineBold size={20} /> },
        {
            href: "/Chapter5_Engine_Types",
            label: "Ch.5 Engine Types",
            icon: <PiEngineBold size={20} />,
            children: [
                { href: "?", label: "1. External Combustion Engine (EC)" },
                { href: "?", label: "2. Internal Combustion Engine (IC)" },
                { href: "?", label: "3. Compression Ignition Engine (CI)" },
                { href: "?", label: "4. Spark Ignition Engine (SI)" },
                { href: "?", label: "5. 2-Stroke Engine" },
                { href: "?", label: "6. 4-Stroke Engine" },
                { href: "?", label: "7. One Side Valve Engine (OSV)" },
                { href: "?", label: "8. Over Head Valve Engine (OHV)" },
                { href: "?", label: "9. Single Over Head Camshaft Engine (SOHC)" },
                { href: "?", label: "10. Double Over Head Camshaft Engine (DOHC)" },
                { href: "?", label: "11. Variable Valve Timing Intelligent Engine (VVT-i)" },
                { href: "?", label: "12. Variable Valve Timing Lift Intelligent Engine (VVTL-i)" },
                { href: "?", label: "13. Electromechanical Valve Actuation Engine (EVA)" },
                { href: "?", label: "14. Hybrid Camless Engine (HCE)" },
            ],
        },
        // { href: "/Chapter6_Engine_Base_System", label: "Ch.6 Engine Base System", icon: <GiClaymoreExplosive size={20} /> },
        {
            href: "/Chapter6_Engine_Base_System",
            label: "Ch.6 Engine Base System",
            icon: <GiClaymoreExplosive size={20} />,
            children: [
                // 1. Engine Proper System
                {
                    href: "/Chapter6_Engine_Base_System/Engine_Proper_System", label: "1. Engine Proper System",
                    children: [
                        {
                            href: "/Chapter6_Engine_Base_System/Engine_Proper_System/Cylinder_Head_Parts", label: "1. Cylinder Head",
                            children: [
                                { href: "?", label: "1. Intake Valves" },
                                { href: "?", label: "2. Exhaust Valves" },
                                { href: "?", label: "3. Valve Springs" },
                                { href: "?", label: "4. Valve Seats" },
                                { href: "?", label: "5. Valve Guide" },
                                { href: "?", label: "6. Key Lock / Cotter (Keeper)" },
                                { href: "?", label: "7. Combustion Chamber" },
                                { href: "?", label: "8. Spark Plug" },
                                { href: "?", label: "9. Fuel Injectors" },
                                { href: "?", label: "10. Spring Retainer" },
                                { href: "?", label: "11. Cam Shaft" },
                                { href: "?", label: "12. Cam Lock" },
                                { href: "?", label: "13. Rocker Arm / Tappet" },
                                { href: "?", label: "14. Shim-Type Tappet" },
                                { href: "?", label: "15. Fix-Type Tappet" },
                                { href: "?", label: "16. Hydraulic Lifter Tappet" },
                                { href: "?", label: "17. Cam Gauge" },
                                { href: "?", label: "18. Cam Shaft Bearings" },
                                { href: "?", label: "19. Push Rods" },
                                { href: "?", label: "20. Head Gasket" },
                                { href: "?", label: "21. Head Cover" },
                                { href: "?", label: "22. Head Cover Seal" },
                                { href: "?", label: "23. Head Cover Seating" },
                                { href: "?", label: "24. Oil Filler Cap" },
                                { href: "?", label: "25. Oil Passages" },
                                { href: "?", label: "26. Coolant Passages" },
                                { href: "?", label: "27. Intake Manifold" },
                                { href: "?", label: "28. Exhaust Manifold" },
                                { href: "?", label: "29. Cam Rail" },
                                { href: "?", label: "30. Center Grip" },
                                { href: "?", label: "31. Ignition Cable" },
                                { href: "?", label: "32. High Tension Wire" },
                            ],
                        },
                        {
                            href: "/Chapter6_Engine_Base_System/Engine_Proper_System/Cylinder_Block_Parts", label: "2. Cylinder Block",
                            children: [
                                { href: "?", label: "1. Water Jacket" },
                                { href: "?", label: "2. Water Port" },
                                { href: "?", label: "3. Oil-In Line" },
                                { href: "?", label: "4. Oil Return Port" },
                                { href: "?", label: "5. Dowel Pin" },
                                { href: "?", label: "6. Sleeve" },
                                { href: "?", label: "7. Main Piece" },
                                { href: "?", label: "8. Oil Main Line" },
                                { href: "?", label: "9. Thrust Bearing" },
                                { href: "?", label: "10. Crank Shaft" },
                                { href: "?", label: "11. Crank Gauge" },
                                { href: "?", label: "12. Piston" },
                                { href: "?", label: "13. Water Jacket Pipe" },
                                { href: "?", label: "14. Engine Coolant Flange" },
                                { href: "?", label: "15. Oil Gallery" },
                                { href: "?", label: "16. Liner" },
                                { href: "?", label: "17. Crank Shaft Bearings" },
                                { href: "?", label: "18. Main Caps" },
                                { href: "?", label: "19. Rear Main Seal" },
                                { href: "?", label: "20. Front Main Seal" },
                                { href: "?", label: "21. Flywheel Mounts" },
                                { href: "?", label: "22. Block Mounts" },
                                { href: "?", label: "23. Deck Surface" },
                                { href: "?", label: "24. Oil Pump" },
                                { href: "?", label: "25. Water Pump" },
                                { href: "?", label: "26. Crank Pulley" },
                                { href: "?", label: "27. Oil Filter" },
                                { href: "?", label: "28. Oil Dipstick" },
                                { href: "?", label: "29. Starter Motor" },
                                { href: "?", label: "30. Alternator" },
                            ],
                        },
                        {
                            href: "/Chapter6_Engine_Base_System/Engine_Proper_System/Piston_Parts", label: "3. Piston",
                            children: [
                                { href: "?", label: "1. Piston Crown (Head)" },
                                { href: "?", label: "2. Piston Skirt" },
                                { href: "?", label: "3. Ring Lands" },
                                { href: "?", label: "4. Compression Ring" },
                                { href: "?", label: "5. Wiper Ring" },
                                { href: "?", label: "6. Oil Control Ring" },
                                { href: "?", label: "7. Ring Grooves" },
                                { href: "?", label: "8. Piston Pin / Wrist Pin" },
                                { href: "?", label: "9. Pin Boss" },
                                { href: "?", label: "10. Piston Cooling Holes" },
                                { href: "?", label: "11. Piston Dishing" },
                                { href: "?", label: "12. Piston Center Mark" },
                                { href: "?", label: "13. Connecting Rod Boss" },
                                { href: "?", label: "14. Piston Oil Passages" },
                                { href: "?", label: "15. Piston Land Gap" },
                                { href: "?", label: "16. Small End Bearing" },
                                { href: "?", label: "17. Big End Bearing" },
                                { href: "?", label: "18. Connecting Rod" },
                                { href: "?", label: "19. Connecting Rod Cap" },
                                { href: "?", label: "20. Plunger" },
                            ],
                        },
                        {
                            href: "?", label: "4. Crank Shaft"
                            
                        },
                        { href: "?", label: "5. Fly Wheel" },
                        { href: "?", label: "6. Valve Mechanism & Timing" },
                        {
                            href: "/Chapter6_Engine_Base_System/Engine_Proper_System/Drive_Belt_Type", label: "7. Drive Belt",
                            children: [
                                { href: "?", label: "1. Drive Gear" },
                                { href: "?", label: "2. Drive Chain" },
                                { href: "?", label: "3. Drive Belt" },
                                { href: "?", label: "4. V-Belt" },
                                { href: "?", label: "5. V-Ribbed Belt" },
                            ],
                        },
                        { href: "?", label: "8. Oil Pan" },
                    ],

                },
                // 2. Intake System
                {
                    href: "/Chapter6_Engine_Base_System/Intake_System", label: "2. Intake System",
                    children: [
                        {
                            href: "/Chapter6_Engine_Base_System/Intake_System/Forced_Induction_System_Diesel_Engine", label: "1. Forced Induction System - Diesel Engine",
                            children: [
                                { href: "?", label: "1. Turbocharger" },
                                { href: "?", label: "2. Supercharger" },
                                { href: "?", label: "3. Compound Charging" },
                                { href: "?", label: "4. Ram-Air Intake" },
                                {
                                    href: "/Chapter6_Engine_Base_System/Intake_System/Forced_Induction_System_Diesel_Engine/Forced_Induction_System_Parts", label: "5. Forced Induction System Parts",
                                    children: [
                                        { href: "?", label: "1. Exhaust Manifold" },
                                        { href: "?", label: "2. Turbine Wheel" },
                                        { href: "?", label: "3. Compressor Wheel" },
                                        { href: "?", label: "4. Wastegate" },
                                        { href: "?", label: "5. Inter Cooler" },
                                        { href: "?", label: "6. Blow-off Valve" },
                                        { href: "?", label: "7. Belt Drive Pulley" },
                                        { href: "?", label: "8. Compressor Housing" },
                                        { href: "?", label: "9. Rotor Assembly" },
                                        { href: "?", label: "10. Boost Controller" },
                                    ],
                                },
                            ],
                        },
                        { href: "/Chapter6_Engine_Base_System/Intake_System/Air_Cleaner", label: "2. Air Cleaner" },
                                
                        { href: "/Chapter6_Engine_Base_System/Intake_System/Throttle_Body", label: "3. Throttle Body" },
                        { href: "?", label: "4. Intake Manifold" },
                    ],
                },
                { href: "?", label: "3. Fuel System" },
                { href: "?", label: "4. Ignition System" },
                { href: "?", label: "5. Exhaust System" },
                { href: "?", label: "6. Lubrication System" },
                { href: "?", label: "7. Cooling System" },
                { href: "?", label: "8. Electrical System" },
                { href: "?", label: "9. Sensor System" },
                { href: "?", label: "10. Scanner Diagnostics System" },
            ],
        },

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