"use client"

import { useInView } from "react-intersection-observer"
import Image from "next/image"

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-12 text-center">About Me</h2>

          <div
            className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative">
              <div className="aspect-square relative rounded-lg overflow-hidden border-4 border-sage-100 shadow-xl">
                <Image
                  src="/images/profile.jpg"
                  alt="Profile"
                  width={600}
                  height={600}
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-sage-100 rounded-lg -z-10"></div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-sage-700 mb-4">Nice to meet you!</h3>
              <p className="text-gray-600 mb-4">
                I'm a Computer Science and Business Administration student at Northeastern University with a concentration of Fintech. I've been enamored by technology since a young age, and I feel very privileged to be able to study these interests and further my education both at university and through work opportunities. Please check out my resume if you'd like to know more about my academic and professional experience with computer science!
              </p>
              <p className="text-gray-600 mb-6">
                Outside of being a student, I love video games, books, and music. I hope to log my hobbies here in this website with unique deep-dive pages of each. Feel free to take a look at them and see what I'm up to!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}