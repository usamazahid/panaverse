'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Wrapper from '@/components/shared/Wrapper'
import Link from 'next/link'
import logo from '@/resources/img/logo.png'
import LoginButton from '../shared/LoginButton'

function Header() {
  const setAlert = ()=> {
    setDisplayMenu(displayMenu?false:true);
  }
  const [displayMenu, setDisplayMenu] = React.useState(false)

  return (
    <div className='bg-white sticky top-0 z-20'>
      <Wrapper>
      <div className='flex items-center justify-between h-16 '>

          <div className="logo order-first md:order-2">
              <Image src={logo} alt='Logo' width={100} height={100}/>
          </div>

          <div className="courses hidden md:block md:order-1">
            <Link href={'/courses'} >COURSES</Link>
          </div>

          <div className={`menu absolute md:relative top-16 md:top-0 -left-full md:left-0
          md:order-3
        bg-white md:bg-inherit
          w-[90%] md:w-auto 
          h-[100vh] md:h-auto
          translate-x-0 duration-300  md:transition-none
          ${displayMenu && "left-0"}`}>
              <ul className='space-y-8 md:space-y-0 py-4 text-center 
              flex flex-col md:flex-row items-center
              space-x-0 md:space-x-8'>
                  <li><Link href={'/'} >HOME</Link></li>
                  <li><Link href={'/admissions'} >ADMISSIONS</Link></li>
                  <li><Link href={'/about'} >ABOUT</Link></li>
                  <li><Link href={'/contact'} >CONTACT</Link></li>
                  <ul className=' md:hidden'>
                  <li><Link href={'/courses'} >COURSES</Link></li>
                  </ul>
                  <li>
                    <LoginButton />
                  </li>
              </ul>
          </div>
          <div className="hamburger md:hidden" onClick={setAlert}>
            <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className='h-8'>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
            </svg>
          </div>
      </div>
      </Wrapper>
    </div>
  )
}

export default Header