import React, {useState} from 'react'
import moment from 'moment';
import './card.css'
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa6";

import { likePost } from '../../actions/post';
import { useDispatch } from 'react-redux';

const Card = ({post}) => {
  const dispatch = useDispatch();

  const [liked,setLiked] = useState(false);
  const [bookmark,setBookmark] = useState(false);

  const likestyle = { color: "red"}
  const bookmarkstyle = { color: "blue"}

  const togglelike = ()=>{
    setLiked(!liked)
    dispatch(likePost(post._id))
  }
  const togglebookmark = ()=>{
    setBookmark(!bookmark)
  }

  return (
    <div className='card'>
      <img className='image' src={post.imageURL} alt="" />
      <p className='publishhead'>{moment(post.createdAt).fromNow()}</p>
      <p className='description'>{post.description}</p>

      <div className='like'>
        <div className='likesicon' onClick={togglelike}>{!liked ? <FaRegHeart/> : <FaHeart style={likestyle}/>}</div>
        <p className='likenum'>{post.likeCount}</p>
        <div className='bookmarksicon' onClick={togglebookmark}>{!bookmark ? <FaRegBookmark/> : <FaBookmark style={bookmarkstyle}/>}</div>
        {/* <FaBookmark /> */}
        {/* <p className='likesname'>likes</p> */}
        <p className='author'>rohan.sangle02</p>
      </div>
    </div>
  )
}

export default Card