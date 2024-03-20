/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'
const AlumniCard = ({image ,name,degree,post,university,place,award}) => {
  return (
    <div className='md:w-[1000px] md:mx-12  py-12 md:flex bg-black my-10'> 

    <img src={image} className='basis-3/12 h-24 mx-4 mt-4' />
     <div className='basis-9/12 mx-20  text-white'>
        <h1 className='italic text-2xl bold'>{name}</h1>
        {degree?<><div className="flex my-2">
      <Image src="/bullet.svg" width={20} height={20}/>
       {degree}
      </div></>:<></>}
        {post?<><div className="flex my-2">
      <Image src="/bullet.svg" width={20} height={20}/>
       {post}
      </div></>:<></>}
        {university?<><div className="flex my-2">
      <Image src="/bullet.svg" width={20} height={20}/>
       {university}
      </div></>:<></>}
        {place?<><div className="flex my-2">
      <Image src="/bullet.svg" width={20} height={20}/>
       {place}
      </div></>:<></>}
        {award?<><div className="flex my-2">
      <Image src="/bullet.svg" width={20} height={20}/>
       {award}
      </div></>:<></>}
         
        
      
      
      
     </div>
    </div>
  )
}

export default AlumniCard