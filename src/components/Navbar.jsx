import React from 'react'
import logo from '../assets/logo.png'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navItems } from '../constant'
import { motion, AnimatePresence } from 'framer-motion'
import { FADE_UP, STAGGER_CONTAINER } from '../utils/animations'

function Navbar() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen)
  };

  return (
    <nav className='sticky top-0 z-50 py-3 backdrop-blur-lg'>
      <div className="container p-8 auto relative text-sm">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center shrink-0"
          >
            <img className='h-5 w-auto mr-2' src={logo} alt="logo" />
          </motion.div>
          <motion.ul
            variants={STAGGER_CONTAINER}
            initial="hidden"
            animate="show"
            className="hidden lg:flex ml-14 space-x-12"
          >
            {navItems.map((item, index) => (
              <motion.li key={index} variants={FADE_UP}>
                <a className='hover:text-neutral-950 hover:underline underline-offset-8 transition-colors duration-200' href={item.href}>{item.label}</a>
              </motion.li>
            ))}
          </motion.ul>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:hidden md:flex flex-col justify-end"
          >
            <button onClick={toggleNavbar} className="cursor-pointer active:scale-95 transition-transform">
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </motion.div>
        </div>
        
        <AnimatePresence>
          {mobileDrawerOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed right-0 top-0 z-20 w-full p-12 bg-neutral-100 lg:hidden"
            >
              {/* Close button inside the drawer */}
              <div className="flex justify-end mb-4">
                <button onClick={toggleNavbar} className="p-2 cursor-pointer active:scale-95 transition-transform">
                  <X />
                </button>
              </div>
              <div className="flex flex-col items-center justify-center">
                <motion.ul
                  variants={STAGGER_CONTAINER}
                  initial="hidden"
                  animate="show"
                >
                  {navItems.map((item, index) => (
                    <motion.li key={index} variants={FADE_UP} className='py-4 text-center'>
                      <a href={item.href} className="active:text-neutral-500 transition-colors">{item.label}</a>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navbar