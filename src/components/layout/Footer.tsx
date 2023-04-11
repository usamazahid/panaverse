import React from 'react'
import Wrapper from '../shared/Wrapper'
import Image from 'next/image'
import Link from 'next/link'
import logo from '@/resources/img/logo.png'

function Footer() {
    return (
        <div className="footer bg-slate-600 py-8">
            <Wrapper>
                <div className="sections flex justify-between flex-wrap space-y-8 md:space-y-0">
                    <div className="intro w-80">
                        <div className="logo mb-4">
                            <Image src={logo} alt='Logo' width={100} height={100} />
                        </div>
                        <div className="text-white">
                            <p>The Future of the Web is Web 3.0, Metaverse, and Edge Computing. Panaverse DAO is a movement to spread these technolgies globally. It is community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers.</p>
                        </div>
                    </div>
                    <div className="quickLinks text-white">
                    <h3 className='font-bold mb-4'>Quick Links</h3>
                        <ul>
                            <li><Link href={'/'} >HOME</Link></li>
                            <li><Link href={'/admissions'} >ADMISSIONS</Link></li>
                            <li><Link href={'/about'} >ABOUT</Link></li>
                            <li><Link href={'/contact'} >CONTACT</Link></li>
                            <ul className=' md:hidden'>
                                <li><Link href={'/courses'} >COURSES</Link></li>
                            </ul>
                        </ul>    
                    </div>
                    <div className="relevantLinks text-white">
                        <h3 className='font-bold mb-4'>Relevant Links</h3>
                        <ul className="">
                            <li className="cursor-pointer duration-200 mt-2">Web 3.0 and Metaverse Developer</li>
                            <li className="cursor-pointer duration-200 mt-2">Artificial Intelligence</li>
                            <li className="cursor-pointer duration-200 mt-2">Cloud-Native Computing</li>
                            <li className="cursor-pointer duration-200 mt-2">Ambient Computing and IoT</li>
                            <li className="cursor-pointer duration-200 mt-2">Genomics and Bioinformatics</li>
                            <li className="cursor-pointer duration-200 mt-2">Network Programmability and Automation</li>
                        </ul>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}

export default Footer