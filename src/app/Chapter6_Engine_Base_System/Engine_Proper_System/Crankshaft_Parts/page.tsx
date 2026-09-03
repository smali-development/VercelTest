import CardShadcn3BunchDiv_CardName from '@/components/CardShadcn3BunchDiv_CardName'
import React from 'react'

const Crankshaft_Parts = () => {
    return (
        <div className="flex flex-col gap-8 p-8 max-w-[--breakpoint-2xl] mx-auto">

            <div>
                <h1 className="text-3xl font-extrabold text-brand-600 mb-2  text-blue-900">Chapter7 Engine Base System</h1>
                <h2 className="text-2xl font-extrabold text-brand-600 mb-2  text-blue-900">Chapter7 Engine Proper System</h2>
                <h3 className="text-1xl font-extrabold text-brand-600 mb-2  text-blue-900">Crankshaft Parts</h3>
                {/* <p className="text-slate-600 mb-8">Fire needs three elements to occur, known together as the Fire Triangle. Removing any one of the three will extinguish or prevent a fire.</p> */}
            </div>
            <div>
                {/* <h2 className="section-heading">Fire Triangle Elements</h2> */}
                <ol>
                    <li>1. Piston Connecting Rod</li>
                    <li>2. Main Bearing</li>
                    <li>3. Piston</li>
                    <li>4. Cam Shaft</li>
                    <li>5. Flywheel</li>
                    <li>6. Crank Shaft Pulley</li>
                    <li>7. Counter Weights</li>
                    <li>8. Crank Pins</li>
                    <li>9. Thrust Bearing</li>
                    <li>10. Oil Pump</li>
                    <li>11. Timing Chain and Timing Belt</li>
                </ol>
            </div>
            <CardShadcn3BunchDiv_CardName cardName="Piston Connecting Rod" />
            <CardShadcn3BunchDiv_CardName cardName="Main Bearing" />
            <CardShadcn3BunchDiv_CardName cardName="Piston" />
            <CardShadcn3BunchDiv_CardName cardName="Cam Shaft" />
            <CardShadcn3BunchDiv_CardName cardName="Flywheel" />
            <CardShadcn3BunchDiv_CardName cardName="Crank Shaft Pulley" />
            <CardShadcn3BunchDiv_CardName cardName="Counter Weights" />
            <CardShadcn3BunchDiv_CardName cardName="Crank Pins" />
            <CardShadcn3BunchDiv_CardName cardName="Thrust Bearing" />
            <CardShadcn3BunchDiv_CardName cardName="Oil Pump" />
            <CardShadcn3BunchDiv_CardName cardName="Timing Chain and Timing Belt" />


        </div>
    )
}

export default Crankshaft_Parts