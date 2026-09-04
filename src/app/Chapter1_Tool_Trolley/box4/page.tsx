// src/app/Chapter1_Tool_Trolley/box4/page.tsx

import Link from "next/link";
import CardShadcn3BunchDiv_CardName from "@/components/CardShadcn3BunchDiv_CardName";
import CollapsibleCards from "@/components/CollapsibleCards";

export default function Box4() {
   const tools = [
  { name: "Speed Handle", slug: "?" },
  { name: "Star Allen Key", slug: "?" },
  { name: "Six-Point (Hex) Allen Key", slug: "?" },
  { name: "Feeler Gauge", slug: "?" },
  { name: "Socket Set", slug: "?" },
  { name: "Deep Socket", slug: "?" },
  { name: "Universal Joint", slug: "?" },
  { name: "Ratchet Handle", slug: "?" },
  { name: "Sliding T-Handle", slug: "?" },
  { name: "Half Extension Bar", slug: "?" },
  { name: "Full Extension Bar", slug: "?" },
  { name: "L-Handle Tommy Bar", slug: "?" },
];

const basePath = "?";

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