import Image from 'next/image'
import React, { useState } from 'react'

import saas from '../../assets/images/saas.png'
const SaasCard = ({ isfor, color, baseCol, iname, subs , description, img }) => {
  const [show, setshow] = useState(false)
  function truncate(str, n) {
    return (str.length > n) ? str.slice(0, n - 1) + '...' : str;
  };
  return (
    <div className=' my-3'>
      <article
      style={{"boxShadow":"0 4px 30px rgba(0, 0, 0, 0.1)","backdropFilter":"blur(4.6px)","WebkitBackdropFilter":"blur(4.6px)",}}
        className={`rounded-[6px] ${baseCol? " bg-[#e6e6e6] bg-opacity-[0.3]" : "bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-indigo-200 via-slate-600 to-indigo-200"} 
        border-[0.5px]
        ${ baseCol ? null : "p-[0.7px]" }
        border-gray-400
        shadow-xl transition 
        hover:animate-background hover:bg-[length:400%_400%] hover:shadow-lg hover:[animation-duration:_4s]`}
      >

        <div onClickCapture={() => show ? setshow(false) : setshow(true)}
          style={{"boxShadow":"0 4px 30px rgba(0, 0, 0, 0.1)","backdropFilter":"blur(4.6px)","WebkitBackdropFilter":"blur(4.6px)",}}
        className={`
        rounded-[6px]
        ${baseCol ? "bg-gradient-to-r from-orange-400 to-rose-400" : "bg-[#F4F4F9]"}
          border-[0.5px]
          pt-[10px] px-[4px] sm:p-6
          `}>
          <div className='grid place-items-center lg:place-items-start my-2 lg:my-0 '>
            <Image width={250} height={120} src={ img || saas } alt='lawda ka saas' ></Image>
          </div>
          <div className='text-start pb-2'>
            <p className='text-[16px] lg:text-[18px] mx-3 mt-2  text-[#0f1419] font-semibold underline decoration-red-500 '>{iname}       </p>
          </div>

          {
            show ?
              <>
                <div className='text-start'>
                  <p className='font-thin text-[16px] mt-2 mx-2'>{truncate(description,400)}</p>
                </div>
                <div className={`text-start text-[16px] ${!baseCol? "bg-gray-200":"bg-gray-50"} mb-1  p-2 rounded-[2px] mt-2 font-thin`}>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum doloribus enim nobis?</p>
                </div>
              </> : null
          }
          {/* <div className='bg-red-300 mt-4 hover:bg-red-500 rounded-lg'>
            <p className='text-12px'>{subs}</p>
          </div> */}
        </div>

      </article>
    </div>
  )
}

export default SaasCard