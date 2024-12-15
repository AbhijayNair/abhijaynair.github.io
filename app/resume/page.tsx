import { Document } from "react-pdf"
import { Navbar } from "../components/Navbar"
import Footer from "../components/Footer"

export default function Resume() {
    <div className="mb-0 bg-[#141414] scroll-smooth">
    <main className="flex min-h-screen flex-col bg-[#141414]">
      <Navbar />
        <Document file="https://drive.google.com/file/d/1J4bAhfhEcadOhS-wGRwNqL9WOcN8nfVU/view?usp=drive_link" />
    </main>
    <Footer />
  </div>
}