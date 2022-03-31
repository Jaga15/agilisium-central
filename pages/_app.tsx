import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Script
        src="https://kit.fontawesome.com/81c88ca9af.js"
        crossOrigin="anonymous"
      ></Script>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
