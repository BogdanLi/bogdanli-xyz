import ContactSidebar from "@/components/UI/ContactPage/ContactSidebar";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ContactLayout = ({ children }: Readonly<Props>) => {
  return (
    <div className="flex h-full w-full flex-col text-secondary-100 lg:flex-row">
      <ContactSidebar />
      {children}
    </div>
  );
};

export default ContactLayout;
