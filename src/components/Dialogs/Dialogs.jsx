import React from 'react'
import d from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem.jsx'
import MessageItem from './MessageItem/MessageItem.jsx'

const Dialogs = (props) => {
    console.log(props)

    // const DATA = [
    //     {id: 1, name: 'Victor'},
    //     {id: 2, name: 'Anna'},
    //     {id: 3, name: 'Valerya'},
    //   ];
      
    //   const MESSAGES = [
    //     {id: 1, message: 'Evryone messaage'},
    //     {id: 2, message: 'How is youe job?'},
    //     {id: 3, message: 'I hate to do things which I do not like!'},
    //   ];

    const dialogItem = props.dialogs.USERS;
    console.log(dialogItem)
    const messageItem = props.dialogs.MESSAGES;
    const updateTextMessage = props.updateTextMessage

    let person = dialogItem.map( data => [<DialogItem name={data.name} id={data.id} avatarka={data.avatarka} key={data.id} />]);
    let message = messageItem.map( m => [<MessageItem message={m.message} key={m.id} />])

    
    let onChangeMessage = (event) => {
        let text = event.target.value;
        props.dispatch(props.updateTextMessageCreator(text))
    }

    let sendMessage = () => {
        props.dispatch(props.sendMessageCreator())
    }
    
    return (
        <div>
            <h1>Dialogs</h1>
            <div className={d.dialogs}>
                <div className={d.avatarka}>
                  {person}
                </div>
                <div className={d.messages}>
                    {message}
                    <div className={d.interTextMessage}>   
                        <textarea value={updateTextMessage} onChange={onChangeMessage} placeholder='your message...' />
                        <div className={d.sendMessage}>
                            <button onClick={sendMessage} type='submit'>Send message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;