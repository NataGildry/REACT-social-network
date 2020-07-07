const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogData: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Lena'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Anna'},
        {id: 5, name: 'Sasha'},
    ],
    messageData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'How is your day?'},
    ],
    newMessageBody: ''
};

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY :
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE :
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messageData.push({
                id: 6, message: body
            });
            return state;
        default:
            return state;
    }
};
export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyActionCreator = (text) => (
    {type: UPDATE_NEW_MESSAGE_BODY, body: text}
);

export default dialogReducer;
