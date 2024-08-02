import Image from "next/image";
import FolderDropdown from "../FolderDropdown";

import mail from "@/assets/icons/mail.svg";
import phone from "@/assets/icons/phone.svg";
import Link from "next/link";
import folder from "@/assets/icons/folder.svg";
import greenFolder from "@/assets/icons/green-folder.svg";
import FolderLink from "./FolderLink";
import FileLink from "./FileLink";

const ProfessionalInfoSidebar = () => {
  return (
    <div className="hidden h-full border-e border-lines lg:block">
      <FolderDropdown label="Professional info">
        <div className="space-y-2 py-4">
          <FolderLink folderIcon={greenFolder.src} label="bio">
            <FileLink label="me.tsx" href="/about/professional-info/me" />
          </FolderLink>
          <FolderLink folderIcon={folder.src} label="workBackground">
            <FileLink
              label="history.js"
              href="/about/professional-info/work-history"
            />
          </FolderLink>
        </div>
      </FolderDropdown>
      <FolderDropdown label="Contacts">
        <div className="space-y-2 py-4">
          <Link
            href="mailto:li.bogdan44@gmail.com"
            className="flex gap-2 hover:brightness-125"
          >
            <Image src={mail.src} width={24} height={24} alt="" />
            li.bogdan44@gmail.com
          </Link>
          <Link
            href="tel:900108304"
            className="flex gap-2 hover:brightness-125"
          >
            <Image src={phone.src} width={24} height={24} alt="" />
            +992 900 108 304
          </Link>
        </div>
      </FolderDropdown>
    </div>
  );
};

export default ProfessionalInfoSidebar;
