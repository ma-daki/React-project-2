import React from 'react'
import { motion } from 'framer-motion'
import { STAGGER_CONTAINER, FADE_UP, BUTTON_INTERACTIONS } from '../utils/animations'
import heroImg from '../assets/heroImg.png'

function Hero() {
  return (
    <div className='flex flex-col lg:flex-row items-center mt-6 lg:mt-20 overflow-hidden'>
      <motion.div 
        variants={STAGGER_CONTAINER}
        initial="hidden"
        animate="show"
        className="items-center px-4 lg:px-0 text-center lg:text-left lg:w-1/2"
      >
        <motion.h1 variants={FADE_UP} className='uppercase text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight'>
          Tap into your fashion taste
        </motion.h1>
        <motion.p variants={FADE_UP} className='text-sm text-neutral-500 max-w-2xl lg:text-xl mt-10 mx-auto lg:mx-0'>
          Fashion just makes sense don’t you think? it is one art that never
          gets lost. it just changes overtime and then synthesizes with even better harmony because that is what it is. timeless! would you so miss out on such art? i don’t think so.
        </motion.p>

        <motion.button 
          variants={FADE_UP}
          whileHover={BUTTON_INTERACTIONS.hover}
          whileTap={BUTTON_INTERACTIONS.tap}
          className='bg-black text-white px-12 py-4 rounded-lg my-10 hover:bg-neutral-800 transition-colors duration-200 cursor-pointer'
        >
          Pick a Style
        </motion.button>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, x: 20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2, type: 'spring', stiffness: 100 }}
        className="flex justify-center lg:w-1/2"
      >
        <img src={heroImg} alt="hero" draggable={false} />
      </motion.div>
    </div>
  )
}

export default Hero