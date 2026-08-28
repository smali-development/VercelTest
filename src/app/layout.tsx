// src/app/layout.tsx
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

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
            <h1 className="text-3xl font-extrabold text-brand-600 mb-2  text-blue-900">Automobile (vehicle) technology</h1>
            <p className="text-slate-600 mb-8">Engine -- Lecture Notes.</p>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 p-4 space-y-2">
            <ul>
              <li>
                <Link href={"/Chapter1_Tool_Trolley"}
                rel="noopener"
                className="pill-link whitespace-nowrap">Ch.1 Tool Trolley (8 tool boxes)
                </Link>
              </li>
              <li>
                <Link href={"/Chapter2_Fire_Triangle"}
                  rel="noopener"
                  className="pill-link whitespace-nowrap">Ch.2 Fire Triangle</Link>
              </li>
              <li>
                <Link href={"/Chapter3_Points"}
                  rel="noopener"
                  className="pill-link whitespace-nowrap">Ch.3 Points
                </Link>
              </li>
              <li>
                <Link href={"/Chapter4_Energy"} rel="noopener" className="pill-link whitespace-nowrap">Ch.4 Energy types
                </Link>
              </li>
              <li>
                <Link href={"/Chapter5_Engine_Types"}                rel="noopener"
                className="pill-link whitespace-nowrap">Ch.5 Engine Types</Link>
              </li>
              <li>
                <Link href={"/Chapter6_Engine_Base_System"}
                rel="noopener"
                className="pill-link whitespace-nowrap">Ch.6 Engine Base System</Link>
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