import { Analytics } from '@vercel/analytics/react';
import { About, BackToTop, Contact, CaseStudies, Education, Footer, Hero, Navbar, Projects, Qualification, Services, Skills } from "../components/Index"

const App = () => {
  return (
    <div className="layout grainy">
      <header>
        <Navbar />
      </header>
      <main className="flex flex-col gap-y-10 pt-12 overflow-hidden">
        <Hero />
        {/* <About /> */}
        {/* <Services /> */}
        <CaseStudies />
        <Qualification />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <footer>
        <Footer />
        <BackToTop />
        <Analytics />
      </footer>
    </div>
  )
}

export default App
