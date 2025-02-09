"use client";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { Spotlight } from "../ui/spotlight";
import { TextRevealCard } from "../ui/text-reveal-card";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
export default function Header() {
  const words = [
    {
      text: "I",
    },
    {
      text: "am",
    },
    {
      text: "a",
    },
    {
      text: "Frontend",
    },
    {
      text: "Developer",
    },
  ];

  return (
    <div className="h-[30rem] w-full rounded-md flex md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="flex flex-col p-10 items-center justify-center h-[auto]  ">
        <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
          Hello I'm
        </p>
        <TextRevealCard
          text="Mujammil Shaikh"
          revealText="Mujammil Shaikh"
          className="p-0 m-0 w-full flex bg-transparent justify-center  border-none h-25"
        ></TextRevealCard>
        <TypewriterEffectSmooth words={words} className=" mb- mt-0" />
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 gap-4">
          <div className=" flex justify-center text-center">
            <HoverBorderGradient
              containerClassName="rounded-lg border-1 border-transparent bg-gradient-to-r from-cyan-400 to-violet-600 bg-clip-border w-[180px] h-[50px] "
              as="button"
              className="dark:bg-black w-[178px] h-[48px] justify-center bg-white text-black dark:text-white flex items-center space-x-2"
            >
              <span>Download CV</span>
            </HoverBorderGradient>
          </div>

          <HoverBorderGradient
            containerClassName="rounded-lg border-1 border-transparent bg-gradient-to-r from-cyan-400 to-violet-600 bg-clip-border w-[130px] h-[50px]"
            as="button"
            className="dark:bg-black bg-white text-black  dark:text-white flex items-center justify-center space-x-2 w-[128px] h-[48px]"
          >
            <span>Let's Talk</span>
          </HoverBorderGradient>
        </div>
      </div>
    </div>
  );
}
