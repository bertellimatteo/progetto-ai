import React from "react";
import { ReactNode } from "react";

import { AppSidebar } from "@/components/(sidebar)/app-sidebar";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

import { Header } from "@/components/(header)/app-header";

import { Footer } from "@/components/(footer)/app-footer";

export default function HomePage({ children }: { children: ReactNode }) {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <div className="m-2 ml-0 flex h-full flex-col justify-between gap-2">
            <Header />
            {/* Ecco il MAIN "vero" dove andranno i contenuti di ciascuna pagina */}
            {children}
            <main className="flex-1 bg-red-50"></main>
            <Footer />
          </div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
