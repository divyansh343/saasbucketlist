import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import PostCard from '../cards/PostCard'
import { useRouter } from 'next/router'
import LoginComponent from '../auth/LoginComponent'
import axios from 'axios'

const PostList = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter()
  const [data, setdata] = useState([])
  useEffect(() => {
    var config = {
      method: 'get',
      url: process.env.NEXT_PUBLIC_GET_POSTS,
      headers: {}
    };
    setLoading(true)

    axios(config)
      .then(function (response) {
        setdata(response.data.posts);
        setLoading(false)
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false)
      });
  }, [])

  return (
    <div>
      <div className='pt-4'>
      </div>
      <div className='mx-3 lg:ml-32 lg:mr-60 max-h-full'>
        {
          loading ?
            <>
              <div className='grid place-items-center my-[200px]'>
                <div role="status" className="max-w-sm animate-pulse">
                  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                </div>
                <div className='my-5'>
                  <p className="animate-pulse font-two">Loading...</p>
                </div>
              </div>
            </>
            : <>
              {
                data.map(item => (<>
                  <PostCard text={item.title} redirectLink={item.link} spd={item.plus} />
                </>))
              }
            </>
        }
      </div>
    </div>
  )

}

export default PostList