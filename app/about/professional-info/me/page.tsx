import CodeTemplate from "components/Templates/CodeTemplate";

const ProfessionalMePage = () => {
  return (
    <div className="h-full w-full">
      <CodeTemplate lines={12} name="me.tsx">
        <div className="hidden lg:block">
          <div>
            {
              "// Hey there! I'm a front-end dev who's been around the block with all sorts of JavaScript goodies. "
            }
          </div>
          <div>
            {
              "// React.js is my jam, but I'm also pretty handy with TypeScript, Tailwind CSS, and Material UI."
            }
          </div>
          <div>{"// "}</div>
          <div>
            {
              "// I've worked on all kinds of projects and I'm always pumped to learn new stuff. "
            }
          </div>
          <div>
            {
              "// I've whipped up some pretty slick landing pages and admin dashboards in my time."
            }
          </div>
          <div>{"// "}</div>
          <div>
            {
              "// What I'm really good at? Picking up new tech fast and making things happen."
            }
          </div>
          <div>
            {
              "// No matter what crazy new framework or tool pops up, I'm on it like white on rice."
            }
          </div>
          <div>{"// "}</div>
          <div>
            {
              "// Basically, I'm your go-to person for turning wild ideas into awesome websites."
            }
          </div>
          <div>{"// Let's build something cool together!"}</div>
        </div>
        <div className="overflow-y-scroll lg:hidden">
          <p>
            Hey there! I&apos;m a front-end dev who&apos;s been around the block
            with all sorts of JavaScript goodies. React.js is my jam, but
            I&apos;m also pretty handy with TypeScript, Tailwind CSS, and
            Material UI.
          </p>
          <p>
            I&apos;ve worked on all kinds of projects and I&apos;m always pumped
            to learn new stuff. I&apos;ve whipped up some pretty slick landing
            pages and admin dashboards in my time.
          </p>
          <p>
            What I&apos;m really good at? Picking up new tech fast and making
            things happen. No matter what crazy new framework or tool pops up,
            I&apos;m on it like white on rice.
          </p>
          <p>
            Basically, I&apos;m your go-to person for turning wild ideas into
            awesome websites. Let&apos;s build something cool together!
          </p>
        </div>
      </CodeTemplate>
    </div>
  );
};

export default ProfessionalMePage;
