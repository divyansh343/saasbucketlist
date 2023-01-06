import React from 'react'

const TypeList = ({type}) => {
  return (
    <>
      <span className='inline-bloc mx-[2px]'>
        {
          type === "developer" ? <>🧑‍💻</> :
            <>{type === "designer" ? <>🧑‍🎨</> :
              <>{type === "creator" ? <>😎</> :
                <>{type === "indiemaker" ? <>🥷</> :
                  <>{type === "payment" ? <>💶</> :
                    <>{type === "marketer" ? <>🤖</> :
                      <>{type === "feedback" ? <>📝</> : <>⚡</>}</>
                    }</>
                  }
                  </>
                }
                </>
              }
              </>

            }
            </>
        }
      </span>
      <span className=''>
        {type}
      </span>
    </>
  )
}

export default TypeList