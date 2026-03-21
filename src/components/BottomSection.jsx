import React from 'react'
import ImageCardStack from './ImageCardStack'

const BottomSection = () => {
  return (
    <div className='my-12 w-full'>

      {/* Top Picks */}
      <div className='text-center mb-12'>
        <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4'>
          Top Picks
        </h2>
        <p className='text-sm text-neutral-500 lg:text-xl max-w-2xl mx-auto'>
          These are picks made by our stylists in case you want to try a piece by someone.
        </p>
      </div>

      <div className='flex flex-col lg:flex-row items-center justify-center gap-12 px-4 lg:px-12 mb-24'>
        <ImageCardStack />
        <button className='bg-white border font-bold border-black text-black px-12 py-4 rounded-lg hover:bg-neutral-800 hover:text-white transition-colors duration-200 cursor-pointer'>
          See all
        </button>
        <ImageCardStack />
      </div>

      {/* Your Picks */}
      <div className='text-center mb-12'>
        <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4'>
          Your Picks
        </h2>
      </div>

      <div className='flex flex-col items-center gap-8 px-4 lg:px-12'>
        <ImageCardStack />
        <button className='bg-white border font-bold border-black text-black px-12 py-4 rounded-lg hover:bg-neutral-800 hover:text-white transition-colors duration-200 cursor-pointer'>
          Make a pick
        </button>
      </div>

    </div>
  )
}

export default BottomSection