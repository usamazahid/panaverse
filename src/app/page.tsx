import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import HeroSection from '@/components/sections/Home/HeroSection'
import Introduction from '@/components/sections/Home/Introduction'
import CoreCourses from '@/components/sections/Home/CoreCourses'
import SpecializedTracks from '@/components/sections/Home/SpecializedTracks'
import Outcome from '@/components/sections/Home/Outcome'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div>
    <HeroSection/>
    <Introduction />
    <CoreCourses />
    <SpecializedTracks />
    <Outcome />
   </div>
  )
}
