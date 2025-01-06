import { AppSidebar } from "@/components/(sidebar)/app-sidebar"

import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

import { Header } from "@/components/(header)/app-header"

import { Footer } from "@/components/(footer)/app-footer"



export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>

       
        <div className="flex flex-col m-2 ml-0 h-full justify-between gap-2">
          <Header />

          <main className="bg-red-50 flex-1"> </main>
      
          <Footer />

        </div>
    
        {/* <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div> */}
      </SidebarInset>
    </SidebarProvider>
  )
}
