"use client";

import Image from "next/image";
import Link from "next/link";

import js from "@/assets/icons/js.svg";
import tsx from "@/assets/icons/tsx.svg";
import { useEffect, useState } from "react";

interface Props {
  href: string;
  label: string;
}

const getFormat = (label: string) => {};

const FileLink = ({ href, label }: Props) => {
  const [img, setImg] = useState("");

  return (
    <Link href={href} className="flex items-center gap-2 py-2 ps-5">
      <Image
        src={label.endsWith(".tsx") ? tsx : js}
        alt=""
        width={16}
        height={16}
      />
      {label}
    </Link>
  );
};

export default FileLink;
