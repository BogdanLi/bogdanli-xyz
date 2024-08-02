import AboutMobileSidebar from "@/components/UI/AboutPage/AboutMobileSidebar";
import AboutSidebar from "@/components/UI/AboutPage/AboutSidebar";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

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
