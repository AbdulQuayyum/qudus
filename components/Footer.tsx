const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <div className="flex flex-col items-center justify-between w-full px-4 pt-4 pb-10 mx-auto max-w-7xl sm:px-6 lg:px-8 gap-y-4 md:flex-row">
      <span className="text-base font-bold text-[#121212]">
        {currentYear} © Omotunde-Young Qudus, All rights reserved
      </span>
      <span className="text-base font-bold text-[#121212]">
        Developed by{" "}
        <a href="https://abdul-quayyum.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-[#9CAA7A] hover:text-[#9CAA7A] transition-colors" >
          Abdul-Quayyum Alao
        </a>
      </span>
    </div>
  )
}

export default Footer
