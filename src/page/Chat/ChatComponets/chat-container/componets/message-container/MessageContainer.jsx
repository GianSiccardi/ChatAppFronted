import React, { useEffect, useState } from 'react'
import MessageCard from './MessageCard';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMessage } from '@/Redux/Message/Actions';
import SockJS from 'sockjs-client/dist/sockjs';
import { Client } from "@stomp/stompjs"; // Actualización aquí
import { ADD_MESSAGE } from '@/Redux/Message/ActionsTypes';

const MessageContainer = () => {
  const { selectedChat } = useSelector(store => store.auth);
  const { user, reqUser } = useSelector((store) => store.auth);
  const [stompClient, setStompClient] = useState(null);

  const [isConnect, setConnected] = useState(false);
  const [localMessages, setLocalMessages] = useState([]);
  const { messages } = useSelector(store => store.message);

  const dispatch = useDispatch();

  const jwt = localStorage.getItem("jwt");
  const chatId = selectedChat ? selectedChat.id : null;

  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }


  const connect = () => {
    const sock = new SockJS("http://localhost:8080/ws"); // Verifica que esta URL sea correcta
    const client = new Client({
      webSocketFactory: () => sock,
      debug: (str) => console.log(str),
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000
    });

    client.onConnect = (frame) => {
      console.log("Conectado: " + frame);
      setConnected(true);
      client.subscribe("/single-chat/" + chatId.toString(), onMessageReceive);
    };

    client.onStompError = (frame) => {
      console.error("Error STOMP: " + frame.headers['message']);
    };

    client.activate();
    setStompClient(client);
  };

  const onMessageReceive = (payload) => {
    const receivedMessage = JSON.parse(payload.body);
    
    dispatch({
      type: ADD_MESSAGE,
      payload: receivedMessage
    });
  };
  useEffect(() => {
    connect(); 
  }, []);


  useEffect(() => {
    if (isConnect && stompClient && messages && messages.length > 0) {
      if (typeof stompClient.send === "function") {
        stompClient.send("/app/message", {}, JSON.stringify(messages));
  
        
        dispatch({
          type: ADD_MESSAGE,
          payload: messages[messages.length - 1]
        });
      } else {
        console.error("stompClient.send no está disponible");
      }
    }
  }, [messages, stompClient, isConnect]);

  useEffect(() => {
    if (chatId && jwt) {
      dispatch(getAllMessage(jwt, { chatId }));
    } else {
      console.log("Error: Chat ID o JWT no válido");
    }
  }, [dispatch, chatId, jwt]);






  return (
    <div className='flex-1 overflow-y-auto scrollbar-hidden p-4 px-8 md:w-[65vw] lg:w-[70vw] xl:w-[80vw] w-full'>
    <div className='space-y-3 flex flex-col justify-center mt-10 py-2'>

      {messages && messages.length > 0 ? (
        messages.map((item, i) => {
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
