import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import LandingPage from '../components/landing/LandingPage'
import Userpage from '../components/landing/Userpage'
import SaasList from '../components/saas/SaasList'

export default function Home() {
  // const router = useRouter()
  // const { data: session } = useSession()

  return (
  <div className='mx-[20px] lg:mx-32'>
  <div className=''>
    <div className='pt-10'>
    </div>
    <SaasList />
  </div>
</div>
  )

  // if (session) {
  //   return <Userpage />
  // } else {
  //   return <LandingPage />
  // }

}
