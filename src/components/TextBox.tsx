import React from 'react'

type Props={
    text:string;
}
const TextBox = ({text}:Props) => {
  return (
    <p className='text-sm sm:text-base rounded-lg font-bold text-white dark:text-white px-4 py-1 bg-orange-600 w-fit'>
        {text}
    </p>
  )
}

export default TextBox