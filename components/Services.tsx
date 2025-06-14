"use client"
import { motion } from "framer-motion"
import { BarChart3, Camera, PenTool, Target, Globe, TrendingUp } from "lucide-react"

const Services = () => {
  const services = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Digital Marketing Strategy",
      description:
        "Comprehensive digital marketing strategies including SEM, Display, Paid Social, and performance marketing campaigns.",
      features: ["Google Ads Management", "Meta Ads Campaigns", "LinkedIn Advertising", "Campaign Analytics"],
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Photography & Visual Content",
      description:
        "Professional photography services and visual content creation to enhance your brand's storytelling and engagement.",
      features: ["Brand Photography", "Product Photography", "Social Media Visuals", "Creative Direction"],
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "Copywriting & Content",
      description:
        "Compelling copy and content creation that resonates with your audience and drives meaningful engagement.",
      features: ["Ad Copy Creation", "Content Strategy", "Brand Messaging", "Email Marketing Copy"],
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Media Buying & Strategy",
      description:
        "Strategic media buying across platforms with data-driven optimization for maximum ROI and performance.",
      features: ["Media Planning", "Budget Optimization", "Audience Targeting", "Performance Tracking"],
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Brand Strategy & Development",
      description:
        "Complete brand strategy development including brand bible creation, positioning, and market analysis.",
      features: ["Brand Bible Creation", "Market Research", "Competitive Analysis", "Brand Positioning"],
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Analytics & Reporting",
      description:
        "Comprehensive analytics and reporting using Google Analytics, providing actionable insights for growth.",
      features: ["Google Analytics Setup", "Performance Reports", "Data Analysis", "Growth Insights"],
    },
  ]

  return (
    <section id="services" className="w-full px-4 py-20 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="w-full">
        <div className="flex flex-col items-center justify-center gap-y-3 mb-12">
          <motion.span className="text-xl font-bold md:text-3xl bg-gradient-to-r from-[#CCD5AE] to-[#9CAA7A] bg-clip-text text-transparent" initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} >
            What Services Does Qudus Offer?
          </motion.span>
          <motion.p className="max-w-3xl mx-auto text-xl text-center text-[#121212]" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }} viewport={{ once: true }} >
            Comprehensive digital marketing solutions that drive results and grow your business
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div key={index} className="relative p-8 transition-all duration-300 bg-white rounded-2xl shadow-lg hover:shadow-2xl group overflow-hidden" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} whileHover={{ y: -10, scale: 1.02 }} >
              <motion.div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <motion.div className="flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r from-[#CCD5AE] to-[#9CAA7A] text-white" whileHover={{ scale: 1.1, rotate: 5 }} transition={{ duration: 0.3 }}>
                  {service.icon}
                </motion.div>

                <h3 className="mb-4 text-xl font-bold text-[#121212] group-hover:text-[#9CAA7A] transition-colors">
                  {service.title}
                </h3>

                <p className="mb-6 leading-relaxed text-[#121212]">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li key={featureIndex} className="flex items-center text-sm text-[#121212]" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 + featureIndex * 0.05 }} viewport={{ once: true }} >
                      <div className="w-2 h-2 mr-3 rounded-full bg-gradient-to-r from-[#CCD5AE] to-[#9CAA7A]" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
