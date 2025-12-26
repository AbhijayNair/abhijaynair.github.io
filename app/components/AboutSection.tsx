import React from "react";

const AboutSection = () => {
  return (
    <>
      <section className="" id="about">
        <div className="grid grid-cols-2 sm:grid-cols-12 text-white lg:py-20">
          <div className="col-span-4 py-4 sm:pt-6 sm:text-center text-center justify-self-start">
            <h2 className="text-left text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-4xl sm:text-5xl lg:text-6xl lg:leading-snug font-semibold">
              About Me
            </h2>
          </div>
          <div className="text-left col-span-8 text-white lg:text-xl pt-6">
            {`I hold a Master's degree in Computer Science with a specialization in Artificial Intelligence,
            having graduated in May 2024. 
            My studies encompassed a broad range of Computer Vision applications, particularly in depth and pose estimation, generative AI
            and AI detection utilizing the frequency spectrum. Additionally, I have a keen interest in metaheuristics and optimization algorithms,
            which I have explored through various projects and academic pursuits.`}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
