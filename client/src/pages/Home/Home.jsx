import React from 'react'
import './home.css'

import {useNavigate} from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();

  const gotoauth = () => {
    navigate('/login');
  }

  return (
    <div>
      {/* <img className='homebg' src={homebackground} alt=''/> */}
      <h1>SocialSphere</h1>
      <h2 className='miniheader' >A common chat application</h2>
      <button onClick={gotoauth}>Sign In</button>
    </div>
  )
}

export default Home