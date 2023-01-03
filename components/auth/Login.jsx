import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'
import LoginComponent from './LoginComponent'

const Login = () => {
    const { data: session } = useSession()
    if (session) {
      return (
        <>
          <div className='grid place-items-center theme-col h-[100vh]'>
            <div className='mt-44'>
              <p className='text-[60px] text-center leading-snug px-5'>
                Welcome to
                <span className='secondary-col rounded ml-2 p-1 font-[Cuprum]'>
                  Bucket List
                </span>
              </p>
            </div>
            <p>{session.user.email}</p>
            <Image height={50} width={50} src={session.user.image} alt="img" />
            <button onClick={() => signOut()}>sign out</button>
          </div>
        </>
      )
  
    } else {
      return <LoginComponent />
    }
  }

export default Login