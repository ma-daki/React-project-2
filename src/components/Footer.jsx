import React from 'react'

const Footer = () => {
  return (
    <div className='mx-8 mb-8 rounded-2xl bg-neutral-900 overflow-hidden'>
      <div className='flex flex-col lg:flex-row justify-between items-start gap-12 p-10 text-white'>

        {/* Nav Links */}
        <div className='flex flex-col gap-2'>
          <ul className='flex flex-col gap-3'>
            {['Products', 'Contact', 'FAQs', 'About Us'].map((link) => (
              <li key={link}>
                <a
                  href='#'
                  className='text-white hover:text-neutral-400 transition-colors duration-200 font-medium'
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className='flex bg-neutral-100 justify-center items-center p-4 rounded-lg flex-col gap-4 max-w-md w-full'>
          <div>
            <h3 className='text-lg font-bold text-neutral-800 mb-1'>Subscribe to our Newsletter</h3>
            <p className='text-neutral-800 text-sm'>
              Don't miss out on exciting updates and news on our products.
            </p>
          </div>
          <div className='flex gap-2 flex-col lg:flex-row'>
            <input
              type='email'
              placeholder='Enter your e-mail'
              className='flex-1 bg-neutral-50 text-black placeholder:text-neutral-500 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-white/20 text-sm'
            />
            <button className='bg-black text-white font-bold px-6 py-3 rounded-lg hover:bg-neutral-300 transition-colors duration-200 text-sm cursor-pointer whitespace-nowrap'>
              Subscribe
            </button>
          </div>
        </div>

      </div>
    </div >
  )
}

export default Footer