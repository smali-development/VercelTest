import CardShadcn3BunchDiv_CardName from '@/components/CardShadcn3BunchDiv_CardName'
import React from 'react'

const Piston_Parts = () => {
    return (
        <div className="flex flex-col gap-8 p-8 max-w-[--breakpoint-2xl] mx-auto">

            <div>
                <h1 className="text-3xl font-extrabold text-brand-600 mb-2  text-blue-900">Chapter7 Engine Base System</h1>
                <h2 className="text-2xl font-extrabold text-brand-600 mb-2  text-blue-900">Chapter7 Engine Proper System</h2>
                <h3 className="text-1xl font-extrabold text-brand-600 mb-2  text-blue-900">Piston Parts</h3>
                {/* <p className="text-slate-600 mb-8">Fire needs three elements to occur, known together as the Fire Triangle. Removing any one of the three will extinguish or prevent a fire.</p> */}
            </div>
            <div>
                <h2 className="section-heading">Piston Parts</h2>
                <ol>
                    <li>1. Piston Crown (Head)</li>
                    <li>2. Piston Skirt</li>
                    <li>3. Ring Lands</li>
                    <li>4. Compression Ring</li>
                    <li>5. Wiper Ring</li>
                    <li>6. Oil Control Ring</li>
                    <li>7. Ring Grooves</li>
                    <li>8. Piston Pin / Wrist Pin</li>
                    <li>9. Pin Boss</li>
                    <li>10. Piston Cooling Holes</li>
                    <li>11. Piston Dishing</li>
                    <li>12. Piston Center Mark</li>
                    <li>13. Connecting Rod Boss</li>
                    <li>14. Piston Oil Passages</li>
                    <li>15. Piston Land Gap</li>
                    <li>16. Small End Bearing</li>
                    <li>17. Big End Bearing</li>
                    <li>18. Connecting Rod</li>
                    <li>19. Connecting Rod Cap</li>
                    <li>20. Plunger</li>
                </ol>
            </div>
            <CardShadcn3BunchDiv_CardName cardName="Piston Crown (Head)" />
            <CardShadcn3BunchDiv_CardName cardName="Piston Skirt" />
            <CardShadcn3BunchDiv_CardName cardName="Ring Lands" />
            <CardShadcn3BunchDiv_CardName cardName="Compression Ring" />
            <CardShadcn3BunchDiv_CardName cardName="Wiper Ring" />
            <CardShadcn3BunchDiv_CardName cardName="Oil Control Ring" />
            <CardShadcn3BunchDiv_CardName cardName="Ring Grooves" />
            <CardShadcn3BunchDiv_CardName cardName="Piston Pin / Wrist Pin" />
            <CardShadcn3BunchDiv_CardName cardName="Pin Boss" />
            <CardShadcn3BunchDiv_CardName cardName="Piston Cooling Holes" />
            <CardShadcn3BunchDiv_CardName cardName="Piston Dishing" />
            <CardShadcn3BunchDiv_CardName cardName="Piston Center Mark" />
            <CardShadcn3BunchDiv_CardName cardName="Connecting Rod Boss" />
            <CardShadcn3BunchDiv_CardName cardName="Piston Oil Passages" />
            <CardShadcn3BunchDiv_CardName cardName="Piston Land Gap" />
            <CardShadcn3BunchDiv_CardName cardName="Small End Bearing" />
            <CardShadcn3BunchDiv_CardName cardName="Big End Bearing" />
            <CardShadcn3BunchDiv_CardName cardName="Connecting Rod" />
            <CardShadcn3BunchDiv_CardName cardName="Connecting Rod Cap" />
            <CardShadcn3BunchDiv_CardName cardName="Plunger" />
        </div>
    )
}

export default Piston_Parts