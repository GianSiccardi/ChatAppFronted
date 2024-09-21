import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomaPage from './page/Home/HomaPage'
import Auth from './page/Auth/Auth'
import Profile from './page/Profile/Profile'
import { useDispatch, useSelector } from 'react-redux'

import { currentUser } from './Redux/Auth/Actions'
import { store } from './Redux/store'


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
      <Route path='/Home' element={<HomaPage/>}></Route>
      <Route path='/ChatApp' element={<Auth/>}></Route>
      <Route path='/Profile' element={<Profile/>}></Route>

     </Routes>
</div>:<Auth/>}
    </>
  )
}

export default App
