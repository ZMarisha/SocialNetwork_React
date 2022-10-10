import React from 'react'
import d from './MessageItem.module.css'

const MessageItem = (props) => {

    return (
        <div>
            <div className={d.message}>{props.message}</div>
        </div>
        
    )
}

export default MessageItem;