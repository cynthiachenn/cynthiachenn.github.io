import Navbar from "@/components/navbar"
import Skills from "@/components/resume/skills"
import Experience from "@/components/resume/experience"
import Projects from "@/components/resume/projects"
import Extracurriculars from "@/components/resume/extracurriculars"
import Footer from "@/components/footer"
import ResumeHeader from "../../components/resume/resume-header"

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <ResumeHeader />
      <Skills />
      <Experience />
      <Projects />
      <Extracurriculars />
      <Footer />
    </main>
  )
}

