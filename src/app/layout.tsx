// src/app/layout.tsx
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { BsFire, BsTools } from "react-icons/bs";
import { LiaTemperatureHighSolid } from "react-icons/lia";
import { FaArrowRightToBracket, FaTemperatureHigh } from "react-icons/fa6";
import { SlEnergy } from "react-icons/sl";
import { PiEngineBold } from "react-icons/pi";
import { GiClaymoreExplosive } from "react-icons/gi";

export const metadata: Metadata = {
  title: "Next.js Sidebar Website",
  description: "Simple app with Home and About pages",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex h-screen bg-gray-100 text-gray-900 pl-8">

        {/* Sidebar Container */}
        <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
          <div>
            <div className="flex items-center gap-2 p-4 border-b border-gray-200 justify-between">
              
              <Link href={"/"}>
                <h1 className="text-3xl font-extrabold text-brand-600 mb-2  text-blue-900">

                  <span className="text-blue-900">Engine Auto Mobile</span>
                </h1>
              </Link>
              <FaArrowRightToBracket size={35}  style={{ transform: 'rotate(180deg)' }} />

            </div>
            <p className="text-slate-600 mb-8">Engine -- Lecture Notes.</p>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 p-4 space-y-2">
            <ul>
              <li>
                <Link
                  href={"/Chapter1_Tool_Trolley"}
                  rel="noopener"
                  className="whitespace-nowrap inline-flex items-center gap-2"
                >
                  <BsTools />
                  <span>Ch.1 Tool Trolley (8 tool boxes)</span>
                </Link>
              </li>
              <li>
                <Link href={"/Chapter2_Fire_Triangle"}
                  rel="noopener"
                  className="whitespace-nowrap inline-flex items-center gap-2">
                  <BsFire />
                  <span>Ch.2 Fire Triangle</span>
                </Link>
              </li>
              <li>
                <Link href={"/Chapter3_Points"}
                  rel="noopener"
                  className="whitespace-nowrap inline-flex items-center gap-2">
                  <FaTemperatureHigh />
                  <span>Ch.3 Points</span>
                </Link>
              </li>
              <li>
                <Link href={"/Chapter4_Energy"} rel="noopener" className="whitespace-nowrap inline-flex items-center gap-2">
                  <SlEnergy />
                  <span>Ch.4 Energy types</span>
                </Link>
              </li>
              <li>
                <Link href={"/Chapter5_Engine_Types"} rel="noopener"
                  className="whitespace-nowrap inline-flex items-center gap-2">
                  <PiEngineBold />
                  <span>Ch.5 Engine Types</span>
                </Link>
              </li>
              <li>
                <Link href={"/Chapter6_Engine_Base_System"}
                  rel="noopener"
                  className="whitespace-nowrap inline-flex items-center gap-2">
                  <GiClaymoreExplosive />
                  <span>Ch.6 Engine Base System</span>
                </Link>
              </li>

            </ul>
          </nav>
        </aside>

        {/* Dynamic Main Page Content */}
        <main className="flex-1 p-8 overflow-y-auto">
          <div className="mx-auto bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            {children}
          </div>
        </main>

      </body>
    </html>
  );
}