import FolderDropdown from "../FolderDropdown";
import FileLink from "./FileLink";
import FolderLink from "./FolderLink";

import folder from "@/assets/icons/folder.svg";
import folderGreen from "@/assets/icons/green-folder.svg";

const AboutMobileSidebar = () => {
  return (
    <div className="flex w-full flex-col lg:hidden">
      <FolderDropdown label="professional-info">
        <FolderLink folderIcon={folder.src} label="bio">
          <FileLink label="me.tsx" href="/about/professional-info/me" />
        </FolderLink>
        <FolderLink folderIcon={folderGreen.src} label="workBackground">
          <FileLink
            label="history.js"
            href="/about/professional-info/work-history"
          />
        </FolderLink>
      </FolderDropdown>
    </div>
  );
};

export default AboutMobileSidebar;
