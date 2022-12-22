import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
const Onboarding = () => {
  const [modalState, setModalState] = useState("1")
  const [selected, setSelected] = useState("")
  const [codingState, setCoding] = useState(null)
  const changeModal = () => {
    if (selected === "") {
      toast('Choose one', {icon: '🔎',}) 
    } else {
      toast.success('Cool!')
      setModalState("2")
    }
  }
  return (
    <div className='mt-20'>
      <div className='mx-[10px] mt-10 lg:mx-[100px]'>
        <div className='bg-gradient-to-r from-orange-400 to-rose-400 shadow-lg border-[1px] hover:border-[2x] rounded-[4px]  ' >
          {
            modalState === "1" ?
              <>
                <div className='grid place-items-center'>
                  <div className='mt-8'>
                    <ul className="steps">
                      <li className="step step-secondary">welcome</li>
                      <li className="step">Choose plan</li>
                      <li className="step">Purchase</li>
                      <li className="step">Receive Product</li>
                    </ul>
                  </div>
                  <div className='mt-[40px]' >
                    <p className='text-[30px] lg:text-[60px] font-semibold'>I am,</p>
                  </div>
                  <div className='mt-4 mb-10'>
                    <div className='grid lg:grid-cols-2'>
                      {/* developer */}
                      <div onClickCapture={() => setSelected("developer")}>

                        <div className=''>
                          <div className={`rounded-[4px] border-[1px] hover:border-[2x] my-2 lg:mx-2 cursor-pointer ${selected === "developer" ? "bg-[#fff]" : null}
              `}>
                            <div className='grid place-items-center'>
                              <p className='text-[30px] mx-3 lg:text-[60px]'>Developer</p>
                            </div>
                          </div>
                        </div>

                        {/* <Option title="Developer" selected={selected} /> */}
                      </div>
                      {/* developer */}

                      {/* designer */}
                      <div onClickCapture={() => setSelected("designer")}>
                        <div className=''>
                          <div className={`rounded-[4px] border-[1px] hover:border-[2x]
              my-2 
              lg:mx-2 
              cursor-pointer
              ${selected === "designer" ? "bg-[#fff]" : null}
              `}>
                            <div className='grid place-items-center'>
                              <p className='text-[30px] mx-3 lg:text-[60px]'>Designer</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* designer */}

                      <div onClickCapture={() => setSelected("solopreneour")}>
                        <div className=''>
                          <div className={`rounded-[4px] border-[1px] hover:border-[2x]
              my-2 
              lg:mx-2 
              cursor-pointer
              ${selected === "solopreneour" ? "bg-[#fff]" : null}
              `}>
                            <div className='grid place-items-center'>
                              <p className='text-[30px] mx-3 lg:text-[60px]'>Solopreneour</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div onClickCapture={() => setSelected("freelancer")}>
                        <div className=''>
                          <div className={`rounded-[4px] border-[1px] hover:border-[2x]
              my-2 
              lg:mx-2 
              cursor-pointer
              ${selected === "freelancer" ? "bg-[#fff]" : null}
              `}>
                            <div className='grid place-items-center'>
                              <p className='text-[30px] mx-3 lg:text-[60px]'>Freelancer</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='grid place-items-end'>
                  <div onClick={changeModal} className='py-1 px-3 bg-[#fff] rounded-[4px] mr-28 mb-5 cursor-pointer'>
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
                      <li className="step">welcome</li>
                      <li className="step step-secondary">Choose plan</li>
                      <li className="step">Purchase</li>
                      <li className="step">Receive Product</li>
                    </ul>
                  </div>
                  <div className='mt-[40px]' >
                    <p className='text-[30px] lg:text-[60px] font-semibold'>Do you <span className=' bg-slate-700 text-white font-mono rounded-[4px] px-2'> Code  </span> </p>
                  </div>
                  <div className='mt-4 mb-10'>
                    <div className='grid lg:grid-cols-2'>
                      {/* developer */}
                      <div onClickCapture={() => setCoding(true)}>

                        <div className=''>
                          <div className={`rounded-[4px] border-[1px] hover:border-[2x] my-2 lg:mx-2 cursor-pointer ${codingState === true ? "bg-[#fff]" : null}
              `}>
                            <div className='grid place-items-center'>
                              <p className='text-[30px] mx-3 lg:text-[60px]'>Yes, I Do</p>
                            </div>
                          </div>
                        </div>

                        {/* <Option title="Developer" selected={selected} /> */}
                      </div>
                      {/* developer */}

                      {/* designer */}
                      <div onClickCapture={() => setCoding(false)}>
                        <div className=''>
                          <div className={`rounded-[4px] border-[1px] hover:border-[2x]
              my-2 
              lg:mx-2 
              cursor-pointer
              ${codingState === false ? "bg-[#fff]" : null}
              `}>
                            <div className='grid place-items-center'>
                              <p className='text-[30px] mx-3 lg:text-[60px]'>No, I don&apos;t</p>
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
                  <div onClick={() => setModalState("1")} className='py-1 px-3 bg-[#fff] hover:bg-amber-400 rounded-[4px] mr-2 mb-20 cursor-pointer'>
                    <p className='text-[20px]'>
                      Previous
                    </p>
                  </div>
                  <div onClick={() => setModalState("2")} className='py-1 px-3 bg-[#fff] hover:bg-amber-400 rounded-[4px] mr-28 mb-20 cursor-pointer'>
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

export default Onboarding