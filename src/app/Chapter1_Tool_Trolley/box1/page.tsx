// src/app/Chapter1_Tool_Trolley/Box1/page.tsx

import Link from "next/link";
import CardShadcn3BunchDiv_CardName from "@/components/CardShadcn3BunchDiv_CardName";
import CollapsibleCards from "@/components/CollapsibleCards";

export default function Box1Page() {
    const tools = [
        { name: "Torque Wrench", slug: "Torque_Wrench" },
        { name: "T-Handle Wrench", slug: "T_Handle_Wrench" },
        { name: "T-Handle Socket Wrench", slug: "T_Handle_Socket_Wrench" },
        { name: "Phillips Screwdriver", slug: "Phillips_Screwdriver" },
        { name: "Flat Head Screwdriver", slug: "Flat_Head_Screwdriver" },
        { name: "Tyre Lever", slug: "Tyre_Lever" },
        { name: "Two-Jaw Puller", slug: "Two_Jaw_Puller" },
        { name: "Three-Jaw Puller", slug: "Three_Jaw_Puller" },
    ];

    const basePath = "/Chapter1_Tool_Trolley/Box1";

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
                <h2 className="section-heading text-xl font-bold mb-4">Box No. 1</h2>
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
                {tools.map((tool, index) => (
                    <CardShadcn3BunchDiv_CardName
                        key={tool.name || index}
                        cardName={tool.name}
                    />
                ))}
            </CollapsibleCards>
        </div>
    );
}