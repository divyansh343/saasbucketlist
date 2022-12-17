import React, { useState } from 'react'

const SaasCard = ({ isfor, color, baseCol, iname, subs}) => {
  const [show, setshow] = useState(false)

  return (
    <div  className='my-2'>
      <article
        className={`rounded-xl ${baseCol || "bg-black"} p-0.5 shadow-xl transition hover:animate-background hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]`}
      >
        <div >
          <p className='text-white font-medium '>For <span className={`${color || "text-white"}`}>{isfor || "everyone"}</span></p>
        </div>
        <div onClickCapture={() => show ? setshow(false) : setshow(true)} className="rounded-[10px] bg-white px-[10px] py-[10px] sm:p-6">
          <div className='text-start'>
            <p className='text-[18px] font-semibold'>{iname}</p>
          </div>

          {
            show ?
              <>
                <div className='text-start'>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum doloribus enim nobis?</p>
                </div>
              </> : null
          }
          <div className='bg-red-300 mt-4 hover:bg-red-500 rounded-lg'>
            <p className='text-12px'>{subs}</p>
          </div>
        </div>

      </article>
    </div>
  )
}

export default SaasCard