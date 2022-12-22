import React from 'react'

const Option = ({ title, selected }) => {
  return (
    <div className=''>
      <div className={`rounded-[4px] border-[1px]
              my-2 
              lg:mx-2 
              cursor-pointer
              hover:bg-[#ff5656]
              ${selected === title ? "bg-[#fff]" : null}
              `}>
        <div className='grid place-items-center'>
          <p className='text-[30px] mx-3 lg:text-[60px]'>{title}</p>
        </div>
      </div>
    </div>
  )
}

export default Option