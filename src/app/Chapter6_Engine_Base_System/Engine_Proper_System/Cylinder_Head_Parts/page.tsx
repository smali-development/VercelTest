

import Link from "next/link";
import CollapsibleCards from "@/components/CollapsibleCards";
import CardShadcn3BunchDiv_CardName from "@/components/CardShadcn3BunchDiv_CardName";
import { formatAppPath } from "@/utils/common_utilily";
import { fileURLToPath } from "url";

export default function Cylinder_Head_Parts() {
    const elements = [
        { name: "Intake Valves", slug: "?" },
        { name: "Exhaust Valves", slug: "?" },
        { name: "Valve Springs", slug: "?" },
        { name: "Valve Seats", slug: "?" },
        { name: "Valve Guide", slug: "?" },
        { name: "Key Lock / Cotter (Keeper)", slug: "?" },
        { name: "Combustion Chamber", slug: "?" },
        { name: "Spark Plug", slug: "?" },
        { name: "Fuel Injectors", slug: "?" },
        { name: "Spring Retainer", slug: "?" },
        { name: "Cam Shaft", slug: "?" },
        { name: "Cam Lock", slug: "?" },
        { name: "Rocker Arm Tappet", slug: "?" },
        { name: "Shim-Type Tappet", slug: "?" },
        { name: "Fix-Type Tappet", slug: "?" },
        { name: "Hydraulic Lifter Tappet", slug: "?" },
        { name: "Cam Gauge", slug: "?" },
        { name: "Cam Shaft Bearings", slug: "?" },
        { name: "Push Rods", slug: "?" },
        { name: "Head Gasket", slug: "?" },
        { name: "Head Cover", slug: "?" },
        { name: "Head Cover Seal", slug: "?" },
        { name: "Head Cover Seating", slug: "?" },
        { name: "Oil Filler Cap", slug: "?" },
        { name: "Oil Passages", slug: "?" },
        { name: "Coolant Passages", slug: "?" },
        { name: "Intake Manifold", slug: "?" },
        { name: "Exhaust Manifold", slug: "?" },
        { name: "Cam Rail", slug: "?" },
        { name: "Center Grip", slug: "?" },
        { name: "Ignition Cable", slug: "?" },
        { name: "High Tension Wire", slug: "?" },
    ];

    const basePath = "/Chapter6_Engine_Base_System/Engine_Proper_System/Cylinder_Head_Parts";

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
                    <h3 className="text-1xl font-extrabold text-brand-600 mb-2  text-blue-900">Cylinder Head Parts</h3>
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
