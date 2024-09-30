import {
    CREATE_NEW_MESSAGES_REQUEST,
    CREATE_NEW_MESSAGES_SUCCESS,
    CREATE_NEW_MESSAGES_FAILURE,
    GET_ALL_MESSAGES_REQUEST,
    GET_ALL_MESSAGES_SUCCESS,
    GET_ALL_MESSAGES_FAILURE
  } from './ActionsTypes.js';
  


  export const createMessage=(jwt,messageData)=>async (dispatch)=>{
  
    dispatch({type:CREATE_NEW_MESSAGES_REQUEST})
      try{
  
        
          const res=await axios.post(`${BASE_API_URL}/messages/`,{
              headers:{
                  "Content-Type":"application/json",
                  Authorization:`Bearer ${jwt}`
                  
              },
              body:JSON.stringify(messageData.data)
          });
  
          const data=await res.json();
          console.log("create chatGROUP" , data)
          dispatch({type:CREATE_NEW_MESSAGES_SUCCESS,payload:data})
  
      }catch(e){
          console.error("Chat:", e.response ? e.response.data : e.message);
          dispatch({type:CREATE_NEW_MESSAGES_FAILURE ,payload:e.message})
      }
  }



  export const getAllMessage=(jwt,messageData)=>async (dispatch)=>{
  
    dispatch({type:GET_ALL_MESSAGES_REQUEST})
      try{
  
        
          const res=await axios.get(`${BASE_API_URL}/messages/chat/${messageData.chatId}`,{
              headers:{
                  "Content-Type":"application/json",
                  Authorization:`Bearer ${jwt}`
                  
              },
          });
  
          const data=await res.json();
          console.log("create chatGROUP" , data)
          dispatch({type:GET_ALL_MESSAGES_SUCCESS,payload:data})
  
      }catch(e){
          console.error("Chat:", e.response ? e.response.data : e.message);
          dispatch({type:GET_ALL_MESSAGES_FAILURE ,payload:e.message})
      }
  }
