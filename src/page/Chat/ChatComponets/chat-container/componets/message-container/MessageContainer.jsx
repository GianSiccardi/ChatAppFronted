import React, { useEffect } from 'react'
import MessageCard from './MessageCard';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMessage } from '@/Redux/Message/Actions';

const MessageContainer = () => {
  const { selectedChat } = useSelector(store => store.auth)
  const { user, reqUser } = useSelector((store) => store.auth);


  const { messages } = useSelector(store => store.message);
    console.log("MENSAJES EN EL COMPONENTE MESSAGES:", messages); // Aquí verifica si se están obteniendo
  const dispatch = useDispatch();

  const jwt = localStorage.getItem("jwt")




  const chatId = selectedChat ? selectedChat.id : null;
  useEffect(() => {
    if (chatId && jwt) {

      dispatch(getAllMessage(jwt, { chatId }));
    } else {
      console.log("Error: Chat ID o JWT no válido");
    }
  }, [dispatch, chatId, jwt]);

  console.log('Usuario autenticado:', reqUser);
  console.log('Mensajes en el componente:', messages); 
  return (
    <div className='flex-1 overflow-y-auto scrollbar-hidden p-4 px-8 md:w-[65vw] lg:w-[70vw] xl:w-[80vw] w-full'>
      <div className='space-y-3 flex flex-col justify-center mt-10 py-2'>
        {messages && messages.length > 0 ? (
          messages.map((item, i) => {
            console.log('Mensaje actual:', item); 
            return (
              <MessageCard
                key={item.id} 
                isReqUserMessage={item.customer.id === reqUser.id}
                content={item.content}
              />
            );
          })
        ) : (
          <p>No hay mensajes disponibles.</p>
        )}
      </div>
    </div>
  )
}

export default MessageContainer
