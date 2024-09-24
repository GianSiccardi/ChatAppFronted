import React from 'react'
import {RiCloseFill} from "react-icons/ri"
const ChatHeader = () => {
  return (
    <div className='h-16 border-b-2 border-[#2f303b] flex items-center justify-between px-20'>
      <div className="flex gap-5 items-center">
   
      </div>
      <button className='text-neutral-500 focus:outline-none focus:text-white transition-all duration-300'>
        <RiCloseFill/>
        
      </button>
    </div>
  )
}

export default ChatHeader;
