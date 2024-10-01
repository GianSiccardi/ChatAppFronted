import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    REQ_USER_REQUEST,
    REQ_USER_SUCCESS,
    REQ_USER_FAILURE,
    SEARCH_USER_REQUEST,
    SEARCH_USER_SUCCESS,
    SEARCH_USER_FAILURE,
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILURE,
    SELECT_CHAT
} from './ActionsTypes';


const initialState = {
    user: null,
    loading: false,
    error: null,
    jwt: null,
    reqUser:null,
    searchContacted: [],
    selectedChat: null, 
}
export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_REQUEST:
        case LOGIN_REQUEST:
        case REQ_USER_REQUEST:
        case SEARCH_USER_REQUEST:
        case UPDATE_USER_REQUEST:
            return { ...state, loading: true, error: null };

        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            return { ...state, loading: false, error: null, jwt: action.payload };

        case REQ_USER_SUCCESS:
        case UPDATE_USER_SUCCESS:
            return { ...state, user: action.payload, loading: false, error: null };

        case SEARCH_USER_SUCCESS:
            return { ...state, searchContacted: action.payload, loading: false, error: null };

        case REGISTER_FAILURE:
        case LOGIN_FAILURE:
        case REQ_USER_FAILURE:
        case SEARCH_USER_FAILURE:
        case UPDATE_USER_FAILURE:
            return { ...state, loading: false, error: action.payload };

            case SELECT_CHAT: // Agrega este caso
            return { ...state, selectedChat: action.payload };


        default:
            return state;
    }
};

