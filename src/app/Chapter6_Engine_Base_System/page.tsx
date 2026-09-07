
import Link from "next/link";
import CardShadcn3BunchDiv_CardName from "@/components/CardShadcn3BunchDiv_CardName";
import CollapsibleCards from "@/components/CollapsibleCards";
import { formatAppPath, removeLeadingNumber } from "@/utils/common_utilily";
import { fileURLToPath } from "url";

export default function Chapter6_Engine_Base_System() {
    const elements = [
        { name: "Engine Proper System", slug: "?" },
        { name: "Intake System", slug: "?" },
        { name: "Fuel System", slug: "?" },
        { name: "Ignition System", slug: "?" },
        { name: "Exhaust System", slug: "?" },
        { name: "Lubrication System", slug: "?" },
        { name: "Cooling System", slug: "?" },
        { name: "Electrical System", slug: "?" },
        { name: "Sensor System", slug: "?" },
        { name: "Scanner Diagnostics System", slug: "?" },
    ];

    const basePath = "?";

    // Searching path preparation ////
    const currentFilePath = fileURLToPath(import.meta.url);  // returns e.g. "/Chapter6_Engine_Base_System/Intake_System/..."

    const pathString = formatAppPath(currentFilePath); // pathString Output: "Chapter6_Engine_Base_System Intake_System Forced_Induction_System_Diesel_Engine Forced_Induction_System_Parts"
    //////////////////////////

    return (
        <div className="flex flex-col gap-5 p-5 max-w-[--breakpoint-2xl] mx-auto">
            <div>
                <div>
                    <h1 className="text-3xl font-extrabold text-brand-600 mb-2  text-blue-900">Chapter 6 — Engine Base System</h1>
                    <p className="text-slate-600 mb-8">Types of engine systems discussed in class:.</p>
                </div>

                <h2 className="section-heading text-xl font-bold mb-4">Engine Systems</h2>
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
                        cardName={removeLeadingNumber(element.name)}
                        pathString={pathString}
                    />
                ))}
            </CollapsibleCards>

        </div>


    );
}








