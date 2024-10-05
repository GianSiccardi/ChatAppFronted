
import {
    CREATE_NEW_MESSAGES_REQUEST,
    CREATE_NEW_MESSAGES_SUCCESS,
    CREATE_NEW_MESSAGES_FAILURE,
    GET_ALL_MESSAGES_REQUEST,
    GET_ALL_MESSAGES_SUCCESS,
    GET_ALL_MESSAGES_FAILURE,
    ADD_MESSAGE
  } from './ActionsTypes.js';
  


const initialState = {
    messages: [],
    newMessages:null,
    loading: false,
    error: null,
  };
  
 
  const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
   
      case CREATE_NEW_MESSAGES_REQUEST:
      case GET_ALL_MESSAGES_REQUEST:
        return {
            ...state,
            loading: true,
            error: null,
          };
  
          case CREATE_NEW_MESSAGES_SUCCESS:
            return {
              ...state,
              loading: false,
              error: null,
              messages: [...state.messages, action.payload]  // Agregar nuevo mensaje
            };
      case GET_ALL_MESSAGES_SUCCESS:
   
      return {
        ...state,
        loading: false,
        error: null,
        messages:action.payload
      };

      case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload]
      };
  
      case CREATE_NEW_MESSAGES_FAILURE:
      case GET_ALL_MESSAGES_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload, 
        };
  
     
      default:
        return state;
    }
  };
  
  export default messagesReducer;
  