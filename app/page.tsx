import CTA from "@/components/hero/CTA";
import pfp from "@pics/pfp.jpg";

import Image from "next/image";

export default function Home() {
  return (
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
            I develop web apps with stunning ui and amazing performance
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
  );
}
