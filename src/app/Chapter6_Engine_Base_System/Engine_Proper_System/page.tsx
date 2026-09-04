

import Link from "next/link";
import CollapsibleCards from "@/components/CollapsibleCards";
import CardShadcn3BunchDiv_CardName from "@/components/CardShadcn3BunchDiv_CardName";
import { removeLeadingNumber } from "@/utils/formatName";

export default async function Engine_Proper_System() {
    const elements = [
        { name: "Cylinder Head", slug: "?" },
        { name: "Cylinder Block", slug: "?" },
        { name: "Piston", slug: "?" },
        { name: "Crank Shaft", slug: "?" },
        { name: "Fly Wheel", slug: "?" },
        { name: "Valve Mechanism & Timing", slug: "?" },
        { name: "Drive Belt", slug: "?" },
        { name: "Oil Pan", slug: "?" },
    ];
    const basePath = "?";
    return (
        <div className="max-w-5xl mx-auto p-6 space-y-6">
            <div>
                <p>Engine Base System</p>
                <h1 className="text-3xl font-extrabold mb-2 text-blue-900">
                    Engine Proper System
                </h1>
                <p className="text-slate-600 mb-8">
                    The engine proper system is organised into several components, each playing a crucial role in the overall operation of the engine.
                </p>
            </div>
            <h1 className="text-2xl font-bold text-slate-900 mb-6">
                Engine Proper System Overview
            </h1>
            <div>
                <h2 className="section-heading">Components</h2>
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




