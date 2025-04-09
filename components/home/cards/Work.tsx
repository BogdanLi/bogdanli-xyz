import { cn } from "@/lib/utils";
import { IWork } from "@/types/work.type";

const mock: IWork[] = [
  {
    position: "Course Instructor",
    company: "skills accelerator Ilmhona",
    date: "May 2023 - Dec 2024",
  },
  {
    position: "Mentor",
    company: "Megafon Academy",
    date: "Nov 2023 - Mar 2024",
  },
  {
    position: "Front-end Developer",
    company: "Livo.dev",
    date: "Jan 2024 - Oct 2024",
  },
  {
    position: "Course Instructor",
    company: "Technohub Dushanbe",
    date: "Oct 2024 - Nov 2024",
  },
  {
    position: "Fullstack Developer",
    company: "GeCraft",
    date: "Sep 2024 - Dec 2024",
  },
  {
    position: "Course Instructor",
    company: "mindstech.io",
    date: "Apr 2025 - Present",
  },
];

export default function Work() {
  return (
    <article className="card col-span-2 space-y-9 sm:row-span-3 sm:space-y-16">
      <h2 className="text-secondary-text flex items-center gap-2 font-medium sm:text-2xl">
        <div className="bg-secondary-text h-2.5 w-2.5 rounded-full" />
        Recent Work
      </h2>

      <div className="flex flex-col-reverse gap-12">
        {mock.map((work, index) => (
          <div key={work.date} className="flex items-center justify-between">
            <div className="space-y-3">
              <p
                className={cn(
                  "w-fit font-medium sm:text-2xl",
                  index === mock.length - 1 ? "text-red-cta font-medium" : "",
                )}
              >
                {work.position}
              </p>
              <p className="text-secondary-text hidden sm:block sm:text-xl">
                {work.date}
              </p>
              <div className="text-secondary-text sm:hidden">
                <p>{work.date.split("-")[0]}</p>
                <p>{work.date.split("-")[1]}</p>
              </div>
            </div>

            <p className="text-secondary w-fit text-end sm:text-xl">
              {work.company}
            </p>
          </div>
        ))}
      </div>
    </article>
  );
}
