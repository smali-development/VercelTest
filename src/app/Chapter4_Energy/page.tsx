import CardShadcn3BunchDiv_CardName from '@/components/CardShadcn3BunchDiv_CardName'
import React from 'react'

const Chapter4_Energy = () => {
    return (
        <div className="flex flex-col gap-8 p-8 max-w-[--breakpoint-2xl] mx-auto">

            <div>
                <h1 className="text-3xl font-extrabold text-brand-600 mb-2  text-blue-900">Chapter 4 — Energy</h1>
                <p className="text-slate-600 mb-8">Types of energy discussed in class:.</p>
            </div>
            <div>
                <h2 className="section-heading">Energy types</h2>
                <ol>
                    <li>1. Mechanical Energy</li>
                    <li>2. Electrical Energy</li>
                    <li>3. Heat Energy</li>
                    <li>4. Chemical Energy</li>
                    <li>5. Light Energy</li>
                    <li>6. Wind Energy</li>
                    <li>7. Hydropower Energy</li>
                    <li>8. Nuclear Power Energy</li>
                    <li>9. Biomass Energy</li>
                    <li>10. Sound Energy</li>
                </ol>
            </div>
            <CardShadcn3BunchDiv_CardName cardName="Mechanical Energy" />
            <CardShadcn3BunchDiv_CardName cardName="Electrical Energy" />
            <CardShadcn3BunchDiv_CardName cardName="Heat Energy" />
            <CardShadcn3BunchDiv_CardName cardName="Chemical Energy" /> 
            <CardShadcn3BunchDiv_CardName cardName="Light Energy" />
            <CardShadcn3BunchDiv_CardName cardName="Wind Energy" />
            <CardShadcn3BunchDiv_CardName cardName="Hydropower Energy" />
            <CardShadcn3BunchDiv_CardName cardName="Nuclear Power Energy" />
            <CardShadcn3BunchDiv_CardName cardName="Biomass Energy" />
            <CardShadcn3BunchDiv_CardName cardName="Sound Energy" />
        </div>
    )
}

export default Chapter4_Energy