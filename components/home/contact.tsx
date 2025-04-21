"use client"

import { useInView } from "react-intersection-observer"
import { Mail, MapPin, Phone, Send, Linkedin, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"

export default function Contact() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const form = useRef<HTMLFormElement | null>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }
  const SERVICE_ID = "service_7okq94p";
  const TEMPLATE_ID = "template_03q4lar";
  const PUBLIC_KEY = "niXstvEL87mDEXveN"
  const handleOnSubmit = (e: any) => {
     e.preventDefault();
     emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
       .then((result) => {
         alert('Message Sent Successfully')
       }, (error) => {
         console.log(error.text);
         alert('Something went wrong!')
       });
     e.target.reset()
   };

  return (
    <section id="contact" ref={ref} className="py-20 bg-sage-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-4 text-center">Get In Touch</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Feel free to reach out if you'd like to connect, collaborate, or discuss opportunities!
          </p>

          <div
            className={`grid md:grid-cols-2 gap-12 transition-all duration-1000 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            <div>
              <h3 className="text-2xl font-semibold text-sage-700 mb-6">Contact Information</h3>
              {/* Contact Information Section */}
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start">
                  <div className="bg-white p-3 rounded-lg shadow-md mr-4">
                    <Mail className="h-6 w-6 text-sage-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sage-800">Email</h4>
                    <p className="text-gray-600">chenxycynthia@gmail.com</p>
                  </div>
                </div>
                {/* Location */}
                <div className="flex items-start">
                  <div className="bg-white p-3 rounded-lg shadow-md mr-4">
                    <MapPin className="h-6 w-6 text-sage-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sage-800">Location</h4>
                    <p className="text-gray-600">Boston, MA</p>
                  </div>
                </div>
                {/* Phone */}
                <div className="flex items-start">
                  <div className="bg-white p-3 rounded-lg shadow-md mr-4">
                    <Phone className="h-6 w-6 text-sage-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sage-800">Phone</h4>
                    <p className="text-gray-600">862-276-3377</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-sage-700 mb-6">Send Me a Message</h3>

              <form ref={form} onSubmit={handleOnSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-sage-800 mb-1">
                      Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="border-sage-200 focus:border-sage-500 focus:ring-sage-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-sage-800 mb-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="border-sage-200 focus:border-sage-500 focus:ring-sage-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-sage-800 mb-1">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="border-sage-200 focus:border-sage-500 focus:ring-sage-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-sage-800 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your Message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="border-sage-200 focus:border-sage-500 focus:ring-sage-500"
                  />
                </div>

                <Button
                  type="submit"
                  className="bg-sage-600 hover:bg-sage-700 text-white w-full"
                  size="lg"
                >
                  <Send className="mr-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}