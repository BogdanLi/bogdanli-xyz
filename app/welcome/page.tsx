import Image from "next/image";

import profile from "@/assets/images/profilepic.png";
import RadialGradient from "@/components/UI/RadialGradient";
import Link from "next/link";
import FadeIn from "@/components/UI/Animation/FadeIn";
import FadeInStagger from "@/components/UI/Animation/FadeInStagger";
import Draggable from "@/components/UI/Animation/Dragabble";

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
          <FadeIn>
            <FadeInStagger>
              <p className="text-lg">Hi all. I am</p>
            </FadeInStagger>
            <FadeInStagger>
              <h1 className="text-[62px]">Bogdan Li</h1>
            </FadeInStagger>
            <FadeInStagger>
              <p className="text-xl text-secondary-300 lg:text-[32px]">
                {"> Front-end developer"}
              </p>
            </FadeInStagger>
          </FadeIn>
          <FadeIn>
            <div className="space-y-2">
              <FadeInStagger>
                <p className="text-secondary-100">
                  {"// check my github page: "}
                </p>
              </FadeInStagger>
              <FadeInStagger>
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
              </FadeInStagger>
            </div>
          </FadeIn>
        </div>
        <div className="z-10 hidden lg:block">
          <Draggable>
            <FadeIn>
              <Image
                src={profile.src}
                alt=""
                priority
                width={300}
                height={0}
                draggable={false}
                className="no-drag rounded-full"
              />
            </FadeIn>
          </Draggable>
        </div>
      </section>
    </>
  );
};

export default HomePage;
