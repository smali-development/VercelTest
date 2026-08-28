import CardShadcn3BunchDiv_CardName from '@/components/CardShadcn3BunchDiv_CardName'
import React from 'react'

const Chapter5_Engine_Types = () => {
    return (
        <div className="flex flex-col gap-8 p-8 max-w-[--breakpoint-2xl] mx-auto">

            <div>
                <h1 className="text-3xl font-extrabold text-brand-600 mb-2  text-blue-900">Chapter 5 — Engine Types</h1>
                <p className="text-slate-600 mb-8">Engine Types.</p>
            </div>
            <div>
                <h2 className="section-heading">Engine Types</h2>
                <ol>
                    <li>1. External Combustion Engine (EC)</li>
                    <li>2. Internal Combustion Engine (IC)</li>
                    <li>3. Compression Ignition Engine (CI)</li>
                    <li>4. Spark Ignition Engine (SI)</li>
                    <li>5. 2-Stroke Engine</li>
                    <li>6. 4-Stroke Engine</li>
                    <li>7. One Side Valve Engine (OSV)</li>
                    <li>8. Over Head Valve Engine (OHV)</li>
                    <li>9. Single Over Head Camshaft Engine (SOHC)</li>
                    <li>10. Double Over Head Camshaft Engine (DOHC)</li>
                    <li>11. Variable Valve Timing Intelligent Engine (VVT-i)</li>
                    <li>12. Variable Valve Timing Lift Intelligent Engine (VVTL-i)</li>
                    <li>13. Electromechanical Valve Actuation Engine (EVA)</li>
                    <li>14. Hybrid Camless Engine (HCE)</li>
                </ol>
            </div>
            <CardShadcn3BunchDiv_CardName cardName="External Combustion Engine (EC)" />
            <CardShadcn3BunchDiv_CardName cardName="Internal Combustion Engine (IC)" />
            <CardShadcn3BunchDiv_CardName cardName="Compression Ignition Engine (CI)" />    
        <CardShadcn3BunchDiv_CardName cardName="Spark Ignition Engine (SI)" />
        <CardShadcn3BunchDiv_CardName cardName="2-Stroke Engine" />
        <CardShadcn3BunchDiv_CardName cardName="4-Stroke Engine" />
        <CardShadcn3BunchDiv_CardName cardName="One Side Valve Engine (OSV)" />
        <CardShadcn3BunchDiv_CardName cardName="Over Head Valve Engine (OHV)" />
        <CardShadcn3BunchDiv_CardName cardName="Single Over Head Camshaft Engine (SOHC)" />
        <CardShadcn3BunchDiv_CardName cardName="Double Over Head Camshaft Engine (DOHC)" /> 
        <CardShadcn3BunchDiv_CardName cardName="Variable Valve Timing Intelligent Engine (VVT-i)" />
        <CardShadcn3BunchDiv_CardName cardName="Variable Valve Timing Lift Intelligent Engine (VVTL-i)" />
        <CardShadcn3BunchDiv_CardName cardName="Electromechanical Valve Actuation Engine (EVA)" />
        <CardShadcn3BunchDiv_CardName cardName="Hybrid Camless Engine (HCE)" />
        </div>
    )
}

export default Chapter5_Engine_Types