import React from 'react';
import d from './Users.module.css';
import { NavLink } from 'react-router-dom';
import Preloader from '../../common/Preloader/Preloader';

const Users = (props) => {

    let countPages = Math.ceil(props.totalUsers / props.pageSize)
        let pages = [];
        for(let i = 1; i <= countPages; i++) {
            pages.push(i)
        }
    
    
    return (
        <div className={d.userBlock}>
            {props.isPreloader ? <Preloader /> : null} 
            <div>
                <h1>Users</h1>
                <div className={d.pagination}>
                    {pages.map((el, i) => <p onClick={() => {props.onPageChanged(el)}} className={props.currentPage === el ? d.selectedPage : d.notActive}  key={i}>{el}</p>)}
                </div>
            </div>
            <div className={d.userInfo}>
           {props.users.map(user => <div key={user.id} className={d.parent} >
            <div className={d.avatarka}>
                <NavLink to={'/profile/' + user.id} className={d.link}>
                    <img src={'https://android-obzor.com/wp-content/uploads/2022/03/21-3.jpg'} alt='avatarka' />
                </NavLink>
                <div className={d.btn}>
                    {user.followed ? <button onClick={() => {props.unfollow(user.id)}}>Unfollow</button> : <button onClick={() => {props.follow(user.id)}}>Follow</button>}
                </div>
            </div>
            <div className={d.description}>
                <div className={d.text}>
                    <p className={d.userName}>{user.name}</p>
                    <p className={d.status}>Everyone hi!</p>
                </div>
                <div className={d.text}>
                    <p>Moscow</p>
                    <p>Russia</p>
                </div>
            </div>
           </div>)}
        </div>
            </div>
    )
}

export default Users;