
// src/app/Chapter1_Tool_Trolley/box3/page.tsx

import Link from "next/link";
import CardShadcn3BunchDiv_CardName from "@/components/CardShadcn3BunchDiv_CardName";
import CollapsibleCards from "@/components/CollapsibleCards";
import { formatAppPath } from "@/utils/common_utilily";
import { fileURLToPath } from "url";

export default function Box3() {
    const tools = [
        { name: "Combination Spanner", slug: "?" },
        { name: "Ring Spanner", slug: "?" },
        { name: "Box End Spanner", slug: "?" },
        { name: "Open End Spanner", slug: "?" },
        { name: "Adjustable (Dock) Spanner", slug: "?" },
    ];

    const basePath = "?";
    // Searching path preparation ////
    const currentFilePath = fileURLToPath(import.meta.url);  // returns e.g. "/Chapter6_Engine_Base_System/Intake_System/..."

    const pathString = formatAppPath(currentFilePath); // pathString Output: "Chapter6_Engine_Base_System Intake_System Forced_Induction_System_Diesel_Engine Forced_Induction_System_Parts"
    //////////////////////////

    return (
        <div className="flex flex-col gap-5 p-5 max-w-[--breakpoint-2xl] mx-auto">

            <div>
                <h2 className="section-heading text-xl font-bold mb-4">Box No. 3</h2>
                <ol className="list-decimal list-inside space-y-2 text-slate-700 font-medium">
                    {tools.map((tool) => (
                        <li key={tool.name}>
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
                        pathString={pathString}
                    />
                ))}
            </CollapsibleCards>
        </div>
    );
}