import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./Auth/Reducer";
import chatSlice from "./ChatState/Reducer";
import chatReducer from "./ChatState/Reducer";
import chatUserReducer from "./Chat/Reducer";
import messagesReducer from "./Message/Reducer";


const rootReducer=combineReducers({
    auth:authReducer,
    chatState: chatReducer,
    chat:chatUserReducer,
    message:messagesReducer
})


 export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))