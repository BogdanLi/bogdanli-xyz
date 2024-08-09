import type { Metadata } from "next";
import { Fira_Code, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/UI/Header";
import Footer from "@/components/UI/Footer";
import MobileSidebar from "@/components/UI/MobileSidebar";
import { SidebarStoreProvider } from "@/lib/providers/sidebar-store-provider";

const fira = Fira_Code({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Bogdan Li",
  description: "React.js developer based in Dushanbe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fira.className}>
      <body className="relative min-h-screen bg-primary-100 p-4 lg:h-screen lg:min-h-0 lg:p-16">
        <main className="flex h-screen flex-col overflow-y-scroll rounded-lg border border-lines bg-primary-200 lg:h-full lg:justify-between lg:overflow-y-hidden">
          <SidebarStoreProvider>
            <Header />
            <div className="relative h-full max-h-full">
              <MobileSidebar />
              {children}
            </div>
            <Footer />
          </SidebarStoreProvider>
        </main>
      </body>
    </html>
  );
}
