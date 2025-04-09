import GradientCard from "../GradientCard";

export default function Footer() {
  return (
    <GradientCard variant="bl" style="h-fit sm:h-auto">
      <footer className="flex w-full flex-col-reverse items-center justify-between gap-6 px-11 sm:flex-row">
        <p className="text-2xl font-medium">Bogdan Li</p>
        <div className="flex items-center gap-3 text-xl">
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
        <div className="border-light-gray bg-dark flex items-center gap-2.5 rounded-full border px-4 py-1 text-sm font-medium">
          <div className="bg-red-cta h-2.5 w-2.5 rounded-full" />
          AVAILABLE FOR JOB
        </div>
      </footer>
    </GradientCard>
  );
}
