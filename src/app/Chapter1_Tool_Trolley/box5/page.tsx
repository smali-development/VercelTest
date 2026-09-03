// src/app/Chapter1_Tool_Trolley/box5/page.tsx

import Link from "next/link";
import CardShadcn3BunchDiv_CardName from "@/components/CardShadcn3BunchDiv_CardName";
import CollapsibleCards from "@/components/CollapsibleCards";

export default function Box5() {
    const tools = [
        { name: "Wheel Spanner", slug: "Wheel_Spanner" },
        { name: "Oil Can", slug: "Oil_Can" },
        { name: "Chisel", slug: "Chisel" },
        { name: "Oil Filter Wrench", slug: "Oil_Filter_Wrench" },
        { name: "Center Punch", slug: "Center_Punch" },
        { name: "Scraper", slug: "Scraper" },
    ];

    const basePath = "/Chapter1_Tool_Trolley/box5";

    return (
        <div className="flex flex-col gap-5 p-5 max-w-[--breakpoint-2xl] mx-auto">

            <div>
                <h2 className="section-heading text-xl font-bold mb-4">Box No. 5</h2>
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