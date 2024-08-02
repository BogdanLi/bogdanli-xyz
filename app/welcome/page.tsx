import Image from "next/image";

import profile from "@/assets/images/profilepic.png";
import RadialGradient from "@/components/UI/RadialGradient";
import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <section className="container relative mx-auto my-auto flex h-full items-center justify-center gap-12 overflow-visible px-7 text-white lg:px-0">
        <RadialGradient
          color="#43d9ad"
          bgColor="transparent"
          start={0}
          end={70}
          className="-top-[12%] end-1/4 z-10 h-96 w-96"
        />
        <RadialGradient
          color="#C98BDF"
          bgColor="transparent"
          start={0}
          end={70}
          className="-end-1/2 z-10 h-96 w-96 lg:bottom-0 lg:end-32"
        />
        <div className="z-10 space-y-12">
          <div>
            <p className="text-lg">Hi all. I am</p>
            <h1 className="text-[62px]">Bogdan Li</h1>
            <p className="text-xl text-secondary-300 lg:text-[32px]">
              {"> Front-end developer"}
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-secondary-100">{"// check my github page: "}</p>
            <p>
              <span className="text-secondary-300">const </span>
              <span className="text-accent-200">github</span> ={" "}
              <Link
                href={"https://github.com/BogdanLi"}
                target="_blank"
                className="text-accent-100"
              >
                &quot;https://github.com/BogdanLi&quot;
              </Link>
            </p>
          </div>
        </div>
        <div className="z-10 hidden lg:block">
          <Image
            src={profile.src}
            alt=""
            priority
            width={300}
            height={0}
            className="rounded-full"
          />
        </div>
      </section>
    </>
  );
};

export default HomePage;
