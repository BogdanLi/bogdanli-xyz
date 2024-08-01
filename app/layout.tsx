import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import Header from "@/components/UI/Header";
import Footer from "@/components/UI/Footer";

const fira = Fira_Code({ subsets: ["latin"] });

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
      <body className="h-screen bg-primary-100 p-4 lg:p-16">
        <main className="flex h-full flex-col overflow-hidden rounded-lg border border-lines bg-primary-200 lg:justify-between">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
