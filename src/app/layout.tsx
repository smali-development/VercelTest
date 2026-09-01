import type { Metadata } from "next";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";


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
      <body className="flex flex-col h-screen bg-gray-100 text-gray-900 overflow-hidden">
        <LayoutWrapper>{children}</LayoutWrapper>

      </body>
    </html>
  );
} 