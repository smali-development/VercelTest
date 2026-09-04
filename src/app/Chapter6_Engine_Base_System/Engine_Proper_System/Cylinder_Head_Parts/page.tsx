

import Link from "next/link";
import CollapsibleCards from "@/components/CollapsibleCards";
import CardShadcn3BunchDiv_CardName from "@/components/CardShadcn3BunchDiv_CardName";

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
        { name: "Rocker Arm / Tappet", slug: "?" },
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

    return (
        <div className="flex flex-col gap-5 p-5 max-w-[--breakpoint-2xl] mx-auto">
            <div>


                <div>
                    <h1 className="text-3xl font-extrabold text-brand-600 mb-2  text-blue-900">Chapter7 Engine Base System</h1>
                    <h2 className="text-2xl font-extrabold text-brand-600 mb-2  text-blue-900">Chapter7 Engine Proper System</h2>
                    <h3 className="text-1xl font-extrabold text-brand-600 mb-2  text-blue-900">Cylinder Head Parts</h3>
                    {/* <p className="text-slate-600 mb-8">Fire needs three elements to occur, known together as the Fire Triangle. Removing any one of the three will extinguish or prevent a fire.</p> */}
                </div>
                <ol className="list-decimal list-inside space-y-2 text-slate-700 font-medium">
                    {elements.map((element) => (
                        <li key={element.slug}>
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
                        key={element.slug}
                        cardName={element.name}
                    />
                ))}
            </CollapsibleCards>

        </div>


    );
}
