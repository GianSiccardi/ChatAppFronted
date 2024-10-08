import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import './index.css'
import { Route, Routes } from 'react-router-dom'
import HomaPage from './page/Home/HomaPage'
import Auth from './page/Auth/Auth'
import Profile from './page/Profile/Profile'
import { useDispatch, useSelector } from 'react-redux'

import { currentUser } from './Redux/Auth/Actions'
import { store } from './Redux/store'
import Chat from './page/Chat/Chat'
import ChatIndex from './page/Chat/Chat'



function App() {
  const {auth}=useSelector(store=>store);

  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(currentUser(auth.jwt || localStorage.getItem("jwt")))
    console.log("auth.user changed:", auth.user);
  },[auth.jwt])

  return (
    <>
    {auth.user ? <div>
     <Routes>
 
      <Route path='/' element={<Auth/>}></Route>
      <Route path='/Profile' element={<Profile/>}></Route>
      <Route path='/Chat' element={<ChatIndex/>}></Route>

     </Routes>
</div>:<Auth/>}
    </>
  )
}

export default App
