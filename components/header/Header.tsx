import Image from "next/image";

import logo from "@icons/logo.svg";

import NavLink from "./NavLink";
import { Menu } from "lucide-react";

const links = [
  { href: "/", label: "ABOUT" },
  { href: "/portfolio", label: "PORTFOLIO" },
  { href: "/contacts", label: "CONTACTS" },
];

export default function Header() {
  return (
    <header className="flex">
      <div className="border-light-gray bg-gray rounded-full border-2 p-2 sm:p-3">
        <Image src={logo.src} width={40} height={40} alt="abstract logo" />
      </div>
      <nav className="border-light-gray bg-gray flex w-fit grow items-center justify-between rounded-full border-2 px-4 text-xl sm:px-16">
        {links.map((link) => (
          <NavLink key={link.href} {...link} />
        ))}

        <button className="sm:hidden">
          <Menu />
        </button>
      </nav>
    </header>
  );
}
