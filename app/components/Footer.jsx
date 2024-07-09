import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-10 flex justify-between">
        <span>&copy;Abhijay Nair, 2024</span>
        <p className="text-slate-600 ml-3">&#9749; Brewed with 	&#10084; using <span className="font-semibold">Next.js</span> and <span className="font-semibold">tailwindcss</span></p>
      </div>
    </footer>
  );
};

export default Footer;
