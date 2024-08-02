import Image from "next/image";
import FolderDropdown from "../FolderDropdown";

import mail from "@/assets/icons/mail.svg";
import phone from "@/assets/icons/phone.svg";
import Link from "next/link";
import folder from "@/assets/icons/folder.svg";
import FolderLink from "./FolderLink";

const ProfessionalInfoSidebar = () => {
  return (
    <div className="h-full border-e border-lines">
      <FolderDropdown label="Personal info">
        <FolderLink folderIcon={folder.src} label="bio">
          <div>who-am-i.tsx</div>
        </FolderLink>
        <FolderLink folderIcon={folder.src} label="education">
          <div>School.tsx</div>
        </FolderLink>
      </FolderDropdown>
      <FolderDropdown label="Contacts">
        <Link
          href="mailto:li.bogdan44@gmail.com"
          className="mt-4 flex gap-2 px-[14px] hover:brightness-125"
        >
          <Image src={mail.src} width={24} height={24} alt="" />
          li.bogdan44@gmail.com
        </Link>
        <Link
          href="tel:900108304"
          className="mt-2 flex gap-2 px-[14px] hover:brightness-125"
        >
          <Image src={phone.src} width={24} height={24} alt="" />
          +992 900 108 304
        </Link>
      </FolderDropdown>
    </div>
  );
};

export default ProfessionalInfoSidebar;
