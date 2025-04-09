import Service from "@/components/home/cards/Service";
import Work from "@/components/home/cards/Work";
import CTA from "@/components/home/hero/CTA";

import Image from "next/image";

import { MoveUpRight } from "lucide-react";
import mindslinks from "@pics/mindslinks.png";
import mistral from "@pics/mistral.png";
import pfp from "@pics/pfp.jpg";
import resume from "@pics/resume.png";
import JsonLd from "@/components/json-ld";

export default function Home() {
  return (
    <>
      <section className="card flex flex-col gap-14">
        <div className="flex flex-col-reverse items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-secondary-text text-2xl font-medium">
            React Front-end Developer
          </p>

          <div className="border-light-gray bg-dark flex items-center gap-2.5 rounded-full border px-4 py-1 text-sm font-medium">
            <div className="bg-red-cta h-2.5 w-2.5 rounded-full" />
            AVAILABLE FOR JOB
          </div>
        </div>

        <div className="flex flex-col-reverse items-start justify-between gap-8 sm:flex-row sm:items-end">
          <article>
            <h1 className="mb-2.5 text-2xl font-semibold sm:mb-4 sm:text-4xl">
              I'm Bogdan Li
            </h1>
            <p className="text-secondary-text mb-4 sm:mb-7 sm:w-1/2 sm:text-xl">
              I develop web apps with stunning ui and teach people programming
            </p>

            <CTA />
          </article>

          <div className="flex items-center justify-center rounded-full border border-[#3F3E3E] bg-[#2c2c2c] p-2">
            <div className="relative h-52 w-52 overflow-hidden rounded-full">
              <Image src={pfp.src} alt="pfp" fill />
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-5 sm:grid-cols-4 sm:grid-rows-6">
        <Work />

        <Service />

        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "mindslinks",
            description: "Linktree alternative for mindstech.io",
            image: "https://bogdan-li.xyz/pics/mindslinks.png",
            datePublished: new Date("09-04-2025"),
            dateModified: new Date("09-04-2025"),
            author: {
              "@type": "Person",
              name: "Bogdan Li",
            },
          }}
        />
        <a
          href="https://github.com/BogdanLi/mindslinks"
          target="_blank"
          className="card group col-span-2 flex flex-col justify-between sm:row-span-2"
        >
          <div className="flex items-center justify-between">
            <div className="space-y-2 sm:space-y-4">
              <p className="font-semibold sm:text-2xl">mindslinks</p>
              <p className="text-secondary-text text-xs sm:text-xl">
                Linktree alternative for mindstech.io
              </p>
            </div>

            <button className="bg-red-cta rounded-full border-2 border-black p-2">
              <MoveUpRight className="h-4 w-4" />
            </button>
          </div>

          <div className="relative aspect-[15/11] min-w-72 transition-all duration-300 group-hover:scale-125">
            <Image src={mindslinks.src} alt={"mindslinks"} fill />
          </div>
        </a>

        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Le Chat Mistral",
            description:
              "Application for your browser that uses AI to make your experience better.",
            image: "https://bogdan-li.xyz/pics/mistral.png",
            datePublished: new Date("09-04-2025"),
            dateModified: new Date("09-04-2025"),
            author: {
              "@type": "Person",
              name: "Bogdan Li",
            },
          }}
        />
        <a
          href="https://github.com/BogdanLi/mindslinks"
          target="_blank"
          className="card group col-span-2 row-span-3 flex flex-col justify-between overflow-hidden pb-0"
        >
          <div className="flex items-center justify-between">
            <div className="space-y-2 sm:space-y-4">
              <p className="font-semibold sm:text-2xl">Le Chat Mistral</p>
              <p className="text-secondary-text text-xs sm:w-2/3 sm:text-xl">
                Application for your browser that uses AI to make your
                experience better.
              </p>
            </div>

            <button className="bg-red-cta rounded-full border-2 border-black p-2">
              <MoveUpRight className="h-4 w-4" />
            </button>
          </div>

          <div className="relative aspect-[8/11] transition-all duration-300 group-hover:scale-125">
            <Image src={mistral.src} alt={"mistral"} fill />
          </div>
        </a>

        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "React Resume",
            description: "Web verison of resume powered by React and Supabase",
            image: "https://bogdan-li.xyz/pics/resume.png",
            datePublished: new Date("09-04-2025"),
            dateModified: new Date("09-04-2025"),
            author: {
              "@type": "Person",
              name: "Bogdan Li",
            },
          }}
        />
        <a
          href="https://github.com/BogdanLi/mindslinks"
          target="_blank"
          className="card group col-span-2 row-span-2 flex flex-col justify-between"
        >
          <div className="flex items-center justify-between">
            <div className="space-y-2 sm:space-y-4">
              <p className="font-semibold sm:text-2xl">Web Resume</p>
              <p className="text-secondary-text text-xs sm:w-2/3 sm:text-xl">
                Web verison of resume powered by React and Supabase
              </p>
            </div>

            <button className="bg-red-cta rounded-full border-2 border-black p-2">
              <MoveUpRight className="h-4 w-4" />
            </button>
          </div>

          <div className="relative aspect-[15/11] min-w-72 transition-all duration-300 group-hover:scale-125">
            <Image src={resume.src} alt={"resumes"} fill />
          </div>
        </a>
      </section>
    </>
  );
}
