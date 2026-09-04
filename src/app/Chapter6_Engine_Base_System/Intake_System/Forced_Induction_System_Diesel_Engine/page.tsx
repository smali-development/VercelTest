
import Link from "next/link";
import CardShadcn3BunchDiv_CardName from "@/components/CardShadcn3BunchDiv_CardName";
import CollapsibleCards from "@/components/CollapsibleCards";
import CollapsibleSection from "@/components/CollapsibleSection";
import Forced_Induction_System_Parts from "./Forced_Induction_System_Parts/page";

export default function Forced_Induction_System_Diesel_Engine() {
    const elements = [
        { name: "Turbocharger", slug: "?" },
        { name: "Supercharger", slug: "?" },
        { name: "Compound Charging", slug: "?" },
        { name: "Ram-Air Intake", slug: "?" },
        { name: "Forced Induction System Parts", slug: "?" },
    ];

    const basePath = "/Chapter6_Engine_Base_System/Intake_System/Forced_Induction_System_Diesel_Engine/";

    return (

        <div className="flex flex-col gap-5 p-5 max-w-[--breakpoint-2xl] mx-auto">
            <div>
                <div>
                    <p >Engine Base System</p>
                    <p >2. Intake_System</p>
                    <h2 className="text-1xl font-extrabold text-brand-600 mb-2  text-blue-900">Forced_Induction_System_Diesel_Engine</h2>
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
                {elements.map((element, index) => (
                    <CardShadcn3BunchDiv_CardName
                        key={element.name || index}
                        cardName={element.name}
                    />
                ))}
            </CollapsibleCards>

            <CollapsibleSection title="Forced Induction System - Diesel Engine" defaultOpen={false}>
                <Forced_Induction_System_Parts />
            </CollapsibleSection>
        </div>
    );
}
