import Drawer from '../components/Drawer'
import MobileNav from '../components/MobileNav'
import { Providers } from '../components/Providers'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio',
  description: 'A Metamask Clone',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Providers>
          <main className='bg-white lg:flex lg:space-x-10 dark:bg-[#101213]'>
            <nav className=''>
              <div className='hidden lg:block bg-white text-gray-700 dark:text-slate-100 dark:bg-[#101213]'>
                <Drawer />
              </div>
              <div className='lg:hidden bg-white text-gray-700 dark:text-slate-100 dark:bg-[#101213]'>
                <MobileNav />
              </div>
            </nav>
            <div className='w-full h-screen bg-white'>
              {children}
            </div>
          </main>
        </Providers>
      </body>
    </html>
  )
}
