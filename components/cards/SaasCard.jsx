import Image from 'next/image'
import React, { useState } from 'react'
import { isMobile } from 'react-device-detect'
import loading from '../../assets/images/loading.jpg'

import saas from '../../assets/images/saas.png'
const SaasCard = ({ isfor, color, baseCol, iname, description, img, }) => {
  const [show, setshow] = useState(false)

  const typeVal = () => {
    let value = 0;
    if (isMobile) {
      value = 1;
    } else {
      value = 4;
    }
    return value
  }

  function truncate(str, n) {
    return (str.length > n) ? str.slice(0, n - 1) + '...' : str;
  };

  return (
    <div className=' my-[6px]'>
      <article
        style={{ "boxShadow": "0 4px 30px rgba(0, 0, 0, 0.1)", "backdropFilter": "blur(4.6px)", "WebkitBackdropFilter": "blur(4.6px)", }}
        className={`rounded-[6px] ${baseCol ? " plus-col" : "theme-col"} 
        border-[0.5px]
        ${baseCol ? null : "p-[0.1px]"}
        border-gray-400
        shadow-xl transition 
        hover:animate-background hover:bg-[length:400%_400%] hover:shadow-lg hover:[animation-duration:_4s]`}
      >

        <div onClickCapture={() => show ? setshow(false) : setshow(true)}

          className={`
        rounded-[6px]
        ${baseCol ? "plus-col" : "theme-col"}
          pt-[10px] px-[4px] sm:p-6
          `}>
          <div className='text-start pb-2'>
            <div className='grid grid-cols-2'>
              <div className='col-span-1'>
                <p className='text-[16px] lg:text-[18px] font-semibold mx-3 my-2  text-[#0f1419]  tracking-wide'>{iname}
                </p>
              </div>
              <div className="col-span-1">
                <div className='grid place-items-end'>

                  <div className='div grid-flow-col '>
                    {isfor.filter((type, idx) => idx < typeVal()).map(type =>
                      <div key={type} className='my-2 inline-grid'>
                        <button className='secondary-col border-[0.2px] border-gray-300 rounded-[14px] mx-1 px-2 py-[0.3px] '>
                          <span className="text-[16px] font-thin font-two">{type}</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>


              </div>

            </div>
          </div>

          {
            show ?
              <>
                <div className='grid place-items-center lg:place-items-start my-2 lg:my-0 '>
                  <div className='rounded-[12px]'>
                    <Image width={350} height={220} src={img || saas}
                      className="rounded-[6px]"
                      blurDataURL="/images/load.jpg"
                      alt='lawda ka saas' ></Image>
                  </div>
                </div>
                <div>
                  <div className='text-start'>
                    <p className='tracking-wide text-[14px] font-two lg:text-[17px] mt-2 mx-2'>{description ? truncate(description, 150) : null}</p>
                  </div>
                  <div className={`text-start  ${!baseCol ? "theme-col" : "bg-gray-50"} mb-1  p-2 rounded-[2px] mt-2`}>
                    <div className='text-[14px] lg:text-[18px] tracking-wide'>
                      <div>
                        <div className='grid place-items-start'>

                          <div className='div grid-flow-col '>
                            {isfor.filter((type, idx) => idx < 4).map(type =>
                              <div key={type} className='my-3 inline-grid'>
                                <button className='bg-gray-300 rounded-[14px] mx-1 px-2 py-[0.3px] '>
                                  <span className="text-[16px] font-thin font-two">{type}</span>
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
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