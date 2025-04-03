"use client"

import { useInView } from "react-intersection-observer"
import { Briefcase } from "lucide-react"

export default function Experience() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      title: "DevOps Engineer Co-op",
      company: "Verisk Extreme Event Solutions",
      period: "July 2024 – Dec 2024",
      location: "Boston, MA",
      description: [
        "Implemented composite actions and reusable workflows in CI/CD pipelines, improving efficiency and standardizing processes across multiple repositories",
        "Enhanced security and compliance by integrating vulnerability scanning, license checks, and dependency reviews",
        "Led a large-scale transition to a new robust release strategy for 14 repositories, eliminating common issues regarding GitHub semantic versioning and retention",
      ],
    },
    {
      title: "Full-stack Software Developer Co-op",
      company: "Verisk Extreme Event Solutions",
      period: "July 2023 – Dec 2023",
      location: "Boston, MA",
      description: [
        "Developed RESTful APIs to facilitate seamless communication between frontend and backend services of an internal team performance tracking website",
        "Designed sleek, user-friendly UI that showcases data-driven graphs, monitors team analytics, and tracks history and progress through sprints",
        "Queried using LINQ and managed data from Azure DevOps and SQL Server Databases to relay accurate trends in team performance",
      ],
    },
  ]

  return (
    <section id="experience" ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-12 text-center">Work Experience</h2>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={`${exp.company}-${exp.title}`}
                className={`transition-all duration-1000 ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4">
                    <div className="bg-sage-100 p-4 rounded-lg inline-flex items-center justify-center">
                      <Briefcase className="h-8 w-8 text-sage-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-sage-700 mt-4">{exp.title}</h3>
                    <p className="text-sage-600 font-medium">{exp.company}</p>
                    <p className="text-gray-500">{exp.period}</p>
                    <p className="text-gray-500">{exp.location}</p>
                  </div>

                  <div className="md:w-3/4 bg-white p-6 rounded-lg shadow-md border border-sage-100">
                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="w-2 h-2 bg-sage-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

