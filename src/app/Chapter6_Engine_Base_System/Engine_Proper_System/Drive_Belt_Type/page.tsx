

import Link from "next/link";
import CollapsibleCards from "@/components/CollapsibleCards";
import CardShadcn3BunchDiv_CardName from "@/components/CardShadcn3BunchDiv_CardName";
import { formatAppPath } from "@/utils/common_utilily";
import { fileURLToPath } from "url";

export default function Drive_Belt_Type() {
    const elements = [
        { name: "Drive Gear", slug: "?" },
        { name: "Drive Chain", slug: "?" },
        { name: "Drive Belt", slug: "?" },
        { name: "V-Belt", slug: "?" },
        { name: "V-Ribbed Belt", slug: "?" },
    ];

    const basePath = "/Chapter6_Engine_Base_System/Engine_Proper_System/Drive_Belt_Type";

    // Searching path preparation ////
    const currentFilePath = fileURLToPath(import.meta.url);  // returns e.g. "/Chapter6_Engine_Base_System/Intake_System/..."

    const pathString = formatAppPath(currentFilePath); // pathString Output: "Chapter6_Engine_Base_System Intake_System Forced_Induction_System_Diesel_Engine Forced_Induction_System_Parts"
    //////////////////////////

    return (
        <div className="flex flex-col gap-5 p-5 max-w-[--breakpoint-2xl] mx-auto">
            <div>


                <div>
                    <p>Chapter7 Engine Base System</p>
                    <p>Engine Proper System</p>
                    <h3 className="text-1xl font-extrabold text-brand-600 mb-2  text-blue-900">Drive_Belt Type</h3>
                    {/* <p className="text-slate-600 mb-8">Fire needs three elements to occur, known together as the Fire Triangle. Removing any one of the three will extinguish or prevent a fire.</p> */}
                </div>
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
                {elements.map((element) => (
                    <CardShadcn3BunchDiv_CardName
                        key={element.name}
                        cardName={element.name}
                        pathString={pathString}
                    />
                ))}
            </CollapsibleCards>

        </div>


    );
}

