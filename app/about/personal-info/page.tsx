import CodeTemplate from "components/Templates/CodeTemplate";

const AboutPersonalInfo = () => {
  return (
    <div className="h-full w-full">
      <CodeTemplate lines={4} name="personal-info">
        <p>
          <span className="text-secondary-300">const</span>{" "}
          <span className="text-accent-200">description</span> ={" "}
          <span className="text-accent-100">
            &quot;hi, here is the section about my personal life&quot;
          </span>
        </p>
        <div>{"// I dont really know what to write here"}</div>
      </CodeTemplate>
    </div>
  );
};

export default AboutPersonalInfo;
