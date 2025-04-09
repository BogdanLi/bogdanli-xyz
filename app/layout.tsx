import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: {
    default: "Bogdan Li Front-end Developer",
    template: "%s | Bogdan Li",
  },
  description:
    "Portfolio of Bogdan Li — Front-End Developer specializing in React, Next.js. View projects, blog posts, and contact info.",
  openGraph: {
    title: {
      default: "Bogdan Li Front-end Developer",
      template: "%s | Bogdan Li",
    },
    description:
      "Portfolio of Bogdan Li — Front-End Developer specializing in React, Next.js. View projects, blog posts, and contact info.",
    images: [
      {
        url: "https://bogdan-li.xyz/OG.png",
        width: 1200,
        height: 630,
        alt: "Image description",
      },
    ],
    locale: "en",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <main className="container mx-auto space-y-5 px-6 py-6 sm:px-0 sm:py-16">
          <Header /> {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
