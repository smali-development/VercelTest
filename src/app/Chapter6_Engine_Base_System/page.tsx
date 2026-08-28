import CardShadcn3BunchDiv_CardName from '@/components/CardShadcn3BunchDiv_CardName'
import Link from 'next/link'
import React from 'react'


const Chapter6_Engine_Base_System = () => {
    return (
        <div className="flex flex-col gap-8 p-8 max-w-[--breakpoint-2xl] mx-auto">

            <div>
                <h1 className="text-3xl font-extrabold text-brand-600 mb-2  text-blue-900">Chapter6 Engine Base System</h1>
                <p className="text-slate-600 mb-8">A complete engine is made up of ten major sub-systems:.</p>
            </div>
            <div>
                <h2 className="section-heading">Ten major sub-systems:</h2>
                <ol>

                    <li><Link href={"/Chapter6_Engine_Base_System/Engine_Proper_System"} className="text-blue-500 hover:underline">1. Engine Proper System</Link></li>
                    <li><Link href={"/Chapter6_Engine_Base_System/Intake_System"} className="text-blue-500 hover:underline">2. Intake System</Link></li>
                    <li>3. Fuel System</li>
                    <li>4. Ignition System</li>
                    <li>5. Exhaust System</li>
                    <li>6. Lubrication System</li>
                    <li>7. Cooling System</li>
                    <li>8. Electrical System</li>
                    <li>9. Sensor System</li>
                    <li>10. Scanner Diagnostics System</li>
                </ol>
            </div>
            <CardShadcn3BunchDiv_CardName cardName="Engine Proper System" />
            <CardShadcn3BunchDiv_CardName cardName="Intake System" />
            <CardShadcn3BunchDiv_CardName cardName="Fuel System" />
            <CardShadcn3BunchDiv_CardName cardName="Ignition System" />
            <CardShadcn3BunchDiv_CardName cardName="Exhaust System" />
            <CardShadcn3BunchDiv_CardName cardName="Lubrication System" />
            <CardShadcn3BunchDiv_CardName cardName="Cooling System" />
            <CardShadcn3BunchDiv_CardName cardName="Electrical System" />
            <CardShadcn3BunchDiv_CardName cardName="Sensor System" />
            <CardShadcn3BunchDiv_CardName cardName="Scanner Diagnostics System" />
        </div>
    )
}

export default Chapter6_Engine_Base_System
