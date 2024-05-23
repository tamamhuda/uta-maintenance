"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";

export function SparklesView({ children }) {
  return (
    <div className="w-auto relative bg-transparent flex flex-col items-center justify-center mt-4">
      {/* <h1 className="md:text-1xl text-1xl lg:text-3xl font-bold text-center text-white relative z-20">
        Aceternity
      </h1> */}
      {children}
      <div className="w-full  items-center justify-center  h-50 absolute">
        {/* Gradients */}

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={120}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-transparent[mask-image:radial-gradient(350px_200px_at_top,transparent_50%,white)]"></div>
      </div>
    </div>
  );
}
