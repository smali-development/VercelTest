import CollapsibleSection from "@/components/CollapsibleSection";
import Forced_Induction_System_Diesel_Engine from "./Forced_Induction_System_Diesel_Engine/page";
import Air_Cleaner from "./Air_Cleaner/page";
import Throttle_Body from "./Throttle_Body/page";
import Intake_Manifold from "./Intake_Manifold/page";

export default async function Intake_System() {
    return (
        <div className="max-w-5xl mx-auto p-6 space-y-6">
           <div>
                <p >Engine Base System</p>
                <h2 className="text-2xl font-extrabold text-brand-600 mb-2  text-blue-900">2. Intake System</h2>
                {/* <p className="text-slate-600 mb-8">Fire needs three elements to occur, known together as the Fire Triangle. Removing any one of the three will extinguish or prevent a fire.</p> */}
            </div>
           

            {/* Render Forced_Induction_System_Diesel_Engine page content inside a CollapsibleSection */}
            <CollapsibleSection title="Forced Induction System - Diesel Engine" defaultOpen={false}>
                <Forced_Induction_System_Diesel_Engine />
            </CollapsibleSection>

            <CollapsibleSection title="Air Cleaner" defaultOpen={false}>
                <Air_Cleaner />
            </CollapsibleSection>

            <CollapsibleSection title="Throttle Body" defaultOpen={false}>
                <Throttle_Body />
            </CollapsibleSection>

            <CollapsibleSection title="Intake Manifold" defaultOpen={false}>
                <Intake_Manifold />
            </CollapsibleSection>

        </div>
    );
}




