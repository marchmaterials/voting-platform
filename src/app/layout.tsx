import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { DataProvider } from "./context/dataContext";
import { getAllProjects } from "@/utils/dashboard";

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
  const initialProjectsFetch = getAllProjects();
  return (
    <html lang="en">
      <body className="antialiased">
        <AntdRegistry>
          <nav>
            <NavBar />
          </nav>
          <DataProvider initialProjectsFetch={initialProjectsFetch}>
            {children}
          </DataProvider>
          <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_ID || ""} />
          <Analytics />
        </AntdRegistry>
      </body>
    </html>
  );
}
