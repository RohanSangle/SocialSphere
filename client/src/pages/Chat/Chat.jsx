import React,{useState, useEffect} from 'react'
import axios from 'axios'
import './chat.css'

// import {useDispatch} from 'react-redux'
// import {useSelector} from 'react-redux'
import {useNavigate} from "react-router-dom";
import { doSignOut } from '../../firebase/auth';
import CreatePost from '../../components/createpost/CreatePost';
import { getPosts } from '../../actions/post';

const Chat = () => {
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   const fetchPosts = async() => {
  //     const res = await axios.get("http://localhost:5000/posts/get");
  //     console.log(res?.data?.postMessages);
  //     setPosts(res?.data?.postMessages)
  //   }
  //   fetchPosts();
  // }, [])
  // const posts = useSelector((state)=>state.posts)
  // const dispatch = useDispatch();

  // useEffect(()=>{
  //   dispatch(getPosts());
  // },[dispatch]);

  // console.log(posts);

  return (
    <>
      <div className='menubar'>
        <h1>SocialSphere</h1>

        <div className='user-avatar'>
          <img src="" alt="" />
          <button className='logout-button' onClick={()=>{doSignOut().then(()=>{navigate('/')})}}>Logout</button>
        </div>
      </div>
      <div className='headbar'>
        <h1 className='head'>Chat room</h1>
      </div>
      <div className='sidebar'></div>

      <CreatePost/>

      <div className='content'></div>
    </>
  )
}

export default Chat