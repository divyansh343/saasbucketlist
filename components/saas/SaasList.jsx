import axios from 'axios'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import LoginComponent from '../auth/LoginComponent'
import SaasCard from '../cards/SaasCard'
import { IoSearch } from 'react-icons/io5';


const SaasList = () => {
  const [loading, setLoading] = useState(false);
  const [saasList, setSaaslist] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const [info, setinfo] = useState({
    limit: null,
    page: null,
  })
  const url = () => {
    if (searchQuery === "") {
      return process.env.NEXT_PUBLIC_GET_SAAS;
    } else {
      const searchTerm = `?search=${searchQuery}`
      return process.env.NEXT_PUBLIC_GET_SAAS + searchTerm;
    }
  }
  var config = {
    method: 'get',
    url: url(),
    headers: {}
  };

  const topics = [
    {
      id: "1",
      title: "📧 Chat",
      query: "chat",
    },
    {
      id: "2",
      title: "📝 Forms",
      query: "forms",
    },
    {
      id: "3",
      title: "☑️ Survey",
      query: "survey",
    },
    {
      id: "4",
      title: "👨‍💻 Code",
      query: "code",
    },
    {
      id: "5",
      title: "🍬 UI",
      query: "ui",
    },
    {
      id: "6",
      title: "🍪 Design",
      query: "design",
    },
    {
      id: "6",
      title: "📨 Email",
      query: "email",
    },
    {
      id: "7",
      title: "🌐 Web",
      query: "web",
    },
    {
      id: "8",
      title: "🔖Marketing",
      query: "marketing",
    },
  ]

  const handleSearch = () => {
    setLoading(true)
    axios(config)
      .then(function (response) {
        setSaaslist(response.data.data)
        setinfo({
          limit: response.data.limit,
          page: response.data.page
        })
        setLoading(false)
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false)
      });
  }

  useEffect(() => {
    handleSearch()
  }, [])



  return (
    <div className='mx-[0px] md:mx-[50px] lg:ml-[100px] lg:pr-[100px] mt-8'>

      <div className='grid grid-flow-col gap-0 place-items-center md:place-items-end pt-2 mx-1 lg:pt-3 my-1 lg:my-2'>
        <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="ex. chatbot" className="input input-warning input-md lg:input-md w-full max-w-xs sm font-two text-gray-500" />
        <button onClick={handleSearch} className="btn btn-md text-xl lg:btn-md font-two pla normal-case font-medium "><IoSearch /></button>

      </div>
      <div className='content-center grid justify-start mt-6 mb-3'>
        <div className="">

          {
            topics.map(item => (
              <>
                <button id={item.id} onClick={() => {
                  setSearchQuery(item.query);
                  // handleSearch()
                }} className="btn btn-sm border-0 text-[#1f1f1f] font-two normal-case m-1 plus-col">{item.title}</button>
              </>
            ))
          }
        </div>

      </div>
      <div className=' grid grid-flow-row'>
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
            : <div className='mb-5'>
              {
                saasList.length === 0 ?
                  <>
                    <div className='grid place-items-center my-[200px]'>
                      <div role="status" className="max-w-sm animate-pulse">
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                        <div className='my-5'>
                          <p className="animate-pulse font-two text-xl">Got 0, results</p>
                          <p className=" font-two">try searching something else</p>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                      </div>
                    </div>
                  </> :
                  saasList.map(item => (
                    <>
                      <SaasCard key={item.id} iname={item.saas} link={item.link} description={item.description} isfor={item.for} img={item.img} baseCol={item.plus} pricing={item.pricing} why={item.why} />
                    </>
                  ))
              }
            </div>
        }
      </div>
    </div>
  )
}
export default SaasList