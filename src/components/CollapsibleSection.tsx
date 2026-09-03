"use client";

import { useState, ReactNode } from "react";
import { ChevronRight } from "lucide-react";

interface CollapsibleSectionProps {
    title: string;
    subtitle?: string;
    defaultOpen?: boolean;
    children: ReactNode;
}

export default function CollapsibleSection({
    title,
    subtitle = "Click to expand & view contents",
    defaultOpen = false,
    children,
}: CollapsibleSectionProps) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="border border-slate-200 rounded-xl bg-slate-50/50 overflow-hidden mb-4 shadow-sm transition-all">
            <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                className="w-full flex items-center justify-between p-4 text-left font-medium text-slate-800 hover:bg-slate-100/70 transition-colors"
            >
                <div className="flex items-center gap-3">
                    <ChevronRight
                        className={`w-5 h-5 text-slate-500 transition-transform duration-200 ${isOpen ? "rotate-90 text-blue-600" : ""
                            }`}
                    />
                    <span className="font-semibold text-base">{title}</span>
                </div>
                <span className="text-xs text-slate-400 font-normal">{subtitle}</span>
            </button>

            {isOpen && (
                <div className="p-4 pt-0 border-t border-slate-200/60 bg-white">
                    <div className="pt-4">{children}</div>
                </div>
            )}
        </div>
    );
}