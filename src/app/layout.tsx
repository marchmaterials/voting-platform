import type { Metadata } from "next";
import { spaceGrotesk } from "@/components/fonts";
import "./globals.css";
import NavBar from "@/components/NavBar";

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
