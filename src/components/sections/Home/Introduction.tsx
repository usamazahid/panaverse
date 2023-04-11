import React from 'react'
import Wrapper from '../../shared/Wrapper'
import Image from 'next/image'
import aboutImg from '@/resources/img/about-img.jpg'
import Divider from '@/components/shared/Divider'

function Introduction() {
    return (
        <div className='pt-8'>
            <Wrapper>
                <div className="intro flex flex-wrap justify-between py-4">
                    <div className='w-full md:w-1/2 lg:w-2/3'>
                        <h2 className='text-4xl font-bold'>
                            PANAVERSE DAO
                        </h2>
                        <h3 className='py-8 md:py-4'>The Future of the Web is Web 3.0, Metaverse, and Edge Computing. Panaverse DAO is a movement to spread these technolgies globally. It is community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers.</h3>
                        <Divider />
                        <h2 className='font-bold pt-4 uppercase'>
                            The Program in a Nutshell: Earn While You Learn
                        </h2>
                        <h3 className='py-8 md:py-4'>In this brand-new type of curriculum, students will learn how to make money and boost exports in the classroom and will begin doing so within six months of the program’s beginning. It resembles a cross between a corporate venture and an educational project.</h3>

                    </div>
                    <div className='w-full md:w-1/2 lg:w-1/3 md:px-8 block lg:block'>
                        <Image src={aboutImg} alt='about image' className='rounded-3xl' />
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}

export default Introduction