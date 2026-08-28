import CardShadcn3BunchDiv_CardName from '@/components/CardShadcn3BunchDiv_CardName'
import React from 'react'

const Forced_Induction_System_Parts = () => {

    return (
        <div className="flex flex-col gap-8 p-8 max-w-[--breakpoint-2xl] mx-auto">

            <div>
                <h1 className="text-3xl font-extrabold text-brand-600 mb-2  text-blue-900">Intake System</h1>
                <h2 className="text-2xl font-extrabold text-brand-600 mb-2  text-blue-900">Forced Induction System - Diesel Engine</h2>
                <h2 className="text-1xl font-extrabold text-brand-600 mb-2  text-blue-900">Forced Induction System Parts</h2>
                {/* <p className="text-slate-600 mb-8">Fire needs three elements to occur, known together as the Fire Triangle. Removing any one of the three will extinguish or prevent a fire.</p> */}
            </div>
            <div>
                {/* <h2 className="section-heading">Fire Triangle Elements</h2> */}
                <ol>
                    <li>1. Exhaust Manifold</li>
                    <li>2. Turbine Wheel</li>
                    <li>3. Compressor Wheel</li>
                    <li>4. Wastegate</li>
                    <li>5. Inter Cooler</li>
                    <li>6. Blow-off Valve</li>
                    <li>7. Belt Drive Pulley</li>
                    <li>8. Compressor Housing</li>
                    <li>9. Rotor Assembly</li>
                    <li>10. Boost Controller</li>
                </ol>
            </div>
            <CardShadcn3BunchDiv_CardName cardName="Exhaust Manifold" />
            <CardShadcn3BunchDiv_CardName cardName="Turbine Wheel" />
            <CardShadcn3BunchDiv_CardName cardName="Compressor Wheel" />
            <CardShadcn3BunchDiv_CardName cardName="Wastegate" />
            <CardShadcn3BunchDiv_CardName cardName="Inter Cooler" />
            <CardShadcn3BunchDiv_CardName cardName="Blow-off Valve" />
            <CardShadcn3BunchDiv_CardName cardName="Belt Drive Pulley" />
            <CardShadcn3BunchDiv_CardName cardName="Compressor Housing" />
            <CardShadcn3BunchDiv_CardName cardName="Rotor Assembly" />
            <CardShadcn3BunchDiv_CardName cardName="Boost Controller" />

        </div>
    )
}

export default Forced_Induction_System_Parts
