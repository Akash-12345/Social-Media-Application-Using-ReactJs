import React from 'react'
import Topbar from '../../components/Topbar/Topbar'
import Sidebar from '../../components/Sidebar/sidebar'
import Rightbar from '../../components/Rightbar/Rightbar'
import Feed from '../../components/Feed/Feed'
import "./home.css"

export default function Home() {
  return (
    <>
      <Topbar/>
      <div className="homeContainer">
      <Sidebar/>
      <Feed/>
      <Rightbar/>
      </div>
      
   </>
  )
}
