import CodeTemplate from "components/Templates/CodeTemplate";
import FadeIn from "components/UI/Animation/FadeIn";
import ContactForm from "components/UI/ContactPage/Form";

const ContactPage = () => {
  return (
    <div className="h-full w-full">
      <CodeTemplate name="contacts" lines={0}>
        <FadeIn>
          <ContactForm />
        </FadeIn>
      </CodeTemplate>
    </div>
  );
};

export default ContactPage;
