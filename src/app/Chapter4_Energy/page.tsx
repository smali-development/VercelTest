// src\app\Chapter4_Energy\page.tsx



// src\app\Chapter4_Energy\energy_types\page.tsx
import Link from "next/link";
import CardShadcn3BunchDiv_CardName from "@/components/CardShadcn3BunchDiv_CardName";
import CollapsibleCards from "@/components/CollapsibleCards";
import { removeLeadingNumber } from "@/utils/formatName";

export default function Chapter4_Energy() {
    const elements = [
        { name: "Mechanical Energy", slug: "?" },
        { name: "Electrical Energy", slug: "?" },
        { name: "Heat Energy", slug: "?" },
        { name: "Chemical Energy", slug: "?" },
        { name: "Light Energy", slug: "?" },
        { name: "Wind Energy", slug: "?" },
        { name: "Hydropower Energy", slug: "?" },
        { name: "Nuclear Power Energy", slug: "?" },
        { name: "Biomass Energy", slug: "?" },
        { name: "Sound Energy", slug: "?" },
    ];


    const basePath = "/Chapter4_Energy";

    return (
        <div className="flex flex-col gap-5 p-5 max-w-[--breakpoint-2xl] mx-auto">
            <div>
                <div>
                    <h1 className="text-3xl font-extrabold text-brand-600 mb-2  text-blue-900">Chapter 4 — Energy</h1>
                    <p className="text-slate-600 mb-8">Types of energy discussed in class:.</p>
                </div>

                <h2 className="section-heading text-xl font-bold mb-4">Energy Types</h2>
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









