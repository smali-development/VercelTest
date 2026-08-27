import CardShadcn3BunchDiv from "@/components/CardShadcn3BunchDiv";
const Chapter1_Tool_Trolley = async () => {
    return (
        <div className="flex flex-col gap-8 p-8 max-w-[--breakpoint-2xl] mx-auto">

            <div>
                <h1 className="text-3xl font-extrabold text-brand-600 mb-2  text-blue-900">Chapter 1 — Tool Trolley</h1>
                <p className="text-slate-600 mb-8">The tool trolley is organised into 8 numbered boxes, each holding a specific group of hand tools used in engine workshop practice.</p>
            </div>
            <div>
                <h2 className="section-heading">Box No. 1</h2>
                <ol >
                    <li>1. Torque Wrench</li>
                    <li>2. T-Handle Wrench</li>
                    <li>3. T-Handle Socket Wrench</li>
                    <li>4. Phillips Screwdriver</li>
                    <li>5. Flat Head Screwdriver</li>
                    <li>6. Tyre Lever</li>
                    <li>7. Two-Jaw Puller</li>
                    <li>8. Three-Jaw Puller</li>
                </ol>
            </div>

            <CardShadcn3BunchDiv
                cardName="Torque Wrench"
                viewImagesLink="https://www.bing.com/images/search?q=torque%20wrench%20tool"
                images={[
                    "/images/TORQUE_WRENCH_1.jpg",
                    "/images/TORQUE_WRENCH_2.jpg",
                    "/images/TORQUE_WRENCH_3.webp",
                ]}
            />
            <div>
                <p><strong>Box No. 2</strong></p>
                <ol>
                    <li>1. Piston Ring Expander</li>
                    <li>2. Grip Pliers</li>
                    <li>3. Monkey Pliers</li>
                    <li>4. Slip Joint Pliers</li>
                    <li>5. Combination Pliers</li>
                    <li>6. Cutter Nose Pliers</li>
                    <li>7. Long Nose Pliers</li>
                    <li>8. Circlip Pliers (Internal)</li>
                    <li>9. Circlip Pliers (External)</li>
                </ol>
            </div>
            <div>
                <p><strong>Box No. 3</strong></p>
                <ol>
                    <li>1. Combination Spanner</li>
                    <li>2. Ring Spanner</li>
                    <li>3. Box End Spanner</li>
                    <li>4. Open End Spanner</li>
                    <li>5. Adjustable (Dock) Spanner</li>
                </ol>
            </div>
            <div>
                <p><strong>Box No. 4</strong></p>
                <ol>
                    <li>1. Speed Handle</li>
                    <li>2. Star Allen Key</li>
                    <li>3. Six-Point (Hex) Allen Key</li>
                    <li>4. Feeler Gauge</li>
                    <li>5. Socket Set</li>
                    <li>6. Deep Socket</li>
                    <li>7. Universal Joint</li>
                    <li>8. Ratchet Handle</li>
                    <li>9. Sliding T-Handle</li>
                    <li>10. Half Extension Bar</li>
                    <li>11. Full Extension Bar</li>
                    <li>12. L-Handle Tommy Bar</li>
                </ol>
            </div>
            <div>
                <p><strong>Box No. 5</strong></p>
                <ol>
                    <li>1. Wheel Spanner</li>
                    <li>2. Oil Can</li>
                    <li>3. Chisel</li>
                    <li>4. Oil Filter Wrench</li>
                    <li>5. Center Punch</li>
                    <li>6. Scraper</li>
                </ol>
            </div>
            <div>
                <p><strong>Box No. 6</strong></p>
                <ol>
                    <li>1. Hacksaw</li>
                    <li>2. Nylon Brush</li>
                    <li>3. Steel Wire Brush</li>
                    <li>4. Flat File</li>
                    <li>5. Triangular File</li>
                    <li>6. Square File</li>
                    <li>7. Round File</li>
                    <li>8. Half-Round File</li>
                </ol>
            </div>
            <div>
                <p><strong>Box No. 7</strong></p>
                <ol>
                    <li>1. Valve Lifter</li>
                    <li>2. Valve Lapper</li>
                    <li>3. Valve Grinding Paste</li>
                    <li>4. Adjustable Wrench</li>
                    <li>5. Pipe Wrench</li>
                </ol>
            </div>
            <div>
                <p><strong>Box No. 8</strong></p>
                <ol>
                    <li>1. Hammer</li>
                    <li>2. Ball Peen Hammer</li>
                    <li>3. Claw Hammer</li>
                    <li>4. Rubber Mallet</li>
                    <li>5. Piston Ring Compressor</li>
                    <li>6. Stud Remover</li>
                </ol>
            </div>











        </div>





    );


};

export default Chapter1_Tool_Trolley;