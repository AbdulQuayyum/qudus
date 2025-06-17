"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Camera, BarChart3, Target, Users, Download, ArrowRight } from "lucide-react"

const About = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const skills = [
    {
      title: "Digital Marketing Expert",
      description:
        "Google Analytics & Ads certified with proven track record in SEM, Display, and Paid Social campaigns.",
      icon: <BarChart3 size={24} />,
      color: "from-[#9CAA7A] to-[#86956A]"
    },
    {
      title: "Creative Photographer",
      description: "Passionate photographer since 2018, capturing compelling visuals that enhance brand storytelling.",
      icon: <Camera size={24} />,
      color: "from-[#B8C599] to-[#9CAA7A]"
    },
    {
      title: "Strategic Thinker",
      description: "Developing data-driven campaigns that drive brand growth, user engagement, and customer loyalty.",
      icon: <Target size={24} />,
      color: "from-[#CCD5AE] to-[#B8C599]"
    },
    {
      title: "Team Collaborator",
      description: "Experienced in managing cross-functional teams and delivering high-impact marketing campaigns.",
      icon: <Users size={24} />,
      color: "from-[#A6B584] to-[#9CAA7A]"
    }
  ]

  return (
    <section id="about" className="w-full px-4 py-20 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-center w-full">
        <motion.div className="flex flex-col items-center justify-center gap-y-4 mb-12" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} >
          <h2 className="text-xl font-bold md:text-3xl text-gradient accent-border">Who is Omotunde-Young Qudus?</h2>
          <p className="max-w-2xl text-lg text-center text-[#121212]">Get to know the person behind the campaigns</p>
        </motion.div>
        <motion.div className="flex flex-col items-center justify-center w-full gap-12" initial={{ opacity: 0 }} animate={isVisible ? { opacity: 1 } : { opacity: 0 }} transition={{ duration: 0.8, delay: 0.3 }} >
          <motion.div className="flex flex-col items-center justify-center max-w-4xl" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}>
            <div className=" px-0 md:px-10 py-8 md:py-10 ">
              <p className="text-lg leading-relaxed text-[#121212] text-center mb-8">
                As a <span className="text-gradient font-semibold"> digital marketing specialist </span>  with over 2 years of experience in strategy and execution across SEM, display, paid social and other digital advertising platforms, I've collaborated and designed successful campaigns for brands in  cosmetics, fashion, and tech. My strength is in creating strategies that connect with the right audience, optimizing ads for better results, and managing budgets that deliver strong returns. I've driven engagement, boosted brand awareness, and achieved real results using platforms like <span className="text-gradient font-semibold">Google Ads, Meta Ads, LinkedIn Ads</span>, and more. I've also built online communities that people love and developed content strategies that work. My portfolio shows some of the successful campaigns I've led, proving my commitment to helping brands grow and achieve their goals.
                <br />
                <br />
                My passion extends beyond marketing to <span className="text-gradient font-semibold">photography</span> where I've been capturing compelling visuals since 2018 and <span className="text-gradient font-semibold">football</span>. Whether it's running a full digital marketing strategy or building a community, I'm focused on delivering results.
              </p>
              <div className="flex justify-center">
                <motion.a href="/resume.pdf" download="Qudus CV.pdf" className="inline-flex items-center gap-3 px-6 py-3 text-white bg-gradient-to-r from-[#CCD5AE] to-[#9CAA7A] rounded-lg creative-shadow hover:from-[#9CAA7A] hover:to-[#CCD5AE] transition-all duration-300" whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                  <Download size={20} />
                  Download My CV
                  <ArrowRight size={16} />
                </motion.a>
              </div>
            </div>
          </motion.div>
          <motion.div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.7 }}>
            {skills.map((skill, index) => (
              <motion.div key={index} className="creative-card p-6 rounded-xl creative-shadow floating-gentle" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }} whileHover={{ y: -5, scale: 1.02 }} style={{ animationDelay: `${index * 0.5}s` }} >
                <motion.div className={`flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-gradient-to-r ${skill.color} creative-shadow`} whileHover={{ scale: 1.1, rotate: 5 }}>
                  <span className="text-white">{skill.icon}</span>
                </motion.div>

                <h3 className="text-lg font-semibold mb-3 text-gray-800">{skill.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{skill.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
