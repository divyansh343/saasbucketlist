import '../styles/globals.css'
import Layout from "../components/Layout"
import { Toaster } from 'react-hot-toast'

function MyApp({
  Component,
  pageProps
}) {
  return (
    <>
      <div  >
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