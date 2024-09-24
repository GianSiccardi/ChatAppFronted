import React from 'react'
import ChatHeader from './componets/chat-header/ChatHeader'

import MessageContainer from './componets/message-container/MessageContainer'
import MessageBarContainer from './componets/message-bar/MessageBar'

const ChatsContainer = () => {
  return (
    <div className='fixed top-0 h-[100vh] w-[100vw] bg-[#1d1d25] flex flex-col md:static md:flex-1'>
      <ChatHeader />
      <MessageContainer />
      <MessageBarContainer />
    </div>
  )
}

export default ChatsContainer
