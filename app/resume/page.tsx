'use client';
import { Navbar } from "../components/Navbar"
import { useState, useEffect } from "react";
import Footer from "../components/Footer"
import { Suspense } from "react";

export default function Resume() {
  const [pdfHeight, setPdfHeight] = useState(0);

  useEffect(() => {
    const updatePdfHeight = () => {
      const windowHeight = window.innerHeight;
      const footerHeight = 32; // Adjust this value based on your actual footer height
      const newHeight = windowHeight - footerHeight;
      setPdfHeight(newHeight);
    };

    updatePdfHeight();
    window.addEventListener('resize', updatePdfHeight);

    return () => window.removeEventListener('resize', updatePdfHeight);
  }, []);
  return (<div className="mb-0 bg-[#141414] scroll-smooth">
      <main className="flex min-h-screen flex-col bg-[#141414]">
          <Suspense fallback={<>Loading...</>}>
          <main className="flex flex-col items-center bg-[#141414]">
            <div className="w-full max-w-5xl overflow-hidden">
              <iframe
                src="./JayNair_resume.pdf"
                className="w-full border-none"
                style={{ height: `${pdfHeight}px` }}
                title="Resume PDF"
              />
            </div>
          </main>
          </Suspense>
      </main>
      <Footer />
    </div>)
}