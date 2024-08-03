"use client";

import { ReactNode, useState } from "react";

import arrow from "@/assets/icons/arrow-down.svg";
import Image from "next/image";

interface Props {
  children: ReactNode;
  label: string;
}

const FolderDropdown = ({ children, label }: Props) => {
  const [active, setActive] = useState(false);

  const className = `flex w-full flex-col overflow-hidden px-[14px] transition-all duration-300 ${active ? "max-h-96" : "max-h-0"}`;

  const toggleActive = () => {
    setActive(!active);
  };

  return (
    <div className="w-full">
      <button
        className="flex w-full items-center gap-2 border-b border-lines px-4 py-[10px] text-white"
        onClick={toggleActive}
      >
        <Image
          src={arrow.src}
          className={`transition-all duration-150 ${active ? "" : "-rotate-90"}`}
          width={8}
          height={8}
          alt=""
        />{" "}
        {label}
      </button>
      <div className={className}>{children}</div>
    </div>
  );
};

export default FolderDropdown;
