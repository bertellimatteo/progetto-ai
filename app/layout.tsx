import React from 'react';
import type { Metadata } from "next";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
  
import './globals.css'
import { ReactNode } from 'react'
import { AppSidebar } from "@/components/(sidebar)/app-sidebar"

import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

import { Header } from "@/components/(header)/app-header"

import { Footer } from "@/components/(footer)/app-footer"
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="it">
      <body>
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <div className="flex flex-col m-2 ml-0 h-full justify-between gap-2">
              <Header />
              {/* Ecco il MAIN "vero" dove andranno i contenuti di ciascuna pagina */}
              <main className="bg-red-50 flex-1">{children}</main>
              <Footer />
            </div>
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  )
}
