import React from 'react'
import d from './MessageItem.module.css'

const MessageItem = (props) => {

    let link = React.createRef();
    let addMessage = () => {
        let text = link.current.value;
        alert(text)
    }

    return (
        <div>
            <div className={d.message}>{props.message}</div>
            <textarea className={d.message} ref={link} />
            <button onClick={addMessage} type='submit'>Add message</button>
        </div>
        
    )
}

export default MessageItem;