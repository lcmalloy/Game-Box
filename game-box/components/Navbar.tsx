import React, { useState, useCallback, useEffect } from 'react'
import {signOut} from 'next-auth/react'

import { CgChevronDoubleDown } from 'react-icons/cg'

import NavbarItem from './NavbarItem'
import MobileMenu from './MobileMenu'
import AccountMenu from './AccountMenu'

import { FiSearch } from 'react-icons/fi'
import {BsBellFill} from 'react-icons/bs'

const TOP_OFFSET = 66;

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [showAccountMenu, setShowAccountMenu] = useState(false)
  const [showBackground, setShowBackground] = useState(false)

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current);
  }, [setShowMobileMenu])

  const toggleAccountMenu = useCallback(() => {
    setShowAccountMenu((current) => !current);
  }, [setShowAccountMenu])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true)
      } else {
        setShowBackground(false)
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  return (
    <nav className="w-full fixed z-40">
      <div className={`px-4 md:px-16 flex flex-row items-center transition duration-500 ${showBackground ? 'bg-zinc-900/90' : ''}`}>
        <img className="h-28 lg:h-36" src="/images/logo_transp.svg" alt="logo" />
        <div className="flex-row ml-8 gap-7 hidden lg:flex">
        <NavbarItem label="Home"/>
        <NavbarItem label="Genre"/>
        <NavbarItem label="Multiplayer"/>
        <NavbarItem label="New & Popular"/>
        <NavbarItem label="My List"/>
        <NavbarItem label="Browse by Console"/>
          <button className="h-10 w-20 bg-white" onClick={() => signOut()}>Logout</button>
        </div>
        <div onClick={toggleMobileMenu} className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative">
          <p className="text-white text-sm">Browse</p>
          <CgChevronDoubleDown className={`text-white transition ${showMobileMenu ? 'rotate-180' : 'rotate-0'}`}/>
          <MobileMenu visible={showMobileMenu}/>
        </div>
        <div className="flex flex-row ml-auto gap-7 items-center">
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <FiSearch />
          </div>
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <BsBellFill />
          </div>
          <div className="flex flex-row items-center gap-2 cursor-pointer relative" onClick={toggleAccountMenu}>
            <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
              <img src="/images/profile1.png" alt="profile" />
            </div>
            <CgChevronDoubleDown className={`text-white transition ${showAccountMenu ? 'rotate-180' : 'rotate-0'}`}/>
            <AccountMenu visible={showAccountMenu}/>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;