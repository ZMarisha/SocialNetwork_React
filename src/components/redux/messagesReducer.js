const UPDATE_NEW_MESSAGE = 'UPDATE_NEW_MESSAGE';
const SEND_MESSAGE = 'SEND_MESSAGE';

export let sendMessageCreator = () => ( {type: SEND_MESSAGE} ); 
export let updateTextMessageCreator = (text) => ( {type: UPDATE_NEW_MESSAGE, newMessage: text} );

export const messagesReducer = (state, action) => {
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

