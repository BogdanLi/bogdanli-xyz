"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface NavLinkProps {
  label: string;
  href: string;
}

export const NavLink = ({ label, href }: NavLinkProps) => {
  const path = usePathname();

  const isActive = path === href;

  return (
    <Link
      href={href}
      className={`block border-e border-lines px-8 py-4 ${
        isActive ? "border-b-4 border-b-accent-100 text-white" : ""
      } `}
    >
      {label}
    </Link>
  );
};

interface FooterLinkProps {
  href: string;
  children: ReactNode;
}

export const FooterLink = ({ href, children }: FooterLinkProps) => {
  return (
    <Link
      href={href}
      target="_blank"
      className="border-e border-lines p-4 transition-all duration-150 hover:brightness-125"
    >
      {children}
    </Link>
  );
};
