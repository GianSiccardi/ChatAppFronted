



const initialState = {
    selectedChatType: undefined,
    selectedChatData: undefined,
    selectChatMessage: [],
};

const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SELECTED_CHAT_TYPE':
            return {
                ...state,
                selectedChatType: action.payload
            };
        case 'SET_SELECTED_CHAT_DATA':
            return {
                ...state,
                selectedChatData: action.payload
            };
        case 'SET_SELECT_CHAT_MESSAGE':
            return {
                ...state,
                selectChatMessage: action.payload
            };
        case 'CLOSE_CHAT':
            return {
                ...state,
                selectedChatType: undefined,
                selectedChatData: undefined,
                selectChatMessage: []
            };
        default:
            return state;
    }
};

export default chatReducer;
