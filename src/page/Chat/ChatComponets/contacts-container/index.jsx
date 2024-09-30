import React from 'react'
import ProfileInfo from './componets/ProfileInfo';
import NewDm from './componets/newDm/newDm';
import ChatCard from '../chat-container/componets/contact-list/ChatCard';

const ContactsContainer = () => {
  return (
<div className='relative md:w-[35vw] lg:w-[30vw] xl:w-[20vw] bg-[#1b1c24] border-r-2 border-[#2f30b] w-full'>
  <div className="pt-3 ml-16">
    <Logo/>
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
  <div className=''>
    {[1, 1, 1,1,1,1, 1].map((item, index) => (
      <div key={index} className="mb-10 bg-[#2a2b33] w-[100%] h-[10vh] rounded-3xl "> {/* Fondo y margen */}
        <ChatCard />
      </div>
    ))}
  </div>
</div>

 
  <ProfileInfo/>
</div>
  )
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
      <span className="text-3xl font-semibold ">Syncronus</span>
    </div>
  );
};

const Tittle=({text})=>{
  return(
    <h6 className='uppercase tracking-tighter-widest text-neutral-400 pl-10 font-light text-opacity-90 text-sm'>{text}</h6>
  )
}