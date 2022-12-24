import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className='bg-gradient-to-r from-orange-500 to-rose-500 p-[1px] mt-[30px] bottom-0'>
        <div className='grid grid-cols-2'>
        <div className="grid place-items-start col-span-1 ml-2">
          @saasbucketlist
        </div>
        <div className='grid place-items-end col-span-1'>
          <div className='shadow border-[0.1px] hover:bg-rose-600 cursor-pointer  rounded-[1px] px-1 mr-10'>
            <p className='drop-shadow text-black'>@divyansPal</p>
          </div>
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default Footer