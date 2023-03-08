import React from 'react'
import './online.css'
import { Users } from '../../dummyData'

export default function Online({user}) {
  return (
    <div>
         <li className="rightbarFriend">
              <div className="rightbarProfileImageContainer">
                <img src={user.profilePicture} alt="" className="rightbarProfileImg" />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">{user.username}</span>
            </li>
    </div>
  )
}
