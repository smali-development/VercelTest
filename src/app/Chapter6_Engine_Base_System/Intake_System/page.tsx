import CardShadcn3BunchDiv_CardName from '@/components/CardShadcn3BunchDiv_CardName'
import Link from 'next/link'
import React from 'react'

const Intake_System = () => {
    return (
        <div className="flex flex-col gap-8 p-8 max-w-[--breakpoint-2xl] mx-auto">

            <div>
                <h1 className="text-3xl font-extrabold text-brand-600 mb-2  text-blue-900">Engine Base System</h1>
                <h2 className="text-2xl font-extrabold text-brand-600 mb-2  text-blue-900">Intake System</h2>
                {/* <p className="text-slate-600 mb-8">Fire needs three elements to occur, known together as the Fire Triangle. Removing any one of the three will extinguish or prevent a fire.</p> */}
            </div>
            <div>
                {/* <h2 className="section-heading">Fire Triangle Elements</h2> */}
                <ol>
                    <li>
                        <Link href={"/Chapter6_Engine_Base_System/Intake_System/Forced_Induction_System_Diesel_Engine"} className="text-blue-500 hover:underline">1. Forced Induction System - Diesel Engine</Link></li>
                    <li> <Link href={"/Chapter6_Engine_Base_System/Intake_System/Air_Cleaner"} className="text-blue-500 hover:underline">2. Air Cleaner</Link></li>
                    <li> <Link href={"/Chapter6_Engine_Base_System/Intake_System/Throttle_Body"} className="text-blue-500 hover:underline">3. Throttle Body</Link></li>
                    <li> <Link href={"/Chapter6_Engine_Base_System/Intake_System/Intake_Manifold"} className="text-blue-500 hover:underline">4. Intake Manifold</Link></li>
                </ol>
            </div>
            <CardShadcn3BunchDiv_CardName cardName="Forced Induction System - Diesel Engine" />
            <CardShadcn3BunchDiv_CardName cardName="Air Cleaner" />
            <CardShadcn3BunchDiv_CardName cardName="Throttle Body" />
            <CardShadcn3BunchDiv_CardName cardName="Intake Manifold" />

        </div>
    )
}

export default Intake_System