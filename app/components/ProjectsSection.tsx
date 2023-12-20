import React from "react";
import { gaitProject } from "./projects/gaitProject";
import { potholeProject } from "./projects/pothole";
import { bloodBankProject } from "./projects/bloodBankProject";

export const ProjectsSection = () => {
  return (
    <section className="lg:py-20" id="projects">
      <div className="text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-4xl sm:text-5xl lg:text-6xl lg:leading-snug font-semibold">
        <h2>Projects</h2>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-12 space-x-2 space-y-2 p-2 mt-2">
        <div className="col-span-4 place-self-center">{gaitProject}</div>
        <div className="col-span-4 place-self-center"> {potholeProject}</div>
        <div className="col-span-4 place-self-center"> {bloodBankProject}</div>
      </div>
    </section>
  );
};

export default ProjectsSection;
