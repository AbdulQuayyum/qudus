"use client"

import { motion } from "framer-motion"
import { GraduationCap, Award, BookOpen } from "lucide-react"

export default function Education() {
  const education = {
    degree: "Bachelor of Science (B.Sc)",
    field: "Mass Communication",
    institution: "Lagos State University, Ojo",
    period: "2017 - 2021",
    description:
      "Developed strong communication, media, and analytical skills that form the foundation of my marketing expertise",
  }

  const certifications = [
    {
      title: "Google Analytics Certified",
      issuer: "Google",
      period: "2023",
      description: "Advanced certification in Google Analytics for comprehensive data analysis and insights",
    },
    {
      title: "Google Ads Certified",
      issuer: "Google",
      period: "2023",
      description: "Professional certification in Google Ads campaign management and optimization",
    },
    {
      title: "Digital Marketing & Strategy Diploma",
      issuer: "Orange Academy, Lagos",
      period: "July 2024",
      description: "Comprehensive training in digital marketing strategies and implementation",
    },
  ]

  const additionalTraining = [
    {
      title: "Media and Content Development",
      organization: "RAVE TV",
      period: "Feb 2019 - Jul 2019",
      role: "Intern",
      description: "Gained hands-on experience in photography, videography, and live broadcasting",
    },
  ]

  return (
    <section id="education" className="relative w-full px-4 py-20 mx-auto overflow-hidden max-w-7xl sm:px-6 lg:px-8">
      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div className="flex flex-col items-center justify-center gap-y-3 mb-12" initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <motion.span className="text-xl font-bold text-center md:text-3xl bg-gradient-to-r from-[#CCD5AE] to-[#9CAA7A] bg-clip-text text-transparent">
            What is Qudus's Education & Certifications?
          </motion.span>
          <motion.p className="max-w-3xl pt-3 mx-auto text-xl text-center text-[#121212]" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }} viewport={{ once: true }}>
            Building expertise through formal education and professional certifications
          </motion.p>
        </motion.div>

        <div className="grid gap-8 mb-16 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} whileHover={{ y: -10, scale: 1.02 }} className="relative p-8 overflow-hidden transition-all duration-300 bg-white rounded-2xl shadow-lg hover:shadow-xl" >
            <div className="flex items-center gap-4 mb-6">
              <motion.div className="flex items-center justify-center w-16 h-16 text-2xl rounded-2xl bg-gradient-to-r from-[#CCD5AE] to-[#9CAA7A]" whileHover={{ scale: 1.1, rotate: 5 }}>
                <GraduationCap className="w-8 h-8 text-white" />
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold text-[#121212]">Academic Foundation</h3>
                <p className="text-[#121212]">University Education</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="mb-2 text-xl font-semibold text-[#9CAA7A]">{education.degree}</h4>
                <p className="mb-1 text-lg text-[#121212]">{education.field}</p>
                <p className="mb-2 text-[#121212]">{education.institution}</p>
                <span className="inline-block px-3 py-1 mb-4 text-sm border border-gray-300 rounded-full">
                  {education.period}
                </span>
                <p className="leading-relaxed text-[#121212]">{education.description}</p>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} whileHover={{ y: -10, scale: 1.02 }} className="relative p-8 overflow-hidden transition-all duration-300 bg-white rounded-2xl shadow-lg hover:shadow-xl">
            <div className="flex items-center gap-4 mb-6">
              <motion.div className="flex items-center justify-center w-16 h-16 text-2xl rounded-2xl bg-gradient-to-r from-[#CCD5AE] to-[#9CAA7A]" whileHover={{ scale: 1.1, rotate: -5 }}>
                <Award className="w-8 h-8 text-white" />
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold text-[#121212]">Professional Certifications</h3>
                <p className="text-[#121212]">Industry Recognition</p>
              </div>
            </div>

            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div key={index} className="relative pl-4 border-l-2 border-[#9CAA7A]" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1, duration: 0.5 }} viewport={{ once: true }} whileHover={{ x: 5 }}>
                  <h4 className="font-semibold text-[#121212]">{cert.title}</h4>
                  <p className="text-sm text-[#9CAA7A] font-medium">{cert.issuer}</p>
                  <p className="text-sm text-gray-500 mb-2">{cert.period}</p>
                  <p className="text-sm leading-relaxed text-[#121212]">{cert.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="p-8 bg-gradient-to-r from-[#E8EDD7] to-[#D9E0C4] hover:from-[#CCD5AE] hover:to-[#B8C599] rounded-2xl">
          <div className="flex items-center gap-4 mb-6">
            <motion.div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-[#CCD5AE] to-[#9CAA7A]" whileHover={{ scale: 1.1 }}>
              <BookOpen className="w-6 h-6 text-white" />
            </motion.div>
            <h3 className="text-xl font-bold text-[#121212]">Additional Training & Experience</h3>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {additionalTraining.map((training, index) => (
              <motion.div key={index} className="p-6 bg-white rounded-xl shadow-sm" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.1, duration: 0.5 }} viewport={{ once: true }} whileHover={{ y: -5 }}>
                <h4 className="font-semibold text-[#121212] mb-1">{training.title}</h4>
                <p className="text-[#9CAA7A] font-medium text-sm">{training.organization}</p>
                <p className="text-gray-500 text-sm mb-2">{training.period}</p>
                <p className="text-sm leading-relaxed text-[#121212]">{training.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
