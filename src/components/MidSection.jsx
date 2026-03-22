import React from 'react'
import { motion } from 'framer-motion'
import { STAGGER_CONTAINER, FADE_UP, BUTTON_INTERACTIONS, SCROLL_REVEAL_CONFIG } from '../utils/animations'
import ImageCardStack from './ImageCardStack'

const MidSection = () => {
  return (
    <div className='my-20 w-full overflow-hidden'>
      <motion.div 
        variants={STAGGER_CONTAINER}
        initial="hidden"
        whileInView="show"
        viewport={SCROLL_REVEAL_CONFIG}
        className='text-center mb-12'
      >
        <motion.h2 variants={FADE_UP} className='text-xl lg:text-3xl font-bold tracking-tight'>
          Tap into the richness of your taste, and let it inspire you.
        </motion.h2>
      </motion.div>

      {/* First Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 px-4 lg:px-12 mb-24">
        <motion.div 
          variants={STAGGER_CONTAINER}
          initial="hidden"
          whileInView="show"
          viewport={SCROLL_REVEAL_CONFIG}
          className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-lg"
        >
          <motion.h2 variants={FADE_UP} className='text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight'>
            See through our collection
          </motion.h2>
          <motion.p variants={FADE_UP} className='text-sm text-neutral-500 lg:text-xl mt-10'>
            Our collection is pretty broad and has a wide range of stuff you definitely do
            not want to miss out on and yes, we have the classics too.
          </motion.p>
          <motion.button 
            variants={FADE_UP}
            whileHover={BUTTON_INTERACTIONS.hover}
            whileTap={BUTTON_INTERACTIONS.tap}
            className='bg-white border font-bold border-black text-black px-12 py-4 rounded-lg mt-10 hover:bg-neutral-800 hover:text-white transition-colors duration-200 cursor-pointer shadow-sm'
          >
            See more
          </motion.button>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={SCROLL_REVEAL_CONFIG}
          className='shrink-0'
        >
          <ImageCardStack />
        </motion.div>
      </div>

      {/* Second Section */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 px-4 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={SCROLL_REVEAL_CONFIG}
          className='shrink-0'
        >
          <ImageCardStack />
        </motion.div>
        <motion.div 
          variants={STAGGER_CONTAINER}
          initial="hidden"
          whileInView="show"
          viewport={SCROLL_REVEAL_CONFIG}
          className="flex flex-col items-center lg:items-center text-center max-w-lg"
        >
          <motion.h2 variants={FADE_UP} className='text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight'>
            Our Style
          </motion.h2>
          <motion.p variants={FADE_UP} className='text-sm text-neutral-500 lg:text-xl mt-10'>
            Our collection speaks class and luxury.
            It's not something that you'd want to miss out on.
          </motion.p>
          <motion.button 
            variants={FADE_UP}
            whileHover={BUTTON_INTERACTIONS.hover}
            whileTap={BUTTON_INTERACTIONS.tap}
            className='bg-white border font-bold border-black text-black px-12 py-4 rounded-lg mt-10 hover:bg-neutral-800 hover:text-white transition-colors duration-200 cursor-pointer shadow-sm'
          >
            See all
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}

export default MidSection