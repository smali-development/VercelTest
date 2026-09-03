// src/app/Chapter1_Tool_Trolley/box4/page.tsx

import Link from "next/link";
import CardShadcn3BunchDiv_CardName from "@/components/CardShadcn3BunchDiv_CardName";
import CollapsibleCards from "@/components/CollapsibleCards";

export default function Box4() {
    const tools = [
        { name: "Speed Handle", slug: "Speed_Handle" },
        { name: "Star Allen Key", slug: "Star_Allen_Key" },
        { name: "Six-Point (Hex) Allen Key", slug: "Six_Point_Hex_Allen_Key" },
        { name: "Feeler Gauge", slug: "Feeler_Gauge" },
        { name: "Socket Set", slug: "Socket_Set" },
        { name: "Deep Socket", slug: "Deep_Socket" },
        { name: "Universal Joint", slug: "Universal_Joint" },
        { name: "Ratchet Handle", slug: "Ratchet_Handle" },
        { name: "Sliding T-Handle", slug: "Sliding_T_Handle" },
        { name: "Half Extension Bar", slug: "Half_Extension_Bar" },
        { name: "Full Extension Bar", slug: "Full_Extension_Bar" },
        { name: "L-Handle Tommy Bar", slug: "L_Handle_Tommy_Bar" },
    ];

    const basePath = "/Chapter1_Tool_Trolley/box4";

    return (
        <div className="flex flex-col gap-5 p-5 max-w-[--breakpoint-2xl] mx-auto">
          
            <div>
                <h2 className="section-heading text-xl font-bold mb-4">Box No. 4</h2>
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