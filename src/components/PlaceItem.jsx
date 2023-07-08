import React from 'react'

const PlaceItem = ({ id, title, description, image, address }) => {
  return (
    <div className=' h-[370px] gray-bg w-[500px] my-8 mx-auto rounded-lg'>
        <img src={image} alt="" className=' h-[200px] w-full object-cover rounded-t-lg' />
        <div className='text-center pt-2 my-2 pb-4 border-b-[1px] border-gray-300'>
            <h3 className='text-xl font-semibold'>{title}</h3>
            <p className='font-semibold my-1'>{address}</p>
            <p >{description}</p>
        </div>
        <div className='flex justify-center gap-8 pb-4'>
            <button className=' bg'>Edit</button>
            <button>Delete</button>
        </div>
    </div>
  )
}

export default PlaceItem