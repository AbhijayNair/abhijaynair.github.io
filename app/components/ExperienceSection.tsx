"use client";
import React, { useState } from "react";
import { ingenid } from "./experience_bullets/ingenid";
import { vbg } from "./experience_bullets/vbg";
import { rit } from "./experience_bullets/rit";
import { tcs } from "./experience_bullets/tcs";
import { uMum } from "./experience_bullets/uMum";
import { ingenid_ft } from "./experience_bullets/ingenid_ft";

const ExperienceSection = () => {
  const [uMumVisible, setUMumVisible] = useState(false);
  const [ritVisible, setRitVisible] = useState(false);
  const [tcsVisible, setTcsVisible] = useState(false);
  const [vbgVisible, setVbgVisible] = useState(false);
  const [ingenIdVisible, setIngenIdVisible] = useState(false);
  const [ingenIdFtVisible, setIngenIdFtVisible] = useState(false)
  return (
    <section className="lg:py-20 py-10" id="experience">
      <div>
        <h2 className="text-center text-secondary text-4xl sm:text-5xl lg:text-6xl lg:leading-snug font-semibold">
          Education & Experience
        </h2>
        <div className="py-4">
          <ul className="flex flex-col space-y-5">
            {ingenid(setIngenIdFtVisible, ingenIdFtVisible)}
            {ingenid(setIngenIdVisible, ingenIdVisible)}
            {vbg(setVbgVisible, vbgVisible)}
            {tcs(setTcsVisible, tcsVisible)}
            {rit(setRitVisible, ritVisible)}
            {uMum(setUMumVisible, uMumVisible)}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
