
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import { Separator } from "@/components/ui/separator"

import {
  SidebarTrigger,
} from "@/components/ui/sidebar"

import {
  ModeToggle,
} from "@/components/ModeToggle"

export function Header() {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 bg-slate-500 ">
      {/* border rounded-lg mt-2 mr-2 */}
          <div className="flex items-center gap-2 px-4">

            {/* sidebar open and close trigger  */}
            <SidebarTrigger className="-ml-1" />
            
            <Separator orientation="vertical" className="mr-2 h-4" />

            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>


           

            <ModeToggle />




            

            



            


            

          </div>
        </header>
  );
}

