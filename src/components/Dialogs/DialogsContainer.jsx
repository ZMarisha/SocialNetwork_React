import Dialogs from './Dialogs.jsx';
import { updateTextMessageCreator, sendMessageCreator } from '../../redux/messagesReducer.js';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    return {
        dialogItem: state.MessagesPage.USERS,
        messageItem: state.MessagesPage.MESSAGES,
        updateTextMessage: state.MessagesPage.updateTextMessage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        getChangeMessage: (text) => {
            dispatch(updateTextMessageCreator(text))
        },
        sendNewMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

// const DialogsContainer = (props) => {
//     console.log(props)
//     const dialogItem = props.state.MessagesPage.USERS;
//     console.log(dialogItem)
//     const messageItem = props.state.MessagesPage.MESSAGES;
//     const updateTextMessage = props.state.MessagesPage.updateTextMessage;

    
//     let getChangeMessage = (text) => {
//         props.store.dispatch(updateTextMessageCreator(text))
//     }

//     let sendNewMessage = () => {
//         props.store.dispatch(sendMessageCreator())
//     }
//     return <Dialogs dialogItem={dialogItem} 
//                     messageItem={messageItem} 
//                     updateTextMessage={updateTextMessage} 
//                     getChangeMessage={getChangeMessage} 
//                     sendNewMessage={sendNewMessage}
//             />
// }

export default DialogsContainer;