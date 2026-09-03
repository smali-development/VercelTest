import CardShadcn3BunchDiv_CardName from '@/components/CardShadcn3BunchDiv_CardName'
import CollapsibleSection from '@/components/CollapsibleSection'
import FireTriangleElements from './fire_triangle_elements/page';


export default async function chapter2_fire_triangle() {
    return (
        <div className="max-w-5xl mx-auto p-6 space-y-6">
            <div>
                <h1 className="text-3xl font-extrabold text-brand-600 mb-2  text-blue-900">Chapter 2 — Fire Triangle</h1>
                <p className="text-slate-600 mb-8">Fire needs three elements to occur, known together as the Fire Triangle. Removing any one of the three will extinguish or prevent a fire.</p>
            </div>
            <h1 className="text-2xl font-bold text-slate-900 mb-6">
                Tool Trolley Overview
            </h1>

            {/* Render Box 1 page content inside a CollapsibleSection */}
            <CollapsibleSection title="Fire Triangle Elements" defaultOpen={false}>
                
                <FireTriangleElements />
            </CollapsibleSection>
        </div>
    )
}