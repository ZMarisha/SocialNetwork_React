import React from "react";
import d from './DialogItem.module.css'
import { NavLink } from 'react-router-dom'

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={d.item}>
            <div className={d.avatarka}>
                <img src={props.avatarka} alt='name' />
            </div>
            <div>
                <NavLink className={d.link} to={path}>{props.name}</NavLink>
            </div>   
        </div>
    )
}

export default DialogItem;