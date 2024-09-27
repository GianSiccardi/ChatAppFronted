export const setSelectedChatType = (selectedChatType) => ({
    type: 'SET_SELECTED_CHAT_TYPE',
    payload: selectedChatType
});

export const setSelectedChatData = (selectedChatData) => ({
    type: 'SET_SELECTED_CHAT_DATA',
    payload: selectedChatData
});

export const setSelectChatMessage = (selectChatMessage) => ({
    type: 'SET_SELECT_CHAT_MESSAGE',
    payload: selectChatMessage
});

export const closeChat = () => ({
    type: 'CLOSE_CHAT'
});
