import React from 'react'

const MessageCard = ({isReqUserMessage,content}) => {
  return (
    <div className={`py-4 px-2 rounded-md  ${isReqUserMessage ? "self-start bg-[#2a2b33]":"self-end bg-[#a828c2] "}`}>
        <p>{content}</p>
      
    </div>
  )
}

export default MessageCard
