import React from 'react'
import {RiCloseFill} from "react-icons/ri"
const ChatHeader = () => {
  return (
    <div className='h-[100vh] border-b-2 border-[#2f303b] flex items-center justify-between px-20'>
      <div className="flex gao-5 items-center">
        <div className="flex gap-3 items-center justify-center"></div>
        <div className="flex items-center justify-center gap-5"></div>
        <button className='text-neutral-500 focus:border-none focus:text-white duration-300 transition-all'>
          <RiCloseFill/>
        </button>

      </div>
      
    </div>
  )
}

export default ChatHeader
