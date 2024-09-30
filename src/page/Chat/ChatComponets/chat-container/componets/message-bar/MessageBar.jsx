import { chatCreate } from '@/Redux/Chat/Actions';
import EmojiPicker from 'emoji-picker-react';
import React, { useEffect, useRef, useState } from 'react'
import { set } from 'react-hook-form';

import { GrAttachment } from "react-icons/gr";
import { IoSend } from 'react-icons/io5';
import { RiEmojiStickerLine } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';

const MessageBarContainer = () => {
  const emojiRef = useRef();
  const [message, setMessage] = useState("")
  const [emojiPickerOpen, setEmojiPickerOpen] = useState(false);
  const dispatch=useDispatch();
  const {user,selectedChat}=useSelector(store=>store.auth)
  const jwt=localStorage.getItem("jwt")

  useEffect(() => {
    function handleClickOutside(event) {
      if (emojiRef.current && !emojiRef.current.contains(event.target)) {
        setEmojiPickerOpen(false);
      }
    }

   
    document.addEventListener("mousedown", handleClickOutside);


    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleAddEmoji = (emoji) => {
    setMessage((msg) => msg + emoji.emoji)
  }

  const handleSendMessage = () => {
    if (message && selectedChat) {
      const chatData = {
        userId: selectedChat.id, 
     
      };
      dispatch(chatCreate(jwt, chatData)); 
      setMessage(''); 
    }
  };
  return (
    <div className='h-[10vh] bg-[#1c1d25] flex justify-center items-center px-8 mb-6 gap-6'>
      <div className="flex-1 flex bg-[#2a2b33] h-16 rounded-md items-center gap-5 pr-5">
        <input type="text" className='flex-1 px-5 bg-transparent rounded-md focus:border-none focus:outline-none'
          placeholder='EnviarMensaje'
          value={message}
          onChange={(e) => setMessage(e.target.value)} 
          onKeyDown={(e)=>{
            if(e.key==='Enter'){
              handleSendMessage()
            }
          }}/>

      </div>

      <button className='text-neutral-500 foucus:border-none
      focus:outline-none foucus:text-white duration-300 transition-all'>

        <GrAttachment className='text-2xl' />
      </button>
      <div className="relative">
        <button className='text-neutral-500 foucus:border-none
      focus:outline-none foucus:text-white duration-300 transition-all'
          onClick={() => setEmojiPickerOpen(true)}>

          <RiEmojiStickerLine className='text-2xl' />
        </button>
        <div className="absolute bottom-16 right-0" ref={emojiRef}>

          <EmojiPicker theme='dark'
            open={emojiPickerOpen}
            onEmojiClick={handleAddEmoji}
            autoFocusSearch={false} />
        </div>
      </div>
      <button className='bg-[#8417ff] rounded-md flex items-center justify-center p-5 
      foucus:border-none hover:bg-[#741bda]  focus:bg-[#741bda] focus:outline-none focus:text-white duration-300 transition-all'
        onClick={handleSendMessage}>

        <IoSend className='text-2xl' />
      </button>
    </div>
  )
}

export default MessageBarContainer
