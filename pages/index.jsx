import Head from 'next/head'
import Image from 'next/image'
import Cards from '../components/cards/Cards'
import JobCard from '../components/cards/JobCard'
import SaasCard from '../components/cards/SaasCard'
import Carousel from '../components/Carousel'
import Navbar from '../components/layout/Navbar'
import SaasList from '../components/saas/SaasList'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <div className=''>
        <div className='pt-10'>
        </div>
        <SaasList />
      </div>
    </>
  )
}
