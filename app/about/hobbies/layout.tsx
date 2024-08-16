import HobbiesSidebar from "@/components/UI/AboutPage/HobbiesSidebar";
import PersonalInfoSidebar from "components/UI/AboutPage/PerInfoSidebar";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const HobbiesLayout = ({ children }: Props) => {
  return (
    <div className="flex h-full w-full">
      <HobbiesSidebar />
      {children}
    </div>
  );
};

export default HobbiesLayout;
