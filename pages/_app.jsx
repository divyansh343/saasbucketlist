import '../styles/globals.css'
import Layout from "../components/Layout"
import { Toaster } from 'react-hot-toast'
import { SessionProvider } from "next-auth/react"
function MyApp({
  Component,
  pageProps: {...pageProps },
}) {
  return (
    <>
      <div data-theme="cupcake" >
        <Toaster
          position="bottom-right"
          reverseOrder={false}
        />
        <Layout>
          <Component {...pageProps} />
        </Layout >
      </div>
    </>
  )
}

export default MyApp