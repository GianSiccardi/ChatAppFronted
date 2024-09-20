const { BASE_API_URL } = require("@/config/api")
const { default: axios } = require("axios");
const { REGISTER_REQUEST, REGISTER_SUCCESS, REQ_USER_REQUEST, REQ_USER_SUCCESS, REQ_USER_FAILURE } = require("./ActionsTypes");




const register=(data)=>async(dispatch)=>{
   
   
    try{

        dispatch({type:REGISTER_REQUEST})
        const res=await axios.post(`${BASE_API_URL}/auth/register`,data);
        const user=res.data;
      
        dispatch({type:REGISTER_SUCCESS})
        localStorage.setItem("jwt",user.jwt);
    }catch(error){
        dispatch({type:REGISTER_FAILURE,payload:error.message})
        console.log(error)

    }
}


const login=(data)=>async(dispatch)=>{
   
   
    try{

        dispatch({type:LOGIN_REQUEST})
        const res=await axios.post(`${BASE_API_URL}/auth/login`,data);
        const user=res.data;
      
        dispatch({type:LOGIN_SUCCESS})
        localStorage.setItem({ type: LOGIN_SUCCES, payload: user.jwt });
    }catch(error){
        dispatch({type:LOGIN_FAILURE,payload:error.message})
        console.log(error)

    }
}

const currentUser=(jwt)=>async(dispatch)=>{
   
   
    try{

        dispatch({type:REQ_USER_REQUEST})
        const res=await axios.get(`${BASE_API_URL}/customers/`,  {
             headers:{
            Authorization:`Bearer ${jwt}`
    }})
        
    const user=response.data;
    console.log(user);
    dispatch({type:REQ_USER_SUCCESS,payload:user})
    }catch(error){
        dispatch({type:REQ_USER_FAILURE,payload:error.message})
        console.log(error)

    }
}