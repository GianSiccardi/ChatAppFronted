import React from 'react'

const MessageCard = ({isReqUserMessage,content}) => {
  return (
    <div className={`py-4 px-2 rounded-md  ${isReqUserMessage ? "self-end bg-[#df4a8a57]" : "self-start bg-[#a828c2]"}`}>
        <p>{content}</p>
      
    </div>
  )
}

export default MessageCard
