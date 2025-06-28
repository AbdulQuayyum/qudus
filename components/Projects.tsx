"use client"

import { useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, BarChart3, Camera, PenTool, Target, Users, Globe, TrendingUp, Rocket } from "lucide-react"

export default function Projects() {
  const sectionRef = useRef(null)

  const projects = [
    {
      title: "DealMakers BDC Brand Bible",
      category: "Brand Strategy & Content Development",
      metrics: [
        { label: "Brand Archetypes", value: "2" },
        { label: "Content Pillars Defined", value: "6" },
        { label: "Active Platforms", value: "5+" }
      ],
      tags: ["Brand Strategy", "Messaging Framework", "Mascot Development", "Content Guidelines", "Financial Services", "FX Industry", "Creative Direction"],
      image: "/bdc.png",
      link: "https://docs.google.com/presentation/d/1sWzbEn-7XRP6oIMP6ZtdrftvLSuXUucXvkyCNi1C2Z0/edit",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Farmfresh Yoghurt Content Strategy",
      category: "Content Strategy",
      metrics: [
        { label: "Target Groups", value: "5" },
        { label: "Content Pillars", value: "4" },
        { label: "Campaign Idea", value: "Farmfresh For Life" }
      ],
      tags: ["Content Strategy", "Wellness Marketing", "Digital Engagement", "Consumer Segmentation", "Campaign Ideation"],
      image: "farmfresh-content.png",
      link: "https://docs.google.com/presentation/d/15QpFTmBT8sagmdxwv1dUs7BqOZtVuumgHiy3Htpsipo/edit?slide=id.p1#slide=id.p1",
      icon: <PenTool className="w-6 h-6" />
    },
    {
      title: "WSL Remit Influencer Strategy",
      category: "Influencer Marketing",
      metrics: [
        { label: "Influencers Selected", value: "6" },
        { label: "Platforms Covered", value: "4" },
        { label: "Campaign Duration", value: "6 Weeks" }
      ],
      tags: ["Influencer Marketing", "Fintech", "Referral Program", "UK to Nigeria", "App Acquisition"],
      image: "/wslremit.png",
      link: "/docs/WSLRemitInfluencerStrategy.pdf",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "AITI Digital Campaign Performance Report",
      category: "Campaign Analytics",
      metrics: [
        { label: "New Signups", value: "35" },
        { label: "Cost per Lead", value: "$2" },
        { label: "Mobile Conversion Rate", value: "100%" }
      ],
      tags: ["Campaign Reporting", "Lead Generation", "Data Analysis", "User Segmentation", "Performance Optimization"],
      image: "/aiti-campaign.png",
      link: "https://docs.google.com/presentation/d/15olXGv9SkUKs1Qe2wtNfrkazmHjN1e2XwmsFbKICuKw/edit",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Access Bank Visa Campaign",
      category: "Digital Marketing",
      metrics: [
        { label: "Total Reach", value: "6.5M" },
        { label: "Impressions", value: "59.8M" },
        { label: "Video Views", value: "368K" }
      ],
      tags: ["Social Media Campaign", "Google Display", "Influencer Engagement", "Banking", "FIFA World Cup", "Omnichannel Activation"],
      image: "/access-visa.png",
      link: "/docs/AccessVisaReport28thJuly-8thDecember.pdf",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: "Morning Fresh Digital Strategy",
      category: "Digital Transformation",
      metrics: [
        { label: "Campaign Duration", value: "12 Months" },
        { label: "Core Campaigns", value: "5" },
        { label: "UGC Contribution", value: "50%" }
      ],
      tags: ["Digital Transformation", "Brand Positioning", "Influencer Marketing", "FMCG", "Always-On Content", "Lifestyle Branding"],
      image: "/morning-fresh-presentation.png",
      link: "https://docs.google.com/presentation/d/17sleZ9EovfFhNDqQQ5mXg6AeyrVc__jCkz7UgsyT7R8/edit?slide=id.p1#slide=id.p1",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Lafarge Sustainability Campaign",
      category: "Sustainability Marketing",
      metrics: [
        { label: "Target Reach Goal", value: "10M+" },
        { label: "Campaign Duration", value: "6 Months" },
        { label: "Content Pillars", value: "6+" }
      ],
      tags: ["Sustainability Strategy", "Influencer Partnerships", "Content Frameworks", "Behavior Change", "Green Marketing", "Digital Storytelling"],
      image: "/lafarage-communication.png",
      link: "https://docs.google.com/presentation/d/10HKPI207Z83AfJYlljfKd6K6ZPC8Zhoz5KeQSkj6RG4/edit?slide=id.g31883fba2dd_0_0#slide=id.g31883fba2dd_0_0",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Morning Fresh Integrated Digital Campaign",
      category: "FMCG Marketing",
      metrics: [
        { label: "Total Reach", value: "959K" },
        { label: "Facebook Reach", value: "548,923" },
        { label: "Brand Sentiment", value: "80% Positive" }
      ],
      tags: ["Performance Marketing", "Community Management", "Sustainability", "FMCG", "Sentiment Analysis"],
      image: "/morning-fresh-report.png",
      link: "/docs/MorningFreshOctoberMonthlyReport.pdf",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Zest Africa Complete Brand Launch & Strategy",
      category: "Brand Launch & Strategy",
      metrics: [
        { label: "Digital Platforms", value: "6+" },
        { label: "Target Audience", value: "28M+ Users" },
        { label: "Content Pillars", value: "6" }
      ],
      tags: ["Brand Strategy", "Youth Marketing", "Experiential", "Snack Industry", "Cultural Campaign"],
      image: "/zest-marketing.png",
      link: "https://docs.google.com/presentation/d/1Fe5SDdtcU2e6T74JtBZuQOEGHd5tuJHHHRguwXFXJVQ/edit?usp=drivesdk",
      icon: <Rocket className="w-6 h-6" />
    },
    {
      title: "Photography Portfolio",
      category: "Photography",
      metrics: [
        { label: "Years Experience", value: "6+" },
        { label: "Projects Completed", value: "100+" },
        { label: "Client Satisfaction", value: "98%" },
      ],
      tags: ["Photography", "Brand Visuals", "Product Photography", "Creative Direction"],
      image: "/photography.png",
      link: "#",
      icon: <Camera className="w-6 h-6" />,
    },
  ]

  const handleProjectClick = (link) => {
    if (link && link !== "#") {
      window.open(link, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <section ref={sectionRef} id="projects" className="relative w-full px-4 py-20 mx-auto overflow-hidden max-w-7xl sm:px-6 lg:px-8">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-[#CCD5AE]/20 to-[#9CAA7A]/20 rounded-full blur-3xl" animate={{ x: [0, 50, -30, 0], y: [0, -30, 40, 0], scale: [1, 1.1, 0.9, 1] }} transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-l from-[#E8EDD7]/30 to-[#CCD5AE]/20 rounded-full blur-3xl" animate={{ x: [0, -40, 60, 0], y: [0, 50, -20, 0], scale: [1, 0.8, 1.2, 1] }} transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }} />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full mx-auto max-w-7xl">
        <motion.div className="flex flex-col items-center justify-center w-full gap-y-3 mb-12" initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
          <motion.span className="text-xl font-bold text-center md:text-3xl bg-gradient-to-r from-[#CCD5AE] to-[#9CAA7A] bg-clip-text text-transparent" initial={{ opacity: 0, scale: 0.5, rotateX: -90 }} whileInView={{ opacity: 1, scale: 1, rotateX: 0 }} transition={{ duration: 1.2, ease: "backOut" }} viewport={{ once: true }} >
            What has Qudus worked on?
          </motion.span>
          <motion.div className="w-24 h-1 bg-gradient-to-r from-[#CCD5AE] to-[#9CAA7A] rounded-full" initial={{ width: 0 }} whileInView={{ width: 96 }} transition={{ duration: 1, delay: 0.5 }} viewport={{ once: true }} />
          <motion.p className="max-w-3xl pt-3 mx-auto text-xl text-center text-[#121212]" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }} viewport={{ once: true }}>
            Showcasing successful digital marketing campaigns and creative projects that delivered measurable results
          </motion.p>
        </motion.div>

        <div className="grid w-full gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className={`relative overflow-hidden transition-all duration-500 bg-white rounded-2xl shadow-lg hover:shadow-2xl group perspective-1000 ${project.link !== "#" ? "cursor-pointer" : ""}`} style={{ transformStyle: "preserve-3d" }}>
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <motion.div key={i} className="absolute w-2 h-2 bg-gradient-to-r from-[#CCD5AE] to-[#9CAA7A] rounded-full" style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, }} animate={{ y: [0, -20, 0], x: [0, Math.random() * 20 - 10, 0], opacity: [0, 1, 0], scale: [0, 1, 0], }} transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2, ease: "easeInOut" }} />
                ))}
              </div>

              <div className="relative overflow-hidden">
                <motion.img src={project.image} alt={project.title} className="object-cover w-full h-48 md:h-72" whileHover={{ scale: 1.15, rotate: 1, transition: { duration: 0.6 } }} transition={{ duration: 0.6 }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12" initial={{ x: "-100%" }} whileHover={{ x: "200%" }} transition={{ duration: 0.8, ease: "easeOut" }} />

                <motion.div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 text-sm font-medium rounded-full bg-white/90 text-[#9CAA7A] backdrop-blur-sm" initial={{ x: -50, opacity: 0, scale: 0 }} animate={{ x: 0, opacity: 1, scale: 1 }} transition={{ delay: index * 0.1 + 0.5, type: "spring", stiffness: 200, damping: 10 }} whileHover={{ scale: 1.1, rotate: 5 }} >
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}>
                    {project.icon}
                  </motion.div>
                  {project.category}
                </motion.div>

                {project.link !== "#" && (
                  <motion.div className="absolute bottom-4 right-4 w-12 h-12 bg-gradient-to-r from-[#CCD5AE] to-[#9CAA7A] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 shadow-lg pointer-events-none" initial={{ scale: 0, rotate: -180 }} whileHover={{ scale: 1, rotate: 0 }} transition={{ duration: 0.3, ease: "backOut" }}>
                    <ExternalLink className="w-5 h-5 text-white" />
                  </motion.div>
                )}
              </div>

              <div className="relative p-6">
                <motion.h3 className="mb-3 text-xl font-bold transition-colors duration-300 text-[#121212] group-hover:text-[#9CAA7A]" initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: index * 0.1 + 0.6 }} whileHover={{ x: 5 }}>
                  {project.title}
                </motion.h3>
                <motion.div className="grid grid-cols-3 gap-4 p-4 mb-4 rounded-xl bg-gradient-to-r from-[#E8EDD7] to-[#D9E0C4] text-[#9CAA7A] hover:from-[#CCD5AE] hover:to-[#B8C599]" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: index * 0.1 + 0.8 }} whileHover={{ scale: 1.02 }}>
                  {project.metrics.map((metric, metricIndex) => (
                    <motion.div key={metricIndex} className="text-center" initial={{ scale: 0, rotateY: -90 }} animate={{ scale: 1, rotateY: 0 }} transition={{ delay: index * 0.1 + 0.9 + metricIndex * 0.1, type: "spring", stiffness: 200 }} whileHover={{ scale: 1.15, y: -5, transition: { duration: 0.2 } }} >
                      <motion.div className="text-lg font-bold text-[#9CAA7A]" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity, delay: metricIndex * 0.3 }} >
                        {metric.value}
                      </motion.div>
                      <div className="text-xs text-[#121212]">{metric.label}</div>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div className="flex flex-wrap gap-2 mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.1 + 1 }}>
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span key={tagIndex} className="px-2 py-1 text-xs font-medium bg-gradient-to-r text-[#9CAA7A] from-[#E8EDD7] to-[#D9E0C4] hover:from-[#CCD5AE] hover:to-[#B8C599] rounded-full cursor-pointer" initial={{ x: -20, opacity: 0, scale: 0 }} animate={{ x: 0, opacity: 1, scale: 1 }} transition={{ delay: index * 0.1 + 1.1 + tagIndex * 0.05, type: "spring", stiffness: 300 }} whileHover={{ scale: 1.1, y: -2, rotate: 2, backgroundColor: "#dbeafe", transition: { duration: 0.2 } }} whileTap={{ scale: 0.95 }} >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>
                <motion.div className="w-full h-1 bg-gradient-to-r from-[#E8EDD7] to-[#D9E0C4] rounded-full overflow-hidden" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: index * 0.1 + 1.5, duration: 1 }} >
                  <motion.div className="h-full bg-gradient-to-r from-[#CCD5AE] to-[#9CAA7A]" initial={{ x: "-100%" }} animate={{ x: 0 }} transition={{ delay: index * 0.1 + 1.8, duration: 1.5, ease: "easeOut" }} />
                </motion.div>
              </div>
              <motion.div className="absolute top-0 right-0 w-0 h-0 border-l-[30px] border-l-transparent border-t-[30px] border-t-[#CCD5AE]/20" initial={{ scale: 0, rotate: -90 }} animate={{ scale: 1, rotate: 0 }} transition={{ delay: index * 0.1 + 2, duration: 0.5 }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}