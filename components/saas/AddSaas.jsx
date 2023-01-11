import React, { useState } from 'react'

const AddSaas = () => {

  const [data, setData] = useState({
    title: "",
    url: "",
    img_url: "",
    pricing: "",
    description: "",
    for: "",
    author_name: "",
    author_twitter_url: "",
  })
  console.log(data)

  const handleTypeSelect = (event) => {
    setData({
      ...data,
      [event.target.id]: event.target.value,
    });
  };
  console.log(data);

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
          <input type="text" id="title" value={data.title}
            onChange={handleTypeSelect}
            placeholder="ex.Cannary.io" className="input input-bordered w-full  input-md max-w-xs" />
        </div>
        <div className="form-control w-full max-w-xs mb-4">
          <label className="label">
            <span className="label-text">Url</span>
          </label>
          <input type="text"
            id="url"
            value={data.url}
            onChange={handleTypeSelect}
            placeholder="ex.  https://www.paddle.com/" className="input input-bordered w-full  input-md max-w-xs" />
        </div>
        <div className="form-control w-full max-w-xs mb-4">
          <label className="label">
            <span className="label-text">Saas image url</span>
          </label>
          <input type="text"
            id="img_url"
            value={data.img_url}
            onChange={handleTypeSelect}
            placeholder="https://saaslist.netlify.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fthe-social-charts%2Fimage%2Fupload%2Fv1672718167%2FBlush__Illustrations_for_everyone_c9gwv2.png&w=750&q=75" className="input input-bordered w-full  input-md max-w-xs" />
        </div>
        <div className="form-control w-full max-w-xs mb-4">
          <label className="label">
            <span className="label-text">Pricing?</span>
          </label>
          <select className="select w-full max-w-xs">
            <option disabled selected>Pricing of the saas</option>
            <option className='font-normal'>Free</option>
            <option className='font-normal'>Freemium</option>
            <option className='font-normal'>Paid</option>
          </select>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description (min - 60 words)</span>
          </label>
          <textarea
            id="description"
            value={data.description}
            onChange={handleTypeSelect}
            className="textarea textarea-bordered h-24 w-80" placeholder="Bio"></textarea>
          <label className="label">
          </label>
        </div>
        <div className="form-control w-full max-w-xs mb-4">
          <label className="label">
            <span className="label-text">For </span>
          </label>
          <input type="text"
            id="for"
            value={data.for}
            onChange={handleTypeSelect}
            placeholder="developers, designer, creators" className="input input-bordered w-full  input-md max-w-xs" />
        </div>
        <div className="form-control w-full max-w-xs mb-4">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input type="text"
            id="author_name"
            value={data.author_name}
            onChange={handleTypeSelect}
            placeholder="Peter levels" className="input input-bordered w-full  input-md max-w-xs" />
        </div>
        <div className="form-control w-full max-w-xs mb-4">
          <label className="label">
            <span className="label-text">Your twiiter link</span>
          </label>
          <input type="text"
            id="author_twitter_url"
            value={data.author_twitter_url}
            onChange={handleTypeSelect}
            placeholder="https://twitter.com/levelsio" className="input input-bordered w-full  input-md max-w-xs" />
        </div>
        <div className='grid place-items-start'>
          <button className="btn btn-success mr-52">Publish</button>
        </div>
      </div>
          <button onClick={()=>setData({
            title: "",
            url: "",
            img_url: "",
            pricing: "",
            description: "",
            for: "",
            author_name: "",
            author_twitter_url: "",
          })} className="btn btn-success mr-52">Clear</button>
    </div>
  )
}

export default AddSaas