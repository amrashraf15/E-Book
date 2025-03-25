import Slider from "./Slider"
import TextBox from "./TextBox"

const BestSelling = () => {
  return (
    <div className="pt-16 pb-16 bg-gray-100 dark:bg-gray-950 py-2 md:px-8 md:py-8 my-10">
        <div className="py-16 px-4 w-[90%] md:w-[80%] mx-auto text-center">
            <div className="mx-auto w-fit">
                <TextBox text="BestSelling"/>
            </div>
            <h1 className='text-xl sm:text-2xl md:text-3xl my-2 text-gray-800 dark:text-gray-200 font-semibold '>Our Best Selling Books</h1>
            <p className='text-xs sm:text-sm mt- md:text-base font-medium text-gray-700 max-w-xl mx-auto dark:text-gray-500'>Explore our top-rated books that have inspired and transformed countless readers. From self-improvement to business success, 
                these books are packed with valuable knowledge to help you grow and thrive.</p>
                {/*Slider */}
            <div className="w-[90%] md:w-[80%] mx-auto mt-16">
                <Slider/>
            </div>
        </div>
    </div>
  )
}

export default BestSelling