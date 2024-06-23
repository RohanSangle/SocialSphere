import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/post.js';
import './createpost.css'
import { FaFileCirclePlus } from "react-icons/fa6";
import { FaMessage } from "react-icons/fa6";

const CreatePost = () => {
  const [postData, setPostData] = useState({ imageURL: '', description: '' });
  const dispatch = useDispatch();

  const handleFileChange = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setPostData({ ...postData, imageURL: reader.result });
      };
      if (file) {
        reader.readAsDataURL(file);
      }
    };
  
  const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(createPost(postData));
      clear();
  };

  const clear = () => {
      setPostData({ imageURL: '', description: '' });
  };

  return (
    <div className='post'>
        <form onSubmit={handleSubmit}>
          <div className='posticons'><FaFileCirclePlus /></div>
          <input 
              className='filebtn' 
              type='file' 
              onChange={handleFileChange}
          />

          <div className='posticons'><FaMessage /></div>
          <input 
              className='desc' 
              type="text" 
              placeholder='message...' 
              value={postData.description} 
              onChange={(e) => setPostData({ ...postData, description: e.target.value })} 
          />
          <button className='postbtn' type='submit'>Post +</button>
        </form>
    </div>
  )
}

export default CreatePost