import React from 'react'
import ImageCardStack from './ImageCardStack'

const MidSection = () => {
  return (
    <div className='my-20 w-full'>
      <div className='text-center mb-12'>
        <h2 className='text-xl lg:text-3xl font-bold tracking-tight'>
          Tap into the richness of your taste, and let it inspire you.
        </h2>
      </div>

      {/* First Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 px-4 lg:px-12 mb-24">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-lg">
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight'>
            See through our collection
          </h2>
          <p className='text-sm text-neutral-500 lg:text-xl mt-10'>
            Our collection is pretty broad and has a wide range of stuff you definitely do
            not want to miss out on and yes, we have the classics too.
          </p>
          <button className='bg-white border font-bold border-black text-black px-12 py-4 rounded-lg mt-10 hover:bg-neutral-800 hover:text-white transition-colors duration-200 cursor-pointer'>
            See more
          </button>
        </div>
        <div className='shrink-0'>
          <ImageCardStack />
        </div>
      </div>

      {/* Second Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 px-4 lg:px-12">
        <div className='shrink-0'>
          <ImageCardStack />
        </div>
        <div className="flex flex-col items-center lg:items-center text-center max-w-lg">
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight'>
            Our Style
          </h2>
          <p className='text-sm text-neutral-500 lg:text-xl mt-10'>
            Our collection speaks class and luxury.
            It's not something that you'd want to miss out on.
          </p>
          <button className='bg-white border font-bold border-black text-black px-12 py-4 rounded-lg mt-10 hover:bg-neutral-800 hover:text-white transition-colors duration-200 cursor-pointer'>
            See all
          </button>
        </div>
      </div>
    </div>
  )
}

export default MidSection