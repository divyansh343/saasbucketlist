import axios from 'axios';
import React, { useEffect, useState } from 'react'
import TwitterCard from './TwitterCard'

const TwitterList = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false);

  const getProfiles = () => {
    var config = {
      method: 'get',
      url: process.env.NEXT_PUBLIC_GET_TWITTER,
      headers: {}
    };

    setLoading(true)
    axios(config)
      .then(function (response) {
        setData(response.data.profiles)
        setLoading(false)
      })
      .catch(function (error) {
        setLoading(false)
        console.log(error);
      });
  }

  useEffect(() => {
    getProfiles();
  }, [])

  return (
    <div>
      <div className='mx-[20px] lg:ml-[200px] lg:mr-[300px] my-[80px]'>
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
            :
            <div className='grid grid-flow-row gap-2'>
              {
                data.map(item => (<>
                  <TwitterCard name={item.name} bio={item.bio} followers={item.followers} github_link={item.github_link} site_link={item.site_link} twitter_link={item.twitter_link} hashtags={item.hashtags} />
                </>))
              }
            </div>
        }
      </div>
    </div>
  )
}

export default TwitterList