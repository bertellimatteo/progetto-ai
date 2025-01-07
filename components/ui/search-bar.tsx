"use client"

import * as React from "react"
import { Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"

export function SearchBar() {
  const [query, setQuery] = React.useState("")

  // Funzione per svuotare il campo di testo
  const clearQuery = () => {
    setQuery("")
  }

  return (
    <div className="relative">
      {/* Icona lente, posizionata in modo assoluto a sinistra */}
      <span className="
        pointer-events-none 
        absolute 
        top-1/2 
        left-3 
        -translate-y-1/2 
        flex 
        items-center 
        text-gray-400
      ">
        <Search className="h-5 w-5" />
      </span>

      {/* L'Input riempie tutto lo spazio grazie a w-full */}
      <Input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="
          w-full
          pl-10 
          pr-10
          bg-white text-gray-800 placeholder-gray-400
          rounded-md border border-gray-300
          focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300
        "
      />

      {/* Mostra la X solo se c’è testo */}
      {query && (
        <button
          type="button"
          onClick={clearQuery}
          className="
            absolute 
            top-1/2 
            right-3 
            -translate-y-1/2 
            flex 
            items-center 
            text-gray-400 
            hover:text-gray-600
          "
          aria-label="Clear text"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  )
}
