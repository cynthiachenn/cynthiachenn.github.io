"use client"

import { useEffect, useState } from "react"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
  }, [])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-white to-sage-50 pt-16"
    >
      <div
        className={`container mx-auto px-4 py-16 transition-all duration-1000 transform ${
          visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-sage-800 mb-6">
            Hey, I'm{" "}
            <span className="text-sage-600 relative">
              Cynthia Chen
              <span className="absolute bottom-0 left-0 w-full h-1 bg-sage-300"></span>
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-sage-600 mb-8">CS & Fintech Student @ Northeastern University</p>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Passionate about software dev, reading, gaming, and other cool things in life that bring me joy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-sage-600 hover:bg-sage-700 text-white" size="lg" asChild>
              <Link href="/resume">View My Resume</Link>
            </Button>
            <Button variant="outline" className="border-sage-600 text-sage-600 hover:bg-sage-50" size="lg" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-sage-600 hover:text-sage-800">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  )
}

