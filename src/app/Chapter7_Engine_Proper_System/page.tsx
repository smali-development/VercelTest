import CardShadcn3BunchDiv_CardName from '@/components/CardShadcn3BunchDiv_CardName'
import Link from 'next/link'
import React from 'react'

const Chapter7_Engine_Proper_System = () => {
    return (
        <div className="flex flex-col gap-8 p-8 max-w-[--breakpoint-2xl] mx-auto">

            <div>
                <h1 className="text-3xl font-extrabold text-brand-600 mb-2  text-blue-900">Chapter7 Engine Proper System</h1>
                <p className="text-slate-600 mb-8">The Engine Proper System consists of the following main components:.</p>
            </div>
            <div>
                <h2 className="section-heading">Components</h2>
                <ol>
                    <li><Link href={"/Chapter7_Engine_Proper_System/Cylinder_Head_Parts"} className="text-blue-500 hover:underline">1. Cylinder Head</Link></li>
                    <li><Link href={"/Chapter7_Engine_Proper_System/Cylinder_Block_Parts"} className="text-blue-500 hover:underline">2. Cylinder Block</Link></li>
                    <li><Link href={"/Chapter7_Engine_Proper_System/Piston_Parts"} className="text-blue-500 hover:underline">3. Piston</Link></li>
                    <li>4. Crank Shaft</li>
                    <li>5. Fly Wheel</li>
                    <li>6. Valve Mechanism & Timing</li>
                    <li>7. Drive Belt</li>
                    <li>8. Oil Pan</li>
                </ol>
            </div>
            <CardShadcn3BunchDiv_CardName cardName="Cylinder Head" />
            <CardShadcn3BunchDiv_CardName cardName="Cylinder Block" />
            <CardShadcn3BunchDiv_CardName cardName="Piston" />
            <CardShadcn3BunchDiv_CardName cardName="Crank Shaft" />
            <CardShadcn3BunchDiv_CardName cardName="Fly Wheel" />
            <CardShadcn3BunchDiv_CardName cardName="Valve Mechanism & Timing" />
            <CardShadcn3BunchDiv_CardName cardName="Drive Belt" />
            <CardShadcn3BunchDiv_CardName cardName="Oil Pan" />
        </div>
    )
}

export default Chapter7_Engine_Proper_System