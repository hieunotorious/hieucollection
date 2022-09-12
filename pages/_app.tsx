import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/footer'
interface Props {
  comp: React.ElementType; // 👈️ type it as React.ElementType
}

function App({ Component, pageProps }: AppProps) {
  return <>
    <Navbar />
   <Component {...pageProps} />
   <Footer />
  </>

}

export default App
