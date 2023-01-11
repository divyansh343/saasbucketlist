import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import LandingPage from '../components/landing/LandingPage'
import Userpage from '../components/landing/Userpage'

export default function Home() {
  const router = useRouter()
  const { data: session } = useSession()

  if (session) {
    return <Userpage />
  } else {
    return <LandingPage />
  }

}
