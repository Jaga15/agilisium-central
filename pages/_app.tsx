import '../styles/globals.css'
import type { AppProps } from 'next/app'
// import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      {/* <Head>
        <script
          src="https://kit.fontawesome.com/81c88ca9af.js"
          crossOrigin="anonymous"
        ></script>
      </Head> */}
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
