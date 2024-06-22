import React from 'react'
import './postcontainer.css'
import Card from '../card/Card'
import { useSelector } from 'react-redux'

const PostContainer = () => {

    // const {post:posts} = useSelector((state)=>state.posts)
    const postsState = useSelector((state)=>state.posts)
    const posts = postsState?.post || [];
    console.log(posts);

  return (
    <div className='content'>
        {posts.length ? (
            posts.map((post)=>(
                <Card key={post._id} post={post} />
            ))
        ) :
        (
            <h2>No posts available</h2>
        )}
        
        {/* <Card/> */}
    </div>
  )
}

export default PostContainer