import { signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'
import LoginComponent from './LoginComponent'
import { useRouter } from 'next/router'
const Login = () => {
  const router = useRouter()
  const { data: session } = useSession()
  if (session) {
    router.push("/")
    // return (
    //   <>
    //     <div className='grid place-items-center theme-col h-[100vh]'>
    //       <div className='mt-44'>
    //         <p className='text-[30px] lg:text-[40px] font-semibold text-center leading-snug px-5'>
    //           Welcome to
    //           <span className='secondary-col rounded ml-2 p-1 underline font-[]'>
    //             Bucket List
    //           </span>
    //         </p>
    //       </div>
    //       <Image className='rounded-[50px]' height={80} width={80} src={session.user.image} alt="img" />
    //       <p>{session.user.name}</p>
    //       <p>{session.user.email}</p>
    //       <button onClick={() => signOut()}>sign out</button>
    //     </div>
    //   </>
    // )

  } else {
    return <LoginComponent />
  }
}

export default Login