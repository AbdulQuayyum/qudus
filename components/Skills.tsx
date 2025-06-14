"use client"

import { motion } from "framer-motion"
import { BarChart3, Camera, PenTool, Target, Globe, Users } from "lucide-react"

const Skills = () => {
  const skillCategories = [
    {
      title: "Digital Marketing",
      icon: BarChart3,
      color: "from-[#9CAA7A] to-[#86956A]",
      skills: [
        { name: "Google Ads & Analytics", level: 95 },
        { name: "Meta Ads Management", level: 92 },
        { name: "SEM & Display Advertising", level: 90 },
        { name: "Performance Marketing", level: 88 }
      ]
    },
    {
      title: "Creative & Photography",
      icon: Camera,
      color: "from-[#B8C599] to-[#A6B584]",
      skills: [
        { name: "Brand Photography", level: 94 },
        { name: "Visual Content Creation", level: 90 },
        { name: "Photo Editing", level: 87 },
        { name: "Creative Direction", level: 85 }
      ]
    },
    {
      title: "Content & Copywriting",
      icon: PenTool,
      color: "from-[#CCD5AE] to-[#B8C599]",
      skills: [
        { name: "Ad Copy Creation", level: 93 },
        { name: "Content Strategy", level: 89 },
        { name: "Brand Storytelling", level: 91 },
        { name: "Email Marketing", level: 86 }
      ]
    },
    {
      title: "Strategy & Analysis",
      icon: Target,
      color: "from-[#A6B584] to-[#9CAA7A]",
      skills: [
        { name: "Campaign Strategy", level: 92 },
        { name: "Data Analysis", level: 88 },
        { name: "Market Research", level: 85 },
        { name: "ROI Optimization", level: 90 }
      ]
    },
    {
      title: "Media Buying",
      icon: Globe,
      color: "from-[#D4DCBA] to-[#CCD5AE]",
      skills: [
        { name: "Media Planning", level: 91 },
        { name: "Budget Management", level: 89 },
        { name: "Audience Targeting", level: 93 },
        { name: "Platform Optimization", level: 87 }
      ]
    },
    {
      title: "Team & Client Management",
      icon: Users,
      color: "from-[#BDC896] to-[#B8C599]",
      skills: [
        { name: "Client Relationship Management", level: 94 },
        { name: "Project Coordination", level: 88 },
        { name: "Team Collaboration", level: 90 },
        { name: "Stakeholder Communication", level: 92 }
      ]
    }
  ]

  const tools = ["Google Ads", "Google Analytics", "Meta Business Manager", "LinkedIn Ads", "Adobe Creative Suite", "Canva", "Mailchimp", "Zendesk", "WordPress", "Hootsuite", "Buffer", "Lightroom"]

  return (
    <section id="skills" className="w-full px-4 py-20 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="w-full">
        <div className="flex flex-col items-center justify-center gap-y-3 mb-12">
          <motion.span className="text-xl font-bold md:text-3xl bg-gradient-to-r from-[#CCD5AE] to-[#9CAA7A] bg-clip-text text-transparent" initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} >
            What are Qudus's Skills?
          </motion.span>
          <motion.p className="max-w-3xl mx-auto text-xl text-center text-[#121212]" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }} viewport={{ once: true }}>
            A comprehensive skill set spanning digital marketing, creative content, and strategic analysis
          </motion.p>
        </div>

        <div className="grid gap-8 mb-16 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} whileHover={{ y: -5, scale: 1.02 }} className="p-6 transition-all duration-300 bg-white rounded-2xl shadow-lg hover:shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#121212]">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-[#121212]">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} transition={{ duration: 1, delay: index * 0.1 + skillIndex * 0.1 }} viewport={{ once: true }} className={`h-2 rounded-full bg-gradient-to-r ${category.color}`} />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center">
          <h3 className="mb-8 text-2xl font-bold text-[#121212]">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, index) => (
              <motion.span key={index} initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3, delay: index * 0.05 }} viewport={{ once: true }} whileHover={{ scale: 1.05 }} className="px-4 py-2 text-sm font-medium transition-all duration-200 rounded-full bg-gradient-to-r from-[#E8EDD7] to-[#D9E0C4] text-[#9CAA7A] hover:from-[#CCD5AE] hover:to-[#B8C599]">
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
