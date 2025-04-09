"use client";

import { cn } from "@/lib/utils";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  href: string;
  label: string;
};

export default function NavLink({ href, label }: Props) {
  const path = usePathname();

  return (
    <Link
      className={cn(path === href ? "text-red-secondary font-bold" : "hidden")}
      href={href}
    >
      {label}
    </Link>
  );
}
