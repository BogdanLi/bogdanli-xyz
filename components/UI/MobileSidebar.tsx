"use client";

import Image from "next/image";
import { FooterLink, MobileNavLink } from "./Buttons";

import linkedin from "@/assets/icons/linkedin.svg";
import instagram from "@/assets/icons/instagram.svg";
import telegram from "@/assets/icons/telegram.svg";
import { useSidebarStore } from "@/lib/providers/sidebar-store-provider";

const MobileSidebar = () => {
  const { show } = useSidebarStore((state) => state);

  const className = `absolute top-0 z-20 flex w-full flex-col justify-between overflow-hidden bg-primary-200 text-secondary-100 transition-all duration-300 ${show ? "h-full border border-lines" : "h-0"}`;

  return (
    <div className={className}>
      <div>
        <MobileNavLink href="/welcome" label="_hello" />
        <MobileNavLink href="/about" label="_about-me" />
        <MobileNavLink href="/projects" label="_projects" />
        <MobileNavLink href="/contact" label="_contact-me" />
      </div>
      <div className="flex justify-between">
        <div className="px-4 py-3">find me in:</div>
        <div className="flex border-s border-lines">
          <FooterLink href="https://www.linkedin.com/in/li-bogdan/">
            <Image src={linkedin.src} alt="" width={24} height={24} />
          </FooterLink>
          <FooterLink href="https://www.instagram.com/bogdan.js/">
            <Image src={instagram.src} alt="" width={24} height={24} />
          </FooterLink>
          <FooterLink href="https://t.me/licuatroesp">
            <Image src={telegram.src} alt="" width={24} height={24} />
          </FooterLink>
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;
