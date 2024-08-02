import AboutSidebar from "@/components/UI/AboutPage/AboutSidebar";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const AboutLayout = ({ children }: Readonly<Props>) => {
  return (
    <div className="flex h-full text-secondary-100">
      <AboutSidebar />
      {children}
    </div>
  );
};

export default AboutLayout;
