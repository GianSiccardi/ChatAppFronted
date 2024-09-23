import React from 'react'
import ChatsContainer from './ChatComponets/chat-container'
import ContactsContainer from './ChatComponets/contacts-container'
import EmptyChatContainer from './ChatComponets/empty-chat-container'

const ChatIndex = () => {
  return (
    <div className='flex h-[80vh] text-white overflow-hidden'>
   
   <ContactsContainer/>

{/*<EmptyChatContainer/>*/}
<ChatsContainer/>


      
    </div>
  )
}

export default ChatIndex
