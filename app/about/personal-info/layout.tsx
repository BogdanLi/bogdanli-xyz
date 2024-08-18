import PersonalInfoSidebar from "components/UI/AboutPage/PerInfoSidebar";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const PersonalInfoLayout = ({ children }: Props) => {
  return (
    <div className="flex h-full w-full">
      <PersonalInfoSidebar />
      {children}
    </div>
  );
};

export default PersonalInfoLayout;
