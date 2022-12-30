import Image from 'next/image'
import React, { useState } from 'react'

import saas from '../../assets/images/saas.png'
const SaasCard = ({ isfor, color, baseCol, iname, subs, description, img }) => {
  const [show, setshow] = useState(false)
  function truncate(str, n) {
    return (str.length > n) ? str.slice(0, n - 1) + '...' : str;
  };
  return (
    <div className=' my-3'>
      <article
        style={{ "boxShadow": "0 4px 30px rgba(0, 0, 0, 0.1)", "backdropFilter": "blur(4.6px)", "WebkitBackdropFilter": "blur(4.6px)", }}
        className={`rounded-[6px] ${baseCol ? " theme-col" : "seacondary-col"} 
        border-[0.5px]
        ${baseCol ? null : "p-[0.1px]"}
        border-gray-400
        shadow-xl transition 
        hover:animate-background hover:bg-[length:400%_400%] hover:shadow-lg hover:[animation-duration:_4s]`}
      >

        <div onClickCapture={() => show ? setshow(false) : setshow(true)}
          style={{ "boxShadow": "0 4px 30px rgba(0, 0, 0, 0.1)", "backdropFilter": "blur(4.6px)", "WebkitBackdropFilter": "blur(4.6px)", }}
          className={`
        rounded-[6px]
        ${baseCol ? "theme-col" : "secondary-col"}
          pt-[10px] px-[4px] sm:p-6
          `}>
          <div className='grid place-items-center lg:place-items-start my-2 lg:my-0 '>
            <Image width={250} height={120} src={img || saas} alt='lawda ka saas' ></Image>
          </div>
          <div className='text-start pb-2'>
            <p className='text-[16px] lg:text-[18px] font-normal mx-3 mt-2  text-[#0f1419] underline decoration-red-500 '>{iname}       </p>
          </div>

          {
            show ?
              <>
                <div>
                  <div className='text-start'>
                    <p className='font-[Assistant] tracking-wide text-[14px] lg:text-[17px] mt-2 mx-2'>{truncate(description, 150)}</p>
                  </div>
                  <div className={`text-start  ${!baseCol ? "theme-col" : "bg-gray-50"} mb-1  p-2 rounded-[2px] mt-2`}>
                    <div className='text-[14px] lg:text-[18px] tracking-wide'>
                      <div>
                        <p>
                        For - <span>Developers</span>
                        </p>
                      </div>
                    </div>
                  </div>
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