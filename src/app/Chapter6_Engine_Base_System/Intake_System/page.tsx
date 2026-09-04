import Link from "next/link";
import CollapsibleCards from "@/components/CollapsibleCards";
import { removeLeadingNumber } from "@/utils/formatName";
import CardShadcn3BunchDiv_CardName from "@/components/CardShadcn3BunchDiv_CardName";

export default async function Intake_System() {

    const elements = [
        { name: "Forced Induction System - Diesel Engine", slug: "?" },
        { name: "Air Cleaner", slug: "?" },
        { name: "Throttle Body", slug: "?" },
        { name: "Intake Manifold", slug: "?" },
    ];
    const basePath = "?";
    return (
        <div className="max-w-5xl mx-auto p-6 space-y-6">
            <div>
                <p >Engine Base System</p>
                <h2 className="text-2xl font-extrabold text-brand-600 mb-2  text-blue-900">2. Intake System</h2>
                {/* <p className="text-slate-600 mb-8">Fire needs three elements to occur, known together as the Fire Triangle. Removing any one of the three will extinguish or prevent a fire.</p> */}
            </div>

           
           
            <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
               Components
            </h2>
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




