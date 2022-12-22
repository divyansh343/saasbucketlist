import React from 'react'

const onboarding = () => {
  return (
    <div className='mt-20'>
      <div className='mx-[20px] mt-60 lg:mx-[100px]'>
        <div className='bg-gradient-to-r from-orange-400 to-rose-400 shadow-lg border-[1px] rounded-[4px]  h-[400px]' >
          <div className='grid place-items-center'>
            <div className='mt-[40px]' >
              <p className='text-[30px] font-semibold'>I am,</p>
            </div>
            <div>
              <ul className="menu bg-base-100 w-56 p-2 rounded-box">
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
                <li><a>Item 3</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default onboarding