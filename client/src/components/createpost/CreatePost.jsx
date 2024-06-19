import React,{useState} from 'react'
import './createpost.css'

const CreatePost = () => {
  return (
    <div className='post'>
        <input className='filebtn' type='file' />
        <input className='desc' type="text" placeholder='message...' />
        <button className='postbtn'>Post</button>
    </div>
  )
}

export default CreatePost