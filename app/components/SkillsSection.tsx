import React from "react";
import Image from "next/image";

const SkillsSection = () => {
  return (
    <section className="lg:py-16 py-14" id="skills">
      <div className="text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-4xl sm:text-5xl lg:text-6xl lg:leading-snug font-semibold">
        <h2>Skills</h2>
      </div>
      <div className="container flex justify-around py-6">
        <div className="mx-3 py-2">
          <h4 className="text-2xl text-middle text-center">
            Programming Languages
          </h4>
          <div className="grid grid-cols-2">
            <div className="col-span-1 place-self-center">
              <ul>
                <li className="py-2">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                    alt="javascript"
                    width={48}
                    height={48}
                  />
                </li>
                <li className="py-2">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                    alt="python"
                    width={48}
                    height={48}
                  />
                </li>
                <li className="py-2">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg"
                    alt="kotlin"
                    width={48}
                    height={48}
                  />
                </li>
              </ul>
            </div>
            <div className="col-span-1 place-self-center">
              <ul>
                <li className="py-2">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                    alt="java"
                    width={48}
                    height={48}
                  />
                </li>
                <li className="py-2">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg"
                    alt="dart"
                    width={48}
                    height={48}
                  />
                </li>
                <li className="py-2">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
                    alt="c++"
                    width={48}
                    height={48}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mx-3 py-2">
          <h4 className="text-2xl text-secondary text-center">
            Frameworks & Tools
          </h4>

          <div className="grid grid-cols-2">
            <div className="col-span-1 place-self-center">
              <ul>
                <li className="py-2">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
                    alt="docker"
                    width={48}
                    height={48}
                  />
                </li>
                <li className="py-2">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
                    alt="flutter"
                    width={48}
                    height={48}
                  />
                </li>
                <li className="py-2">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg"
                    alt="firebase"
                    width={48}
                    height={48}
                  />
                </li>
                <li className="py-2">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-plain-wordmark.svg"
                    alt="pytorch"
                    width={48}
                    height={48}
                  />
                </li>
              </ul>
            </div>
            <div className="col-span-1 place-self-center">
              <ul>
                <li className="py-2">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg"
                    alt="mongodb"
                    width={48}
                    height={48}
                  />
                </li>

                <li className="py-2">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg"
                    alt="nodejs"
                    width={48}
                    height={48}
                  />
                </li>
                <li className="py-2">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg"
                    alt="aws"
                    width={48}
                    height={48}
                  />
                </li>
                <li className="py-2">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
                    alt="react"
                    width={48}
                    height={48}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
