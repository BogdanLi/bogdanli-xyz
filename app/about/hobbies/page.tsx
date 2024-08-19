import CodeTemplate from "components/Templates/CodeTemplate";

const AboutHobbiesPage = () => {
  return (
    <div className="h-full w-full">
      <CodeTemplate lines={2} name="hobbies">
        <p>
          <span className="text-secondary-300">const</span>{" "}
          <span className="text-accent-200">description</span> ={" "}
          <span className="text-accent-100">
            &quot;something about interests and what i like&quot;
          </span>
        </p>
      </CodeTemplate>
    </div>
  );
};

export default AboutHobbiesPage;
