"use client";
import React from "react";

export function uMum(
  setUMumVisible: React.Dispatch<React.SetStateAction<boolean>>,
  uMumVisible: boolean
) {
  return (
    <li
      className={`border border-[#33353F] rounded-lg w-full px-4 py-4 bg-[#18191E]`}
      onClick={() => setUMumVisible(!uMumVisible)}
    >
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <h4 className="col-span-4 px-2 text-2xl font-semibold text-primary">
            University of Mumbai
          </h4>
          <h6 className="col-span-4 px-2 text-gray-400">
            Bachelor of Engineering in Computer Engineering
          </h6>
          {uMumVisible && (
            <div className="flex flex-col px-2 py-1">
              <div className="flex flex-row space-between">
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
                <div className="ml-2 text-slate-400">Mumbai, India</div>
              </div>
              <div className="px-2 py-1 text-slate-300">
                <ul className="list-disc px-4">
                  <li>
                    Researched and published a deep learning pipeline that
                    classifies people based on their gait pattern
                  </li>
                  <li>
                    Relevent Coursework: Artificial Intelligence and Soft
                    Computing, Machine Learning, Cloud Computing
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex flex-row">
            <h6 className="col-span-4 invisible lg:visible px-2 text-gray-300">
              2016-2020
            </h6>
            <div
              className={`transition-all transform ${
                uMumVisible ? "rotate-180" : "rotate-0"
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
