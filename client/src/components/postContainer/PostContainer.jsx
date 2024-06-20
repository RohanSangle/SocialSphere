import React from 'react'
import './postcontainer.css'
import Card from '../card/Card'
import { useSelector } from 'react-redux'

const PostContainer = () => {

    const posts = useSelector((state)=>state.posts)
    console.log(posts);
    
  return (
    <div className='content'>
        <Card/>
    </div>
  )
}

export default PostContainer