import React from 'react'
import Login from '../components/auth/Login'
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
const auth = () => {
  return (
    <>
    <Login />
    </>
  )
}

export default Login