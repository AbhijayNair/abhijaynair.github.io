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
          <div>
              <button
                type="submit"
                onClick={() => location.href = "#contact"}
                className="px-6 inline-block w-full py-3 sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary via-wiretapmiddle to-secondary hover:bg-slate-200 text-white"
              >
                Contact Me
              </button>
            <button
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1GogjJZBVpm0iz_KrJPAIxOuQA6MnEopu/view?usp=sharing",
                  "_blank"
                )
              }
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary via-wiretapmiddle to-secondary hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#141414] hover:bg-slate-800 rounded-full px-5 py-2">
                Resume
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-4 px-1 py-2 mt-4">
          <Image
            className=""
            width={512}
            height={512}
            src={"./heroimage.png"}
            alt="jay AI generated image"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
