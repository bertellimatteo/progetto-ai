"use client"

import * as React from "react"

import { Search } from "lucide-react"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"

 import { Button } from "@/components/ui/button"


export function CommandMenu() {
  const [open, setOpen] = React.useState(false)

  // Effetto per aprire/chiudere menu con Ctrl + K o Cmd + K
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      // Se l'utente preme K con Ctrl o Cmd
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((prev) => !prev)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  // Funzione che apre il Command Menu
  function handleOpen() {
    setOpen(true)
  }

  return (
    <div>
      {/* BOTTONE per aprire il command menu */}
      <Button onClick={handleOpen} 
        variant="ghost" size="icon"
        className=" h-7 w-7 p-0 border-0 shadow-transparent bg-transparent" 
        >
        <Search className="h-5 w-5" />
      </Button>

      {/*
        La finestra di dialogo si basa sullo stato "open".
        onOpenChange ci permette di chiudere il menu
        cliccando "Esc" o fuori dal dialog.
      */}
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>Calendar</CommandItem>
            <CommandItem>Search Emoji</CommandItem>
            <CommandItem>Calculator</CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  )
}
