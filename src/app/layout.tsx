import FooterBottom from '@/components/layout/FooterBottom'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata = {
  title: 'Certified Web 3.0 and Metaverse Developer: A Nationwide Program in Karachi, Lahore, Islamabad, and Peshawar | Panaverse',
  description: 'Getting Ready for the Next Generation and Future of the Internet - Join a 13 Trillion Dollar Industry with 5 Billion Users',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body>
        <Header />
        {children}
        <Footer />
        <FooterBottom/>
      </body>
    </html>
  )
}
