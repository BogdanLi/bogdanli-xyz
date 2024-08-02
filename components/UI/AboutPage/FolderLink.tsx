"use client";

import Image from "next/image";
import { ReactNode, useState } from "react";

import arrow from "@/assets/icons/arrow-fill.svg";

interface Props {
  children: ReactNode;
  folderIcon: string;
  label: string;
}

const FolderLink = ({ children, folderIcon, label }: Props) => {
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive(!active);
  };

  return (
    <div>
      <button
        className={`flex gap-2 py-2 ${active ? "text-white" : ""}`}
        onClick={toggleActive}
      >
        <Image
          src={arrow.src}
          width={14}
          height={14}
          alt=""
          className={`transition-all duration-150 ${active ? "rotate-90" : ""}`}
        />
        <Image src={folderIcon} width={14} height={14} alt="" />
        {label}
      </button>
      <div
        className={`overflow-hidden transition-all duration-150 ${active ? "h-auto" : "h-0"}`}
      >
        {children}
      </div>
    </div>
  );
};

export default FolderLink;
