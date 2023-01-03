import { useSession } from 'next-auth/react'
import React from 'react'
import PostCard from '../cards/PostCard'
import { useRouter } from 'next/router'
import LoginComponent from '../auth/LoginComponent'

const PostList = () => {
  const router = useRouter()

  // const { data: status } = useSession({required:true})
    return (
      <div>
        <div className='pt-4'>
        </div>
        <div className='mx-3 lg:ml-32 lg:mr-60'>
          <PostCard spd={false} />
          <PostCard spd />
          <PostCard spd={false} />
          <PostCard spd />
          <PostCard spd />
          <PostCard />
          <PostCard spd />
          <PostCard />
          <PostCard spd />
          <PostCard />
          <PostCard spd />
          <PostCard />
          <PostCard />
          <PostCard spd />
          <PostCard />
        </div>
      </div>
    ) 

}

export default PostList