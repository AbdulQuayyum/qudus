"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, BarChart3, Camera, PenTool, Target, Users, Globe, TrendingUp, Rocket } from "lucide-react"

export default function Projects() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const projects = [
    {
      title: "DealMakers BDC Brand Bible",
      description:
        "Led the full development of DealMakers BDC’s brand architecture from scratch. Defined brand purpose, mission, vision, and positioning as Nigeria’s most trusted FX partner. Crafted customer archetypes (Hero & Caregiver), tone of voice, and content frameworks. Created the 'Abdul the Corporate Mallam' mascot to humanize complex FX services and built a multi-platform content strategy covering product explainers, street interviews, meme content, and educational posts across Instagram, Twitter, TikTok, YouTube, and LinkedIn. Delivered complete brand bible, content guidelines, and execution templates for internal teams.",
      category: "Brand Strategy & Content Development",
      metrics: [
        { label: "Brand Archetypes", value: "2" },
        { label: "Content Pillars Defined", value: "6" },
        { label: "Active Platforms", value: "5+" }
      ],
      tags: ["Brand Strategy", "Messaging Framework", "Mascot Development", "Content Guidelines", "Financial Services", "FX Industry", "Creative Direction"],
      image: "/bdc.png",
      link: "#",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Farmfresh Yoghurt Content Strategy",
      description:
        "Led the development of a comprehensive content strategy for Farmfresh Yoghurt, targeting five distinct consumer segments including health enthusiasts, students, and working adults. Created the 'Farmfresh For Life' campaign, structured around four original content pillars—brand heritage, lifestyle, product versatility, and flavor appeal. Outlined a dual-channel activation plan (online/offline), proposed influencer partnerships, and recommended a wellness-driven landing page for sustained engagement.",
      category: "Content Strategy",
      metrics: [
        { label: "Target Groups", value: "5" },
        { label: "Content Pillars", value: "4" },
        { label: "Campaign Idea", value: "Farmfresh For Life" }
      ],
      tags: ["Content Strategy", "Wellness Marketing", "Digital Engagement", "Consumer Segmentation", "Campaign Ideation"],
      image: "farmfresh-content.png",
      link: "#",
      icon: <PenTool className="w-6 h-6" />
    },
    {
      title: "WSL Remit Influencer Strategy",
      description:
        "Led the end-to-end development and execution of WSL Remit’s 6-week influencer marketing campaign targeting Nigerian expatriates and students in the UK. Strategically selected 6 UK-based influencers across Instagram, TikTok, Twitter, and YouTube to drive app installs and referral program participation. Crafted campaign messaging, influencer briefs, referral incentive structure (£2 per sign-up + £8 post-£500 transaction), and content cadence. Managed performance tracking across platforms, ensuring alignment with app acquisition KPIs and optimizing content for impact.",
      category: "Influencer Marketing",
      metrics: [
        { label: "Influencers Selected", value: "6" },
        { label: "Platforms Covered", value: "4" },
        { label: "Campaign Duration", value: "6 Weeks" }
      ],
      tags: ["Influencer Marketing", "Fintech", "Referral Program", "UK to Nigeria", "App Acquisition"],
      image: "/wslremit.png",
      link: "#",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "AITI Digital Campaign Performance Report",
      description:
        "Conducted performance analysis for a digital lead generation campaign that acquired 35 new signups at a low $2 cost per lead. Led data collection and reporting on user behavior, highlighting that all conversions occurred via mobile. Delivered actionable insights on user demographics, interests, and city-level performance (Lagos and Abuja), which informed future content targeting and channel optimizations.",
      category: "Campaign Analytics",
      metrics: [
        { label: "New Signups", value: "35" },
        { label: "Cost per Lead", value: "$2" },
        { label: "Mobile Conversion Rate", value: "100%" }
      ],
      tags: ["Campaign Reporting", "Lead Generation", "Data Analysis", "User Segmentation", "Performance Optimization"],
      image: "/aiti-campaign.png",
      link: "#",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Access Bank Visa Campaign",
      description:
        "Executed an integrated digital campaign for Access Bank and Visa to promote card usage during the FIFA World Cup Qatar 2022. Campaign spanned social media, Google Display, and influencer activations, driving 6.5M reach, 59.8M impressions, and 368K video views. Key engagements included trivia contests, predictions, countdowns, trend activations (#AccessRoadToQatar), and real-time audience engagement across Facebook, Instagram, Twitter, and Google Display.",
      category: "Digital Marketing",
      metrics: [
        { label: "Total Reach", value: "6.5M" },
        { label: "Impressions", value: "59.8M" },
        { label: "Video Views", value: "368K" }
      ],
      tags: ["Social Media Campaign", "Google Display", "Influencer Engagement", "Banking", "FIFA World Cup", "Omnichannel Activation"],
      image: "/access-visa.png",
      link: "#",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: "Morning Fresh Digital Strategy",
      description:
        "Led a full-scale digital transformation strategy repositioning Morning Fresh from a product-centric brand to a lifestyle experience. Developed multi-phase campaigns including 'AntiBac Relaunch (Beat the Germs)', 'Kitchen on a Roll (Wash-A-Thon)', 'Your Kitchen Chemistry (30th Anniversary)', and 'Everyday Sheroes'. Strategy involved influencer partnerships, UGC-driven content, live events, cross-channel activations, data-driven marketing, and always-on audience engagement across multiple consumer personas.",
      category: "Digital Transformation",
      metrics: [
        { label: "Campaign Duration", value: "12 Months" },
        { label: "Core Campaigns", value: "5" },
        { label: "UGC Contribution", value: "50%" }
      ],
      tags: ["Digital Transformation", "Brand Positioning", "Influencer Marketing", "FMCG", "Always-On Content", "Lifestyle Branding"],
      image: "/morning-fresh-presentation.png",
      link: "#",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Lafarge Sustainability Campaign",
      description:
        "Developed an integrated social media communication plan for Lafarge’s EcoPlanet Cement, aimed at educating consumers on decarbonization and promoting eco-friendly building materials. Crafted six strategic content pillars including 'Facts & Myths', 'Lafarge Legacy', and 'Go Green with Temi & Tayo'. Managed influencer strategy, identified key personas (artisans, homeowners, and project managers), and proposed interactive formats like polls, user-generated content, and reward-based recycling initiatives to enhance reach and engagement.",
      category: "Sustainability Marketing",
      metrics: [
        { label: "Target Reach Goal", value: "10M+" },
        { label: "Campaign Duration", value: "6 Months" },
        { label: "Content Pillars", value: "6+" }
      ],
      tags: ["Sustainability Strategy", "Influencer Partnerships", "Content Frameworks", "Behavior Change", "Green Marketing", "Digital Storytelling"],
      image: "/lafarage-communication.png",
      link: "#",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Morning Fresh Integrated Digital Campaign",
      description:
        "Spearheaded October's digital campaign for Morning Fresh across Facebook, Instagram, and Twitter balancing brand storytelling with product promotion. Delivered 959K+ total reach, including a 532% overachievement on Facebook reach and 105% on impressions. Managed creative production (static, motion graphics, stories), community engagement, and crisis management while amplifying the Morning Fresh Sustainability event. Leveraged influencer content and customer sentiment to maintain 80% positive brand perception, despite increased complaints. Provided insights and monthly recommendations to refine paid media and content strategy.",
      category: "FMCG Marketing",
      metrics: [
        { label: "Total Reach", value: "959K" },
        { label: "Facebook Reach", value: "548,923" },
        { label: "Brand Sentiment", value: "80% Positive" }
      ],
      tags: ["Performance Marketing", "Community Management", "Sustainability", "FMCG", "Sentiment Analysis"],
      image: "/morning-fresh-report.png",
      link: "#",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Zest Africa Complete Brand Launch & Strategy",
      description:
        "Directed the strategic brand launch for Zest Africa positioning it as the go-to snack brand for Nigerian hustlers through the campaign 'You Can’t Hustle on Empty.' Developed a fully integrated GTM plan targeting young professionals across Lagos using digital platforms (Meta, TikTok, YouTube), influencer partnerships, UGC initiatives, and offline activations (roadshows, retail sampling, university takeovers). Oversaw the creation of content pillars ('Fuel Your Hustle', 'Snack & Banter') and media strategy, including Google Display, Snapchat, and experiential pop-ups, to build awareness, drive trial, and cultivate brand loyalty.",
      category: "Brand Launch & Strategy",
      metrics: [
        { label: "Digital Platforms", value: "6+" },
        { label: "Target Audience", value: "28M+ Users" },
        { label: "Content Pillars", value: "6" }
      ],
      tags: ["Brand Strategy", "Youth Marketing", "Experiential", "Snack Industry", "Cultural Campaign"],
      image: "/zest-marketing.png",
      link: "#",
      icon: <Rocket className="w-6 h-6" />
    }
  ]

  return (
<section ref={sectionRef} id="projects" className="relative w-full px-4 py-20 mx-auto overflow-hidden max-w-7xl sm:px-6 lg:px-8">
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <motion.div 
      className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-[#CCD5AE]/20 to-[#9CAA7A]/20 rounded-full blur-3xl" 
      animate={{ x: [0, 50, -30, 0], y: [0, -30, 40, 0], scale: [1, 1.1, 0.9, 1] }} 
      transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }} 
    />
    <motion.div 
      className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-l from-[#E8EDD7]/30 to-[#CCD5AE]/20 rounded-full blur-3xl" 
      animate={{ x: [0, -40, 60, 0], y: [0, 50, -20, 0], scale: [1, 0.8, 1.2, 1] }} 
      transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }} 
    />
  </div>

  <div className="relative z-10 flex flex-col items-center justify-center w-full mx-auto max-w-7xl">
    <motion.div 
      className="flex flex-col items-center justify-center w-full gap-y-3 mb-8 sm:mb-12" 
      initial={{ opacity: 0, y: -50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1 }} 
      viewport={{ once: true }}
    >
      <motion.span 
        className="text-lg sm:text-xl md:text-3xl font-bold text-center bg-gradient-to-r from-[#CCD5AE] to-[#9CAA7A] bg-clip-text text-transparent px-4" 
        initial={{ opacity: 0, scale: 0.5, rotateX: -90 }} 
        whileInView={{ opacity: 1, scale: 1, rotateX: 0 }} 
        transition={{ duration: 1.2, ease: "backOut" }} 
        viewport={{ once: true }}
      >
        What has Qudus worked on?
      </motion.span>
      <motion.div 
        className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-[#CCD5AE] to-[#9CAA7A] rounded-full" 
        initial={{ width: 0 }} 
        whileInView={{ width: "auto" }} 
        transition={{ duration: 1, delay: 0.5 }} 
        viewport={{ once: true }} 
      />
      <motion.p 
        className="max-w-3xl pt-3 mx-auto text-base sm:text-lg md:text-xl text-center text-[#121212] px-4" 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.5, duration: 0.8 }} 
        viewport={{ once: true }}
      >
        Showcasing successful digital marketing campaigns and creative projects that delivered measurable results
      </motion.p>
    </motion.div>

    {/* Debug: Show project count */}
    {/* <div className="mb-4 text-center text-sm text-gray-500">
      Projects loaded: {projects?.length || 0}
    </div> */}

    {/* Fixed grid layout with fallback for animation issues */}
    <motion.div 
      className="grid w-full gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} // Removed isInView dependency 
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      {projects && projects.length > 0 ? projects.map((project, index) => (
        <motion.div 
          key={project.id || index} // Better key handling
          initial={{ opacity: 0, y: 50, scale: 0.95 }} 
          animate={{ opacity: 1, y: 0, scale: 1 }} // Removed isInView dependency
          transition={{ duration: 0.6, delay: index * 0.1 }} 
          whileHover={{ 
            y: -10, 
            scale: 1.02, 
            transition: { duration: 0.3 } 
          }} 
          className="relative overflow-hidden transition-all duration-300 bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl group min-h-[400px]" // Added min-height
        >
          {/* Reduced particles for better mobile performance */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-60 sm:opacity-100">
            {[...Array(2)].map((_, i) => ( // Reduced from 3 to 2
              <motion.div 
                key={i} 
                className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-gradient-to-r from-[#CCD5AE] to-[#9CAA7A] rounded-full" 
                style={{ 
                  left: `${Math.random() * 100}%`, 
                  top: `${Math.random() * 100}%` 
                }} 
                animate={{ 
                  y: [0, -10, 0], 
                  opacity: [0, 1, 0], 
                  scale: [0, 1, 0] 
                }} 
                transition={{ 
                  duration: 4, // Slower animation for better performance
                  repeat: Infinity, 
                  delay: Math.random() * 2, 
                  ease: "easeInOut" 
                }} 
              />
            ))}
          </div>

          <div className="relative overflow-hidden">
            {/* More reliable image handling */}
            <div className="w-full h-40 sm:h-48 md:h-56 lg:h-64 bg-gray-200 overflow-hidden">
              {project.image ? (
                <motion.img 
                  src={project.image} 
                  alt={project.title || 'Project image'} 
                  className="object-cover w-full h-full" 
                  whileHover={{ scale: 1.05 }} 
                  transition={{ duration: 0.3 }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.style.background = 'linear-gradient(45deg, #CCD5AE, #9CAA7A)';
                  }}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-[#CCD5AE] to-[#9CAA7A] flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">
                    {project.title?.charAt(0) || 'P'}
                  </span>
                </div>
              )}
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Category badge */}
            <motion.div 
              className="absolute top-2 sm:top-4 left-2 sm:left-4 flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium rounded-full bg-white/90 text-[#9CAA7A] backdrop-blur-sm" 
              initial={{ x: -30, opacity: 0 }} 
              animate={{ x: 0, opacity: 1 }} 
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              <span className="text-xs sm:text-sm">{project.icon || '📁'}</span>
              <span className="sm:inline">{project.category || 'Project'}</span>
            </motion.div>

            {/* External link button */}
            <motion.button 
              className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-[#CCD5AE] to-[#9CAA7A] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 shadow-lg" 
              whileHover={{ scale: 1.1 }} 
              whileTap={{ scale: 0.9 }}
              onClick={() => project.link && window.open(project.link, '_blank')}
            >
              <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </motion.button>
          </div>

          <div className="relative p-4 sm:p-6 flex-1 flex flex-col">
            {/* Project title */}
            <motion.h3 
              className="mb-2 sm:mb-3 text-lg sm:text-xl font-bold text-[#121212] group-hover:text-[#9CAA7A] transition-colors duration-300 line-clamp-2" 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: index * 0.1 + 0.4 }}
            >
              {project.title || 'Untitled Project'}
            </motion.h3>

            {/* Project description */}
            <motion.p 
              className="mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed text-[#121212] line-clamp-3 flex-1" 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: index * 0.1 + 0.5 }}
            >
              {project.description || 'Project description not available.'}
            </motion.p>

            {/* Metrics - with fallbacks */}
            {project.metrics && project.metrics.length > 0 && (
              <motion.div 
                className="grid grid-cols-3 gap-2 sm:gap-4 p-3 sm:p-4 mb-3 sm:mb-4 rounded-lg sm:rounded-xl bg-gradient-to-r from-[#E8EDD7] to-[#D9E0C4] text-[#9CAA7A]" 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: index * 0.1 + 0.6 }}
              >
                {project.metrics.slice(0, 3).map((metric, metricIndex) => (
                  <div key={metricIndex} className="text-center">
                    <div className="text-sm sm:text-base md:text-lg font-bold text-[#9CAA7A]">
                      {metric.value || '—'}
                    </div>
                    <div className="text-xs text-[#121212] leading-tight">{metric.label || ''}</div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* Tags - with fallbacks */}
            {project.tags && project.tags.length > 0 && (
              <motion.div 
                className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4" 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: index * 0.1 + 0.7 }}
              >
                {project.tags.slice(0, 4).map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    className="px-2 py-1 text-xs font-medium bg-gradient-to-r text-[#9CAA7A] from-[#E8EDD7] to-[#D9E0C4] rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            )}

            {/* Progress bar */}
            <motion.div 
              className="w-full h-1 bg-gradient-to-r from-[#E8EDD7] to-[#D9E0C4] rounded-full overflow-hidden mt-auto" 
              initial={{ scaleX: 0 }} 
              animate={{ scaleX: 1 }} 
              transition={{ delay: index * 0.1 + 0.8, duration: 0.8 }}
            >
              <motion.div 
                className="h-full bg-gradient-to-r from-[#CCD5AE] to-[#9CAA7A]" 
                initial={{ x: "-100%" }} 
                animate={{ x: 0 }} 
                transition={{ delay: index * 0.1 + 1, duration: 1, ease: "easeOut" }} 
              />
            </motion.div>
          </div>

          {/* Corner decoration */}
          <div className="absolute top-0 right-0 w-0 h-0 border-l-[20px] sm:border-l-[30px] border-l-transparent border-t-[20px] sm:border-t-[30px] border-t-[#CCD5AE]/20" />
        </motion.div>
      )) : (
        // Fallback when no projects
        <div className="col-span-full text-center py-12">
          <p className="text-gray-500 text-lg">No projects available</p>
        </div>
      )}
    </motion.div>

    {/* View All Projects button */}
    <motion.div 
      className="mt-12 sm:mt-16 text-center" 
      initial={{ opacity: 0, y: 30 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6, delay: 0.3 }} 
      viewport={{ once: true }}
    > 
      <motion.button 
        className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white bg-gradient-to-r from-[#CCD5AE] to-[#9CAA7A] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group" 
        whileHover={{ scale: 1.05, y: -2 }} 
        whileTap={{ scale: 0.98 }}
      >
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-[#9CAA7A] to-[#CCD5AE] opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
        />
        <span className="relative z-10">View All Projects</span>
        <motion.div 
          className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2" 
          animate={{ x: [0, 5, 0] }} 
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          →
        </motion.div>
      </motion.button>
    </motion.div>
  </div>
</section>
)
