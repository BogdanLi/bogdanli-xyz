import Image from "next/image";
import { NavLink } from "./Buttons";

import menu from "@/assets/icons/burger.svg";
import MobileSidebar from "./MobileSidebar";

const links = [
  {
    id: 2,
    label: "_hello",
    href: "/",
  },
  {
    id: 3,
    label: "_about-me",
    href: "/about",
  },
  {
    id: 4,
    label: "_projects",
    href: "/projects",
  },
];

const Header = () => {
  return (
    <header className="flex justify-between border-b border-lines text-secondary-100">
      <div className="flex">
        <NavLink label="Bogdan Li" href="" />
        <div className="hidden lg:flex">
          {links.map((link) => (
            <NavLink key={link.id} {...link} />
          ))}
        </div>
      </div>
      <div className="hidden border-s border-lines lg:block">
        <NavLink label="_contact-me" href="/contact" />
      </div>
      <button className="p-4 lg:hidden">
        <Image src={menu.src} width={16} height={16} alt="burger" />
      </button>
    </header>
  );
};

export default Header;
