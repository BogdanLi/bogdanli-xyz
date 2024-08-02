"use client";

import Image from "next/image";
import { NavLink } from "./Buttons";

import menu from "@/assets/icons/burger.svg";
import menuClose from "@/assets/icons/burger-close.svg";

import { useSidebarStore } from "@/lib/providers/sidebar-store-provider";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const links = [
  {
    id: 2,
    label: "_hello",
    href: "/welcome",
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
  const { show, open, close } = useSidebarStore((state) => state);
  const path = usePathname();

  const handleClick = () => {
    if (show) {
      void close();
    } else {
      void open();
    }
  };

  useEffect(() => {
    if (show) close();
  }, [path]);

  return (
    <header className="flex justify-between border-b border-lines text-secondary-100">
      <div className="flex">
        <div className="block border-e border-lines px-8 py-4">Bogdan Li</div>
        <div className="hidden lg:flex">
          {links.map((link) => (
            <NavLink key={link.id} {...link} />
          ))}
        </div>
      </div>
      <div className="hidden border-s border-lines lg:block">
        <NavLink label="_contact-me" href="/contact" />
      </div>
      <button className="p-4 lg:hidden" onClick={handleClick}>
        <Image
          src={show ? menuClose.src : menu.src}
          width={16}
          height={16}
          alt="burger"
        />
      </button>
    </header>
  );
};

export default Header;
