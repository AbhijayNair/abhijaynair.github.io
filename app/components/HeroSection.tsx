"use client";
import React from "react";
import Image from "next/image";
import SocialsRow from "./SocialsRow";
import Link from "next/link";

import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-2 sm:grid-cols-12">
        <div className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-snug font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Hey there! I&apos;m
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Jay",
                2000,
                "a Full Stack Dev",
                1000,
                "a Mobile Dev",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-white text-base sm:text-lg mb-6 lg:text-xl">
            Full-stack maestro, specializing in computer vision brilliance.
          </p>
          <div className="inline-block">
            <SocialsRow />
          </div>
        </div>
        <div className="col-span-4 px-1 py-2 mt-4 ">
          <div className="bg-black bg-opacity-20 rounded-full w-full sm:w-fit">
            <Image
              className="transform translate-x-2 -translate-y-8"
              width={512}
              height={512}
              src={"./heroimage.png"}
              alt="jay AI generated image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
