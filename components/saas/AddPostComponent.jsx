import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { toast } from 'react-hot-toast'

const AddPostComponent = () => {
  const [title, setTitle] = useState("")
  const [url, setUrl] = useState("")
  // console.log(data)
  const router = useRouter()


  const handleSubmitPost = () => {
    var data = JSON.stringify({
      "title": title,
      "link": url,
      "plus": false
    });

    var config = {
      method: 'post',
      url: process.env.NEXT_PUBLIC_ADD_POSTS,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        toast.success("Post Added")
        router.push('/posts')
      })
      .catch(function (error) {
        console.log(error);
      });
  }
 
  return (
    <div className='my-16'>
      <div className='grid place-items-center font-two'>
        <div className='my-8'>
          <p className='text-xl text-one text-center'>
            Add Post
          </p>
        </div>
        <div className="form-control w-full max-w-xs mb-4">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <textarea
            id="title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="textarea textarea-bordered h-24 w-80" placeholder="Payments remain the darling of the fintech space"></textarea>
        </div>
        <div className="form-control w-full max-w-xs mb-4">
          <label className="label">
            <span className="label-text">Url</span>
          </label>
          <input type="text"
            id="url"
            value={url}
            onChange={e => setUrl(e.target.value)}
            placeholder="ex.  https://www.paddle.com/" className="input input-bordered w-full  input-md max-w-xs" />
        </div>

        <div className='grid place-items-start'>
          <button onClick={handleSubmitPost} className="btn font-two normal-case btn-sm btn-success mr-52">Publish</button>
          <button onClick={() =>{
            setTitle("")
            setUrl("")
          }} className="btn btn-error font-two btn-sm normal-case mt-3 mr-52">Clear</button>
        </div>
      </div>
    </div>
  )
}

export default AddPostComponent