import React from 'react'
import { motion } from 'framer-motion'
import { STAGGER_CONTAINER, FADE_UP, BUTTON_INTERACTIONS, SCROLL_REVEAL_CONFIG } from '../utils/animations'
import ImageCardStack from './ImageCardStack'

const BottomSection = () => {
  return (
    <div className='my-12 w-full overflow-hidden'>

      {/* Top Picks */}
      <motion.div 
        variants={STAGGER_CONTAINER}
        initial="hidden"
        whileInView="show"
        viewport={SCROLL_REVEAL_CONFIG}
        className='text-center mb-12'
      >
        <motion.h2 variants={FADE_UP} className='text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4'>
          Top Picks
        </motion.h2>
        <motion.p variants={FADE_UP} className='text-sm text-neutral-500 lg:text-xl max-w-2xl mx-auto'>
          These are picks made by our stylists in case you want to try a piece by someone.
        </motion.p>
      </motion.div>

      <motion.div 
        variants={STAGGER_CONTAINER}
        initial="hidden"
        whileInView="show"
        viewport={SCROLL_REVEAL_CONFIG}
        className='flex flex-col lg:flex-row items-center justify-center gap-12 px-4 lg:px-12 mb-24'
      >
        <motion.div variants={FADE_UP}>
          <ImageCardStack />
        </motion.div>
        
        <motion.button 
          variants={FADE_UP}
          whileHover={BUTTON_INTERACTIONS.hover}
          whileTap={BUTTON_INTERACTIONS.tap}
          className='bg-white border font-bold border-black text-black px-12 py-4 rounded-lg hover:bg-neutral-800 hover:text-white transition-colors duration-200 cursor-pointer shadow-sm'
        >
          See all
        </motion.button>

        <motion.div variants={FADE_UP}>
          <ImageCardStack />
        </motion.div>
      </motion.div>

      {/* Your Picks */}
      <motion.div 
        variants={STAGGER_CONTAINER}
        initial="hidden"
        whileInView="show"
        viewport={SCROLL_REVEAL_CONFIG}
        className='text-center mb-12'
      >
        <motion.h2 variants={FADE_UP} className='text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4'>
          Your Picks
        </motion.h2>
      </motion.div>

      <motion.div 
        variants={STAGGER_CONTAINER}
        initial="hidden"
        whileInView="show"
        viewport={SCROLL_REVEAL_CONFIG}
        className='flex flex-col items-center gap-8 px-4 lg:px-12'
      >
        <motion.div variants={FADE_UP}>
          <ImageCardStack />
        </motion.div>
        <motion.button 
          variants={FADE_UP}
          whileHover={BUTTON_INTERACTIONS.hover}
          whileTap={BUTTON_INTERACTIONS.tap}
          className='bg-white border font-bold border-black text-black px-12 py-4 rounded-lg hover:bg-neutral-800 hover:text-white transition-colors duration-200 cursor-pointer shadow-sm'
        >
          Make a pick
        </motion.button>
      </motion.div>

    </div>
  )
}

export default BottomSection