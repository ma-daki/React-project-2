import React from 'react'

const Footer = () => {
  return (
    <div className='mx-4 lg:mx-8 mb-8 rounded-2xl bg-neutral-900 overflow-hidden'>
      <div className='flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10 p-8 lg:p-10 text-white'>

        {/* Nav Links */}
        <div className='flex flex-col items-center lg:items-start gap-2 w-full lg:w-auto'>
          <ul className='flex flex-col lg:flex-col gap-6 lg:gap-3'>
            {['Products', 'Contact', 'FAQs', 'About Us'].map((link) => (
              <li key={link}>
                <a
                  href='#'
                  className='text-white hover:text-neutral-400 transition-colors duration-200 font-medium text-sm lg:text-base'
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className='flex bg-neutral-100 justify-center items-center p-6 rounded-xl flex-col gap-4 w-full lg:max-w-md'>
          <div className='w-full'>
            <h3 className='text-lg font-bold text-neutral-800 mb-1'>Subscribe to our Newsletter</h3>
            <p className='text-neutral-500 text-sm mb-4'>
              Don't miss out on exciting updates and news on our products.
            </p>
            <div className='flex gap-2 flex-col sm:flex-row'>
              <input
                type='email'
                placeholder='Enter your e-mail'
                className='flex-1 bg-neutral-50 border border-neutral-200 text-black placeholder:text-neutral-400 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-neutral-400 text-sm'
              />
              <button className='bg-neutral-900 text-white font-bold px-6 py-3 rounded-lg hover:bg-neutral-700 transition-colors duration-200 text-sm cursor-pointer whitespace-nowrap'>
                Subscribe
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className='border-t border-neutral-800 px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-2'>
        <p className='text-neutral-500 text-xs'>© 2026 Your Brand. All rights reserved.</p>
        {/* <p className='text-neutral-500 text-xs'>Cheesie and Madaki</p> */}
      </div>
    </div>
  )
}

export default Footer