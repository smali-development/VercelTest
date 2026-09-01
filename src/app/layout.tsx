// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

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
        {/* <Header /> */}
        {/* area after the full size of the header is used for the sidebar and main content. The sidebar is fixed to the left, and the main content takes up the remaining space. */}
        <div className="flex flex-1 h-full">

          {/* Sidebar Container */}
          <Sidebar />

          {/* Dynamic Main Page Content */}
          <main className="flex-1 p-8 overflow-y-auto">
            <div className="mx-auto bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              {children}
            </div>
          </main>
        </div>

      </body>
    </html>
  );
}