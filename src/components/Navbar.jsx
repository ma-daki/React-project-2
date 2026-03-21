import React from 'react'
import logo from '../assets/logo.png'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navItems } from '../constant'

function Navbar() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen)
  };

  return (
    <nav className='sticky top-0 z-50 py-3 backdrop-blur-lg'>
      <div className="container p-8 auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center shrink-0">
            <img className='h-5 w-auto mr-2' src={logo} alt="logo" />
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a className='hover:text-neutral-950 hover:underline underline-offset-8' href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 top-0 z-20 w-full p-12 bg-neutral-100 lg:hidden">
            {/* Close button inside the drawer */}
            <div className="flex justify-end mb-4">
              <button onClick={toggleNavbar} className="p-2">
                <X />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center">
              <ul>
                {navItems.map((item, index) => (
                  <li key={index} className='py-4'>
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar