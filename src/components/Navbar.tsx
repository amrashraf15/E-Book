import {BiBook} from "react-icons/bi"
import React from 'react'
import DesktopNavbar from "./DesktopNavbar"
import MobileNavbar from "./MobileNavbar"

const Navbar = () => {
  return (
    <nav className='sticky top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50'>
        <div className='max-w-7xl mx-auto px-4 '>
            <div className='flex items-center justify-between h-16'>
                {/* Logo */}
                <div className='flex items-center space-x-2'>
                    <div className='w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center flex-col'>
                        <BiBook className="w-6 h-6 text-white"/>
                    </div>
                    <h1 className="text-xl hidden sm:flex md:text-2xl font-semibold">E-<span className="text-orange-600">Book</span></h1>
                </div>
                <DesktopNavbar/>
                <MobileNavbar/>
            </div>
        </div>
    </nav>
  )
}

export default Navbar