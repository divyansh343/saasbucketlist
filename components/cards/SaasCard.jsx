import Image from 'next/image'
import React, { useState } from 'react'

import saas from '../../assets/images/saas.png'
const SaasCard = ({ isfor, color, baseCol, iname, subs }) => {
  const [show, setshow] = useState(false)

  return (
    <div className=' my-3'>
      <article
        className={`rounded-xl ${baseCol || "bg-gray-100"} pb-1 pl-[6px] pr-[2px]
        hover:scale-105
        border-[0.5px]
        border-gray-400
        shadow-xl transition 
        hover:animate-background hover:bg-[length:400%_400%] hover:shadow-lg hover:[animation-duration:_4s]`}
      >

        <div onClickCapture={() => show ? setshow(false) : setshow(true)} className="
        rounded-[10px] bg-gray-100 bg-opacity-100 pt-[10px] px-[4px] sm:p-6">
          <div className='grid place-items-center lg:place-items-start my-2 lg:my-0'>
            <Image width={300} height={150} src={saas} alt='lawda ka saas' ></Image>
          </div>
          <div className='text-start pb-4'>
            <p className='text-[16px] mx-3 text-[#0f1419] font-semibold underline decoration-red-500 '>{iname}       </p>
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