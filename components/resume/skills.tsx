"use client"

import { useInView } from "react-intersection-observer"
import { Code, Palette, Database, Globe, Lightbulb, Layers } from "lucide-react"

export default function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skills = [
    {
      category: "Languages",
      icon: <Code className="h-8 w-8 text-sage-600" />,
      items: ["Java", "C#", "Python", "JavaScript", "HTML/CSS", "SQL", "YML", "Powershell", "Bash", "LaTeX"],
    },
    {
      category: "Frameworks",
      icon: <Palette className="h-8 w-8 text-sage-600" />,
      items: [".NET", "Next","Node","React", "Tailwind","Express","Swagger", "Bootstrap", "Vue",],
    },
    {
      category: "Developer Tools",
      icon: <Database className="h-8 w-8 text-sage-600" />,
      items: ["Visual Studio", "VS Code", "Git", "Azure DevOps", "AWS", "SSMS", "IntelliJ","Jupyter Notebook","Docker"],
    },
    {
      category: "Libraries",
      icon: <Globe className="h-8 w-8 text-sage-600" />,
      items: ["Pandas", "NumPy", "Scikit-learn", "Jest", "Matplotlib", "FakeItEasy", "JUnit", "Swing", "HighCharts"],
    },
    {
      category: "Business Skills",
      icon: <Lightbulb className="h-8 w-8 text-sage-600" />,
      items: ["Strategy", "Investments", "Marketing", "Accounting", "Financial Analysis"],
    },
    {
      category: "Soft Skills",
      icon: <Layers className="h-8 w-8 text-sage-600" />,
      items: ["Problem Solving", "Team Collaboration", "Project Management", "Communication", "Leadership"],
    },
  ]

  return (
    <section id="skills" ref={ref} className="py-20 bg-sage-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-4 text-center">My Skills</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Here are some of the technologies and skills I've developed through my education and work experience.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.category}
                className={`bg-white p-6 rounded-lg shadow-md border border-sage-100 transition-all duration-500 delay-${
                  index * 100
                } ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                <div className="flex items-center mb-4">
                  {skill.icon}
                  <h3 className="text-xl font-semibold text-sage-700 ml-3">{skill.category}</h3>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="flex items-center">
                      <span className="w-2 h-2 bg-sage-300 rounded-full mr-2"></span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

