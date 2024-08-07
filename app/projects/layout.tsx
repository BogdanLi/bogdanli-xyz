import ProfessionalInfoSidebar from "@/components/UI/AboutPage/ProInfoSidebar";
import ProjectsSidebar from "@/components/UI/Projects/ProjectsSidebar";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ProjectsLayout = ({ children }: Readonly<Props>) => {
  return (
    <div className="h-full w-full">
      <ProjectsSidebar />
      {children}
    </div>
  );
};

export default ProjectsLayout;
