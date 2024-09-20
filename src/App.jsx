import { useState } from 'react'
import { Button } from "@/components/ui/button"
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomaPage from './page/Home/HomaPage'
import Auth from './page/Auth/Auth'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
      <Route path='/Home' element={<HomaPage/>}></Route>
      <Route path='/' element={<Auth/>}></Route>

     </Routes>
    </>
  )
}

export default App
