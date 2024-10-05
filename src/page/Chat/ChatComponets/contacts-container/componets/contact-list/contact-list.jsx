import { getAllUserChat } from '@/Redux/Chat/Actions';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'


const contactList = () => {

const dispatch=useDispatch();
const{chats}=useSelector(store=>store)
const jwt=localStorage.getItem("jwt")



useEffect(()=>{
  if (jwt) {
    dispatch(getAllUserChat(jwt)); 
  }
}, [dispatch, jwt]);

  return (
<div>
  <h1>Contact List</h1>
  {chats.length > 0 ? (
    <ul>
      {chats.map((chat) => (
        <li key={chat.id}>
          {/* Muestra directamente el nombre del chat */}
          <div className="chat-item">
            <span>{chat.chat_name}</span> {/* Puedes cambiar 'chat_name' al nombre que obtengas del backend */}
          </div>
        </li>
      ))}
    </ul>
  ) : (
<p>no hay chat</p>
  )}
</div>

  );
};

export default contactList
