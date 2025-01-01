import type { Metadata } from "next";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="w-full h-screen">
   
        <ResizablePanelGroup direction="vertical" className="w-full h-screen">
          {/* Header */}
          <ResizablePanel defaultSize={10} minSize={5}>
            <div className="flex h-full items-center justify-between p-4 bg-slate-100">
              <span className="font-semibold">Header</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          
          {/* Content + Sidebar */}
          <ResizablePanel defaultSize={90}>
            <ResizablePanelGroup direction="horizontal" className="h-full">
              {/* Sidebar */}
              <ResizablePanel defaultSize={20} minSize={15}>
                <div className="h-full p-4 bg-slate-50">
                  <span className="font-semibold">Sidebar</span>
                </div>
              </ResizablePanel>
              <ResizableHandle />
              {/* Main Content */}
              <ResizablePanel defaultSize={80}>
                <div className="h-full p-4 bg-slate-50">
                  <span className="font-semibold">Main Content</span>
                </div>

              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
        </ResizablePanelGroup>

        {children}
      </body>
    </html>
  );
}
