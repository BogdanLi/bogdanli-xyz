import professional from "@/assets/icons/professional-info.svg";
import personal from "@/assets/icons/personal-info.svg";
import hobbies from "@/assets/icons/hobbies.svg";
import { AboutSideLink } from "../Buttons";

const AboutSidebar = () => {
  return (
    <div className="h-full border-e border-lines">
      <AboutSideLink icon={professional.src} href="/about/professional-info" />
      <AboutSideLink icon={personal.src} href="/about/personal-info" />
      <AboutSideLink icon={hobbies.src} href="/about/hobbies" />
    </div>
  );
};

export default AboutSidebar;
