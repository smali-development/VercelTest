import CollapsibleSection from "@/components/CollapsibleSection";

// 1. Import the actual child page components directly

import Box1 from "./box1/page";
import Box2 from "./box2/page";
import Box3 from "./box3/page";
import Box4 from "./box4/page";
import Box5 from "./box5/page";
import Box6 from "./box6/page";
import Box7 from "./box7/page";
import Box8 from "./box8/page";

export default async function ToolTrolleyOverviewPage() {
    return (
        <div className="max-w-5xl mx-auto p-6 space-y-6">
            <div>
                <h1 className="text-3xl font-extrabold mb-2 text-blue-900">
                    Chapter 1 — Tool Trolley
                </h1>
                <p className="text-slate-600 mb-8">
                    The tool trolley is organised into 8 numbered boxes, each holding a
                    specific group of hand tools used in engine workshop practice.
                </p>
            </div>
            <h1 className="text-2xl font-bold text-slate-900 mb-6">
                Tool Trolley Overview
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