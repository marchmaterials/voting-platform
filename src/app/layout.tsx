import type { Metadata } from "next";
import { spaceGrotesk } from "@/ui/fonts";
import "./globals.css";
import NavBar from "@/ui/NavBar";

export const metadata: Metadata = {
  title: "MARCH",
  description: "MARCH materials coming soon",
  openGraph: {
    title: "MARCH",
    description: "MARCH materials beta application",
    type: "website",
    locale: "en",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} antialiased`}>
        <header>
          <NavBar />
        </header>
        {children}
      </body>
    </html>
  );
}
