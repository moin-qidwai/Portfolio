import '../styles/globals.css'

import { AppProps } from 'next/app'
import Link from 'next/link'

function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <header className="w-full">
        <div className="w-full border-b-2 border-gray-100 px-4 sm:px-6">
          <div className="flex justify-center py-6 space-x-5 md:space-x-10">
            <Link href="/projects">
              <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Projects
              </a>
            </Link>

            <Link href="/academic">
              <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Academic
              </a>
            </Link>

            <Link href="/career">
              <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Career
              </a>
            </Link>
          </div>
        </div>
      </header>
      
      <Component {...pageProps} />

      
      <footer className="flex border-t border-gray-100 w-screen bg-white fixed bottom-0 py-5 justify-center">
        Moin Ahmed Qidwai - &copy; Copyright 2021
      </footer>
    </div>
  )
}

export default App
