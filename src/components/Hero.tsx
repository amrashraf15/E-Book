import Image from "next/image"
import TextBox from "./TextBox"


const Hero = () => {
  return (
    <section className="relative w-full h-screen px-4 py-2 md:px-8 md:py-4 my-10">
        <div className="flex items-center justify-center md:justify-between">
            {/*TEXT CONTENT */}
            <div data-aos="fade-up" className="flex flex-col pl-4 md:pl-6 space-y-4">
                <TextBox text="Digital E-book"/>
                <h1 className="text-2xl md:text-3xl lg:text-4xl max-w-[600px]  mt-6 mb-6 font-bold text-blue-950 dark:text-white leading-[2.5rem] md:leading-[3.5rem]">Ebooks to Foster Your Personal and Professional <span className="text-orange-500">Development</span></h1>
                <p className="text-xs sm:text-sm max-w-[600px]  md:text-base font-medium text-gray-700 dark:text-gray-500">
                  Discover a wide range of ebooks designed to help you grow in your career and personal life. Whether you&apos;re looking to improve your skills, gain new knowledge, 
                    or find inspiration, our collection has something for everyone.</p>
                    {/*Buttons */}
                    <div className="flex flex-col md:flex-row mt-8 w-fit gap-6">
                          <a href="#_" className="relative px-10 py-3 font-medium text-white transition duration-300 bg-red-500 rounded-md hover:bg-red-600 ease">
                          <span className="absolute bottom-0 left-0 h-full -ml-2">
                        <svg viewBox="0 0 487 487" className="w-auto h-full opacity-100 object-stretch" xmlns="http://www.w3.org/2000/svg"><path d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z" fill="#FFF" fill-rule="nonzero" fill-opacity=".1"></path></svg>
                    </span>
                      <span className="absolute top-0 right-0 w-12 h-full -mr-3">
                      <svg viewBox="0 0 487 487" className="object-cover w-full h-full" xmlns="http://www.w3.org/2000/svg"><path d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z" fill="#FFF" fill-rule="nonzero" fill-opacity=".1"></path></svg>
                    </span>
                    <span className="relative">Download Now</span>
                    </a>
                    <a href="#_" className="relative px-10 py-3 font-medium text-white transition duration-300 bg-green-500 rounded-md hover:bg-green-600 ease">
                          <span className="absolute bottom-0 left-0 h-full -ml-2">
                        <svg viewBox="0 0 487 487" className="w-auto h-full opacity-100 object-stretch" xmlns="http://www.w3.org/2000/svg"><path d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z" fill="#FFF" fill-rule="nonzero" fill-opacity=".1"></path></svg>
                    </span>
                      <span className="absolute top-0 right-0 w-12 h-full -mr-3">
                      <svg viewBox="0 0 487 487" className="object-cover w-full h-full" xmlns="http://www.w3.org/2000/svg"><path d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z" fill="#FFF" fill-rule="nonzero" fill-opacity=".1"></path></svg>
                    </span>
                    <span className="relative">Browse Ebook</span>
                    </a>
                    </div>
            </div>
            {/*IMAGE */}
            <div data-aos="fade-down" data-aos-delay="150" className="mx-auto hidden md:block rounded-t-full">
              <Image src="/images/hero.jpg" alt="hero image" width={500} height={500} className="rounded-t-full"/>
            </div>
        </div> 
    </section>
  )
}

export default Hero