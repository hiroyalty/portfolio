import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
        <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
