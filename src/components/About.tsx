import Image from 'next/image'
import React from 'react'
import TextBox from './TextBox'
import { BiCheck, BiChevronRight } from 'react-icons/bi'

const About = () => {
  return (
    <section className='pt-16 pb-16 bg-gray-100 dark:bg-gray-950 py-2 md:px-8 md:py-8 my-10'>
        <div className='w-[90%] md:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-5 gap-14 items-center'>
            {/*IMAGE */}
            <div data-aos="zoom-in" data-aos-anchor-placement="top-center" className='xl:col-span-2'>
                <Image src="/images/about.jpg" alt='about image' width={500} height={500} className='rounded-xl'/>
            </div>
            {/*Text Content */}
            <div className='flex flex-col space-y-4 xl:col-span-3 items-start px-4 md:px-8'>
                <TextBox text="About Us"/>
                <h1 className='text-xl sm:text-2xl md:text-3xl text-gray-800 dark:text-gray-200 font-semibold '>About This Best-Selling Book</h1>
                <p className="text-xs sm:text-sm max-w-[600px]  md:text-base font-medium text-gray-700 dark:text-gray-500">
                Discover why this book has captured the attention of readers worldwide. Packed with valuable insights, practical tips,
                    and inspiring stories, this book is designed to help you achieve your goals and unlock your full potential.
                </p>
                <ul className='flex flex-col space-y-4'>
                    <li className='flex items-center space-x-2'><BiCheck className='text-orange-500 w-7 h-7'/><p className='text-gray-800 dark:text-gray-200 font-semibold'> Learn effective strategies for personal and professional growth.</p></li>
                    <li className='flex items-center space-x-2'><BiCheck className='text-orange-500 w-7 h-7'/><p className='text-gray-800 dark:text-gray-200 font-semibold'>  Gain insights from experts in the field.</p></li>
                    <li className='flex items-center space-x-2'><BiCheck className='text-orange-500 w-7 h-7'/><p className='text-gray-800 dark:text-gray-200 font-semibold'> Develop new skills and improve your mindset.  </p></li>
                    <li className='flex items-center space-x-2'><BiCheck className='text-orange-500 w-7 h-7'/><p className='text-gray-800 dark:text-gray-200 font-semibold'> Unlock actionable steps to achieve success.</p></li>
                </ul>
                {/*Read More Button */}
                <a href="#_" className=" rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                    <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                    <span className="flex items-center justify-center space-x-2">Read More<BiChevronRight className='w-7 h-7'/></span>
                </a>
            </div>

        </div>
    </section>
  )
}

export default About