import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-white text-black relative`}>
        {/* Header */}
        <div className="fixed top-0 left-0 right-0 z-10">
          <Header />
        </div>
        <div className="mt-18">
          <div className="flex">
            <div className="">
              <Sidebar />
            </div>
            <div className="flex-1">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
