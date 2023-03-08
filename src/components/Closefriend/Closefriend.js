import React from 'react'
import './Closefriend.css'
import { Users } from '../../dummyData'

export default function Closefriend({user}) {
  return (
   
         <li className="sidebarFriend">
            <img src={user.profilePicture} alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">{user.username}</span>
          </li>
        
  )
}
