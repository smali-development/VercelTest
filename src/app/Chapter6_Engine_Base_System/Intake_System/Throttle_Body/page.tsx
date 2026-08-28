import CardShadcn3BunchDiv_CardName from '@/components/CardShadcn3BunchDiv_CardName'
import React from 'react'

const Throttle_Body = () => {
    return (
        <div className="flex flex-col gap-8 p-8 max-w-[--breakpoint-2xl] mx-auto">

            <div>
                <h1 className="text-3xl font-extrabold text-brand-600 mb-2  text-blue-900">Intake_System</h1>
                <h2 className="text-2xl font-extrabold text-brand-600 mb-2  text-blue-900">Forced_Induction_System_Diesel_Engine</h2>
                {/* <p className="text-slate-600 mb-8">Fire needs three elements to occur, known together as the Fire Triangle. Removing any one of the three will extinguish or prevent a fire.</p> */}
            </div>
            <div>
                {/* <h2 className="section-heading">Fire Triangle Elements</h2> */}
                {/* Throttle Body Types Name :-
                    i. Mechanical Throttle Body :-
                    ii. Electronic Throttle Body :-
                    

                    Idle Speed Control Valve (ISCV) Types :-
                    i. Step Motor Type :-
                    ii. Rotary Solenoid Valve type :-

                    Throttle Body Parts Name :-
                    i. Throttle Plate (Body / Butterfly Valve) :-
                    ii. Throttle Position Sensor (TPS) :-
                    iii. Idle Air Control Valve (IACV) = (ISCV) :- */}
                <strong><p>Throttle Body Types Name:-</p></strong>
                <ol>
                    <li>1. Mechanical Throttle Body</li>
                    <li>2. Electronic Throttle Body</li>
                </ol>
                <strong><p>Idle Speed Control Valve (ISCV) Types :-</p></strong>
                <ol>
                    <li>1. Step Motor Type</li>
                    <li>2. Rotary Solenoid Valve type</li>
                </ol>
                <strong><p>Throttle Body Parts Name :-</p></strong>
                <ol>
                    <li>1. Throttle Plate (Body / Butterfly Valve)</li>
                    <li>2. Throttle Position Sensor (TPS)</li>
                    <li>3. Idle Air Control Valve (IACV) = (ISCV)</li>
                </ol>

            </div>


        </div>
    )
}

export default Throttle_Body