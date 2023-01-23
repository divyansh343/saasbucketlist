import Link from 'next/link'
import React from 'react'
import PostList from '../../components/saas/PostList'

const posts = () => {
  return (
    <div>
      <div className='pt-16'>
      </div>
      <div className='grid place-items-end mt-4'>
        <Link href="/posts/addpost">
        <button className="btn btn-sm border-0 text-[#1f1f1f] font-two normal-case mx-4 plus-col">➕Add Post</button>
        </Link>
      </div>
      <PostList />
    </div>
  )
}

export default posts