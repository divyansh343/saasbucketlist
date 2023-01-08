import React from 'react'

const AddSaas = () => {
  return (
    <div className='my-16'>
      <div className='grid place-items-center font-two'>
        <div className='my-8'>
          <p className='text-3xl text-center'>
            Add Saas service into bucket list
          </p>
        </div>
        <div className="form-control w-full max-w-xs mb-4">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input type="text" placeholder="ex.Cannary.io" className="input input-bordered w-full  input-md max-w-xs" />
        </div>
        <div className="form-control w-full max-w-xs mb-4">
          <label className="label">
            <span className="label-text">Url</span>
          </label>
          <input type="text" placeholder="ex.  https://www.paddle.com/" className="input input-bordered w-full  input-md max-w-xs" />
        </div>
        <div className="form-control w-full max-w-xs mb-4">
          <label className="label">
            <span className="label-text">What is your name?</span>
          </label>
          <input type="text" placeholder="Type here" className="input input-bordered w-full  input-md max-w-xs" />
        </div>
     
      </div>
    </div>
  )
}

export default AddSaas