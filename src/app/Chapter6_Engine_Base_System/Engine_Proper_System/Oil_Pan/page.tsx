

import Link from "next/link";
import CollapsibleCards from "@/components/CollapsibleCards";
import CardShadcn3BunchDiv_CardName from "@/components/CardShadcn3BunchDiv_CardName";

export default function Oil_Pan_Types() {
    const elements = [
        { name: "Oil Pan Without Partition", slug: "?" },
        { name: "Oil Pan With Partition", slug: "?" },
    ];

    const basePath = "/Chapter6_Engine_Base_System/Engine_Proper_System/Oil_Pan";

    return (
        <div className="flex flex-col gap-5 p-5 max-w-[--breakpoint-2xl] mx-auto">
            <div>


                <div>
                    <h1 className="text-3xl font-extrabold text-brand-600 mb-2  text-blue-900">Chapter7 Engine Base System</h1>
                    <h2 className="text-2xl font-extrabold text-brand-600 mb-2  text-blue-900">Chapter7 Engine Proper System</h2>
                    <h3 className="text-1xl font-extrabold text-brand-600 mb-2  text-blue-900">Oil Pan Types</h3>
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

