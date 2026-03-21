import React from 'react'
import heroImg from '../assets/heroImg.png'

function Hero() {
  return (
    <div className='flex flex-col lg:flex-row  items-center mt-6 lg:mt-20'>
      <div className="items-center px-4 lg:px-0 text-center lg:text-left">
        <h1 className='uppercase text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight'>Tap into your fashion taste</h1>
        <p className='text-sm text-neutral-500 max-w-2xl lg:text-xl mt-10'>
          Fashion just makes sense don’t you think? it is one art that never
          gets lost. it just changes overtime and then synthesizes with even better harmony because that is what it is. timeless! would you so miss out on such art? i don’t think so.
        </p>

        <button className='bg-black text-white px-12 py-4 rounded-lg my-10 hover:bg-neutral-800 transition-colors duration-200 cursor-pointer'>Pick a Style</button>
      </div>
      <div className="flex justify-center">
        <img src={heroImg} alt="hero" />
      </div>

    </div>
  )
}

export default Hero