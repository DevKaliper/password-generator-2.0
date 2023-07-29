import '../styles/globals.css'
import type { Metadata } from 'next'
import {Providers} from "./providers";
import {Navbar} from "@/components/navbar";


export const metadata: Metadata = {
  title: 'Password Generator',
  description: 'Generated by create next app',
}


export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}