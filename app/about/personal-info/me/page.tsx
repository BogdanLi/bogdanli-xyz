import CodeTemplate from "components/Templates/CodeTemplate";

const PersonalMePage = () => {
  return (
    <div className="h-full w-full">
      <CodeTemplate lines={12} name="me.tsx">
        <div className="hidden lg:block">
          <div>
            {
              "// Well, tbh, I really suck at writing something not professional about myself"
            }
          </div>
          <div>
            {"// I spent a lot of time learning to code and other stuff."}
          </div>
          <div>{"// "}</div>
          <div>
            {
              "// I started my learning path in 2022 when I attended my first programming course,"
            }
          </div>
          <div>
            {"// which was Front-end lvl 1, and thend successfully attended"}
          </div>
          <div>
            {"// Android Development, UX/UI Design, Basics of Data Analysis."}
          </div>
          <div>{"// "}</div>
          <div>{"// And my worst weakness is laziness,"}</div>
          <div>
            {
              "// but in the sametime I am very adaptive and can finish task in the shortest possible time"
            }
          </div>
          <div>{"// "}</div>
          <div>
            {"// My MBTI is INTP, but I wouldnt call myself a scientist)"}
          </div>
          <div>{"// And yes, I am Introvert."}</div>
        </div>
        <div className="overflow-y-scroll lg:hidden">
          <p>
            Well, tbh, I really suck at writing something not professional about
            myself. <br /> I spent a lot of time learning to code and other
            stuff. <br /> I started my learning path in 2022 when I attended my
            first programming course, which was Front-end lvl 1, and thend
            successfully attended Android Development, UX/UI Design, Basics of
            Data Analysis.
          </p>
          <p>
            And my worst weakness is laziness, but in the sametime I am very
            adaptive and can finish task in the shortest possible time
          </p>
          <p>My MBTI is INTP, but I wouldnt call myself a scientist)</p>
          <p>And yes, I am Introvert.</p>
        </div>
      </CodeTemplate>
    </div>
  );
};

export default PersonalMePage;
