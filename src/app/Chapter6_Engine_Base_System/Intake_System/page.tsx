import CardShadcn3BunchDiv_CardName from '@/components/CardShadcn3BunchDiv_CardName'
import React from 'react'

const Intake_System = () => {
    return (
        <div className="flex flex-col gap-8 p-8 max-w-[--breakpoint-2xl] mx-auto">

            <div>
                <h1 className="text-3xl font-extrabold text-brand-600 mb-2  text-blue-900">Engine Proper System</h1>
                <h2 className="text-2xl font-extrabold text-brand-600 mb-2  text-blue-900">Crankshaft Parts</h2>
                {/* <p className="text-slate-600 mb-8">Fire needs three elements to occur, known together as the Fire Triangle. Removing any one of the three will extinguish or prevent a fire.</p> */}
            </div>
            <div>
                {/* <h2 className="section-heading">Fire Triangle Elements</h2> */}
                <ol>
                    <li>1. Forced Induction System - Diesel Engine</li>
                    <li>2. Air Cleaner</li>
                    <li>3. Throttle Body</li>
                    <li>4. Intake Manifold</li>
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