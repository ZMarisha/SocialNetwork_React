import d from './DialogItem.module.css'
import { NavLink } from 'react-router-dom'

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={d.item}>
            <NavLink className={d.link} to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;