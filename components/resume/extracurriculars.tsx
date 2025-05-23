"use client"

import { useInView } from "react-intersection-observer"
import Image from "next/image"

export default function Extracurriculars() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const activities = [
    {
      title: "FirstByte",
      link: "https://www.teachfirstbyte.com/",
      role: "CS Curricula Co-Lead",
      period: "September 2022 – Present",
      location: "Northeastern University",
      description: [
        "Leading a team of 5-10 to teach STEM/CS skills in a digestible manner to younger students",
        "Fostering an inclusive, accessible, and diverse learning environment for students of underprivileged backgrounds",
        "Partnering with local schools and programs to deliver engaging and informational workshops for beginner CS concepts"
      ],
      icon: "/images/firstbyte.png?height=20&width=20",
    },
    {
      title: "Oasis",
      link: "https://oasisneu.com/",
      role: "Mentor",
      period: "September 2023 – April 2024",
      location: "Northeastern University",
      description: [
        "Guide and mentor underclassmen student teams with their passion projects mimicking Agile methodology",
        "Explain and help implement concepts such as object-oriented programming and efficient algorithms",
      ],
      icon: "/images/oasis.png?height=20&width=20",
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
                className={`transition-all duration-1000 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4">
                    <div className="bg-sage-100 p-4 rounded-lg inline-flex items-center justify-center">
                      <Image
                        src={activity.icon || "/placeholder.svg"}
                        alt={activity.title}
                        width={40}
                        height={40}
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-sage-700 mt-4"><a href={activity.link}>{activity.title}</a></h3>
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

