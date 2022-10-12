const UPDATE_NEW_MESSAGE = 'UPDATE_NEW_MESSAGE';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
        USERS: [
            {id: 1, name: 'Victor', avatarka: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg'},
            {id: 2, name: 'Anna', avatarka: 'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg'},
            {id: 3, name: 'Valerya', avatarka: 'https://klike.net/uploads/posts/2019-03/1551511808_5.jpg'},
            {id: 4, name: 'Ammi', avatarka: 'https://klike.net/uploads/posts/2019-03/1551511851_21.jpg'},
        ], 
        MESSAGES: [
            {id: 1, message: 'Evryone messaage'},
            {id: 2, message: 'How is youe job?'},
            {id: 3, message: 'I hate to do things which I do not like!'},
            {id: 4, message: 'Hi!'},
        ],
        updateTextMessage: ''
}

export let sendMessageCreator = () => ( {type: SEND_MESSAGE} ); 
export let updateTextMessageCreator = (text) => ( {type: UPDATE_NEW_MESSAGE, newMessage: text} );

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: 
            let newMessages = {
                id: 6,
                message: state.updateTextMessage
            }
            state.MESSAGES.push(newMessages);
            state.updateTextMessage = '';
            return state;

        case UPDATE_NEW_MESSAGE:
            state.updateTextMessage = action.newMessage;
            return state;

        default: 
            return state;    
    }
}

export default messagesReducer;

