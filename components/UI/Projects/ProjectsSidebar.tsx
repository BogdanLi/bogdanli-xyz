import Link from "next/link";
import FolderDropdown from "../FolderDropdown";
import FolderLink from "../AboutPage/FolderLink";

const ProjectsSidebar = () => {
  return (
    <div className="hidden h-full w-fit border-e border-lines lg:block">
      <FolderDropdown label="contacts">
        <div>React</div>
      </FolderDropdown>
    </div>
  );
};

export default ProjectsSidebar;
