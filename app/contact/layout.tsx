import ContactSidebar from "@/components/UI/ContactPage/ContactSidebar";
import { Metadata } from "next";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "Contact Me",
  description: "Feel free to contact me if you need",
  openGraph: {
    title: "Contact Me",
    description: "Feel free to contact me if you need",
  },
};

const ContactLayout = ({ children }: Readonly<Props>) => {
  return (
    <div className="flex h-full w-full flex-col text-secondary-100 lg:flex-row">
      <ContactSidebar />
      {children}
    </div>
  );
};

export default ContactLayout;
