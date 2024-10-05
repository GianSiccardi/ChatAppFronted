import React, { useEffect, useState } from 'react'
import MessageCard from './MessageCard';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMessage } from '@/Redux/Message/Actions';
import SockJS from 'sockjs-client/dist/sockjs';
import { Stomp } from '@stomp/stompjs';

import { ADD_MESSAGE } from '@/Redux/Message/ActionsTypes';
import { ainimationDefaultOptions } from '@/utils/utils';

import Lottie from 'react-lottie';

const MessageContainer = () => {
  const { selectedChat } = useSelector(store => store.auth);
  const { user, reqUser } = useSelector((store) => store.auth);
 

  const [isConnect, setConnected] = useState(false);
  const { messages } = useSelector(store => store.message);
  const [localMessages, setLocalMessages] = useState([]);
  const [stompClient, setStompClient] = useState(null);

  const dispatch = useDispatch();

  const jwt = localStorage.getItem("jwt");
  const chatId = selectedChat ? selectedChat.id : null;

  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }


useEffect(()=>{
  const socket = new SockJS("http://localhost:8080/ws");
    const client =Stomp.over(socket);

  client.connect({}, (frame) => {
    console.log('Connected: ' + frame); 
    setConnected(true);
    client.subscribe('/topic/message', (localMessages) => {
      const receivedMessage = JSON.parse(localMessages.body);
      console.log("Mensaje recibido: ", receivedMessage); // Log del mensaje recibido 
      setLocalMessages((prevMessage) => [...prevMessage, receivedMessage]);
    });
  }, (error) => {
    console.error('Connection error: ' + error); 
  });

  setStompClient(client);
  return () => {
    if (client) {
      client.disconnect();
    }
  }
},[])

useEffect(() => {
  if (chatId && jwt) {
    dispatch(getAllMessage(jwt, { chatId }));
  } else {
    console.log("Error: Chat ID o JWT no válido");
  }
}, [dispatch, chatId, jwt]);

const combinedMessages = [...localMessages, ...messages]  // 1. Combina ambos arrays
  .reduce((unique, msg) => {
    // 2. Recorre los mensajes combinados para eliminar duplicados
    if (!unique.some(m => m.id === msg.id)) {
      // 3. Si el mensaje actual no está ya en el array único (comparando por id), lo agrega
      unique.push(msg);
    }
    // 4. Devuelve el array único de mensajes, acumulando solo los no duplicados
    return unique;
  }, []) // Inicia con un array vacío para acumular mensajes únicos
  .sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp)); // 5. Ordena los mensajes por timestamp de menor a mayor



// Combina ambos

  return (
    <div className='flex-1 overflow-y-auto scrollbar-hidden p-4 px-8 md:w-[65vw] lg:w-[70vw] xl:w-[80vw] w-full'>
    <div className='space-y-3 flex flex-col justify-center mt-10 py-2'>
      {combinedMessages.length > 0 ? (
        combinedMessages.map((item) => {
          return (
            <MessageCard
              key={item.id}
              isReqUserMessage={item.customer.id === reqUser.id}
              content={item.content}
            />
          );
        })
      ) : (
        <div className='flex-1 md:bg-[#1c1d25] md:flex flex-col mt-40 justify-center items-center hidden duration-1000 transition-all'>
          <Lottie
            isClickToPauseDisabled={true}
            height={200}
            width={200}
            options={ainimationDefaultOptions}
          />
          <div className="text-opacity-80 text-white flex flex-col gap-5 items-center mt-10 lg:text-4xl text-3xl transition-all duration-300 text-center">
            <h3 className='poppins-medium'>
              Dile <span className='text-purple-500'> hola! </span> a <span className='text-purple-500'>{selectedChat.fullName}</span>
            </h3>
          </div>
        </div>
      )}
    </div>
  </div>
);
};



export default MessageContainer
