import './globals.css'
import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import SideBar from './components/SideBar'

const inter = Inter({ subsets: ['latin'] })
const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MyStory',
  description: 'Tell your Story',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`flex ${inter.className} ${outfit.className}`}>
        <div className='w-64'>
          <SideBar/>
        </div>
        <div className="flex-1">
          {children}
        </div>
      </body>
    </html>
  )
}
