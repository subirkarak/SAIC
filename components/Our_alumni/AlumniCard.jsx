import React from 'react'
import Image from 'next/image'
const AlumniCard = ({image , name ,degree , designation}) => {
  return (
    <div className='h-36 pt-4 pb-8 w-full md:w-[600px] md:px-20 shadow-2xl flex flex-row'>
        < Image  src={`${image}`} width={50} height={50}  className='basis-4/12'/>
        <div className='basis-8/12 mx-6 my-4'>
            <h1 className='text-red-500'>{name}</h1>
            <h1 >{degree}</h1>
            <h1 className='text-xs'>{designation}</h1>
        </div>
    </div>
  )
}

export default AlumniCard