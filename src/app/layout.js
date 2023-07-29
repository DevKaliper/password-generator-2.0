
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Providers } from "./providers";

export const metadata = {
  title: "Password Generator",
  description: "Generated by create next app",
};
export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        suppressHydrationWarning>
          <body>
        <Providers>
            {children}
        </Providers>
          </body>
      </html>
    </ClerkProvider>
  );
}
