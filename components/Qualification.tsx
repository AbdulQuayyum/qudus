"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Calendar, MapPin, Zap, Building } from "lucide-react"

interface ExperienceMetrics {
  growth?: string;
  reach?: string;
  participation?: string;
  mentions?: string;
  followers?: string;
  satisfaction?: string;
  marketShare?: string;
  traffic?: string;
  roi?: string;
  experience?: string;
  projects?: string;
  [key: string]: string | undefined;
}

interface ExperienceItem {
  id: number;
  jobTitle: string;
  companyName: string;
  companyLocation: string;
  startDate: string;
  endDate: string;
  achievements: string[];
  metrics: ExperienceMetrics;
}

const Qualification = () => {
  const [hover, setHover] = useState<number | null>(null);
  const [data, setData] = useState<ExperienceItem[]>([]);

  const experience = [
    {
      id: 1,
      jobTitle: "Digital Strategist & Media Buyer",
      companyName: "The Shinguards",
      companyLocation: "Lagos, Nigeria",
      startDate: "July 2024",
      endDate: "Present",
      achievements: [
        "Grew Instagram followers by 5,000 in 3 months through targeted paid media strategy",
        "Increased Twitter reach by 49.2% using data-driven content and advertising approaches",
        "Boosted community participation by 59%, converting followers into active league members",
        "Optimized paid ad budgets by 20%, ensuring high ROI on ad spend",
        "Launched daily football-related content that improved member retention and satisfaction",
      ],
      metrics: { growth: "5K followers", reach: "49.2%", participation: "59%" },
    },
    {
      id: 2,
      jobTitle: "Product Marketing Consultant",
      companyName: "KleenUp Cosmetics",
      companyLocation: "Lagos, Nigeria",
      startDate: "Jan 2023",
      endDate: "May 2023",
      achievements: [
        "Developed comprehensive digital marketing strategy including Meta Ads and Google Ads",
        "Increased brand mentions by 50% through strategic social media campaigns",
        "Grew social media followers by 20% across all platforms",
        "Improved customer satisfaction by 20% through data-driven product insights",
        "Implemented SOPs that boosted customer response rates by 50%",
      ],
      metrics: { mentions: "50%", followers: "20%", satisfaction: "20%" },
    },
    {
      id: 3,
      jobTitle: "Communications Engagement Associate",
      companyName: "WILDREAMS Agency",
      companyLocation: "Lagos, Nigeria",
      startDate: "Nov 2021",
      endDate: "Aug 2023",
      achievements: [
        "Conducted GAP analysis and market research to refine ad targeting",
        "Supported marketing team in setting up paid ad campaigns across Google, Meta, and LinkedIn",
        "Developed content calendars aligned with client goals for engagement consistency",
        "Increased client market share by 25% through data-backed marketing strategies",
        "Boosted website traffic and social media followers by 20%",
        "Improved campaign ROI through A/B testing and performance tracking",
      ],
      metrics: { marketShare: "25%", traffic: "20%", roi: "Improved" },
    },
    {
      id: 4,
      jobTitle: "Photography Professional",
      companyName: "MARS PHOTOGRAPHY",
      companyLocation: "Lagos, Nigeria",
      startDate: "Mar 2018",
      endDate: "Present",
      achievements: [
        "Established and maintained professional photography business for 6+ years",
        "Specialized in brand photography, product shoots, and creative visual content",
        "Built strong client relationships and maintained high satisfaction rates",
        "Developed expertise in photo editing and creative direction",
      ],
      metrics: { experience: "6+ years", projects: "100+", satisfaction: "98%" },
    },
  ]

  useEffect(() => {
    setData(experience)
  }, [])

  return (
    <section id="qualifications" className="w-full px-4 py-20 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="relative flex flex-col justify-center w-full">
        <div className="flex flex-col items-center justify-center gap-y-3 mb-12">
          <motion.span className="text-xl font-bold md:text-3xl bg-gradient-to-r from-[#CCD5AE] to-[#9CAA7A] bg-clip-text text-transparent" initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} >
            What is Qudus's Experience?
          </motion.span>
          <motion.p className="max-w-3xl mx-auto text-xl text-center text-[#121212]" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }} viewport={{ once: true }}>
            A proven track record of driving results through strategic digital marketing and creative excellence
          </motion.p>
        </div>

        <div className="flex justify-center w-full">
          <div className="w-full">
            {data.map((item, index) => (
              <motion.div key={item.id} className="py-6 border-b border-gray-200 rounded-xl px-0 md:px-4 transition-all duration-300" onMouseEnter={() => setHover(index)} onMouseLeave={() => setHover(null)} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }}>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="px-3 py-1 text-sm font-bold rounded-full text-white bg-gradient-to-r from-[#CCD5AE] to-[#9CAA7A]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-xl font-bold md:text-2xl text-[#121212]">{item.jobTitle}</h3>
                  </div>

                  <div className="flex flex-col gap-2 mb-4 text-[#121212] md:flex-row md:items-center md:gap-6">
                    <div className="flex items-center gap-2">
                      <Building className="w-4 h-4 text-[#9CAA7A]" />
                      <span className="font-semibold">{item.companyName}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#9CAA7A]" />
                      <span>{item.companyLocation}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#9CAA7A]" />
                      <span>
                        {item.startDate} - {item.endDate}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {Object.entries(item.metrics).map(([key, value]) => (
                      <span key={key} className="px-3 py-1 rounded-full bg-gradient-to-r from-[#f8fcee] to-[#E8EDD7] text-[#9CAA7A] text-sm font-medium">
                        {value} {key}
                      </span>
                    ))}
                  </div>
                </div>

                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: hover === index ? "auto" : 0, opacity: hover === index ? 1 : 0 }} transition={{ duration: 0.5 }} className="overflow-hidden" >
                  <motion.div className="pt-4" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} >
                    <div className="flex items-center gap-2 mb-3">
                      <Zap className="w-4 h-4 text-[#9CAA7A]" />
                      <h4 className="font-semibold text-[#121212]">Key Achievements:</h4>
                    </div>
                    <ul className="space-y-2 list-disc list-inside pl-6">
                      {item.achievements.map((point, achievementIndex) => (
                        <motion.li key={achievementIndex} className="text-[#121212] max-md:text-sm" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + achievementIndex * 0.1 }} whileHover={{ x: 5, color: "#9CAA7A" }}  >
                          {point}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Qualification
