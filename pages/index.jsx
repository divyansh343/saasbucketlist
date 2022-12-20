import Head from 'next/head'
import Image from 'next/image'
import Cards from '../components/cards/Cards'
import SaasCard from '../components/cards/SaasCard'
import Carousel from '../components/Carousel'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <div className=''>
        {/* <div className='mx-[20px] md:mx-[54px] lg:mx-[110px] '>
          <div className='grid grid-flow-row'>
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </div>
        </div> */}
        <div>
          {/* <Carousel /> */}
        </div>
        <div className='mx-[0px] md:mx-[50px] lg:ml-[120px] lg:mr-[300px] mt-4 grid grid-flow-row'>
          <SaasCard iname="Copy.AI" subs="Free" baseCol="bg-[#F4F4F9]" color="text-black" isfor="Developers" />
          <SaasCard iname="Copy.AI" subs="Free" baseCol="bg-red-400" color="text-black" isfor="Solopreneuers" />
          <SaasCard iname="Copy.AI" subs="Free" baseCol="bg-blue-400" color="text-black" isfor="Developers" />
          <SaasCard iname="Copy.AI" subs="Freemium" baseCol="bg-yellow-400" color="text-black" isfor="Developers" />
          <SaasCard iname="Copy.AI" subs="Freemium" />
          <SaasCard iname="Copy.AI" subs="Freemium" />
          <SaasCard iname="Copy.AI" subs="Freemium" />
          <SaasCard iname="Copy.AI" subs="Paid" />
          <SaasCard iname="Copy.AI" subs="Paid" />
          <SaasCard iname="Copy.AI" subs="Paid" />
        </div>
      </div>

    </>
  )
}
