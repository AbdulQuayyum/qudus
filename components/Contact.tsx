"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, MessageCircle, CheckCircle, AlertCircle } from "lucide-react"

interface FormData {
  firstName: string
  lastName: string
  email: string
  subject: string
  message: string
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({ firstName: "", lastName: "", email: "", subject: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ooreeoluwa@gmail.com",
      href: "mailto:ooreeoluwa@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+234 814 744 9711",
      href: "tel:+2348147449711",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Lagos, Nigeria",
      href: "#",
    },
  ]

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("")

    const subject = encodeURIComponent(formData.subject || "New Contact Form Submission")
    const body = encodeURIComponent(
      `Hello Qudus,\n\n` +
      `You have received a new message from your website contact form:\n\n` +
      `Name: ${formData.firstName} ${formData.lastName}\n` +
      `Email: ${formData.email}\n` +
      `Subject: ${formData.subject}\n\n` +
      `Message:\n${formData.message}\n\n` +
      `Best regards,\n${formData.firstName} ${formData.lastName}`,
    )

    const mailtoUrl = `mailto:ooreeoluwa@gmail.com?subject=${subject}&body=${body}`

    try {
      window.location.href = mailtoUrl

      setTimeout(() => {
        setIsSubmitting(false)
        setSubmitStatus("success")

        setTimeout(() => {
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            subject: "",
            message: "",
          })
          setSubmitStatus("")
        }, 3000)
      }, 1500)
    } catch (error) {
      setIsSubmitting(false)
      setSubmitStatus("error")
    }
  }

  const requiredFields: (keyof FormData)[] = ["email", "firstName", "lastName", "message", "subject"]
  const isFormValid = requiredFields.every((field) => formData[field])

  return (
    <section id="contact" className="w-full px-4 py-20 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="w-full">
        <div className="flex flex-col items-center justify-center pb-6 gap-y-3">
          <motion.span className="text-xl font-bold md:text-3xl bg-gradient-to-r from-[#CCD5AE] to-[#9CAA7A] bg-clip-text text-transparent" initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} >
            How to reach Qudus?
          </motion.span>
        </div>

        <div className="grid gap-12 mt-12 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="p-8 bg-white rounded-2xl shadow-lg">
            <h3 className="mb-6 text-2xl font-bold text-[#121212]">Send a Message</h3>

            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-green-800">Message sent successfully! Check your email client.</span>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-red-600" />
                <span className="text-red-800">Something went wrong. Please try again.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block mb-2 text-sm font-medium text-[#121212]">First Name</label>
                  <input type="text" placeholder="Your first name" name="firstName" value={formData.firstName} onChange={handleInputChange} required className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9CAA7A] focus:border-transparent" />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-[#121212]">Last Name</label>
                  <input type="text" placeholder="Your last name" name="lastName" value={formData.lastName} onChange={handleInputChange} required className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9CAA7A] focus:border-transparent" />
                </div>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-[#121212]">Email</label>
                <input type="email" placeholder="your.email@example.com" name="email" value={formData.email} onChange={handleInputChange} required className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9CAA7A] focus:border-transparent" />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-[#121212]">Subject</label>
                <input type="text" placeholder="What's this about?" name="subject" value={formData.subject} onChange={handleInputChange} required className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9CAA7A] focus:border-transparent" />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-[#121212]">Message</label>
                <textarea placeholder="Tell me about your project or how I can help..." rows={6} name="message" value={formData.message} onChange={handleInputChange} required className="w-full px-3 py-2 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#9CAA7A] focus:border-transparent" />
              </div>

              <button type="submit" disabled={isSubmitting || !isFormValid} className={`w-full bg-gradient-to-r from-[#CCD5AE] to-[#9CAA7A] hover:from-[#9CAA7A] hover:to-[#CCD5AE] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${isSubmitting || !isFormValid ? "opacity-75 cursor-not-allowed" : ""}`} >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-b-2 border-white rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="space-y-8">
            <div>
              <h3 className="mb-6 text-2xl font-bold text-[#121212]">Get in Touch</h3>
              <p className="mb-8 leading-relaxed text-[#121212]">
                I'm always excited to discuss new opportunities and creative challenges. Whether you're looking to boost
                your digital marketing performance, need professional photography services, or want to develop a
                comprehensive marketing strategy, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="p-6 transition-all duration-300 bg-white rounded-xl shadow-md hover:shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-12 h-12 text-xl rounded-full bg-gradient-to-r from-[#CCD5AE] to-[#9CAA7A]">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-[#121212]">{info.label}</p>
                      {info.href && info.href !== "#" ? (
                        <a href={info.href} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold transition-colors text-[#9CAA7A] hover:text-[#9CAA7A]" >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-lg font-semibold text-[#121212]">{info.value}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} viewport={{ once: true }} className="p-6 text-center text-white rounded-xl shadow-lg bg-gradient-to-r from-[#CCD5AE] to-[#9CAA7A]">
              <MessageCircle className="w-12 h-12 mx-auto mb-4" />
              <h4 className="mb-2 text-xl font-bold">Ready to Start?</h4>
              <p className="mb-4 opacity-90">
                Let's discuss your next digital marketing campaign and create something extraordinary together.
              </p>
              <a href="https://www.linkedin.com/in/qudus-omotunde-young/" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 font-semibold transition-colors duration-300 bg-white rounded-lg text-[#9CAA7A] hover:bg-gray-100" >
                Connect on LinkedIn
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}