import '../styles/globals.css'
import Layout from "../components/Layout"
import { Toaster } from 'react-hot-toast'
import { SessionProvider } from "next-auth/react"
function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <SessionProvider session={session}>
        <div  >
          <Toaster
            position="bottom-right"
            reverseOrder={false}
          />
          <Layout>
            <Component {...pageProps} />
          </Layout >
        </div>
      </SessionProvider>
    </>
  )
}

export default MyApp