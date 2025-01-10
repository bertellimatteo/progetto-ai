"use client";

import * as React from "react";
import { ReactNode } from "react";

import { ThemeProvider } from "next-themes";

interface ThemeProviderClientProps {
  children: ReactNode;
}

export default function ThemeProviderClient({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}

// export function ThemeProvider({
//   children,
//   ...props
// }: React.ComponentProps<typeof NextThemesProvider>) {
//   return (
//     <NextThemesProvider
//       {...props}
//       attribute="class"
//       defaultTheme="system"
//       enableSystem
//       disableTransitionOnChange
//     >
//       {children}
//     </NextThemesProvider>
//   );
// }
