import React, { useEffect, useState } from 'react'
import ProfileInfo from './componets/ProfileInfo';
import NewDm from './componets/newDm/newDm';
import { useDispatch, useSelector } from 'react-redux';
import { chatCreate, getAllUserChat } from '@/Redux/Chat/Actions';
import ChatCard from './componets/contact-list/ChatCard';
import { selectChat } from '@/Redux/Auth/Actions';

const ContactsContainer = () => {
  const [currentChat, setCurrentChat] = useState(null);
  const { auth, chat } = useSelector(store => store);
  const jwt = localStorage.getItem("jwt")
  const dispatch = useDispatch()

  

  const handleClikOnChatCard = (chatId) => {
    const selectedChat = chat.chats.find(item => item.id === chatId);
    if (selectedChat) {
      const otherCustomer = selectedChat.customers.find(customer => customer.id !== auth.user?.id);
      dispatch(selectChat({
        id: selectedChat.id,
        fullName: otherCustomer.fullName,
        email: otherCustomer.email,
        image: otherCustomer.profile_picture,
        color: otherCustomer.color
      }));
    }
  };
  useEffect(() => {
    if (jwt) {

      dispatch(getAllUserChat(jwt))
    } else {
      console.error("JWT no encontrado o es inválido");
    }
  }, [dispatch, jwt, chat.createdGroup, chat.createdChat])

 

  return (
    <div className='relative md:w-[35vw] lg:w-[30vw] xl:w-[20vw] bg-[#1b1c24] border-r-2 border-[#2f30b] w-full'>
      <div className="pt-3 ml-16">
        <Logo />
      </div>
      <div className="my-5 ml-14">
        <div className="flex justify-between p-1">
          <Tittle text="Mensajes" />
          <NewDm className="" />
        </div>
      </div>
      <div className="my-5 ml-14">
        <div className="flex pr-10">
          <Tittle text="Canales" />
        </div>
      </div>
      <div className="overflow-y-auto h-[70vh]">
        <div>
          {chat?.chats && Array.isArray(chat.chats) && chat.chats.length > 0 ? (
            chat.chats.map((item) => {
              if (!auth.user?.id) {
                console.error("El usuario no está autenticado");
                return null;
              }

              const otherCustomer = item.customers.find(customer => customer.id !== (auth.reqUser?.id || -1));

              return (
                <div
                  onClick={() => handleClikOnChatCard(item.id)}
                  key={item.id} // Cambia aquí
                  className="mb-10 bg-[#2a2b33] w-[100%] h-[9vh] rounded-3xl"
                >
                  <ChatCard
                    name={otherCustomer ? otherCustomer.fullName : 'Usuario no encontrado'}
                    userImage={otherCustomer ? otherCustomer.profile_picture : ''}
                  />
                </div>
              );
            })
          ) : (
            <div>
              <p>No hay chats disponibles.</p>
            </div>
          )}
        </div>
      </div>
      <ProfileInfo />
    </div>
  );
}

export default ContactsContainer


const Logo = () => {
  return (
    <div className="flex p-5  justify-start items-center gap-2">
      <svg
        id="logo-38"
        width="78"
        height="32"
        viewBox="0 0 78 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {" "}
        <path
          d="M55.5 0H77.5L58.5 32H36.5L55.5 0Z"
          className="ccustom"
          fill="#8338ec"
        ></path>{" "}
        <path
          d="M35.5 0H51.5L32.5 32H16.5L35.5 0Z"
          className="ccompli1"
          fill="#975aed"
        ></path>{" "}
        <path
          d="M19.5 0H31.5L12.5 32H0.5L19.5 0Z"
          className="ccompli2"
          fill="#a16ee8"
        ></path>{" "}
      </svg>
      <span className="text-3xl font-semibold ">ChatApp</span>
    </div>
  );
};

const Tittle = ({ text }) => {
  return (
    <h6 className='uppercase tracking-tighter-widest text-neutral-400 pl-10 font-light text-opacity-90 text-sm'>{text}</h6>
  )
}
