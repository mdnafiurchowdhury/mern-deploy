import React from 'react'

// here we need to export Header 
import Header from '../components/Header.jsx'
import SideBar from '../components/SideBar.jsx'
// this is render page after pressing every box
import Email from '../components/Email.jsx'

import { useState } from 'react'
import { Outlet } from 'react-router-dom'

// from here we can toggle both state



export default function Main() {
  const [Current , setCurrent]= useState(true) 
// now we can toggle the value
const toggleState = ()=>{

  setCurrent(prevState =>!prevState)
}
  return (
    <>
    <Header toggleDrawer={toggleState}/>
    <SideBar toggleDrawer={toggleState} CurrentSate={Current}/>
    <Outlet context={{Current}}/>
    
    </>
  )
}
