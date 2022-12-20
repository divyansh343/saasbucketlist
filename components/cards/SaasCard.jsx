import Image from 'next/image'
import React, { useState } from 'react'

const SaasCard = ({ isfor, color, baseCol, iname, subs }) => {
  const [show, setshow] = useState(false)

  return (
    <div className=' px-3 py-4 bg-slate-50 border-t-[0.1px] border-x-[0.1px] border-zinc-200'>
      <article
        className={`rounded-xl ${baseCol || "bg-[#F4F4F9]"} pb-1 pl-[6px] pr-[2px]
    
        shadow-xl transition 
        hover:animate-background hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]`}
      >

        <div onClickCapture={() => show ? setshow(false) : setshow(true)} className="
    
        rounded-[10px] bg-gray-100 bg-opacity-80 px-[10px] py-[10px] sm:p-6">
          <div>
            {/* <Image src=""}>
              
            </Image> */}
          </div>
          <div className='text-start'>
            <p className='text-[15px] text-[#0f1419] font-medium underline decoration-red-500 '>{iname}       </p>
            <p className='font-thin text-[15px] mt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui maiores modi dolor repellendus adipisci culpa sit dicta voluptatibus, aliquam corrupti corporis! Asperiores.</p>
          </div>

          {
            show ?
              <>
                <div className='text-start bg-gray-50 p-2 rounded-[4px] mt-2 font-thin'>
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