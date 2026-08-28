import CardShadcn3BunchDiv_CardName from '@/components/CardShadcn3BunchDiv_CardName'
import React from 'react'

const Air_Cleaner = () => {
    return (
        <div className="flex flex-col gap-8 p-8 max-w-[--breakpoint-2xl] mx-auto">

            <div>
                <h1 className="text-3xl font-extrabold text-brand-600 mb-2  text-blue-900">Intake_System</h1>
                <h2 className="text-2xl font-extrabold text-brand-600 mb-2  text-blue-900">Air Cleaner</h2>
                {/* <p className="text-slate-600 mb-8">Fire needs three elements to occur, known together as the Fire Triangle. Removing any one of the three will extinguish or prevent a fire.</p> */}
            </div>
            <div>
                {/* <h2 className="section-heading">Fire Triangle Elements</h2> */}
                {/* Air Cleaner Types Name :-
                    i. Pre Air Cleaner :-
                    ii. Oil Bath type Air Cleaner :-
                    iii. Cyclone type air Cleaner :-

                    Types Of Air Cleaner Element :-
                    i. Paper Types :-
                    ii. Fabric Types :-
                    iii. Oil Bath types :-

                    Pro Air Cleaner Parts Name :-
                    i. Housing :-
                    ii. Filter Element :-
                    iii. Air Intake Duct :-
                    iv. Mass Air Flow Sensor (MAF) :-
                    v. Intake Air Temperature Sensor (IAT) :-
                    vi. Map Sensor :- */}
                <strong><p>Air Cleaner Types Name :-</p></strong>
                <ol>
                    <li>1. Pre Air Cleaner</li>
                    <li>2. Oil Bath type Air Cleaner</li>
                    <li>3. Cyclone type air Cleaner</li>
                </ol>
                <strong><p>Types Of Air Cleaner Element :-</p></strong>
                <ol>
                    <li>1. Paper Types</li>
                    <li>2. Fabric Types</li>
                    <li>3. Oil Bath types</li>
                </ol>
                <strong><p>Pro Air Cleaner Parts Name :-</p></strong>
                <ol>
                    <li>1. Housing</li>
                    <li>2. Filter Element</li>
                    <li>3. Air Intake Duct</li>
                    <li>4. Mass Air Flow Sensor (MAF)</li>
                    <li>5. Intake Air Temperature Sensor (IAT)</li>
                    <li>6. Map Sensor</li>
                </ol>
            </div>


        </div>
    )
}

export default Air_Cleaner

