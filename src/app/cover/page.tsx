// import react from 'react'

const Cover = () => {
    return (
        <div className="h-screen flex flex-col gap-8 p-8 max-w-[--breakpoint-2xl] mx-auto " >
            <div>
                <h1 className="text-3xl font-extrabold text-brand-600 mb-2  text-blue-900">Automobile (vehicle) technology</h1>
                <p className="text-slate-600 mb-8">Engine -- Lecture Notes.</p>
            </div>


            <p><strong>Contents:</strong></p>
            <ul>
                <li><a href={"/Chapter1_Tool_Trolley"}
                    target="_blank"
                    rel="noopener"
                    className="pill-link whitespace-nowrap">Ch.1 Tool Trolley (8 tool boxes)</a></li>
                <li>Ch.2 Fire Triangle</li>
                <li>Ch.3 Freezing/Melting/Boiling/Flash/Ignition Points (Water, Petrol, Diesel, Engine Oil)</li>
                <li>Ch.4 Energy types</li>
                <li>Ch.5 Engine Types (EC/IC, CI/SI, 2/4-stroke, OSV/OHV/SOHC/DOHC/VVT-i/etc.)</li>
                <li>Engine Base System overview (10 sub-systems)</li>
                <li>Engine Proper System parts lists — Cylinder Head, Cylinder Block, and Piston (fully detailed)</li>
            </ul>
        </div>
    )
}

export default Cover