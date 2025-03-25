import React from 'react'
import { BiBook, BiLink, BiVideo } from "react-icons/bi";
import { MdEco } from "react-icons/md";
import TextBox from './TextBox';
import Image from 'next/image';

const Benefits = () => {
    const benefits=[
        {
            id:1,
          title:"Cost-Effective Option",
          description:"Ebooks typically come at a lower price point compared to printed books, making them accessible to a broader audience of readers.",
          icon:<BiVideo className="w-6 h-6 text-white"/>,
        },
        {
            id:2,
          title:"Eco-Conscious Choice",
          description:"Ebooks are environmentally friendly as they are digital, eliminating the need for paper, ink, and sustainable option compared to print books.",
          icon:<MdEco className="w-6 h-6 text-white"/>,
        },
        {
            id:3,
          title:"Enhanced Visibility",
          description:"Ebooks can be effortlessly searched and shared across the internet, enabling readers to discover new books more readily.",
          icon:<BiBook className="w-6 h-6 text-white"/>,
        },
        {
            id:4,
          title:"Enhanced Convenience",
          description:"Ebooks have the capacity to incorporate interactive features like videos, audio, and elevating the overall reading experience.",
          icon:<BiLink className="w-6 h-6 text-white"/>,
        },
      ]
  return (
    <div className='py-16 '>
        <div className='py-16 px-4 w-[90%] md:w-[80%] mx-auto text-center'>
            <div className='mx-auto w-fit mb-4'>
                <TextBox text="Benefits"/> 
            </div>
            <h1 className='text-xl sm:text-2xl md:text-3xl text-gray-800 dark:text-gray-200 font-semibold '>Discover your Benefits</h1>
            <p className='text-xs sm:text-sm mt- md:text-base font-medium text-gray-700 max-w-xl mx-auto dark:text-gray-500'>
                Plus, enjoy the convenience of offline access to our ebooks, allowing you to read at your convenience, anytime, and anywhere.
            </p>
            <div className='mt-16 grid grid-cols-1 xl:grid-cols-3 gap-6 items-center'>
                {/*Left side card */}
                <div className='grid gap-6'>
                    {benefits.slice(0,2).map((benefit)=>(
                        <div data-aos="fade-right"  data-aos-anchor-placement="top-center" data-aos-delay={benefit.id*500} key={benefit.id} className='p-6 bg-white dark:bg-blue-950 shadow-md rounded-xl text-left border border-gray-200 dark:border-none'>
                            <div className='w-12 h-12 mb-4 rounded-full bg-orange-500 flex items-center justify-center flex-col'>
                                <span className='text-3xl'>{benefit.icon}</span>
                            </div>
                            <div>
                                <h3 className='text-base md:text-lg font-semibold mb-3 '>{benefit.title}</h3>
                                <p className='text-gray-600 dark:text-gray-300 text-sm'>{benefit.description}</p>
                            </div>
                        </div>
                    )) }
                </div>
                {/*center Image */}
                <div className='flex justify-center'>
                    <Image src="/images/b.jpg" alt="image" width={900} height={900} className='rounded-xl shadow-md'/>
                </div>
                {/*Right Side Card */}
                <div className='grid gap-6'>
                {benefits.slice(2).map((benefit)=>(
                        <div data-aos="zoom-in"  data-aos-anchor-placement="top-center" data-aos-delay="300" key={benefit.id} className='p-6 bg-white dark:bg-blue-950 shadow-md rounded-xl text-left border border-gray-200 dark:border-none'>
                            <div className='w-12 h-12 mb-4 rounded-full bg-orange-500 flex items-center justify-center flex-col'>
                                <span className='text-3xl'>{benefit.icon}</span>
                            </div>
                            <div>
                                <h3 className='text-base md:text-lg font-semibold mb-3 '>{benefit.title}</h3>
                                <p className='text-gray-600 dark:text-gray-300 text-sm'>{benefit.description}</p>
                            </div>
                        </div>
                    )) }
                </div>
            </div>
            {/*button */}
            <div className='mt-6'>
                    <button className='bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 md:px-8 md:py-3 rounded-lg text-lg font-medium transition duration-300'>Read More &rarr;</button>
            </div>
        </div>
    </div>
  )
}

export default Benefits