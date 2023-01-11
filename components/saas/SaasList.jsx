import axios from 'axios'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import LoginComponent from '../auth/LoginComponent'
import SaasCard from '../cards/SaasCard'

const SaasList = () => {
  const { data: session, status } = useSession()
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

  const handleSearch = async () => {
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

  //   const pagginationHandler = (page) => {
  //     const currentPath = props.router.pathname;
  //     const currentQuery = { ...props.router.query };
  //     currentQuery.page = page.selected + 1;
  //     props.router.push({
  //         pathname: currentPath,
  //         query: currentQuery,
  //     });

  // };

  if (status === "authenticated") {
    return (
      <div className='mx-[0px] md:mx-[50px] lg:ml-[100px] lg:pr-[100px] mt-8'>
        <div className='grid grid-flow-col gap-0 place-items-center md:place-items-end pt-2 mx-1 lg:pt-3 my-2 lg:my-3'>
          <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="ex. chatbot" className="input input-warning input-sm lg:input-md w-full max-w-xs sm font-two text-gray-500" />
          <button onClick={handleSearch} className="btn btn-sm lg:btn-md font-two pla normal-case font-medium">Search</button>
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
  } else{
    return(
      <LoginComponent />
    )
  } 
}
export default SaasList