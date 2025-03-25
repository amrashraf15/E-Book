import ReviewSlider from "./ReviewSlider"
import TextBox from "./TextBox"


const Reviews = () => {
  return (
    <div className='pt-16 pb-16 bg-gray-100 dark:bg-gray-950 py-2 md:px-8 md:py-8 my-10'>
        <div className="max-w-6xl mx-auto py-10 px-6 sm:px-12 text-center">
                <div className='mx-auto w-fit'>
                <TextBox text='Reviews' />
                </div>
                <h1 className='text-xl sm:text-2xl md:text-3xl my-2 text-gray-800 dark:text-gray-200 font-semibold'>
                    Our Success Stories
                </h1>
                <p className='text-sm md:text-base font-medium text-gray-700 max-w-xl mx-auto dark:text-gray-500'>
                Hear from our satisfied clients who have experienced remarkable improvements using our services.
                </p>
                <div className="w-[80%] mx-auto mt-16">
                    <ReviewSlider/>
                </div>
        </div>
    </div>
  )
}

export default Reviews