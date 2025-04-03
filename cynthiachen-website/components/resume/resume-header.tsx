"use client"

import { useEffect, useState } from "react"
import { FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ResumeHeader() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
  }, [])

  return (
    <section id="resume-header" className="pt-32 pb-16 bg-gradient-to-br from-white to-sage-50">
      <div
        className={`container mx-auto px-4 transition-all duration-1000 transform ${
          visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-sage-800 mb-6">My Resume</h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            An overview of the skills I've acquired through academic and professional experience with computer science and fintech.
          </p>
          <Button className="bg-sage-600 hover:bg-sage-700 text-white">
            <FileText className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  )
}