import { BASE_API_URL } from "@/config/api";


import { 
    REGISTER_REQUEST, 
    REGISTER_SUCCESS, 
    REGISTER_FAILURE,
    REQ_USER_REQUEST, 
    REQ_USER_SUCCESS, 
    REQ_USER_FAILURE, 
    SEARCH_USER_REQUEST,LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, 
    SEARCH_USER_SUCCESS, 
    SEARCH_USER_FAILURE, 
    UPDATE_USER_REQUEST, 
    UPDATE_USER_SUCCESS, 
    UPDATE_USER_FAILURE,
    LOGOUT ,SELECT_CHAT
  } from "./ActionsTypes"; 
import axios from "axios";




export const register=(data)=>async(dispatch)=>{
   
   
    try{

        dispatch({type:REGISTER_REQUEST})
        const res=await axios.post(`${BASE_API_URL}/auth/register`,data);
        const user=res.data;
      
        dispatch({type:REGISTER_SUCCESS ,payload:user.jwt})
        localStorage.setItem("jwt",user.jwt);
    }catch(error){
        dispatch({type:REGISTER_FAILURE , payload:error.message})
        console.log(error)

    }
}


export const login=(data)=>async(dispatch)=>{
   
   
    try{

        dispatch({type:LOGIN_REQUEST})
        const res=await axios.post(`${BASE_API_URL}/auth/login`,data);

        const user=res.data;
      
        dispatch({ type: LOGIN_SUCCESS, payload: user.jwt });

        localStorage.setItem("jwt", user.jwt);
    
    }catch(error){
         console.error("Login error:", error.response ? error.response.data : error.message);
    dispatch({ type: LOGIN_FAILURE, payload: error.message });

    }
}



//funcion que uso en el App.jsx
export const currentUser=(jwt)=>async(dispatch)=>{
   
    dispatch({type:REQ_USER_REQUEST})
    try{

        
        const res=await axios.get(`${BASE_API_URL}/customers`,  {
             headers:{
            Authorization:`Bearer ${jwt}`
    }})
        
    const user=res.data;
    console.log(user);
    dispatch({type:REQ_USER_SUCCESS,payload:user})
    }catch(error){
        dispatch({type:REQ_USER_FAILURE,payload:error.message})
        console.log(error)

    }
}

export const searchUser=(data)=>async(dispatch)=>{
    dispatch({type:SEARCH_USER_REQUEST})
    try{
        const jwt=localStorage.getItem("jwt")
        const res=await axios.get(`${BASE_API_URL}/customers/search?q=${data.keyword}`,{
             headers:{
            Authorization:`Bearer ${jwt}`
    }})
    dispatch({type:SEARCH_USER_SUCCESS ,payload:res.data })
        

    }catch(error){
        dispatch({type:SEARCH_USER_FAILURE})
        console.log(error)
    }
}

export const updateUser = (data) => async (dispatch) => {
    dispatch({ type: UPDATE_USER_REQUEST });
    try {
      const jwt = localStorage.getItem("jwt");
      const res = await axios.put(`${BASE_API_URL}/customers`, data, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
  
      dispatch({ type: UPDATE_USER_SUCCESS });
      console.log("update user", res.data);
  
    } catch (error) {
      dispatch({ type: UPDATE_USER_FAILURE });
      console.log(error);
    }
  };
  


export const logOutAction=()=>(dispatch)=>{
  localStorage.clear();
  dispatch({type:LOGOUT})
}

export const selectChat = (chat) => ({
  type: SELECT_CHAT,
  payload: chat,
});