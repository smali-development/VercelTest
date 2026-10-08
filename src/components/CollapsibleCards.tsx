// src/components/CollapsibleCards.tsx

"use client";

import { flushSync } from "react-dom";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

interface CollapsibleCardsProps {
    title?: string;
    children: React.ReactNode;
}

export default function CollapsibleCards({
    title = "Show Tool Cards & Images",
    children,
}: CollapsibleCardsProps) {
    const [isOpen, setIsOpen] = useState(false);
    const wasOpenBeforePrint = useRef<boolean | null>(null);

    useEffect(() => {
        const openForPrint = () => {
            if (wasOpenBeforePrint.current !== null) return;

            wasOpenBeforePrint.current = isOpen;
            flushSync(() => setIsOpen(true));
        };

        const restoreAfterPrint = () => {
            const previousState = wasOpenBeforePrint.current;
            if (previousState === null) return;

            wasOpenBeforePrint.current = null;
            flushSync(() => setIsOpen(previousState));
        };

        window.addEventListener("beforeprint", openForPrint);
        window.addEventListener("afterprint", restoreAfterPrint);

        return () => {
            window.removeEventListener("beforeprint", openForPrint);
            window.removeEventListener("afterprint", restoreAfterPrint);
        };
    }, [isOpen]);

    return (
        <div className="print-card-container border border-slate-200 rounded-lg overflow-hidden bg-white shadow-sm transition-all">
            {/* Accordion Toggle Header */}
            <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="print-hidden w-full flex items-center justify-between p-4 bg-slate-50 hover:bg-slate-100 transition-colors text-left text-slate-800 font-semibold cursor-pointer"
            >
                <span className="flex items-center gap-2">
                    {isOpen ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                    {title}
                </span>
                <span className="text-xs text-slate-500 font-normal">
                    {isOpen ? "Click to collapse" : "Click to expand & view cards"}
                </span>
            </button>

            {/* Render children ONLY when expanded */}
            {isOpen && <div className="print-card-content p-4 flex flex-col gap-6">{children}</div>}
        </div>
    );
}