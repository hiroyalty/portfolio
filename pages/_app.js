import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';
import '../styles/globals.css'
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    console.log("test git")
    const use = async () => {
      (await import('tw-elements')).default;
    };
    use();
  }, []);
  return (
    <>
      <Nav />
        <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
