"use client"

import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      title: "Life Expectancy Indicators",
      description:
        "Researched and analyzed global socioeconomic factors affecting life expectancy in countries. ",
      image: "/images/LEI-preview.png?height=400&width=600",
      tags: ["Python", "Pandas", "Altair", "D3.js", "Plotly", "HTML/CSS", "Jupyter Notebook"],
      period: "March 2025 – April 2025",
      githubUrl: "https://patrickyu117.github.io/DS4200-Final-Project/",
    },
    {
      title: "Fake Stack Overflow",
      description:
        "Developed a full-stack dynamic web application mimicking the 'Stack Overflow' website forum with added 'Communities' feature allowing users to join communities and filter posts. Supports role-based access control for user authentication with distinct permissions for general users, moderators, and administrators ensuring secure and tailored user experiences.",
      image: "/images/FSO-preview.png?height=400&width=600",
      tags: ["React", "TypeScript", "MongoDB", "Mongoose", "Jest", "Express", "Node.js", "Git"],
      period: "January 2025 – April 2025",
      githubUrl: "https://cs4530-s25-402.onrender.com/",
    },
  ]

  return (
    <section id="projects" ref={ref} className="py-20 bg-sage-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-4 text-center">My Projects</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my technical skills and problem-solving abilities.
          </p>

          <div className="space-y-20">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`grid md:grid-cols-2 gap-8 items-center transition-all duration-1000 ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className={index % 2 === 0 ? "md:order-1" : "md:order-2"}>
                  <div className="relative group">
                    <div className="overflow-hidden rounded-lg shadow-lg border-2 border-sage-100">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute inset-0 bg-sage-800/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex space-x-4">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white text-sage-800 p-3 rounded-full hover:bg-sage-100 transition-colors"
                        >
                          <Github size={20} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 0 ? "md:order-2" : "md:order-1"}>
                  <h3 className="text-2xl font-semibold text-sage-700 mb-2">{project.title}</h3>
                  <p className="text-gray-500 mb-4">{project.period}</p>
                  <p className="text-gray-600 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="bg-sage-100 text-sage-700 px-3 py-1 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <Button variant="outline" className="border-sage-600 text-sage-600 hover:bg-sage-50" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View Live Website
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button variant="outline" className="border-sage-600 text-sage-600 hover:bg-sage-50" size="lg" asChild>
              <a href="https://github.com/cynthiachenn" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View More on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

