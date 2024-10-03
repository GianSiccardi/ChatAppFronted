
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
  

  const initialState = {
    chats: [],
    createdGroup: null,
    createdChat:null,
    loading: false,
    error: null,
  };
  
  const chatUserReducer = (state = initialState, action) => {
    switch (action.type) {
      case CHAT_REQUEST:
      case CHAT_GROUP_REQUEST:
      case GET_ALL_CHATS_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
  
      case CHAT_SUCCESS:
        return {
          ...state,
          createdChat: action.payload,
        };
  
      case CHAT_GROUP_SUCCESS:
        return {
          ...state,
          createdGroup: action.payload,
        };
  
        case GET_ALL_CHATS_SUCCESS:
            console.log('Datos recibidos en EL REDUCER:', action.payload);
            console.log('Tipo de datos:', typeof action.payload); 
            return {
              ...state,
              loading: false,
              chats: action.payload, 
            };
  
      case CHAT_FAILURE:
      case CHAT_GROUP_FAILURE:
      case GET_ALL_CHATS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default chatUserReducer;