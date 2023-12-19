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
            A Master&apos;s in Computer Science student on track to graduate in
            May 2024. Focussing in Artificial Intelligence, I have a holistic
            experience in Computer Vision applications involving pose
            estimation, image analysis and classification using the frequency
            spectrum.
            <br />
            While I continue to honor my skills in deep learning, I&apos;ve
            always had a profound interest in developing frontend applications,
            primarily mobile but I have been delving into web development
            recently in hopes of reaching a larger user base.
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
