"use client";
import React, { useEffect, useState } from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { TypewriterEffectSmooth } from "./ui/typewrite-effect";
import { Button } from "./ui/moving-border";
import { ReactTyped } from "react-typed";
import { SparklesCore } from "./ui/sparkles";
import { SparklesView } from "./SparklesView";
const Hero = () => {
  const words = [
    {
      text: "SITE",
    },
    {
      text: "UNDER",
    },
    {
      text: "CONSTRUCTION",
    },
  ];

  const [isTypeIndicatior, setIsTypeIndicator] = useState(3);

  useEffect(() => {
    if (isTypeIndicatior !== 0) {
      const interval = setInterval(() => {
        setIsTypeIndicator((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isTypeIndicatior]);

  return (
    <div className="pb-20">
      {/* <div className="">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />

        <Spotlight className="top-28 left-80 h-[80vh] w-[50vh]  " fill="blue" />

        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vh]"
          fill="purple"
        />
      </div> */}

      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2]  flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center items-center relative my-20 z-10">
        <div
          className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center
       "
        >
          <Button duration={4000} className="px-4 h-12 opacity-95 ">
            <TextGenerateEffect
              words="UTA | "
              className="text-lg sm:text-2xl md:text-3xl  "
            />
            {isTypeIndicatior > 0 ? (
              <TextGenerateEffect
                words=" .SH"
                className="text-lg sm:text-2xl md:text-3xl ml-1"
              />
            ) : (
              <ReactTyped
                className="text-lg sm:text-2xl md:text-3xl  font-bold text-slate-50 uppercase ml-2 tracking-widest"
                strings={["Portofolio", "Blog", "Project", ".SH"]}
                typeSpeed={100}
                //   className="w-auto"
                backDelay={1000}
                cursorChar=""
                backSpeed={60}
                //   startDelay={1000}
                loop
              />
            )}
          </Button>

          <SparklesView>
            <TypewriterEffectSmooth
              className="relative z-20"
              cursorClassName={
                isTypeIndicatior > 0 ? "visible w-[4px]" : `invisible -ml-1`
              }
              words={words}
            />
          </SparklesView>
        </div>
      </div>
    </div>
  );
};

export default Hero;
