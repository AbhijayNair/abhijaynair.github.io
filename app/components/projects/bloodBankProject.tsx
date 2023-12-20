"use client";
import React from "react";

export const bloodBankProject = (
  <div
    className="hover:border hover:border-[#33353F] rounded-lg w-full px-4 py-4 hover:bg-[#18191E]"
    onClick={() =>
      window.open("https://github.com/AbhijayNair/Blood-Bank_App", "_blank")
    }
  >
    <div className="flex flex-col flex-wrap space-y-2">
      <div className="flex justify-end">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M21 9.00001L21 3.00001M21 3.00001H15M21 3.00001L12 12M10 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V14"
            stroke="#4b5563"
            strokeWidth="2"
          />
        </svg>
      </div>
      <h4 className="text-center text-2xl font-semibold text-gray-400 ">
        Blood Donation Campaign App
      </h4>
      <p className="text-left text-sm text-gray-600">
        Developed a mobile app for android devices using Firebase cloud services
        to enable real-time push notifications, instant messaging, user
        registration.
      </p>
      <ul className="flex flex-row flex-wrap justify-center w-full space-x-2">
        <li className="text-slate-400 col-span-4 border border-slate-500 rounded-3xl w-fit mt-2 hover:bg-secondary hover:text-white">
          <div className="py-2 px-6 text-center font-medium">Java</div>
        </li>
        <li className="text-slate-400 col-span-4 border border-slate-500 rounded-3xl w-fit mt-2 hover:bg-middle hover:text-black">
          <div className="py-2 px-6 text-center font-medium">Firebase</div>
        </li>
      </ul>
    </div>
  </div>
);
