import CardShadcn3BunchDiv_CardName from '@/components/CardShadcn3BunchDiv_CardName'
import CollapsibleSection from '@/components/CollapsibleSection';
import Engine_Proper_System from './Engine_Proper_System/page';
import Intake_System from './Intake_System/page';
import Fuel_System from './Fuel_System/page';
import Ignition_System from './Ignition_System/page';
import Exhaust_System from './Exhaust_System/page';
import Lubrication_System from './Lubrication_System/page';
import Sensor_System from './Sensor_System/page';
import Scanner_Diagnostics_System from './Scanner_Diagnostics_System/page';


export default async function Chapter6_Engine_Base_System() {
    return (
        <div className="max-w-5xl mx-auto p-6 space-y-6">
            <div>
                <h1 className="text-3xl font-extrabold mb-2 text-blue-900">
                    Chapter 6 — Engine Base System
                </h1>
                <p className="text-slate-600 mb-8">
                    The engine base system is organised into several components, each playing a crucial role in the overall operation of the engine.
                </p>
            </div>
            <h1 className="text-2xl font-bold text-slate-900 mb-6">
                Engine Base System Overview
            </h1>

            {/* Render Engine_Proper_System page content inside a CollapsibleSection */}
            <CollapsibleSection title="Engine Proper System" defaultOpen={false}>
                <Engine_Proper_System />
            </CollapsibleSection>

            {/* Render Intake_System page content inside a CollapsibleSection */}
            <CollapsibleSection title="Intake System" defaultOpen={false}>
                <Intake_System />
            </CollapsibleSection>

            {/* Render Fuel_System page content inside a CollapsibleSection */}
            <CollapsibleSection title="Fuel System" defaultOpen={false}>
                <Fuel_System />
            </CollapsibleSection>

            {/* Render Ignition_System page content inside a CollapsibleSection */}
            <CollapsibleSection title="Ignition System" defaultOpen={false}>
                <Ignition_System />
            </CollapsibleSection>

            {/* Render Exhaust_System page content inside a CollapsibleSection */}
            <CollapsibleSection title="Exhaust System" defaultOpen={false}>
                <Exhaust_System />
            </CollapsibleSection>

            {/* Render Lubrication_System page content inside a CollapsibleSection */}
            <CollapsibleSection title="Lubrication System" defaultOpen={false}>
                <Lubrication_System />
            </CollapsibleSection>

            {/* Render Sensor_System page content inside a CollapsibleSection */}
            <CollapsibleSection title="Sensor System" defaultOpen={false}>
                <Sensor_System />
            </CollapsibleSection>

            {/* Render Scanner_Diagnostics_System page content inside a CollapsibleSection */}
            <CollapsibleSection title="Scanner Diagnostics System" defaultOpen={false}>
                <Scanner_Diagnostics_System />
            </CollapsibleSection>


        </div>
    );
}



