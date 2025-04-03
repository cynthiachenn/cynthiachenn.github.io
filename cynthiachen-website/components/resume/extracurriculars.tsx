"use client"

import { useInView } from "react-intersection-observer"
import { Users, BookOpen } from "lucide-react"

export default function Extracurriculars() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const activities = [
    {
      title: "FirstByte",
      role: "CS Curricula Co-Lead",
      period: "September 2022 – Present",
      location: "Northeastern University",
      description: [
        "With the goal of increasing visibility and accessibility of CS and STEM to younger audiences, we create fun and engaging events to introduce beginner concepts.",
      ],
      icon: <BookOpen className="h-8 w-8 text-sage-600" />,
    },
    {
      title: "Oasis",
      role: "Mentor",
      period: "September 2023 – April 2024",
      location: "Northeastern University",
      description: [
        "Guide and mentor underclassmen student teams with their passion projects mimicking Agile methodology",
        "Explain and help implement concepts such as object-oriented programming and efficient algorithms",
      ],
      icon: <Users className="h-8 w-8 text-sage-600" />,
    },
  ]

  return (
    <section id="extracurriculars" ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-12 text-center">Extracurricular Activities</h2>

          <div className="space-y-12">
            {activities.map((activity, index) => (
              <div
                key={activity.title}
                className={`transition-all duration-1000 ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4">
                    <div className="bg-sage-100 p-4 rounded-lg inline-flex items-center justify-center">
                      {activity.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-sage-700 mt-4">{activity.title}</h3>
                    <p className="text-sage-600 font-medium">{activity.role}</p>
                    <p className="text-gray-500">{activity.period}</p>
                    <p className="text-gray-500">{activity.location}</p>
                  </div>

                  <div className="md:w-3/4 bg-white p-6 rounded-lg shadow-md border border-sage-100">
                    <ul className="space-y-3">
                      {activity.description.map((item, i) => (
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

