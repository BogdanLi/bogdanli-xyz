import AboutMobileSidebar from "@/components/UI/AboutPage/AboutMobileSidebar";
import AboutSidebar from "@/components/UI/AboutPage/AboutSidebar";
import { Metadata } from "next";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about Bogdan Li",
  openGraph: {
    title: "About Me",
    description: "Learn more about Bogdan Li",
  },
};

const AboutLayout = ({ children }: Readonly<Props>) => {
  return (
    <div className="flex h-full w-full flex-col text-secondary-100 lg:flex-row">
      <AboutSidebar />
      <AboutMobileSidebar />
      {children}
    </div>
  );
};

export default AboutLayout;
