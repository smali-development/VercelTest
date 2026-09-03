// src\app\Chapter1_Tool_Trolley\box2\page.tsx

import Link from "next/link";
import CardShadcn3BunchDiv_CardName from "@/components/CardShadcn3BunchDiv_CardName";
import CollapsibleCards from "@/components/CollapsibleCards";

export default function Box2() {
    const tools = [
        { name: "Piston Ring Expander", slug: "Piston_Ring_Expander" },
        { name: "Grip Pliers", slug: "Grip_Pliers" },
        { name: "Monkey Pliers", slug: "Monkey_Pliers" },
        { name: "Slip Joint Pliers", slug: "Slip_Joint_Pliers" },
        { name: "Combination Pliers", slug: "Combination_Pliers" },
        { name: "Cutter Nose Pliers", slug: "Cutter_Nose_Pliers" },
        { name: "Long Nose Pliers", slug: "Long_Nose_Pliers" },
        { name: "Circlip Pliers (Internal)", slug: "Circlip_Pliers_Internal" },
        { name: "Circlip Pliers (External)", slug: "Circlip_Pliers_External" },
    ];

    const basePath = "/Chapter1_Tool_Trolley/box2";

    return (
        <div className="flex flex-col gap-5 p-5 max-w-[--breakpoint-2xl] mx-auto">


            <div>
                <h2 className="section-heading text-xl font-bold mb-4">Box No. 2</h2>
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