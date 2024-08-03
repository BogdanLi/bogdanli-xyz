import { FooterLink } from "./Buttons";
import Image from "next/image";

import linkedin from "@/assets/icons/linkedin.svg";
import instagram from "@/assets/icons/instagram.svg";
import telegram from "@/assets/icons/telegram.svg";
import github from "@/assets/icons/github.svg";

import Link from "next/link";
import FadeIn from "./Animation/FadeIn";
import FadeInStagger from "./Animation/FadeInStagger";

const Footer = () => {
  return (
    <FadeIn>
      <footer className="hidden justify-between border-t border-t-lines px-6 text-secondary-100 lg:flex">
        <div className="flex">
          <div className="border-e border-lines py-4 pe-4">
            <FadeInStagger>find me in:</FadeInStagger>
          </div>
          <FooterLink href="https://www.linkedin.com/in/li-bogdan/">
            <FadeInStagger>
              <Image src={linkedin.src} alt="" width={24} height={24} />
            </FadeInStagger>
          </FooterLink>
          <FooterLink href="https://www.instagram.com/bogdan.js/">
            <FadeInStagger>
              <Image src={instagram.src} alt="" width={24} height={24} />
            </FadeInStagger>
          </FooterLink>
          <FooterLink href="https://t.me/licuatroesp">
            <FadeInStagger>
              <Image src={telegram.src} alt="" width={24} height={24} />
            </FadeInStagger>
          </FooterLink>
        </div>
        <div>
          <FadeInStagger>
            <Link
              href={"https://github.com/BogdanLi"}
              target="_blank"
              className="flex gap-1 border-s border-lines p-4 transition-all duration-150 hover:brightness-125"
            >
              @BogdanLi
              <Image src={github.src} alt="" width={24} height={24} />
            </Link>
          </FadeInStagger>
        </div>
      </footer>
    </FadeIn>
  );
};

export default Footer;
