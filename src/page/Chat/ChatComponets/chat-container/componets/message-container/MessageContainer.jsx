import React, { useEffect } from 'react'
import MessageCard from './MessageCard';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMessage } from '@/Redux/Message/Actions';

const MessageContainer = () => {
  const { selectedChat } = useSelector(store => store.auth)
 const dispatch=useDispatch();
 const jwt=localStorage.getItem("jwt")



    const chatId = selectedChat ? selectedChat.id : null;
    useEffect(() => {
      if (chatId && jwt) {
        console.log("Enviando Chat ID:", chatId, "con JWT:", jwt); // Log para verificar
        dispatch(getAllMessage(jwt, { chatId }));
      } else {
        console.log("Error: Chat ID o JWT no válido");
            }
  }, [dispatch, chatId, jwt]);


  return (
    <div className='flex-1 overflow-y-auto scrollbar-hidden p-4 px-8 md:w-[65vw] lg:w-[70vw] xl:w-[80vw] w-full' >
      
        <div className='space-y-3 flex flex-col justify-center  mt-10 py-2'>
          {[1,1,1,1,1,1,1,1,1,1,1,1,,1,1].map((item,i)=><MessageCard isReqUserMessage={i%2===0} content={"HOLAaaaaa"}/>)}
        </div>
    </div>
  )
}

export default MessageContainer
