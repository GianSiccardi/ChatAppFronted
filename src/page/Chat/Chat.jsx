import React from 'react'
import ChatsContainer from './ChatComponets/chat-container'
import ContactsContainer from './ChatComponets/contacts-container'
import EmptyChatContainer from './ChatComponets/empty-chat-container'
const ChatIndex = () => {
  return (
    <div className='flex h-screen text-white'> 
      <ContactsContainer className="w-1/3" />
      <ChatsContainer className="w-2/3" /> 
    </div>
  )
}
export default ChatIndex
