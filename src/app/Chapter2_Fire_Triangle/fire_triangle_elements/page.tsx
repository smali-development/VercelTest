// src\app\Chapter2_Fire_Triangle\fire_triangle_elements\page.tsx

import Link from "next/link";
import CardShadcn3BunchDiv_CardName from "@/components/CardShadcn3BunchDiv_CardName";
import CollapsibleCards from "@/components/CollapsibleCards";

export default function FireTriangleElements() {
    const elements = [
        { name: "Fuel", slug: "?" },
        { name: "Heat", slug: "?" },
        { name: "Oxygen", slug: "?" },
    ];

    const basePath = "?";

    return (
        <div className="flex flex-col gap-5 p-5 max-w-[--breakpoint-2xl] mx-auto">
            <div>

                <h2 className="section-heading text-xl font-bold mb-4">Fire Triangle Elements</h2>
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
                    />
                ))}
            </CollapsibleCards>

        </div>


    );
}