import Service from "@/components/home/cards/Service";
import Work from "@/components/home/cards/Work";
import CTA from "@/components/home/hero/CTA";

import Image from "next/image";

import { MoveUpRight } from "lucide-react";
import mindslinks from "@pics/mindslinks.png";
import mistral from "@pics/mistral.png";
import pfp from "@pics/pfp.jpg";
import resume from "@pics/resume.png";

export default function Home() {
  return (
    <>
      <section className="card flex flex-col gap-14">
        <div className="items-center flex justify-between">
          <p className="text-secondary-text font-medium text-2xl">
            React Front-end Developer
          </p>

          <div className="bg-dark text-sm font-medium px-4 py-1 rounded-full flex gap-2.5 items-center border border-light-gray">
            <div className="bg-red-cta w-2.5 h-2.5 rounded-full" />
            AVAILABLE FOR JOB
          </div>
        </div>

        <div className="flex justify-between items-end">
          <article>
            <h1 className="text-4xl font-semibold mb-4">I'm Bogdan Li</h1>
            <p className="text-secondary-text text-xl w-1/2 mb-7">
              I develop web apps with stunning ui and teach people programming
            </p>

            <CTA />
          </article>

          <div className="p-2 bg-[#2c2c2c] border border-[#3F3E3E] rounded-full flex items-center justify-center">
            <div className="w-52 h-52 relative rounded-full overflow-hidden">
              <Image src={pfp.src} alt="pfp" fill />
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-4 gap-5 grid-rows-6">
        <Work />

        <Service />

        <a
          href="https://github.com/BogdanLi/mindslinks"
          target="_blank"
          className="card col-span-2 row-span-2 flex flex-col justify-between group"
        >
          <div className="flex items-center justify-between">
            <div className="space-y-4">
              <p className="text-2xl font-semibold">mindslinks</p>
              <p className="text-secondary-text text-xl">
                Linktree alternative for mindstech.io
              </p>
            </div>

            <button className="bg-red-cta p-2 rounded-full border-2 border-black">
              <MoveUpRight className="w-4 h-4" />
            </button>
          </div>

          <div className="relative min-w-72 aspect-[15/11] group-hover:scale-125 transition-all duration-300">
            <Image src={mindslinks.src} alt={"mindslinks"} fill />
          </div>
        </a>

        <a
          href="https://github.com/BogdanLi/mindslinks"
          target="_blank"
          className="card col-span-2 row-span-3 flex flex-col justify-between group overflow-hidden pb-0"
        >
          <div className="flex items-center justify-between">
            <div className="space-y-4">
              <p className="text-2xl font-semibold">Le Chat Mistral</p>
              <p className="text-secondary-text text-xl w-2/3">
                Application for your browser that uses AI to make your
                experience better.
              </p>
            </div>

            <button className="bg-red-cta p-2 rounded-full border-2 border-black">
              <MoveUpRight className="w-4 h-4" />
            </button>
          </div>

          <div className="relative  aspect-[8/11] group-hover:scale-125 transition-all duration-300">
            <Image src={mistral.src} alt={"mistral"} fill />
          </div>
        </a>

        <a
          href="https://github.com/BogdanLi/mindslinks"
          target="_blank"
          className="card col-span-2 row-span-2 flex flex-col justify-between group"
        >
          <div className="flex items-center justify-between">
            <div className="space-y-4">
              <p className="text-2xl font-semibold">Le Chat Mistral</p>
              <p className="text-secondary-text text-xl w-2/3">
                Application for your browser that uses AI to make your
                experience better.
              </p>
            </div>

            <button className="bg-red-cta p-2 rounded-full border-2 border-black">
              <MoveUpRight className="w-4 h-4" />
            </button>
          </div>

          <div className="relative min-w-72 aspect-[15/11] group-hover:scale-125 transition-all duration-300">
            <Image src={resume.src} alt={"resume"} fill />
          </div>
        </a>
      </section>
    </>
  );
}
