import Link from "next/link"

const Cover = () => {
    return (
        <div className="h-screen flex flex-col gap-8 p-8 max-w-[--breakpoint-2xl] mx-auto " >
            <div>
                <h1 className="text-3xl font-extrabold text-brand-600 mb-2  text-blue-900">Automobile (vehicle) technology</h1>
                <p className="text-slate-600 mb-8">Engine -- Lecture Notes.</p>
            </div>


            <p><strong>Contents:</strong></p>
            <ul>
                <li><Link href={"/Chapter1_Tool_Trolley"}
                    target="_blank"
                    rel="noopener"
                    className="pill-link whitespace-nowrap">Ch.1 Tool Trolley (8 tool boxes)</Link></li>
                <li><Link href={"/Chapter2_Fire_Triangle"}
                    target="_blank"
                    rel="noopener"
                    className="pill-link whitespace-nowrap">Ch.2 Fire Triangle</Link></li>
                <li>Ch.3 Freezing/Melting/Boiling/Flash/Ignition Points (Water, Petrol, Diesel, Engine Oil)</li>
                <li><Link href={"/Chapter4_Energy"}
                    target="_blank"
                    rel="noopener"
                    className="pill-link whitespace-nowrap">Ch.4 Energy types</Link></li>
                <li><Link href={"/Chapter5_Engine_Types"}
                    target="_blank"
                    rel="noopener"
                    className="pill-link whitespace-nowrap">Ch.5 Engine Types (EC/IC, CI/SI, 2/4-stroke, OSV/OHV/SOHC/DOHC/VVT-i/etc.)</Link></li>
                <li><Link href={"/Chapter6_Engine_Base_System"}
                    target="_blank"
                    rel="noopener"
                    className="pill-link whitespace-nowrap">Ch.6 Engine Base System</Link></li>
                <li><Link href={"/Chapter7_Engine_Proper_System"}
                    target="_blank"
                    rel="noopener"
                    className="pill-link whitespace-nowrap">Ch.7 Engine Proper System</Link></li>
            </ul>
        </div>
    )
}

export default Cover