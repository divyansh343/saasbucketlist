import Image from 'next/image'
import React, { useState } from 'react'

const Cards = () => {
  const [show, setshow] = useState(false)
  const handleOpen = () => {
    show ? setshow(false) : setshow(true)
  }
  return (
    <div>
      <div onClickCapture={handleOpen} className='my-2shadow rounded-[8px] border-[1px] border-black my-2'>
        <div className='grid grid-flow-col  bg-red-700 rounded-[8px] px-2'>
          <div>
            <div className='py-2'>
              <Image
                className="h-8 w-8"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="Workflow"
                width={50}
                height={50}
              />

            </div>
          </div>
          <div>

          </div>
          <div className='grid place-items-end'>
            <button className='w-[110px] -mt-2 h-[40px] rounded-[8px] text-base hover:bg-gray-700 font-medium bg-black px-2  text-white'>
              Apply
            </button>
          </div>
        </div>
        {
          show ?
            <>
              <div className=' mt-2'>
                <div className='grid grid-flow-col'>

                  <div className='w-[500px]'>
                    <p className='my-2 text-sm text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quae a quasi cupiditate fugiat, vitae magni obcaecati, hic laboriosam reprehenderit ut dolor voluptatum?</p>
                    <p className='my-2 text-sm text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quae a quasi cupiditate fugiat, vitae magni obcaecati, hic laboriosam reprehenderit ut dolor voluptatum?</p>
                    <p className='my-2 text-sm text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quae a quasi cupiditate fugiat, vitae magni obcaecati, hic laboriosam reprehenderit ut dolor voluptatum?</p>
                    <p className='my-2 text-sm text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quae a quasi cupiditate fugiat, vitae magni obcaecati, hic laboriosam reprehenderit ut dolor voluptatum?</p>
                  </div>

                </div>
              </div>
            </> : null
        }
      </div>
    </div>
  )
}

export default Cards