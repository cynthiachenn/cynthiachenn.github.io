import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/home/about"
import Contact from "@/components/home/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}

