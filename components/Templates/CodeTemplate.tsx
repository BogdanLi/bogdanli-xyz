"use client";

import Image from "next/image";
import { ReactNode } from "react";

import close from "@/assets/icons/burger-close.svg";
import { useRouter } from "next/navigation";

interface Props {
  children: ReactNode;
  name: string;
  lines: number;
  className?: string;
}

const CodeTemplate = ({ children, name, lines, className = "" }: Props) => {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  return (
    <div className="h-full w-full">
      <div className="w-full border-b border-lines">
        <div className="flex items-center gap-4 border-e border-lines px-[14px] py-[10px] text-white lg:w-fit lg:text-secondary-100">
          <span className="lg:hidden">{"//"}</span>
          {name}
          <button className="hidden lg:block" onClick={handleClose}>
            <Image src={close.src} width={12} height={12} alt="" />
          </button>
        </div>
      </div>
      <div className="flex h-auto max-h-full gap-4 px-8 py-4">
        <div className="hidden h-fit w-fit text-end lg:block">
          {Array.from(Array(lines).keys()).map((el) => (
            <div key={el}>{el + 1}</div>
          ))}
        </div>
        <div className={`pb-4 ${className}`}>{children}</div>
      </div>
    </div>
  );
};

export default CodeTemplate;
