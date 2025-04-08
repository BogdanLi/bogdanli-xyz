import logo from "@icons/logo.svg";

import Image from "next/image";
import NavLink from "./NavLink";

const links = [
  { href: "/", label: "ABOUT" },
  { href: "/portfolio", label: "PORTFOLIO" },
  { href: "/contacts", label: "CONTACTS" },
];

export default function Header() {
  return (
    <header className="flex">
      <div className="rounded-full p-3 bg-gray w-fit border-2 border-light-gray">
        <Image src={logo.src} width={40} height={40} alt="abstract logo" />
      </div>
      <nav className="bg-gray grow rounded-full items-center px-16 w-fit border-2 border-light-gray flex justify-between text-xl">
        {links.map((link) => (
          <NavLink key={link.href} {...link} />
        ))}
      </nav>
    </header>
  );
}
