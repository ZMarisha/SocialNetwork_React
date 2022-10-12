import React from 'react';
import Dialogs from './Dialogs.jsx';
import { updateTextMessageCreator, sendMessageCreator } from '../redux/messagesReducer.js';

const DialogsContainer = (props) => {
    console.log(props)
    const dialogItem = props.state.MessagesPage.USERS;
    console.log(dialogItem)
    const messageItem = props.state.MessagesPage.MESSAGES;
    const updateTextMessage = props.state.MessagesPage.updateTextMessage;

    
    let getChangeMessage = (text) => {
        props.store.dispatch(updateTextMessageCreator(text))
    }

    let sendNewMessage = () => {
        props.store.dispatch(sendMessageCreator())
    }
    return <Dialogs dialogItem={dialogItem} 
                    messageItem={messageItem} 
                    updateTextMessage={updateTextMessage} 
                    getChangeMessage={getChangeMessage} 
                    sendNewMessage={sendNewMessage}
            />
}

export default DialogsContainer;