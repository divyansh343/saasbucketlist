import Link from 'next/link'
import React from 'react'

const PostCard = ({ text, redirectLink, spd }) => {
  return (
    <div>
      <a href={redirectLink} target="_blank" rel="noreferrer">
        <div className={`
      ${spd ? "plus-col hover:bg-gray-600" : "bg-white hover:bg-slate-50 "}
      border-[2px] 
      hover:drop-shadow
       cursor-pointer  rounded-[6px] my-2 lg:my-3 `}>
          <div className='py-2 lg:ml-8 mx-3'>
            <p className='text-[18px] lg:text-[20px] tracking-normal font-one font-semibold  text-[#2b0d0d] contrast-125 '>
              {
                text 
              }
            </p>
          </div>
        </div>
      </a>
    </div>
  )
}

export default PostCard