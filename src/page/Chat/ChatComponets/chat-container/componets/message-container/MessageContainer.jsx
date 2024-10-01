import React from 'react'
import MessageCard from './MessageCard';

const MessageContainer = () => {

  return (
    <div className='flex-1 overflow-y-auto scrollbar-hidden p-4 px-8 md:w-[65vw] lg:w-[70vw] xl:w-[80vw] w-full' >
      
        <div className='space-y-3 flex flex-col justify-center  mt-10 py-2'>
          {[1,1,1,1,1,1,1,1,1,1,1,11,1,1].map((item,i)=><MessageCard isReqUserMessage={i%2===0} content={"HOLAaaaaa"}/>)}
        </div>
    </div>
  )
}

export default MessageContainer
