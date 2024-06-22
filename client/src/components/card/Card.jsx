import React from 'react'
import './card.css'
import { FaRegHeart } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";

const Card = ({post}) => {

  return (
    <div className='card'>
      <img className='image' src={post.imageURL} alt="" />
      <p className='publishhead'>Published 21 dec 2023</p>
      <p className='description'>{post.description}</p>

      <div className='like'>
        {/* <img src="" alt="" /> */}
        <div className='likesicon'><FaRegHeart /></div>
        <p className='likenum'>10</p>
        <div className='bookmarksicon'><FaRegBookmark /></div>
        {/* <p className='likesname'>likes</p> */}
        <p className='author'>Rohan Sangle</p>
      </div>
    </div>
  )
}

export default Card