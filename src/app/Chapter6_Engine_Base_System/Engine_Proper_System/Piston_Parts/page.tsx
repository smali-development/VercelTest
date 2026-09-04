

import Link from "next/link";
import CollapsibleCards from "@/components/CollapsibleCards";
import CardShadcn3BunchDiv_CardName from "@/components/CardShadcn3BunchDiv_CardName";

export default function Piston_Parts() {
    const elements = [
        { name: "Piston Crown (Head)", slug: "?" },
        { name: "Piston Skirt", slug: "?" },
        { name: "Ring Lands", slug: "?" },
        { name: "Compression Ring", slug: "?" },
        { name: "Wiper Ring", slug: "?" },
        { name: "Oil Control Ring", slug: "?" },
        { name: "Ring Grooves", slug: "?" },
        { name: "Piston Pin / Wrist Pin", slug: "?" },
        { name: "Pin Boss", slug: "?" },
        { name: "Piston Cooling Holes", slug: "?" },
        { name: "Piston Dishing", slug: "?" },
        { name: "Piston Center Mark", slug: "?" },
        { name: "Connecting Rod Boss", slug: "?" },
        { name: "Piston Oil Passages", slug: "?" },
        { name: "Piston Land Gap", slug: "?" },
        { name: "Small End Bearing", slug: "?" },
        { name: "Big End Bearing", slug: "?" },
        { name: "Connecting Rod", slug: "?" },
        { name: "Connecting Rod Cap", slug: "?" },
        { name: "Plunger", slug: "?" },
    ];

    const basePath = "/Chapter6_Engine_Base_System/Engine_Proper_System/Piston_Parts";

    return (
        <div className="flex flex-col gap-5 p-5 max-w-[--breakpoint-2xl] mx-auto">
            <div>


                <div>
                    <p>Chapter7 Engine Base System</p>
                    <p>Engine Proper System</p>
                    <h3 className="text-1xl font-extrabold text-brand-600 mb-2  text-blue-900">Piston Parts</h3>
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

