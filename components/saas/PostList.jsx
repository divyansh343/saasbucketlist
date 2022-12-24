import React, { useState } from 'react'
import PostCard from '../cards/PostCard'

const PostList = () => {
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