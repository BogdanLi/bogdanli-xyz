import CodeTemplate from "@/components/Templates/CodeTemplate";
import Link from "next/link";

const WorkHistoryPage = () => {
  return (
    <div className="w-full">
      <CodeTemplate lines={16} name="history.js">
        <div>
          <div>
            <Link
              className="transition-all duration-150 hover:text-[#1a9eda]"
              href={"https://ilmhona.org/"}
              target="_blank"
            >
              skills accelerator Ilmhona;
            </Link>
          </div>
          <p>const position = &quot;course instructor&quot;;</p>
          <p>const timePeriod = &quot;may 2023 - present&quot;;</p>
          <p>
            const coursesITaught = [&quot;Intro to JS&quot;,
            &quot;React.js&quot;, &quot;Front-end Level 1&quot;, &quot;Website
            with Tilda&quot;];
          </p>
        </div>
        <div>{"//"}</div>
        <div>
          <div>
            <Link
              href={"https://www.megafon.tj/"}
              target="_blank"
              className="hover:text-[#00b856]"
            >
              Megafon Tajikistan;
            </Link>
          </div>
          <p>const position = &quot;course instructor&quot;;</p>
          <p>const timePeriod = &quot;november 2023 - march 2024&quot;;</p>
          <p>const coursesITaught = [&quot;Intro to Python&quot;];</p>
        </div>
        <div>{"//"}</div>
        <div>
          <div>
            <Link
              href={"https://livo.tj/"}
              target="_blank"
              className="hover:text-[#01b695]"
            >
              Livo;
            </Link>
          </div>
          <p>const position = &quot;front-end developer&quot;;</p>
          <p>const timePeriod = &quot;january 2024 - present&quot;;</p>
        </div>
      </CodeTemplate>
    </div>
  );
};

export default WorkHistoryPage;
