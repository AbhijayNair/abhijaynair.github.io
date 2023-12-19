"use client";
import React from "react";

export function vbg(
  setVbgVisible: React.Dispatch<React.SetStateAction<boolean>>,
  vbgVisible: boolean
) {
  return (
    <li
      className="border border-[#33353F] rounded-lg w-full px-4 py-4 bg-[#18191E]"
      onClick={() => setVbgVisible(!vbgVisible)}
    >
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <h4 className="px-2 text-2xl font-semibold text-middle">
            Voice Biometrics Group
          </h4>
          <h6 className="px-2 text-gray-400">Summer Intern</h6>
          {vbgVisible && (
            <div className="flex flex-col py-1">
              <div className="flex flex-row justify-around rounded-md w-fit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-map-pin"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="#8fa3b8"
                  fill="none"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                  <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                </svg>
                <div className="ml-2 text-slate-400">Rochester, New York</div>
              </div>
              <div className="px-2 py-1 text-slate-300">
                <ul className="list-disc px-4">
                  <li className="sm:text-justify">
                    Developed a cross-platform mobile app to augment their
                    supported platforms to perform voice authentication (from
                    the previous IVR and WebRTC based systems).
                  </li>
                  <li className="sm:text-justify">
                    Redesigned their internal tools architecture and developed
                    websites using the MERN stack
                  </li>
                </ul>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-12 space-x-1 space-y-1 w-fit">
                <div className="text-slate-400 col-span-4 place-self-center border border-slate-500 rounded-3xl w-fit py-2 px-6 text-center font-medium hover:bg-primary hover:text-black">
                  Flutter
                </div>
                <div className="text-slate-400 col-span-4 place-self-center border border-slate-500 rounded-3xl w-fit py-2 px-4 text-center font-medium hover:bg-middle hover:text-black">
                  JavaScript
                </div>
                <div className="text-slate-400 col-span-4 place-self-center border border-slate-500 rounded-3xl w-fit py-2 px-4 text-center font-medium hover:bg-primary hover:text-black">
                  MongoDB
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex flex-row">
            <h6 className="col-span-4 invisible lg:visible px-2 text-gray-300">
              2022
            </h6>
            <div
              className={`transition-all transform ${
                vbgVisible ? "rotate-180" : "rotate-0"
              }`}
            >
              <svg
                className="icon icon-tabler icon-tabler-chevron-down"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6 9l6 6l6 -6" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
