import React, { useState } from 'react'

const JobCard = () => {
  const [showFull, setShowFull] = useState(false)
  return (
    <div>
      <div onClickCapture={() => showFull ? setShowFull(false) : setShowFull(true)} className='border-[1px] bg-[#fbc1c1] rounded-[8px] my-[10px]'>
        <div className='rounded-[8px] bg-slate-100'>
          <div className='grid grid-flow-col py-3 pt-5 mx-3'>
            <div>
              <p>Cutt.io</p>
            </div>
            <div>
              <p>Cutt.io</p>
            </div>
            <div>
              <p>Cutt.io</p>
            </div>
            <div className=''>
              <p>Free mium</p>
            </div>
          </div>
        </div>
        {
          showFull ?
            <div className='m-3'>
              <p>hello Lorem, ipsum dolor.</p>
              <p>hello Lorem, ipsum dolor.</p>
              <p>hello Lorem, ipsum dolor.</p>
              <p>hello Lorem, ipsum dolor.</p>
              <p>hello Lorem, ipsum dolor.</p>
              <p>hello Lorem, ipsum dolor.</p>
            </div>
            : null
        }
      </div>
    </div>
  )
}

export default JobCard