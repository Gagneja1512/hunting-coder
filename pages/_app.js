import '@/styles/globals.css'
import Navbar from "../components/Navbar"
// Here import the CSS to apply on all pages .

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar/>
      <Component {...pageProps} />
    </>
  )
}
