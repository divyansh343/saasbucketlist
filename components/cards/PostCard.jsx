import React from 'react'

const PostCard = ({ text, redirectLink, spd }) => {
  return (
    <div>
      <div className={`
      ${spd ? "plus-col hover:bg-gray-600":"bg-white hover:bg-slate-50 "}
      hover:drop-shadow
       cursor-pointer  rounded-[2px] my-2 lg:my-3 `}>
          <div className='py-2 lg:ml-8 mx-3'>
            <p className='text-[18px] lg:text-[20px] tracking-normal  text-[#434343] '>
              {
                text ? text : "The best 30 Google Fonts for your website"
              }
            </p>
          </div>
      </div>
    </div>
  )
}

export default PostCard