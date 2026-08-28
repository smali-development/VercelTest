import CardShadcn3BunchDiv from "@/components/CardShadcn3BunchDiv";
import CardShadcn3BunchDiv_CardName from "@/components/CardShadcn3BunchDiv_CardName";
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
            {/* <li>1. Torque Wrench</li> */}
            
            <CardShadcn3BunchDiv
                cardName="1. Torque Wrench"
                viewImagesLink="https://www.bing.com/images/search?q=torque%20wrench%20tool"
                images={[
                    "/images/TORQUE_WRENCH_1.jpg",
                    // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR39uKseLZ8A01h-hkjl5DGlpx-hcWv6uWMR-_wI2DKo7rz_EE_WBx3fa7l&s=10",
                    "/images/TORQUE_WRENCH_2.jpg",
                    "/images/TORQUE_WRENCH_3.webp",
                ]}
            />
            {/* <li>2. T-Handle Wrench</li> */}
            <CardShadcn3BunchDiv
                cardName="2. T-Handle Wrench"
                viewImagesLink="https://www.bing.com/images/search?q=T-Handle%20wrench%20tool"
                images={[
                    "/images/T-Handle Wrench1.jpg",
                    "/images/T-Handle Wrench2.jpg",
                    "/images/T-Handle Wrench3.avif",
                ]}
            />
            {/* <li>3. T-Handle Socket Wrench</li> */}
            <CardShadcn3BunchDiv
                cardName="3. T-Handle Socket Wrench"
                viewImagesLink="https://www.bing.com/images/search?q=T-Handle%20wrench%20tool"
                images={[
                    "/images/T-Handle Socket Wrench1.jpg",
                    "/images/T-Handle Socket Wrench1.jpg",
                    "/images/T-Handle Socket Wrench1.webp",
                ]}
            />
            {/* <li>4. Phillips Screwdriver</li> */}
            <CardShadcn3BunchDiv
                cardName="4. Phillips Screwdriver"
                viewImagesLink="https://www.bing.com/images/search?q=T-Handle%20wrench%20tool"
                images={[
                    "/images/Phillips Screwdriver1.webp",
                    "/images/Phillips Screwdriver2.jpg",
                    "/images/Phillips Screwdriver3.jpg",
                ]}
            />
            {/* <li>5. Flat Head Screwdriver</li> */}
            <CardShadcn3BunchDiv
                cardName="5. Flat Head Screwdriver"
                viewImagesLink="https://www.bing.com/images/search?q=T-Handle%20wrench%20tool"
                images={[
                    "/images/Flat Head Screwdriver1.jpg",
                    "/images/Flat Head Screwdriver2.jpg",
                    "/images/Flat Head Screwdriver3.webp",
                ]}
            />
            {/* <li>6. Tyre Lever</li> */}
            <CardShadcn3BunchDiv
                cardName="6. Tyre Lever"
                viewImagesLink="https://www.bing.com/images/search?q=T-Handle%20wrench%20tool"
                images={[
                    "/images/Tyre Lever1.avif",
                    "/images/Tyre Lever2.avif",
                    "/images/Tyre Lever3.webp",
                ]}
            />
            {/* <li>7. Two-Jaw Puller</li> */}
            <CardShadcn3BunchDiv
                cardName="7. Two-Jaw Puller"
                viewImagesLink="https://www.bing.com/images/search?q=T-Handle%20wrench%20tool"
                images={[
                    "/images/Two-Jaw Puller1.jpg",
                    "/images/Two-Jaw Puller2.webp",
                    "/images/Two-Jaw Puller3.jpg",
                ]}
            />
            {/* <li>8. Three-Jaw Puller</li> */}
            <CardShadcn3BunchDiv
                cardName="7. Two-Jaw Puller"
                viewImagesLink="https://www.bing.com/images/search?q=T-Handle%20wrench%20tool"
                images={[
                    "/images/Three-Jaw Puller1.jpg",
                    "/images/Three-Jaw Puller2.webp",
                    "/images/Three-Jaw Puller3.jpg",
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
            {/* <li>1. Piston Ring Expander</li> */}
            <CardShadcn3BunchDiv_CardName cardName="Piston Ring Expander" />
            {/* <li>2. Grip Pliers</li> */}
            <CardShadcn3BunchDiv_CardName cardName="Grip Pliers" />
            {/* <li>3. Monkey Pliers</li> */}
            <CardShadcn3BunchDiv_CardName cardName="Monkey Pliers" />
            {/* <li>4. Slip Joint Pliers</li> */}
            <CardShadcn3BunchDiv_CardName cardName="Slip Joint Plier" />
            {/* <li>5. Combination Pliers</li> */}
            <CardShadcn3BunchDiv_CardName cardName="Combination Pliers" />
            {/* <li>6. Cutter Nose Pliers</li> */}
            <CardShadcn3BunchDiv_CardName cardName="Cutter Nose Pliers" />
            {/* <li>7. Long Nose Pliers</li> */}
            <CardShadcn3BunchDiv_CardName cardName="Long Nose Pliers" />
            {/* <li>8. Circlip Pliers (Internal)</li> */}
            <CardShadcn3BunchDiv_CardName cardName="Circlip Pliers Internal" />
            {/* <li>9. Circlip Pliers (External)</li> */}
            <CardShadcn3BunchDiv_CardName cardName="Circlip Pliers External" />
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
            {/* <li>1. Combination Spanner</li> */}
            <CardShadcn3BunchDiv_CardName cardName="Combination Spanner" />

            {/* <li>2. Ring Spanner</li> */}
            <CardShadcn3BunchDiv_CardName cardName="Ring Spanner" />

            {/* <li>3. Box End Spanner</li> */}
            <CardShadcn3BunchDiv_CardName cardName="Box End Spanner" />

            {/* <li>4. Open End Spanner</li> */}
            <CardShadcn3BunchDiv_CardName cardName="Open End Spanner" />

            {/* <li>5. Adjustable (Dock) Spanner</li> */}
            <CardShadcn3BunchDiv_CardName cardName="Adjustable (Dock) Spanner" />
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
            {/* <li>1. Speed Handle</li> */}
            <CardShadcn3BunchDiv_CardName cardName="Speed Handle" />

            {/* <li>2. Star Allen Key</li> */}
            <CardShadcn3BunchDiv_CardName cardName="Star Allen Key" />

            {/* <li>3. Six-Point (Hex) Allen Key</li> */}
            <CardShadcn3BunchDiv_CardName cardName="Six-Point (Hex) Allen Key" />

            {/* <li>4. Feeler Gauge</li> */}
            <CardShadcn3BunchDiv_CardName cardName="Feeler Gauge" />

            {/* <li>5. Socket Set</li> */}
            <CardShadcn3BunchDiv_CardName cardName="Socket Set" />

            {/* <li>6. Deep Socket</li> */}
            <CardShadcn3BunchDiv_CardName cardName="Deep Socket" />

            {/* <li>7. Universal Joint</li> */}
            <CardShadcn3BunchDiv_CardName cardName="Universal Joint" />

            {/* <li>8. Ratchet Handle</li> */}
            <CardShadcn3BunchDiv_CardName cardName="Ratchet Handle" />

            {/* <li>9. Sliding T-Handle</li> */}
            <CardShadcn3BunchDiv_CardName cardName="Sliding T-Handle" />

            {/* <li>10. Half Extension Bar</li> */}
            <CardShadcn3BunchDiv_CardName cardName="Half Extension Bar" />

            {/* <li>11. Full Extension Bar</li> */}
            <CardShadcn3BunchDiv_CardName cardName="Full Extension Bar" />

            {/* <li>12. L-Handle Tommy Bar</li> */}
            <CardShadcn3BunchDiv_CardName cardName="L-Handle Tommy Bar" />
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
            {/* <li>1. Wheel Spanner</li> */}
            <CardShadcn3BunchDiv_CardName cardName="Wheel Spanner" />

            {/* <li>2. Oil Can</li> */}
            <CardShadcn3BunchDiv_CardName cardName="Oil Can" />

            {/* <li>3. Chisel</li> */}
            <CardShadcn3BunchDiv_CardName cardName="Chisel" />

            {/* <li>4. Oil Filter Wrench</li> */}
            <CardShadcn3BunchDiv_CardName cardName="Oil Filter Wrench" />

            {/* <li>5. Center Punch</li> */}
            <CardShadcn3BunchDiv_CardName cardName="Center Punch" />

            {/* <li>6. Scraper</li> */}
            <CardShadcn3BunchDiv_CardName cardName="Scraper" />
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
            {/* <li>1. Hacksaw</li> */}
            <CardShadcn3BunchDiv_CardName cardName="Hacksaw" />

            {/* <li>2. Nylon Brush</li> */}
            <CardShadcn3BunchDiv_CardName cardName="Nylon Brush" />

            {/* <li>3. Steel Wire Brush</li> */}
            <CardShadcn3BunchDiv_CardName cardName="Steel Wire Brush" />

            {/* <li>4. Flat File</li> */}
            <CardShadcn3BunchDiv_CardName cardName="Flat File" />

            {/* <li>5. Triangular File</li> */}
            <CardShadcn3BunchDiv_CardName cardName="Triangular File" />

            {/* <li>6. Square File</li> */}
            <CardShadcn3BunchDiv_CardName cardName="Square File" />

            {/* <li>7. Round File</li> */}
            <CardShadcn3BunchDiv_CardName cardName="Round File" />

            {/* <li>8. Half-Round File</li> */}
            <CardShadcn3BunchDiv_CardName cardName="Half-Round File" />
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
            {/* <li>1. Valve Lifter</li> */}
            <CardShadcn3BunchDiv_CardName cardName="Valve Lifter" />

            {/* <li>2. Valve Lapper</li> */}
            <CardShadcn3BunchDiv_CardName cardName="Valve Lapper" />

            {/* <li>3. Valve Grinding Paste</li> */}
            <CardShadcn3BunchDiv_CardName cardName="Valve Grinding Paste" />

            {/* <li>4. Adjustable Wrench</li> */}
            <CardShadcn3BunchDiv_CardName cardName="Adjustable Wrench" />

            {/* <li>5. Pipe Wrench</li> */}
            <CardShadcn3BunchDiv_CardName cardName="Pipe Wrench" />
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
            {/* <li>1. Hammer</li> */}
            <CardShadcn3BunchDiv_CardName cardName="Hammer" />

            {/* <li>2. Ball Peen Hammer</li> */}
            <CardShadcn3BunchDiv_CardName cardName="Ball Peen Hammer" />

            {/* <li>3. Claw Hammer</li> */}
            <CardShadcn3BunchDiv_CardName cardName="Claw Hammer" />

            {/* <li>4. Rubber Mallet</li> */}
            <CardShadcn3BunchDiv_CardName cardName="Rubber Mallet" />

            {/* <li>5. Piston Ring Compressor</li> */}
            <CardShadcn3BunchDiv_CardName cardName="Piston Ring Compressor" />

            {/* <li>6. Stud Remover</li> */}
            <CardShadcn3BunchDiv_CardName cardName="Stud Remover" />











        </div>





    );


};

export default Chapter1_Tool_Trolley;