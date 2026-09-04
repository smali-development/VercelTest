import CollapsibleSection from "@/components/CollapsibleSection";
import CardShadcn3BunchDiv_CardName from '@/components/CardShadcn3BunchDiv_CardName'
import Link from 'next/link'

import Cylinder_Head_Parts from './Cylinder_Head_Parts/page';
import Cylinder_Block_Parts from "./Cylinder_Block_Parts/page";
import Piston_Parts from "./Piston_Parts/page";
import Crankshaft_Parts from "./Crankshaft_Parts/page";
import Drive_Belt_Type from "./Drive_Belt_Type/page";
import Oil_Pan_Types from "./Oil_Pan/page";
import Fly_Wheel from "./Fly_Wheel/page";
import Valve_Mechanism_Timing from "./Valve_Mechanism_Timing/page";

export default async function Engine_Proper_System() {
    return (
        <div className="max-w-5xl mx-auto p-6 space-y-6">
            <div>
                <h1 className="text-3xl font-extrabold mb-2 text-blue-900">
                    Chapter 6 — Engine Proper System
                </h1>
                <p className="text-slate-600 mb-8">
                    The engine proper system is organised into several components, each playing a crucial role in the overall operation of the engine.
                </p>
            </div>
            <h1 className="text-2xl font-bold text-slate-900 mb-6">
                Engine Proper System Overview
            </h1>

            {/* Render Cylinder_Head page content inside a CollapsibleSection */}
            <CollapsibleSection title="Cylinder Head" defaultOpen={false}>
                <Cylinder_Head_Parts />
            </CollapsibleSection>

            {/* Render Cylinder_Block page content inside a CollapsibleSection */}
            <CollapsibleSection title="Cylinder Block" defaultOpen={false}>
                <Cylinder_Block_Parts />
            </CollapsibleSection>

            {/* Render Piston page content inside a CollapsibleSection */}
            <CollapsibleSection title="Piston" defaultOpen={false}>
                <Piston_Parts />
            </CollapsibleSection>

            {/* Render Crank_Shaft page content inside a CollapsibleSection */}
            <CollapsibleSection title="Crank Shaft" defaultOpen={false}>
                <Crankshaft_Parts />
            </CollapsibleSection>

            {/* Render Fly_Wheel page content inside a CollapsibleSection */}
            <CollapsibleSection title="Fly Wheel" defaultOpen={false}>
                <Fly_Wheel />
            </CollapsibleSection>

            {/* Render Valve_Mechanism_Timing page content inside a CollapsibleSection */}
            <CollapsibleSection title="Valve Mechanism & Timing" defaultOpen={false}>
                <Valve_Mechanism_Timing />
            </CollapsibleSection>

            {/* Render Drive_Belt page content inside a CollapsibleSection */}
            <CollapsibleSection title="Drive Belt" defaultOpen={false}>
                <Drive_Belt_Type />
            </CollapsibleSection>

            {/* Render Oil_Pan page content inside a CollapsibleSection */}
            <CollapsibleSection title="Oil Pan" defaultOpen={false}>
                <Oil_Pan_Types />
            </CollapsibleSection>



        </div>
    );
}




