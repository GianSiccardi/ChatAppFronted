import { BASE_API_URL } from '@/config/api';
import {
    CHAT_REQUEST,
    CHAT_SUCCESS,
    CHAT_FAILURE,
    CHAT_GROUP_REQUEST,
    CHAT_GROUP_SUCCESS,
    CHAT_GROUP_FAILURE,
    GET_ALL_CHATS_REQUEST,
    GET_ALL_CHATS_SUCCESS,
    GET_ALL_CHATS_FAILURE
  } from './ActionsTypes';

  import axios from "axios";


  export const chatCreate = (jwt, chatData) => async (dispatch) => {
    dispatch({ type: CHAT_REQUEST });
    try {
        const res = await axios.post(`${BASE_API_URL}/chats`, chatData, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${jwt}`,
            },
        });

        const data = res.data;
        console.log("create chat", data);
        dispatch({ type: CHAT_SUCCESS, payload: data });
    } catch (e) {
        console.error("Chat:", e.response ? e.response.data : e.message);
        dispatch({ type: CHAT_FAILURE, payload: e.message });
    }
}


export const chatGroup=(jwt,chatData)=>async (dispatch)=>{
  
    dispatch({type:CHAT_GROUP_REQUEST})
      try{
  
        
          const res=await axios.post(`${BASE_API_URL}/chats/group`,{
              headers:{
                  "Content-Type":"application/json",
                  Authorization:`Bearer ${jwt}`
                  
              },
              body:JSON.stringify(chatData.data)
          });
  
          const data=await res.json();
          console.log("create chatGROUP" , data)
          dispatch({type:CHAT_GROUP_SUCCESS,payload:data})
  
      }catch(e){
          console.error("Chat:", e.response ? e.response.data : e.message);
          dispatch({type: CHAT_GROUP_FAILURE ,payload:e.message})
      }
  }


export const getAllUserChat=(jwt)=>async (dispatch)=>{
  
    dispatch({type:GET_ALL_CHATS_REQUEST})
      try{
  
        
          const res=await axios.get(`${BASE_API_URL}/chats/customers`,{
              headers:{
                  "Content-Type":"application/json",
                  Authorization:`Bearer ${jwt}`
                  
              },
              body:JSON.stringify(data)
          });
  
          const data=await res.json();
          console.log("create chat" , data)
          dispatch({type:GET_ALL_CHATS_SUCCESS,payload:data})
  
      }catch(e){
          console.error("Chat:", e.response ? e.response.data : e.message);
          dispatch({type: GET_ALL_CHATS_FAILURE,payload:e.message})
      }
  }