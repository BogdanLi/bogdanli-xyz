import CodeTemplate from "@/components/Templates/CodeTemplate";
import ContactForm from "@/components/UI/ContactPage/Form";

const ContactPage = () => {
  return (
    <div className="h-full w-full">
      <CodeTemplate name="contacts" lines={0}>
        <ContactForm />
      </CodeTemplate>
    </div>
  );
};

export default ContactPage;
