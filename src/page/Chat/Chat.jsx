import React, { useState } from 'react'
import ChatsContainer from './ChatComponets/chat-container'
import ContactsContainer from './ChatComponets/contacts-container'
import EmptyChatContainer from './ChatComponets/empty-chat-container'
const ChatIndex = () => {

  const [selectedChat ,setSelectChat]=useState(undefined);
  return (
    <div className='flex h-screen text-white'> 
      <ContactsContainer />
      {selectedChat === undefined ? (
        <EmptyChatContainer/>
      ):(
<ChatsContainer />
      )
    }
     
      
    </div>
  )
}
export default ChatIndex
