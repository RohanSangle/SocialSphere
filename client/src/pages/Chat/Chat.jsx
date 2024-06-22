import React,{useState, useEffect} from 'react'
// import axios from 'axios'
import './chat.css'

import {useDispatch} from 'react-redux'
// import {useNavigate} from "react-router-dom";
// import { doSignOut } from '../../firebase/auth';
import CreatePost from '../../components/createpost/CreatePost';
import { getPosts } from '../../actions/post';
import PostContainer from '../../components/postContainer/PostContainer'
import MenuBar from '../../components/menubar/MenuBar';
import Sidebar from '../../components/sidebar/Sidebar';

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
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getPosts());
  },[dispatch]);

  return (
    <>
      <MenuBar/>
      <Sidebar/>
      <CreatePost/>
      <PostContainer/>
    </>
  )
}

export default Chat