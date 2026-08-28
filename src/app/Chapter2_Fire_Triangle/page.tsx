import CardShadcn3BunchDiv_CardName from '@/components/CardShadcn3BunchDiv_CardName'


const chapter2_fire_triangle = () => {
  return (
        <div className="flex flex-col gap-8 p-8 max-w-[--breakpoint-2xl] mx-auto">

            <div>
                <h1 className="text-3xl font-extrabold text-brand-600 mb-2  text-blue-900">Chapter 2 — Fire Triangle</h1>
                <p className="text-slate-600 mb-8">Fire needs three elements to occur, known together as the Fire Triangle. Removing any one of the three will extinguish or prevent a fire.</p>
            </div>
            <div>
                <h2 className="section-heading">Fire Triangle Elements</h2>
                <ol >
                    <li>1. Oxygen</li>
                    <li>2. Fuel</li>
                    <li>3. Heat</li>
                    
                </ol>
            </div>
             <CardShadcn3BunchDiv_CardName cardName="Oxygen" />
             <CardShadcn3BunchDiv_CardName cardName="Fuel" />
             <CardShadcn3BunchDiv_CardName cardName="Heat" />
        </div>
  )
}

export default chapter2_fire_triangle