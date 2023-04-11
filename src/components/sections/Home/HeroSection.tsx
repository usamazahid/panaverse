import React from 'react'
import Image from 'next/image'
import banner from '@/resources/img/banner.jpg'

function HeroSection() {
  return (
    <div className='flex flex-wrap'>
      <div className="banner w-full md:w-1/2 rounded-br-full overflow-hidden">
        <Image src={banner} alt='banner' className='min-h-full' />
      </div>

      <div className="intro w-full md:w-1/2 text-center p-4 flex justify-center flex-col space-y-4 ">
        <h1 className='font-bold uppercase text-[#b6152c]'>Certified Web 3.0 and Metaverse Developer</h1>
        <h3>
          A Nationwide Program in Karachi, Lahore, Islamabad, and Peshawar
        </h3>
        <div className="stats flex space-x-4 justify-center text-[#b6152c] font-bold">
          <span className=' border-r border-r-[#b6152c] pr-4'>6+ Courses</span>
          <span className=' border-r border-r-[#b6152c] pr-4'>5+ Cties</span>
          <span>100+ Teachers</span>
        </div>
        <div>
        <button className="bg-blue-500 active:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 active:border-blue-500 rounded-3xl w-28">
          Join Us
        </button>
        </div>
        
      </div>
    </div>
  )
}

export default HeroSection