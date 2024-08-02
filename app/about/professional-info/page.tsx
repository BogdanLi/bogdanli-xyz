import CodeTemplate from "@/components/Templates/CodeTemplate";

const AboutProfessionalInfoPage = () => {
  return (
    <div className="h-full w-full">
      <CodeTemplate lines={4} name="professional-info">
        <p>
          <span className="text-secondary-300">const</span>{" "}
          <span className="text-accent-200">description</span> ={" "}
          <span className="text-accent-100">
            &quot;hi, here is the section about my professional life&quot;
          </span>
        </p>
        <div>
          {"// Some overall info, like my bio, stack and work experience"}
        </div>
      </CodeTemplate>
    </div>
  );
};

export default AboutProfessionalInfoPage;
