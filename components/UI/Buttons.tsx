"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface NavLinkProps {
  label: string;
  href: string;
}

export const NavLink = ({ label, href }: NavLinkProps) => {
  const path = usePathname();

  const isActive = path.includes(href);

  return (
    <Link
      href={href}
      className={`block border-e border-lines px-8 py-4 transition-all duration-100 ${
        isActive ? "border-b-2 border-b-accent-100 text-white" : ""
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

interface MobileNavLinkProps {
  href: string;
  label: string;
}

export const MobileNavLink = ({ href, label }: MobileNavLinkProps) => {
  return (
    <Link className="block border-b border-lines p-4" href={href}>
      {label}
    </Link>
  );
};

interface AboutSideLinkProps {
  href: string;
  icon: string;
}

export const AboutSideLink = ({ href, icon }: AboutSideLinkProps) => {
  const path = usePathname();

  const isActive = href.includes(path);

  return (
    <Link
      href={href}
      className={`block px-5 py-4 ${isActive ? "brightness-125" : ""}`}
    >
      <Image src={icon} width={24} height={24} alt="" />
    </Link>
  );
};

interface ButtonProps {
  children: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "default" | "ghost";
}

export const Button = ({
  children,
  disabled = false,
  onClick,
  className = "",
  variant = "default",
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-lg px-3 py-2 text-white ${variant === "primary" ? "bg-[#FEA55F] text-[#01080E] hover:bg-[#e8b174]" : variant === "default" ? "bg-lines text-white hover:bg-[#2f394f]" : variant === "ghost" ? "rounded-lg border border-white text-white hover:border-opacity-70" : ""} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
