"use client";
import { Document, pdfjs } from "react-pdf"
import { Navbar } from "../components/Navbar"
import Footer from "../components/Footer"

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function Resume() {

  return (<div className="mb-0 bg-[#141414] scroll-smooth">
      <main className="flex min-h-screen flex-col bg-[#141414]">
        <Navbar />
          <Document file="JayNair_resume.pdf" />
      </main>
      <Footer />
    </div>)
}