import Image from 'next/image'
import React, { useState } from 'react'

import saas from '../../assets/images/saas.png'
const SaasCard = ({ isfor, color, baseCol, iname, subs }) => {
  const [show, setshow] = useState(false)

  return (
    <div className=' my-3'>
      <article
      style={{"borderRadius":"16px","boxShadow":"0 4px 30px rgba(0, 0, 0, 0.1)","backdropFilter":"blur(4.6px)","WebkitBackdropFilter":"blur(4.6px)","border":"1px solid rgba(142, 153, 255, 0.58)"}}
        className={`rounded-xl ${baseCol? "bg-gradient-to-r from-orange-400 to-rose-400" : " bg-[#e6e6e6] bg-opacity-[0.3]"} pb-1 pl-[6px] pr-[2px]
        border-[0.5px]
        border-gray-400
        shadow-xl transition 
        hover:animate-background hover:bg-[length:400%_400%] hover:shadow-lg hover:[animation-duration:_4s]`}
      >

        <div onClickCapture={() => show ? setshow(false) : setshow(true)}
          style={{"borderRadius":"16px","boxShadow":"0 4px 30px rgba(0, 0, 0, 0.1)","backdropFilter":"blur(4.6px)","WebkitBackdropFilter":"blur(4.6px)","border":"1px solid rgba(142, 153, 255, 0.58)"}}
        className={`
        rounded-[10px]
        ${baseCol ? "bg-gradient-to-r from-orange-400 to-rose-400" : "bg-[#F4F4F9]"}
         bg-opacity-100 pt-[10px] px-[4px] sm:p-6`}>
          <div className='grid place-items-center lg:place-items-start my-2 lg:my-0'>
            <Image width={250} height={120} src={saas} alt='lawda ka saas' ></Image>
          </div>
          <div className='text-start pb-2'>
            <p className='text-[16px] mx-3 mt-2  text-[#0f1419] font-semibold underline decoration-red-500 '>{iname}       </p>
          </div>

          {
            show ?
              <>
                <div className='text-start pb-4'>
                  <p className='font-thin text-[14px] mt-2 mx-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui maiores modi dolor repellendus adipisci culpa sit dicta voluptatibus, aliquam corrupti corporis! Asperiores.</p>
                </div>
                <div className='text-start text-[14px]  bg-gray-50 p-2 rounded-[4px] mt-2 font-thin'>
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