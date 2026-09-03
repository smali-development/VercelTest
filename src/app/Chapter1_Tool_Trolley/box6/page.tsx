// src/app/Chapter1_Tool_Trolley/box6/page.tsx

import Link from "next/link";
import CardShadcn3BunchDiv_CardName from "@/components/CardShadcn3BunchDiv_CardName";
import CollapsibleCards from "@/components/CollapsibleCards";

export default function Box6() {
    const tools = [
        { name: "Hacksaw", slug: "Hacksaw" },
        { name: "Nylon Brush", slug: "Nylon_Brush" },
        { name: "Steel Wire Brush", slug: "Steel_Wire_Brush" },
        { name: "Flat File", slug: "Flat_File" },
        { name: "Triangular File", slug: "Triangular_File" },
        { name: "Square File", slug: "Square_File" },
        { name: "Round File", slug: "Round_File" },
        { name: "Half-Round File", slug: "Half_Round_File" },
    ];

    const basePath = "/Chapter1_Tool_Trolley/box6";

    return (
        <div className="flex flex-col gap-5 p-5 max-w-[--breakpoint-2xl] mx-auto">
           

            <div>
                <h2 className="section-heading text-xl font-bold mb-4">Box No. 6</h2>
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