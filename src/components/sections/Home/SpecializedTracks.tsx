'use client'
import React, { useState } from 'react'
import Wrapper from '@/components/shared/Wrapper'
import Image from 'next/image'
import web3 from '@/resources/img/web3.webp'
import ai from '@/resources/img/ai.webp'
import cnc from '@/resources/img/cnc.webp'
import iot from '@/resources/img/iot.webp'
import gbs from '@/resources/img/gbs.webp'
import npas from '@/resources/img/npas.webp'


const tracks = [{
    trackId: 1,
    trackName: 'Web 3.0 (Blockchain) and Metaverse Specialization',
    trackDescription: 'This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.',
    trackImage: web3,
    quarters: [
        {
            quarterId: 'III',
            quarterName: 'W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps',
        },
        {
            quarterId: 'IV',
            quarterName: 'MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences',
        }
    ]
}, {
    trackId: 2,
    trackName: 'Artificial Intelligence (AI) and Deep Learning Specialization',
    trackDescription: 'The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.',
    trackImage: ai,
    quarters: [
        {
            quarterId: 'III',
            quarterName: 'AI-351: Developing Planet-Scale Intelligent APIs and Python Programming',
        },
        {
            quarterId: 'IV',
            quarterName: 'AI-361: Deep Learning and MLOps',
        }
    ]
}, {
    trackId: 3,
    trackName: 'Cloud-Native Computing Specialization',
    trackDescription: 'The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices.',
    trackImage: cnc,
    quarters: [
        {
            quarterId: 'III',
            quarterName: 'CN-351: Certified Kubernetes Application Developer (CKAD)',
        },
        {
            quarterId: 'IV',
            quarterName: 'CN-361: Developing Multi-Cloud APIs using CDK for Terraform',
        }
    ]
}, {
    trackId: 4,
    trackName: 'Ambient Computing and IoT Specialization',
    trackDescription: 'The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.',
    trackImage: iot,
    quarters: [
        {
            quarterId: 'III',
            quarterName: 'AC-351: Ambient Computing with Voice Assistants and Matter Devices',
        },
        {
            quarterId: 'IV',
            quarterName: 'AC-361: Embedded Programming using C and Rust',
        }
    ]
}, {
    trackId: 5,
    trackName: 'Genomics and Bioinformatics Specialization',
    trackDescription: 'Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications.',
    trackImage: gbs,
    quarters: [
        {
            quarterId: 'III',
            quarterName: 'Bio-351: Python for Biologists',
        },
        {
            quarterId: 'IV',
            quarterName: 'Bio-361: Bioinformatics with Python',
        }
    ]
}, {
    trackId: 6,
    trackName: 'Network Programmability and Automation Specialization',
    trackDescription: 'More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.',
    trackImage: npas,
    quarters: [
        {
            quarterId: 'III',
            quarterName: 'NPA-351: CCNA 200-301 Certification',
        },
        {
            quarterId: 'IV',
            quarterName: 'NPA-361: Network Programmability and Automation',
        }
    ]
}]


function SpecializedTracks() {
    const [selectedTrack, setSelectedTrack] = useState(1);
    const selectedTrackData = tracks.find((track) => track.trackId == selectedTrack)
    console.log(selectedTrackData);

    return (
        <div className='pt-8 tracks'>
            <Wrapper>
                <div className="heading text-center">
                    <h2 className='whitespace-pre-line font-bold uppercase text-lg md:text-2xl'>
                        Specialized Tracks
                    </h2>
                    <p>
                        After completing the first three quarters the participants will select one or more specializations consisting of two courses each:
                    </p>
                </div>

                <div className=" flex space-x-8 overflow-x-scroll p-8 scrollbar-thin scrollbar-thumb-[#700817] scrollbar-track-gray-100">
                    {
                        tracks.map((track) => (
                            <div className="w-64 p-2 border flex-shrink-0 text-center" key={track.trackId}>
                                <Image src={track.trackImage} alt={track.trackName} className='rounded-2xl mb-4' />
                                <div className="details h-32">
                                    <h3 className='mb-4 font-bold'>{track.trackName}</h3>
                                    <p className='mb-4 truncate'>{track.trackDescription}</p>
                                </div>
                                <button onClick={() => setSelectedTrack(track.trackId)} className="bg-[#b6152c] active:bg-[#700817] text-white font-bold py-2 px-4
                                 border-b-4 border-[#700817] active:border-[#b6152c] rounded-3xl w-32">
                                    Learn More
                                </button>
                            </div>
                        ))
                    }
                </div>

                <div className="details py-8">
                    <div className="heading">
                        <h2 className='whitespace-pre-line font-bold uppercase text-lg md:text-2xl'>
                            {selectedTrackData?.trackName}
                        </h2>
                    </div>
                    <div className="description">
                        <h3 className='py-8 md:py-4'>{selectedTrackData?.trackDescription}</h3>
                    </div>
                    <div className="button">
                        <button className="bg-[#b6152c] active:bg-[#700817] text-white font-bold py-2 px-4
                                 border-b-4 border-[#700817] active:border-[#b6152c] rounded-3xl w-32">
                            Enroll Now
                        </button>
                    </div>
                    <div className="quarters flex flex-col md:flex-row py-8 space-x-0 md:space-x-8 space-y-8 md:space-y-0">
                        {
                            selectedTrackData?.quarters.map((track) => (

                                <div key={track.quarterId} className="quater-1 h-60 w-full md:w-96 bg-white bg-opacity-75 relative border rounded-2xl p-8
                             transition ease-in-out duration-300 hover:scale-110 flex justify-center flex-col">
                                    <h2 className='text-4xl'>Quarter {track.quarterId}</h2>
                                    <p className='mt-4'>{track.quarterName}</p>
                                    {/* <Image src={oop} alt='oop' className='absolute right-0 bottom-0 h-28 w-28 opacity-75'/> */}
                                </div>

                            ))
                        }
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}

export default SpecializedTracks