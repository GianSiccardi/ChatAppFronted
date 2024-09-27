import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./Auth/Reducer";
import chatSlice from "./ChatState/Reducer";
import chatReducer from "./ChatState/Reducer";


const rootReducer=combineReducers({
    auth:authReducer,
    chatState: chatReducer
})


 export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))