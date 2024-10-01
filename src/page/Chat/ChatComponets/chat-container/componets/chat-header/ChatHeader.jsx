import React from 'react'
import { RiCloseFill } from "react-icons/ri"
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import { useDispatch, useSelector } from 'react-redux';

import { colors, getColor } from '@/utils/utils';

const ChatHeader = () => {


  const selectChat = useSelector(store => store.auth.selectedChat);

  return (
    <div className='h-20 border-b-2 border-[#2f303b] flex items-center justify-between px-20'>
      <div className="flex gap-5 items-center w-full justify-between">
        <div className='flex gap-3 items-center justify-center'>
          <div className='w-18 h-18 relative'>
            <Avatar className='h-12 w-12 rounded-full overflow-hidden'>
              {selectChat.image ? (
                <AvatarImage
                  src={contact.image}
                  className='object-cover w-full h-full bg-black'
                  alt="Avatar"
                />
              ) : (
                <div className={`uppercase h-16 w-16 text-5xl border border-gray-300 flex items-center justify-center rounded-full ${getColor(selectChat.color)}`}>
                  {selectChat.fullName ? selectChat.fullName.charAt(0) : selectChat.email.charAt(0)}
                </div>
              )}
            </Avatar>
          </div>

        </div>

        <div className='flex flex-row  justify-between gap-52 items-center mr-16 pr-16'>
          {selectChat && selectChat.fullName && (
             <span className="text-white text-xl font-semibold">
             {selectChat.fullName.charAt(0).toUpperCase() + selectChat.fullName.slice(1)}
           </span> 
          )}
          {selectChat && selectChat.email && (
            <span className='text-xl text-neutral-400'>{selectChat.email}</span> 
          )}
        </div>


        <div className='flex items-center justify-center gap-5'>
          <button className='text-neutral-500 focus:outline-none focus:text-white transition-all duration-300'>
            <RiCloseFill />

          </button>
        </div>
      </div>
    </div>
  )
}

export default ChatHeader;
