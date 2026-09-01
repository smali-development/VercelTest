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
import Sidebar from "@/components/Sidebar";

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
        <Sidebar  />

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