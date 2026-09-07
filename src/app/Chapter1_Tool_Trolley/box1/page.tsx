// src\app\Chapter1_Tool_Trolley\box1\page.tsx

import Link from "next/link";
import CardShadcn3BunchDiv_CardName from "@/components/CardShadcn3BunchDiv_CardName";
import CollapsibleCards from "@/components/CollapsibleCards";
import { formatAppPath } from "@/utils/common_utilily";
import { fileURLToPath } from "url";

export default function Box1() {
    const elements = [
        { name: "Torque Wrench", slug: "?" },
        { name: "T-Handle Wrench", slug: "?" },
        { name: "T-Handle Socket Wrench", slug: "?" },
        { name: "Phillips Screwdriver", slug: "?" },
        { name: "Flat Head Screwdriver", slug: "?" },
        { name: "Tyre Lever", slug: "?" },
        { name: "Two-Jaw Puller", slug: "?" },
        { name: "Three-Jaw Puller", slug: "?" },
    ];

    const basePath = "?";
    // Searching path preparation ////
        const currentFilePath = fileURLToPath(import.meta.url);  // returns e.g. "/Chapter6_Engine_Base_System/Intake_System/..."
    
        const pathString = formatAppPath(currentFilePath); // pathString Output: "Chapter6_Engine_Base_System Intake_System Forced_Induction_System_Diesel_Engine Forced_Induction_System_Parts"
        //////////////////////////

    return (

        <div className="flex flex-col gap-5 p-5 max-w-[--breakpoint-2xl] mx-auto">
            <div>
                <h2 className="section-heading text-xl font-bold mb-4">Box No. 1</h2>
                <ol className="list-decimal list-inside space-y-2 text-slate-700 font-medium">
                    {elements.map((element) => (
                        <li key={element.name}>
                            <Link
                                href={`${basePath}/${element.slug}`}
                                className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                            >
                                {element.name}
                            </Link>
                        </li>
                    ))}
                </ol>
            </div>

            {/* Images / Cards Partition (Deferred Loading) */}
            <CollapsibleCards title="View Tool Cards & Images">
                {elements.map((element, index) => (
                    <CardShadcn3BunchDiv_CardName
                        key={element.name || index}
                        cardName={element.name}
                        pathString={pathString}
                    />
                ))}
            </CollapsibleCards>
        </div>
    );
}