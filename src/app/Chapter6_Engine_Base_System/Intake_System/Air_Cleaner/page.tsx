import CardShadcn3BunchDiv_CardName from '@/components/CardShadcn3BunchDiv_CardName'
import React from 'react'

const Air_Cleaner = () => {
 return (
        <div className="flex flex-col gap-8 p-8 max-w-[--breakpoint-2xl] mx-auto">

            <div>
                <h1 className="text-3xl font-extrabold text-brand-600 mb-2  text-blue-900">Intake_System</h1>
                <h2 className="text-2xl font-extrabold text-brand-600 mb-2  text-blue-900">Forced_Induction_System_Diesel_Engine</h2>
                {/* <p className="text-slate-600 mb-8">Fire needs three elements to occur, known together as the Fire Triangle. Removing any one of the three will extinguish or prevent a fire.</p> */}
            </div>
            <div>
                {/* <h2 className="section-heading">Fire Triangle Elements</h2> */}
                <ol>
                    <li>1. Turbocharger</li>
                    <li>2. Supercharger</li>
                    <li>3. Compound Charging</li>
                    <li>4. Ram-Air Intake</li>
                </ol>
            </div>
            <CardShadcn3BunchDiv_CardName cardName="Turbocharger" />
            <CardShadcn3BunchDiv_CardName cardName="Supercharger" />
            <CardShadcn3BunchDiv_CardName cardName="Compound Charging" />
            <CardShadcn3BunchDiv_CardName cardName="Ram-Air Intake" />

        </div>
    )
}

export default Air Cleaner

 