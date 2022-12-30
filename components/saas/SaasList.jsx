import React from 'react'
import { data } from '../../db/data'
import SaasCard from '../cards/SaasCard'

const SaasList = () => {
  return (
    <div className='mx-[0px] md:mx-[50px] lg:ml-[100px] lg:pr-[100px] mt-8'>
      <div className=' grid grid-flow-row'>
        {
          data.map(item => (
            <>
              <SaasCard iname={item.saas} description={item.description} img={item.img} baseCol />
            </>
          ))
        }

        {/* <SaasCard iname="Copy.AI" subs="Freemium" />
        <SaasCard iname="Copy.AI" subs="Paid" />
        <SaasCard iname="Copy.AI" subs="Free" baseCol color="text-black" isfor="Developers" />
        <SaasCard iname="chut.AI" subs="Free" baseCol color="text-black" isfor="Solopreneuers" />
        <SaasCard iname="huut.AI" subs="Free" baseCol color="text-black" isfor="Developers" />
        <SaasCard iname="Copy.AI" subs="Freemium" />
        <SaasCard iname="Copy.AI" subs="Paid" />
        <SaasCard iname="Copy.AI" subs="Paid" /> */}
      </div>
    </div>
  )
}

export default SaasList