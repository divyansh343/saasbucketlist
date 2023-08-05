import Image from 'next/image'
import React, { useState } from 'react'
import { isMobile } from 'react-device-detect'
import { TbExternalLink } from 'react-icons/tb';
import { BsArrowUpSquare } from 'react-icons/bs';

import saas from '../../assets/images/saas.png'
import TypeList from '../saas/TypeList';
import ReadMore from '../utils/ReadMore';
const SaasCard = ({ isfor, color, baseCol, iname, description, img, link, pricing, why }) => {
  const [show, setshow] = useState(false)

  const typeVal = () => {
    let value = 0;
    if (isMobile) {
      value = 1;
    } else {
      value = 3;
    }
    return value
  }
  function truncate(n) {
    return (why) ? why.slice(0, n - 1) + '...' : why;
  };

  return (
    <div className={`my-[7px] lg:my-[9px] saturate-150`}>
      <article
        className={`rounded-[6px] ${baseCol ? " plus-col" : "theme-col"} 
         border-[0.1px]
         ${show ? "bg-[#fbf719] bg-opacity-10" : ""}
         hover:bg-[#fbf719] hover:bg-opacity-20
        border-gray-400  border-opacity-70
       `}
      >
        <div
          className={`
        rounded-[6px]
        ${baseCol ? "plus-col" : ""}
          pt-[10px] px-[4px] sm:p-6
          `}>
          <div
            onClick={() => show ? setshow(false) : setshow(true)}
            className='text-start pb-2'>
            <div className='grid grid-cols-2 lg:grid-cols-3'>

              <div className='col-span-1'>
                <p className='text-[16px] lg:text-[18px] font-two font-medium mx-3  text-[#0f1419]  tracking-wide'>{iname}
                  {
                    isMobile ? null :
                      <span className='mx-2'>
                        {/* <div className="badge badge-md font-two">{pricing}</div> */}

                        <kbd className="kbd kbd-sm font-two font-normal bg-gray-700 text-white">{pricing}</kbd>
                      </span>
                  }
                </p>
                <p className='text-[13px] lg:text-[14px] lg:mt-[2px] text-gray-600 font-two mx-3'>
                  {isMobile
                    ? <>
                      {!show ?
                        <>{truncate(18)}</>
                        : <>{why}</>}</>
                    : <>{why}</>
                  }
                </p>
              </div>

              <div className="col-span-1 lg:col-span-2">
                <div className='grid place-items-end'>

                  <div className='div grid-flow-col '>
                    {isfor.filter((type, idx) => idx < typeVal()).map(type =>
                      <div key={type} className={`my-2 ${baseCol? "no-animation" : null}  inline-grid`}>
                        <button className='secondary-col border-[0.2px] border-gray-500 rounded-[14px] mx-1 
                        hover:drop-shadow
                        px-2 py-[0.3px] '>
                          <span className={"text-[16px] font-normal font-two"}>
                            <TypeList type={type} />
                          </span>
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
                <div className='grid place-items-center md:place-items-start lg:place-items-start my-2 lg:my-0 '>
                  <div className='rounded-[12px]'>
                    <Image width={350} height={220} src={img || saas}
                      className="rounded-[6px]
                      border-[2px] border-gray-200
                      "
                      alt={iname + "image "} ></Image>
                  </div>

                </div>
                <div className='mx-2 lg:my-2 grid place-items-start'>
                  <p className='font-two text-[16px] cursor-pointer'>
                    <span>
                      Pricing -
                    </span>
                    <span> <kbd className="kbd kbd-sm font-two font-normal text-[16px] bg-gray-600 text-white  hover:drop-shadow">{pricing}</kbd></span>
                  </p>
                </div>
                <div>
                  <div className='text-start'>
                    <p className='tracking-wide text-[14px] font-two lg:text-[17px] mt-2 mx-2'>
                      <ReadMore>
                        {/* {truncate(description, 300)} */}
                        {description}
                      </ReadMore>
                    </p>

                  </div>

                  <div className='mt-[20px] mx-2'>
                    <div className='grid place-items-start'>
                      <button className='seacond-col rounded-2xl px-4 py-1 border-[0.5px] 
                      bg-gray-800
                      hover:drop-shadow
                      hover:border-zinc-700 '>

                        <a href={link} target="_blank" rel='noreferrer' className='font-two text-white'>
                          visit {iname} <span className='inline-block ml-1'><TbExternalLink /></span>
                        </a>
                      </button>
                    </div>
                  </div>

                  <div className='grid place-items-end my-1'>
                    <span
                      onClickCapture={() => show ? setshow(false) : setshow(true)}
                      className='mr-3 lg:mr-7 border-gray-400 border-[0.1px] p-2 rounded-2xl 
                    hover:scale-105
                    text-white
                    bg-gray-700'>
                      <BsArrowUpSquare />
                    </span>
                  </div>
                  <div className={`text-start  ${!baseCol ? "theme-col" : "theme-col"} mb-1  p-2 rounded-[2px] mt-2`}>
                    <div className='text-[14px] lg:text-[18px] tracking-wide'>
                      <div>
                        <div className='grid place-items-start'>
                          <div className='div grid-flow-col '>
                            {isfor.filter((type, idx) => idx < 4).map(type =>
                              <div key={type} className='my-1 inline-grid'>
                                <button className={` 
                                ${baseCol ? "plus-col" : "bg-gray-300"}
                                hover:drop-shadow
                                rounded-[14px] mx-1 px-2 py-[0.3px] `}>
                                  <span className="text-[16px] font-normal font-two">
                                    <TypeList type={type} />
                                  </span>
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