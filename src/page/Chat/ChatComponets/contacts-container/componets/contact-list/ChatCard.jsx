import React from 'react'

const ChatCard = ({userImage,name}) => {
  return (
    <div className='flex items-center justify-center py-2 group cursor-pointer'>
        <div className="w-[20%]">
            <img src={userImage}></img>

        </div>
      <div className="pl-5 mt-4 mr-16 w-[70%]">
        <div className="flex justify-between items-center">
       <p className='text-lg'>{name}</p>
       <p className='text-sm'>timestamp</p>

        </div>
        <div className="flex justify-between items-center">
            <p>Message..</p>
            <div className="flex space-x-2 items-center">
                <p className='text-xs p-1 px-2 text-white bg-[#741bda] rounded-full'>5</p>
            </div>

        </div>

      </div>
    </div>
  )
}

export default ChatCard;
