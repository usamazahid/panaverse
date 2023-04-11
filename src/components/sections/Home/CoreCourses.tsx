import React from 'react'
import Wrapper from '@/components/shared/Wrapper'
import Image from 'next/image'
import oop from '@/resources/img/oop.png'
import cloud from '@/resources/img/cloud.png'

function CoreCourses() {
  const text = `Core Courses\n(Common in All Specializations)`
  return (
    <div className='bg-[#f5f5f5] pt-8 mt-8'>
      <Wrapper>
        <h2 className='whitespace-pre-line font-bold uppercase text-lg md:text-2xl'>
          {text}
        </h2>
        <p>
        Every participant of the program will start by completing the following two core courses:
        </p>
        <div className='coreCourses w-full bg-[url(/progressLineMobile.svg)] md:bg-[url(/progressLine.svg)] bg-cover
        flex flex-wrap justify-around lg:space-x-12 space-y-8 md:space-y-0 py-8 md:relative'>
          <div className="quater-1 h-60 w-full md:w-96 bg-white bg-opacity-75 relative border rounded-2xl p-8
          transition ease-in-out duration-300 hover:scale-110">
            <h2>Quarter I</h2>
            <p className='mt-4'>Quarter I (Core) CS-101: Object-Oriented Programming using TypeScript</p>
            <Image src={oop} alt='oop' className='absolute right-0 bottom-0 h-28 w-28 opacity-75'/>
          </div>
          <div className="quater-2 h-60 w-full md:w-96 bg-white bg-opacity-75 relative border rounded-2xl p-8 top-0 lg:-top-8 xl:-top-20
          transition ease-in-out duration-300 hover:scale-110">
            <h2>Quarter II</h2>
            <p className='mt-4'>Quarter II (Core) W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform</p>
            <Image src={cloud} alt='cloud' className='absolute right-0 bottom-0 w-28 opacity-75'/>
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default CoreCourses