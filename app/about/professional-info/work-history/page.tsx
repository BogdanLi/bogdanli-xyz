import {
  ArrayMarkdown,
  KeywordMarkdown,
  NameMarkdown,
  StringMarkdown,
} from "@/components/Markdown/CodeMarkdown";
import CodeTemplate from "@/components/Templates/CodeTemplate";
import Link from "next/link";

const WorkHistoryPage = () => {
  return (
    <div className="w-full overflow-y-scroll">
      <CodeTemplate lines={28} name="history.js">
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
          <p>
            <KeywordMarkdown>const</KeywordMarkdown>{" "}
            <NameMarkdown>position</NameMarkdown> ={" "}
            <StringMarkdown>course instructor</StringMarkdown>;
          </p>
          <p>
            <KeywordMarkdown>const</KeywordMarkdown>{" "}
            <NameMarkdown>type</NameMarkdown> ={" "}
            <StringMarkdown>part time</StringMarkdown>;
          </p>
          <p>
            <KeywordMarkdown>const</KeywordMarkdown>{" "}
            <NameMarkdown>timePeriod</NameMarkdown> ={" "}
            <StringMarkdown>may 2023 - present</StringMarkdown>;
          </p>
          <p>
            <KeywordMarkdown>const</KeywordMarkdown>{" "}
            <NameMarkdown>coursesITaught</NameMarkdown> ={" "}
            <ArrayMarkdown>
              [<StringMarkdown>Intro to JS</StringMarkdown>,
              <StringMarkdown>React.js</StringMarkdown>,
              <StringMarkdown>Front-end Level 1</StringMarkdown>,
              <StringMarkdown>Website with Tilda</StringMarkdown>]
            </ArrayMarkdown>
            ;
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
          <p>
            <KeywordMarkdown>const</KeywordMarkdown>{" "}
            <NameMarkdown>position</NameMarkdown> ={" "}
            <StringMarkdown>course instructor</StringMarkdown>;
          </p>
          <p>
            <KeywordMarkdown>const</KeywordMarkdown>{" "}
            <NameMarkdown>type</NameMarkdown> ={" "}
            <StringMarkdown>part time</StringMarkdown>;
          </p>
          <p>
            <KeywordMarkdown>const</KeywordMarkdown>{" "}
            <NameMarkdown>timePeriod</NameMarkdown> ={" "}
            <StringMarkdown>november 2023 - march 2024</StringMarkdown>;
          </p>
          <p>
            <KeywordMarkdown>const</KeywordMarkdown>{" "}
            <NameMarkdown>coursesITaught</NameMarkdown> ={" "}
            <ArrayMarkdown>
              [<StringMarkdown>Intro to Python</StringMarkdown>]
            </ArrayMarkdown>
            ;
          </p>
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
          <p>
            <KeywordMarkdown>const</KeywordMarkdown>{" "}
            <NameMarkdown>position</NameMarkdown> ={" "}
            <StringMarkdown>front-end developer</StringMarkdown>;
          </p>
          <p>
            <KeywordMarkdown>const</KeywordMarkdown>{" "}
            <NameMarkdown>type</NameMarkdown> ={" "}
            <StringMarkdown>full time</StringMarkdown>;
          </p>
          <p>
            <KeywordMarkdown>const</KeywordMarkdown>{" "}
            <NameMarkdown>timePeriod</NameMarkdown> ={" "}
            <StringMarkdown>january 2024 - october 2024</StringMarkdown>;
          </p>
        </div>
        <div>{"//"}</div>
        <div>
          <div>
            <Link
              href={"https://technohub.tj/"}
              target="_blank"
              className="hover:text-[#01b695]"
            >
              Technohub Dushanbe;
            </Link>
          </div>
          <p>
            <KeywordMarkdown>const</KeywordMarkdown>{" "}
            <NameMarkdown>position</NameMarkdown> ={" "}
            <StringMarkdown>course instructor</StringMarkdown>;
          </p>
          <p>
            <KeywordMarkdown>const</KeywordMarkdown>{" "}
            <NameMarkdown>type</NameMarkdown> ={" "}
            <StringMarkdown>part time</StringMarkdown>;
          </p>
          <p>
            <KeywordMarkdown>const</KeywordMarkdown>{" "}
            <NameMarkdown>timePeriod</NameMarkdown> ={" "}
            <StringMarkdown>september 2024 - present</StringMarkdown>;
          </p>
          <p>
            <KeywordMarkdown>const</KeywordMarkdown>{" "}
            <NameMarkdown>coursesITaught</NameMarkdown> ={" "}
            <ArrayMarkdown>
              [<StringMarkdown>JS101</StringMarkdown>,{" "}
              <StringMarkdown>Front-end Essentials</StringMarkdown>]
            </ArrayMarkdown>
            ;
          </p>
        </div>
      </CodeTemplate>
    </div>
  );
};

export default WorkHistoryPage;
