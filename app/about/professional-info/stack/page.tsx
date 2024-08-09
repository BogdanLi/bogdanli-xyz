import {
  ArrayMarkdown,
  KeywordMarkdown,
  NameMarkdown,
  StringMarkdown,
} from "@/components/Markdown/CodeMarkdown";
import CodeTemplate from "@/components/Templates/CodeTemplate";

const StackPage = () => {
  return (
    <div className="h-full w-full">
      <CodeTemplate lines={0} name="stack">
        <p>
          <KeywordMarkdown>let</KeywordMarkdown>{" "}
          <NameMarkdown>programmingLanguages</NameMarkdown> ={" "}
          <ArrayMarkdown>
            [<StringMarkdown>JavaScript</StringMarkdown>,{" "}
            <StringMarkdown>TypeScript</StringMarkdown>,{" "}
            <StringMarkdown>Kotlin</StringMarkdown>,{" "}
            <StringMarkdown>Python</StringMarkdown>]
          </ArrayMarkdown>
          ;
        </p>
        <p>
          <KeywordMarkdown>let</KeywordMarkdown>{" "}
          <NameMarkdown>frontEndTechnologies</NameMarkdown> ={" "}
          <ArrayMarkdown>
            [<StringMarkdown>React.js</StringMarkdown>,{" "}
            <StringMarkdown>Next.js</StringMarkdown>,{" "}
            <StringMarkdown>Vite</StringMarkdown>]
          </ArrayMarkdown>
          ;
        </p>
        <p>
          <KeywordMarkdown>let</KeywordMarkdown>{" "}
          <NameMarkdown>librariesAndTools</NameMarkdown> ={" "}
          <ArrayMarkdown>
            [<StringMarkdown>Redux Toolkit</StringMarkdown>,{" "}
            <StringMarkdown>Zustand</StringMarkdown>,{" "}
            <StringMarkdown>react-hook-form</StringMarkdown>,{" "}
            <StringMarkdown>Zod</StringMarkdown>,{" "}
            <StringMarkdown>three.js</StringMarkdown>,{" "}
            <StringMarkdown>react-three</StringMarkdown>,{" "}
            <StringMarkdown>react-hot-toast</StringMarkdown>,{" "}
            <StringMarkdown>react-router</StringMarkdown>,{" "}
            <StringMarkdown>react-i18next</StringMarkdown>,{" "}
            <StringMarkdown>next-intl</StringMarkdown>,{" "}
            <StringMarkdown>swiper.js</StringMarkdown>,{" "}
            <StringMarkdown>react-hot-toast</StringMarkdown>,{" "}
            <StringMarkdown>react-router</StringMarkdown>]
          </ArrayMarkdown>
          ;
        </p>
      </CodeTemplate>
    </div>
  );
};

export default StackPage;
