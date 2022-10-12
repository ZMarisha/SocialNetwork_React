import React from 'react'
import d from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem.jsx'
import MessageItem from './MessageItem/MessageItem.jsx'

const Dialogs = (props) => {

    let person = props.dialogItem.map( data => [<DialogItem name={data.name} id={data.id} avatarka={data.avatarka} key={data.id} />]);
    let message = props.messageItem.map( m => [<MessageItem message={m.message} key={m.id} />])

    
    let onChangeMessage = (event) => {
        let text = event.target.value;
        props.getChangeMessage(text);
    }

    let sendMessage = () => {
        props.sendNewMessage()
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
                        <textarea value={props.updateTextMessage} onChange={onChangeMessage} placeholder='your message...' />
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