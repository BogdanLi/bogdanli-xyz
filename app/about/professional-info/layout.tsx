import ProfessionalInfoSidebar from "@/components/UI/AboutPage/ProInfoSidebar";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ProfessionalInfoLayout = ({ children }: Props) => {
  return (
    <div className="flex h-full w-full">
      <ProfessionalInfoSidebar />
      {children}
    </div>
  );
};

export default ProfessionalInfoLayout;
