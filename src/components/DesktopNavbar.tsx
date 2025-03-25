import Link from 'next/link'
import React from 'react'
import {  FiDownloadCloud } from 'react-icons/fi'
import ThemeToggle from './ThemeToggle'

const DesktopNavbar = () => {
  return (
    <div className='hidden md:flex items-center space-x-4'>
        <ul className='flex flex-row space-x-4 mx-4 text-black dark:text-orange-500'>
            <li><Link href="#">Home</Link></li>
            <li><Link href="#">About</Link></li>
            <li><Link href="#">Benefits</Link></li>
            <li><Link href="#">Courses</Link></li>
            <li><Link href="#">Testimonials</Link></li>
            <li><Link href="#">Contact</Link></li>
        </ul>
        {/*Button */}
        <div className='flex items-center mx-4 space-x-4'>
            <a href="#_" className=" rounded px-5 py-2.5 overflow-hidden group bg-orange-500 relative hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-orange-400 transition-all ease-out duration-300">
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span className="relative z-10 flex items-center text-sm"> 
                    <FiDownloadCloud className='mr-3 w-5 h-5'/>
                    Download
                </span>
            </a>
            {/*Toggle Button  */}
            <ThemeToggle/>
        </div>
    </div>
  )
}

export default DesktopNavbar