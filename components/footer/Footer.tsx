import GradientCard from "../GradientCard";

export default function Footer() {
  return (
    <GradientCard variant="bl">
      <footer className="flex items-center justify-between w-full px-11">
        <p className="text-2xl font-medium">Bogdan Li</p>
        <div className="text-xl flex gap-3 items-center">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/li-bogdan/"
            className="hover:text-red-cta hover:font-medium"
          >
            Linkedin
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/bogdan.js/"
            className="hover:text-red-cta hover:font-medium"
          >
            Instagram
          </a>
          <a
            target="_blank"
            href="https://github.com/BogdanLi"
            className="hover:text-red-cta hover:font-medium"
          >
            Github
          </a>
        </div>
        <div className="bg-dark text-sm font-medium px-4 py-1 rounded-full flex gap-2.5 items-center border border-light-gray">
          <div className="bg-red-cta w-2.5 h-2.5 rounded-full" />
          AVAILABLE FOR JOB
        </div>
      </footer>
    </GradientCard>
  );
}
