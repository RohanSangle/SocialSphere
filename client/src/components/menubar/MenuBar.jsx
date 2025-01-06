import React from 'react'
import './menubar.css'
import { doSignOut } from '../../firebase/auth';
import { RiHome3Line } from "react-icons/ri";
// import { RiHome3Fill } from "react-icons/ri";
import { BsPostcard } from "react-icons/bs";
// import { BsPostcardFill } from "react-icons/bs";
import { FaRegBookmark } from "react-icons/fa";
// import { FaBookmark } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";

import appicon from '../../assets/socialsphere-icon.png'

const MenuBar = () => {
  return (
    <div className='menubar'>
        <img className='appicon' src={appicon} alt="" />
        <h4 className='heading'>Veblog</h4>

        <div className='menubuttons'>
            <div className='icons'><RiHome3Line /></div>
            <div className='icons'><BsPostcard /></div>
            <div className='icons'><FaRegBookmark /></div>
        </div>
        {/* <RiHome3Fill /> */}
        
        {/* <BsPostcardFill /> */}

        {/* <FaBookmark /> */}

        <div className='user-avatar'>
            <div className='settingsicon'><IoSettingsOutline /></div>
          {/* <img src="" alt="" /> */}
          <button className='logout-button' onClick={()=>{doSignOut().then(()=>{navigate('/')})}}>Logout</button>
        </div>
    </div>
  )
}

export default MenuBar