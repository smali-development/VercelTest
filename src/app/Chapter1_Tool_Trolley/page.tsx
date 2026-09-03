import CollapsibleSection from "@/components/CollapsibleSection";

// 1. Import the actual child page components directly

import Box1 from "./box1/page";


export default async function ToolTrolleyOverviewPage() {
    return (
        <div className="max-w-5xl mx-auto p-6 space-y-6">
            <h1 className="text-2xl font-bold text-slate-900 mb-6">
                Ch.1 Tool Trolley Overview
            </h1>

            {/* Render Box 1 page content inside a CollapsibleSection */}
            <CollapsibleSection title="Box 1" defaultOpen={false}>
                <Box1 />
            </CollapsibleSection>

            
        </div>
    );
}