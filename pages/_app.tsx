import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Script
        src="https://kit.fontawesome.com/81c88ca9af.js"
        crossOrigin="anonymous"
      ></Script>
      <Header />
      <Navbar />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
