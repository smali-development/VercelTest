import CollapsibleSection from "@/components/CollapsibleSection";

// 1. Import the actual child page components directly
import Box1 from "./Box1/page";
import Box2 from "./Box2/page";
import Box3 from "./Box3/page";
import Box4 from "./Box4/page";
import Box5 from "./Box5/page";
import Box6 from "./Box6/page";
import Box7 from "./Box7/page";
import Box8 from "./Box8/page";
// Import Box 2, Box 3, etc. when created:
// import Box2Page from "./Box2/page";

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

            {/* Render Box 2 page content */}
            <CollapsibleSection title="Box 2">
                <Box2 />
            </CollapsibleSection>

            {/* Render Box 3 page content */}
            <CollapsibleSection title="Box 3">
                <Box3 />
            </CollapsibleSection>

            
             {/* Render Box 4 page content */}
            <CollapsibleSection title="Box 4">
                <Box4 />
            </CollapsibleSection>

             {/* Render Box 5 page content */}
            <CollapsibleSection title="Box 5">
                <Box5 />
            </CollapsibleSection>

             {/* Render Box 6 page content */}
            <CollapsibleSection title="Box 6">
                <Box6 />
            </CollapsibleSection>

             {/* Render Box 7 page content */}
            <CollapsibleSection title="Box 7">
                <Box7 />
            </CollapsibleSection>

             {/* Render Box 8 page content */}
            <CollapsibleSection title="Box 8">
                <Box8 />
            </CollapsibleSection>
        </div>
    );
}