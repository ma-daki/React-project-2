import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MidSection from './components/MidSection'
import BottomSection from './components/BottomSection'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='min-h-screen text-black'>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6 lg:px-20">
        <Hero />
        <MidSection />
        <BottomSection />
        <Footer />
      </div>
    </div>
  )
}

export default App