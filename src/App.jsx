import React from 'react'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import { About } from './components/About'
import MIssion from './components/MIssion'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'
import Services from './components/Services'
import { Features } from './components/Features'
import { ThemeProvider } from './components/ThemeContext'

const App = () => {
  return (
    <ThemeProvider>
      <main className='overflow-y-hidden text-neutral-200 dark:text-gray-950 antialiased dark:bg-slate-100'>
        <HeroSection />
        <Navbar />
        <Features />
        <About />
        <MIssion />
        <Services />
        <ContactSection />
        <Footer />
      </main>
    </ThemeProvider>
  )
}

export default App