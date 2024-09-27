import React, { useState } from 'react'
import ChatsContainer from './ChatComponets/chat-container'
import ContactsContainer from './ChatComponets/contacts-container'
import EmptyChatContainer from './ChatComponets/empty-chat-container'
import { useSelector } from 'react-redux'
const ChatIndex = () => {
const selectChat=useSelector(store=>store.auth.selectedChat);
  return (
    <div className='flex h-screen text-white'> 
      <ContactsContainer />
      {selectChat === null ? (
        <EmptyChatContainer/>
      ):(
<ChatsContainer />
      )
    }
     
      
    </div>
  )
}
export default ChatIndex
