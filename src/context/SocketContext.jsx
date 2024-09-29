import { store } from '@/Redux/store';
import React, { createContext, useContext, useRef } from 'react'
import { useSelector } from 'react-redux';

const SocketCOntext=createContext(null);
export const useSocket=()=>{
    return useContext(SocketCOntext)
}

const SocketContext = ({chilldren}) => {

    const socket=useRef();

    const {user}=useSelector(store=>store)

     

    return (
    <div>
      
    </div>
  )
}

export default SocketContext
