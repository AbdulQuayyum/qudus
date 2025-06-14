"use client"
import { ArrowRight, Camera, BarChart3, Target, Zap, TrendingUp, Globe, PieChart, Megaphone, MousePointer, Palette, ImageIcon, Aperture, PenTool, Edit3, FileText, Lightbulb, Compass, ShoppingCart, CreditCard, DollarSign, Smartphone, Monitor, Wifi, Award, Star, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

const Hero = () => {
  const floatingIcons = [
    { icon: BarChart3, delay: 0, startX: "10%", startY: "15%", x: 60, y: 40 },
    { icon: TrendingUp, delay: 0.5, startX: "90%", startY: "20%", x: -60, y: 50 },
    { icon: PieChart, delay: 1, startX: "15%", startY: "75%", x: 70, y: -30 },
    { icon: Target, delay: 1.5, startX: "80%", startY: "70%", x: -80, y: -60 },
    { icon: Megaphone, delay: 2, startX: "25%", startY: "45%", x: 80, y: 70 },
    { icon: Globe, delay: 2.5, startX: "75%", startY: "50%", x: -90, y: -90 },
    { icon: MousePointer, delay: 3, startX: "20%", startY: "30%", x: 70, y: -60 },
    { icon: Camera, delay: 3.5, startX: "70%", startY: "35%", x: -70, y: -50 },
    { icon: Palette, delay: 4, startX: "30%", startY: "65%", x: -60, y: 80 },
    { icon: ImageIcon, delay: 4.5, startX: "85%", startY: "45%", x: 60, y: -40 },
    { icon: Aperture, delay: 5, startX: "15%", startY: "55%", x: -50, y: 60 },
    { icon: PenTool, delay: 5.5, startX: "60%", startY: "20%", x: 80, y: -70 },
    { icon: Edit3, delay: 6, startX: "40%", startY: "80%", x: -80, y: 50 },
    { icon: FileText, delay: 6.5, startX: "90%", startY: "60%", x: 70, y: -80 },
    { icon: Lightbulb, delay: 7, startX: "10%", startY: "40%", x: -60, y: -70 },
    { icon: Compass, delay: 7.5, startX: "65%", startY: "75%", x: 90, y: 60 },
    { icon: Zap, delay: 8, startX: "35%", startY: "25%", x: -70, y: 90 },
    { icon: ShoppingCart, delay: 8.5, startX: "80%", startY: "15%", x: 50, y: -90 },
    { icon: CreditCard, delay: 9, startX: "25%", startY: "85%", x: -90, y: -40 },
    { icon: DollarSign, delay: 9.5, startX: "75%", startY: "65%", x: 80, y: 80 },
    { icon: Smartphone, delay: 10, startX: "45%", startY: "15%", x: -50, y: -50 },
    { icon: Monitor, delay: 10.5, startX: "55%", startY: "85%", x: 60, y: 70 },
    { icon: Wifi, delay: 11, startX: "90%", startY: "30%", x: -80, y: -80 },
    { icon: Award, delay: 11.5, startX: "5%", startY: "70%", x: 90, y: -50 },
    { icon: Star, delay: 12, startX: "95%", startY: "80%", x: -60, y: 40 }
  ]

  return (
    <section className="relative flex flex-col items-center justify-center w-full px-4 py-20 mx-auto overflow-hidden max-w-7xl sm:px-6 lg:px-8 min-h-screen">
      {floatingIcons.map((item, index) => (
        <motion.div key={index} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: [0, 0.4, 0], scale: [0, 1, 0], x: [0, item.x, 0], y: [0, item.y, 0], rotate: [0, 360, 0], }} transition={{ duration: 10, delay: item.delay, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", ease: "easeInOut" }} className="absolute text-[#9CAA7A]" style={{ left: item.startX, top: item.startY, transform: "translate(-50%, -50%)" }} >
          <item.icon className="w-8 h-8" />
        </motion.div>
      ))}


      <div className="relative z-10 flex flex-col items-center justify-center w-full text-center">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="mb-8" >
          <div className="relative w-32 h-32 mx-auto md:w-36 md:h-36">
            <motion.div initial={{ scale: 0.8 }} animate={{ scale: [0.8, 1.1, 1] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", ease: "easeInOut" }} className="absolute inset-0 p-1 rounded-full bg-gradient-to-br from-[#CCD5AE] via-[#B8C599] to-[#9CAA7A]">
              <motion.div animate={{ boxShadow: ["0 0 20px rgba(156, 170, 122, 0.3)", "0 0 40px rgba(156, 170, 122, 0.6)", "0 0 20px rgba(156, 170, 122, 0.3)"] }} transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }} className="w-full h-full p-2 bg-white rounded-full" >
                <motion.img whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }} src="/oreoluwa.jpg" alt="Omotunde-Young Qudus" className="object-cover w-full h-full rounded-full cursor-pointer" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="mb-6">
          <h1 className="mb-4 text-4xl font-bold text-[#121212] md:text-6xl">
            Hello! I'm <span className="text-gradient">Qudus</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#121212] font-medium">
            Digital Marketing Specialist & Creative Professional
          </p>
        </motion.div>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} className="max-w-3xl mx-auto mb-8 text-lg leading-relaxed text-[#121212]">
          Google Analytics & Ads Certified professional with 2+ years of experience in strategy, media buying, and
          creative content creation. Passionate photographer and copywriter driving measurable results.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }} className="grid max-w-2xl grid-cols-3 gap-6 mx-auto mb-10">
          {[{ number: "641", label: "Leads Generated", icon: Target, color: "#CCD5AE" }, { number: "₦1.8K", label: "Avg Cost/Lead", icon: Zap, color: "#B8C599" }, { number: "10.7K", label: "Account Opens", icon: Sparkles, color: "#9CAA7A" }].map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <motion.div key={index} initial={{ opacity: 0, y: 50, rotateX: -90 }} animate={{ opacity: 1, y: 0, rotateX: 0 }} transition={{ duration: 0.8, delay: 1 + index * 0.2, type: "spring", stiffness: 100 }} whileHover={{ scale: 1.1, y: -8, rotateY: 10, boxShadow: `0 20px 40px rgba(156, 170, 122, 0.3)` }} className="creative-card p-6 rounded-2xl text-center creative-shadow bg-white/80 backdrop-blur-sm border border-white/20 relative overflow-hidden">
                <motion.div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#9CAA7A]/5" initial={{ scale: 0, opacity: 0 }} whileHover={{ scale: 1, opacity: 1 }} transition={{ duration: 0.3 }} />
                <motion.div initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }} transition={{ duration: 0.6, delay: 1.3 + index * 0.1, type: "spring", stiffness: 200 }} className="flex justify-center mb-3">
                  <IconComponent className="w-6 h-6" style={{ color: stat.color }} />
                </motion.div>
                <motion.div className="mb-2 text-2xl font-bold md:text-3xl text-gradient" initial={{ scale: 0.5 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: 1.5 + index * 0.1, type: "spring", stiffness: 300 }} >
                  {stat.number}
                </motion.div>
                <div className="text-sm text-[#121212] font-medium">{stat.label}</div>
              </motion.div>
            )
          })}
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.9 }}>
          <motion.a href="#contact" className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-[#CCD5AE] to-[#9CAA7A] rounded-full creative-shadow hover:from-[#9CAA7A] hover:to-[#CCD5AE] transition-all duration-300" whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
            Let's Work Together
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
