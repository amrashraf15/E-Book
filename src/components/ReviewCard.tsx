import Image from 'next/image';
import React from 'react'
type ReviewCardProps={
    name:string;
    image:string;
    role:string;
    review:string;


}

const ReviewCard = ({name,image,role,review}:ReviewCardProps) => {
  return (
    <div className='px-4 mx-4'>
        <div className='mx-auto space-x-6'>
            <Image src={image} alt="user image" width={80} height={80} className='rounded-full mx-auto' />
        </div>
        <h1 className='my-4'>{name}</h1>
        <p className='my-4'>{role}</p>
        <p>{review}</p>
    </div>
  )
}

export default ReviewCard