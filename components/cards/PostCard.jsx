import React from 'react'

const PostCard = ({ text, redirectLink, spd }) => {
  return (
    <div>
      <div className={`
      ${spd ? "bg-gradient-to-r from-orange-300 to-rose-200 hover:bg-gray-600":"bg-white hover:bg-slate-50 "}
        drop-shadow-md
      hover:drop-shadow
       cursor-pointer  rounded-[6px] my-2 `}>
          <div className='py-2 lg:ml-8 mx-3'>
            <p className='text-[18px] lg:text-[20px] tracking-wide font-thin leading-1 drop-shadow'>
              {
                text ? text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Na? sit amet consectetur adipisicing elit. Na?sit amet consectetur adipisicing elit. Na?"
              }
            </p>
            <div className='grid place-items-center lg:place-items-end'>
            <p className=' mr-5 lg:mr-24 text-[14px]'>----- Divyansh Pal -------</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default PostCard