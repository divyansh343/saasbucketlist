import Image from 'next/image';
import React, { useState } from 'react'
import Link from 'next/link';
import user from '../../assets/images/user.png'
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router'

const Navbar = () => {
  const router = useRouter()
  const { data: session, status } = useSession()

  const userLogout = ()=> {
    router.push("/")
    signOut()
  }

  return (
    <div className={`navbar fixed top-0 z-10 border-b-[0.2px] saturate-150 font-two ${status==="authenticated"?"plus-col":"theme-col"} `}>
      <div className="flex-1">
        <Link href="/">
          <p className="btn btn-ghost normal-case text-xl font-one tracking-wide">indiemake.co</p>
        </Link>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full ">
              {
                session ?
                  <Image alt='' height={50} width={50} src={session.user.image} /> :
                  <Image alt='' height={50} width={50} src={user}/>
              }
            </div>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box font-medium w-52">
            {/* <li>
              <p className="justify-between">
                Profile
                <span className="badge">New</span>
              </p>
            </li> */}
            {
              session ? null :
                <Link href="/login" className=''>
                  <li><p>login / signup</p></li>
                </Link>
            }
            <Link href="/saas" className=''>
              <li><p>Saas<span className="badge">New</span></p></li>
            </Link>
            <Link href="/posts" className=''>
              <li><p>Posts</p></li>
            </Link>
            <Link href="/twitter" className=''>
              <li><p>Twitter
              </p></li>
            </Link>
            {
              session ?
                <li><p onClick={userLogout}>Logout</p></li> : null
            }
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Navbar