// src/app/Chapter1_Tool_Trolley/box7/page.tsx

import Link from "next/link";
import CardShadcn3BunchDiv_CardName from "@/components/CardShadcn3BunchDiv_CardName";
import CollapsibleCards from "@/components/CollapsibleCards";

export default function Box7() {
    const tools = [
        { name: "Valve Lifter", slug: "Valve_Lifter" },
        { name: "Valve Lapper", slug: "Valve_Lapper" },
        { name: "Valve Grinding Paste", slug: "Valve_Grinding_Paste" },
        { name: "Adjustable Wrench", slug: "Adjustable_Wrench" },
        { name: "Pipe Wrench", slug: "Pipe_Wrench" },
    ];

    const basePath = "/Chapter1_Tool_Trolley/box7";

    return (
        <div className="flex flex-col gap-8 p-8 max-w-[--breakpoint-2xl] mx-auto">
            <div>
                <h1 className="text-3xl font-extrabold mb-2 text-blue-900">
                    Chapter 1 — Tool Trolley
                </h1>
                <p className="text-slate-600 mb-8">
                    The tool trolley is organised into 8 numbered boxes, each holding a
                    specific group of hand tools used in engine workshop practice.
                </p>
            </div>

            <div>
                <h2 className="section-heading text-xl font-bold mb-4">Box No. 7</h2>
                <ol className="list-decimal list-inside space-y-2 text-slate-700 font-medium">
                    {tools.map((tool) => (
                        <li key={tool.slug}>
                            <Link
                                href={`${basePath}/${tool.slug}`}
                                className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                            >
                                {tool.name}
                            </Link>
                        </li>
                    ))}
                </ol>
            </div>

            {/* Images / Cards Partition (Deferred Loading) */}
            <CollapsibleCards title="View Tool Cards & Images">
                {tools.map((tool) => (
                    <CardShadcn3BunchDiv_CardName
                        key={tool.slug}
                        cardName={tool.name}
                    />
                ))}
            </CollapsibleCards>
        </div>
    );
}