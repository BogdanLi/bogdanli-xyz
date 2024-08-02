import CodeTemplate from "@/components/Templates/CodeTemplate";

const AboutMePage = () => {
  return (
    <div className="h-full w-full">
      <CodeTemplate lines={12} name="me.tsx">
        <div>{"// What about me?"}</div>
        <div>{"// I'm Front end developer based in Dushanbe."}</div>
        <div>
          {"// Started my path in development world as 16 years old student"}
        </div>
        <div>{"// of web development course, "}</div>
        <div>{"// and then continued to learn development and design"}</div>
        <div>{"// "}</div>
        <div>
          {"// After a long way of learning and internship as course assistant"}
        </div>
        <div>{"// and graduating middle school"}</div>
        <div>
          {
            "// I decided to finally start working by myself and started career of course instructor"
          }
        </div>
        <div>{"// "}</div>
        <div>
          {
            "// And now I work as the React.js developer at Livo and course instructor at Ilmhona"
          }
        </div>
      </CodeTemplate>
    </div>
  );
};

export default AboutMePage;
