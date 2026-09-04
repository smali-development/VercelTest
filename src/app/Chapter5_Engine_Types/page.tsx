
// src\app\Chapter4_Energy\energy_types\page.tsx
import Link from "next/link";
import CardShadcn3BunchDiv_CardName from "@/components/CardShadcn3BunchDiv_CardName";
import CollapsibleCards from "@/components/CollapsibleCards";
import { removeLeadingNumber } from "@/utils/formatName";

export default function Chapter5_Engine_Types() {
    const elements = [
        { name: "External Combustion Engine (EC)", slug: "?" },
        { name: "Internal Combustion Engine (IC)", slug: "?" },
        { name: "Compression Ignition Engine (CI)", slug: "?" },
        { name: "Spark Ignition Engine (SI)", slug: "?" },
        { name: "2-Stroke Engine", slug: "?" },
        { name: "4-Stroke Engine", slug: "?" },
        { name: "One Side Valve Engine (OSV)", slug: "?" },
        { name: "Over Head Valve Engine (OHV)", slug: "?" },
        { name: "Single Over Head Camshaft Engine (SOHC)", slug: "?" },
        { name: "Double Over Head Camshaft Engine (DOHC)", slug: "?" },
        { name: "Variable Valve Timing Intelligent Engine (VVT-i)", slug: "?" },
        { name: "Variable Valve Timing Lift Intelligent Engine (VVTL-i)", slug: "?" },
        { name: "Electromechanical Valve Actuation Engine (EVA)", slug: "?" },
        { name: "Hybrid Camless Engine (HCE)", slug: "?" },
    ];

    const basePath = "/Chapter5_Engine_Types";

    return (
        <div className="flex flex-col gap-5 p-5 max-w-[--breakpoint-2xl] mx-auto">
            <div>
                <div>
                    <h1 className="text-3xl font-extrabold text-brand-600 mb-2  text-blue-900">Chapter 5 — Engine Types</h1>
                    <p className="text-slate-600 mb-8">(EC/IC, CI/SI, 2/4-stroke, OSV/OHV/SOHC/DOHC/VVT-i/etc.).</p>
                </div>

                <h2 className="section-heading text-xl font-bold mb-4">Engine Types</h2>
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
                        cardName={removeLeadingNumber(element.name)}
                    />
                ))}
            </CollapsibleCards>

        </div>


    );
}
