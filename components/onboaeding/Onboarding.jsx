import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

const Onboarding = () => {
  const { data: session, status } = useSession()
  const router = useRouter()

  const [modalState, setModalState] = useState("1")
  const [selected, setSelected] = useState("")
  const [proSelected, setProSelected] = useState("")
  const [codingState, setCoding] = useState(null)

  const changeModal = (msg, changeTo) => {
    if (selected === "") {
      toast('Choose one', { icon: '🔎', })
    } else {
      toast.success(msg)
      setModalState(changeTo)
    }
  }

  if (status === "authenticated") {
    router.push('/saas')
  } else {
    return (
      <div className='mt-20 font-two tracking-wide'>
        <div className='mx-[10px] m-10 lg:mx-[100px]'>
          <div className='theme-col shadow-lg border-[2px] rounded-[4px]  ' >
            {
              modalState === "1" ?
                <>
                  <div className='grid place-items-center'>
                    <div className='mt-[40px]' >
                      <p className='text-[30px] lg:text-[60px] font-semibold'>I am, <span className='bg-slate-700 text-white rounded-[4px] px-2 decoration-slate-50'> {selected ? selected : "  _  "} </span> </p>
                    </div>
                    <div className='mt-4 mb-10'>
                      <div className='grid lg:grid-cols-2'>
                        {/* developer */}
                        <div onClickCapture={() => setSelected("developer")}>

                          <div className=''>
                            <div className={`rounded-[4px] border-[2px] my-2 lg:mx-2 cursor-pointer ${selected === "developer" ? "bg-[#1d1d1f] bg-opacity-80 text-[#fbfbfb]" : null}
                  `}>
                              <div className='grid place-items-center'>
                                <p className='text-[30px] mx-3 lg:text-[60px] font-semibold'>Developer</p>
                              </div>
                            </div>
                          </div>

                          {/* <Option title="Developer" selected={selected} /> */}
                        </div>
                        {/* developer */}

                        {/* designer */}
                        <div onClickCapture={() => setSelected("designer")}>
                          <div className=''>
                            <div className={`rounded-[4px] border-[2px]
                  my-2 
                  lg:mx-2 
                  cursor-pointer
                  ${selected === "designer" ? "bg-[#1d1d1f] bg-opacity-80 text-[#fbfbfb]" : null}
                  `}>
                              <div className='grid place-items-center'>
                                <p className='text-[30px] mx-3 lg:text-[60px] font-semibold'>Designer</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* designer */}

                        <div onClickCapture={() => setSelected("indiemaker")}>
                          <div className=''>
                            <div className={`rounded-[4px] border-[2px]
                  my-2 
                  lg:mx-2 
                  cursor-pointer
                  ${selected === "indiemaker" ? "bg-[#1d1d1f] bg-opacity-80 text-[#fbfbfb]" : null}
                  `}>
                              <div className='grid place-items-center'>
                                <p className='text-[30px] mx-3 lg:text-[60px] font-semibold'>Indie Maker</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div onClickCapture={() => setSelected("freelancer")}>
                          <div className=''>
                            <div className={`rounded-[4px] border-[2px]
                  my-2 
                  lg:mx-2 
                  cursor-pointer
                  ${selected === "freelancer" ? "bg-[#1d1d1f] bg-opacity-80 text-[#fbfbfb]" : null}
                  `}>
                              <div className='grid place-items-center'>
                                <p className='text-[30px] mx-3 lg:text-[60px] font-semibold'>Freelancer</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div onClickCapture={() => setSelected("creator")}>
                          <div className=''>
                            <div className={`rounded-[4px] border-[2px]
                  my-2 
                  lg:mx-2 
                  cursor-pointer
                  ${selected === "creator" ? "bg-[#1d1d1f] bg-opacity-80 text-[#fbfbfb]" : null}
                  `}>
                              <div className='grid place-items-center'>
                                <p className='text-[30px] mx-3 lg:text-[60px] font-semibold'>Creator</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div onClickCapture={() => setSelected("marketer")}>
                          <div className=''>
                            <div className={`rounded-[4px] border-[2px]
                  my-2 
                  lg:mx-2 
                  cursor-pointer
                  ${selected === "marketer" ? "bg-[#1d1d1f] bg-opacity-80 text-[#fbfbfb]" : null}
                  `}>
                              <div className='grid place-items-center'>
                                <p className='text-[30px] mx-3 lg:text-[60px] font-semibold'>Marketer</p>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div className='grid place-items-end'>
                    <div onClick={() => changeModal("Cool!", "2")} className='py-1 px-3 bg-[#1d1d1f] bg-opacity-80 text-[#fbfbfb] rounded-[4px] mr-28 mb-5 cursor-pointer'>
                      <p className='text-[20px]'>
                        Next
                      </p>
                    </div>
                  </div>
                </> : null
            }
            {
              modalState === "2" ?
                <>
                  <div className='grid place-items-center'>
                    <div className='mt-8'>
                      <ul className="steps">
                        <li className="step"></li>
                        <li className="step step-secondary"></li>
                        <li className="step"></li>
                      </ul>
                    </div>
                    <div className='mt-[40px]' >
                      <p className='text-[30px] lg:text-[60px] font-semibold'>Do you <span className=' bg-slate-700 text-white font-mono rounded-[4px] px-2'> 🧑‍💻Code  </span> </p>
                    </div>
                    <div className='mt-4 mb-10'>
                      <div className='grid lg:grid-cols-2'>
                        {/* developer */}
                        <div onClickCapture={() => setCoding(true)}>

                          <div className=''>
                            <div className={`rounded-[4px] border-[2px] my-2 lg:mx-2 cursor-pointer ${codingState === true ? "bg-[#1d1d1f] bg-opacity-80 text-[#fbfbfb]" : null}
                  `}>
                              <div className='grid place-items-center'>
                                <p className='text-[30px] mx-3 lg:text-[60px] font-semibold'>Yes, I do</p>
                              </div>
                            </div>
                          </div>
                          {/* <Option title="Developer" selected={selected} /> */}
                        </div>
                        {/* developer */}

                        {/* designer */}
                        <div onClickCapture={() => setCoding(false)}>
                          <div className=''>
                            <div className={`rounded-[4px] border-[2px]
                  my-2 
                  lg:mx-2 
                  cursor-pointer
                  ${codingState === false ? "bg-[#1d1d1f] bg-opacity-80 text-[#fbfbfb]" : null}
                  `}>
                              <div className='grid place-items-center'>
                                <p className='text-[30px] mx-3 lg:text-[60px] font-semibold'>No, I don&apos;t</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* designer */}


                      </div>
                    </div>
                  </div>
                  <div className='grid place-items-end'>
                    <div className='grid grid-flow-col'>
                      <div onClick={() => setModalState("1")} className='py-1 px-3 bg-[#1d1d1f] bg-opacity-80 text-[#fbfbfb] hover:bg-amber-400 rounded-[4px] mr-2 mb-20 cursor-pointer'>
                        <p className='text-[20px]'>
                          Previous
                        </p>
                      </div>
                      <div onClick={() => changeModal("Great!", "3")} className='py-1 px-3 bg-[#1d1d1f] bg-opacity-80 text-[#fbfbfb] hover:bg-amber-400 rounded-[4px] mr-28 mb-20 cursor-pointer'>
                        <p className='text-[20px]'>
                          Next
                        </p>
                      </div>
                    </div>
                  </div>
                </> : null
            }
            {
              modalState === "3" ?
                <>
                  <div className='grid place-items-center'>
                    <div className='mt-8'>
                      <ul className="steps">
                        <li className="step"></li>
                        <li className="step"></li>
                        <li className="step step-secondary"></li>
                      </ul>
                    </div>
                    <div className='mt-[40px] grid place-items-center'>
                      <p className='text-[30px] lg:text-[60px] text-center font-semibold mx-5'>Are you🚀building product</p>
                    </div>
                    <div className='mt-4 mb-10'>
                      <div className='grid lg:grid-cols-2'>
                        {/* developer */}

                        <div onClickCapture={() => setProSelected("product")}>
                          <div className=''>
                            <div className={`rounded-[4px] border-[2px] my-2 lg:mx-2 cursor-pointer ${proSelected === "product" ? "bg-[#1d1d1f] bg-opacity-80 text-[#fbfbfb]" : null}
                  `}>
                              <div className='grid place-items-center'>
                                <p className='text-[30px] mx-3 lg:text-[60px] font-semibold'>Already built</p>
                              </div>
                            </div>
                          </div>

                          {/* <Option title="Developer" selected={selected} /> */}
                        </div>
                        {/* developer */}
                        {/* developer */}

                        <div onClickCapture={() => setProSelected("buildproduct")}>
                          <div className=''>
                            <div className={`rounded-[4px] border-[2px] my-2 lg:mx-2 cursor-pointer ${proSelected === "buildproduct" ? "bg-[#1d1d1f] bg-opacity-80 text-[#fbfbfb]" : null}
                  `}>
                              <div className='grid place-items-center'>
                                <p className='text-[30px] mx-3 lg:text-[60px] font-semibold'>Building</p>
                              </div>
                            </div>
                          </div>

                          {/* <Option title="Developer" selected={selected} /> */}
                        </div>
                        {/* developer */}
                        {/* developer */}

                        <div onClickCapture={() => setProSelected("planning")}>
                          <div className=''>
                            <div className={`rounded-[4px] border-[2px] my-2 lg:mx-2 cursor-pointer ${proSelected === "planning" ? "bg-[#1d1d1f] bg-opacity-80 text-[#fbfbfb]" : null}
                  `}>
                              <div className='grid place-items-center'>
                                <p className='text-[30px] mx-3 lg:text-[60px] font-semibold'>Planning</p>
                              </div>
                            </div>
                          </div>

                          {/* <Option title="Developer" selected={selected} /> */}
                        </div>
                        {/* developer */}
                        {/* developer */}

                        <div onClickCapture={() => setProSelected("research")}>
                          <div className=''>
                            <div className={`rounded-[4px] border-[2px] my-2 lg:mx-2 cursor-pointer ${proSelected === "research" ? "bg-[#1d1d1f] bg-opacity-80 text-[#fbfbfb]" : null}
                  `}>
                              <div className='grid place-items-center'>
                                <p className='text-[30px] mx-3 lg:text-[60px] font-semibold'>Researching</p>
                              </div>
                            </div>
                          </div>
                          {/* <Option title="Developer" selected={selected} /> */}
                        </div>
                        {/* developer */}
                      </div>
                    </div>
                  </div>
                  <div className='grid place-items-end'>
                    <div className='grid grid-flow-col'>
                      <div onClick={() => setModalState("2")} className='py-1 px-3 bg-[#1d1d1f] bg-opacity-80 text-[#fbfbfb] hover:bg-amber-400 rounded-[4px] mr-2 mb-20 cursor-pointer'>
                        <p className='text-[20px]'>
                          Previous
                        </p>
                      </div>
                      <div onClick={() => router.push('/auth')} className='py-1 px-3 bg-[#1d1d1f] bg-opacity-80 text-[#fbfbfb] hover:bg-amber-400 rounded-[4px] mr-28 mb-20 cursor-pointer'>
                        <p className='text-[20px]'>
                          Next
                        </p>
                      </div>
                    </div>
                  </div>
                </> : null
            }

          </div>
        </div>
      </div>
    )
  }
}

export default Onboarding