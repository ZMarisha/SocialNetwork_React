import React from 'react';
import d from './Users.module.css'

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([{
            id: 1, 
            followed: true, 
            avatarka: 'https://klike.net/uploads/posts/2019-03/1551511823_2.jpg', 
            fullName: 'Kate', 
            status: 'I am good girl', 
            location: {
                city: 'Minsk', 
                country: 'Belarus'
            }
        },
        {
            id: 2, 
            followed: false, 
            avatarka: 'https://klike.net/uploads/posts/2019-03/1551515501_13.jpg', 
            fullName: 'Vasya', 
            status: 'Hi....!', 
            location: {
                city: 'Moscow', 
                country: 'Russia'
            }
        },
        {
            id: 3, 
            followed: false, 
            avatarka: 'https://klike.net/uploads/posts/2019-03/1551515537_52.jpeg', 
            fullName: 'Anna', 
            status: 'Everyone hi!', 
            location: {
                city: 'Sochi', 
                country: 'Belarus'
            }
        },
        {
            id: 4, 
            followed: true, 
            avatarka: 'https://klike.net/uploads/posts/2019-03/1551511774_9.jpg', 
            fullName: 'Stas', 
            status: 'How are you?', 
            location: {
                city: 'Minsk', 
                country: 'Russia'
            }
        },
        {
            id: 5, 
            followed: true, 
            avatarka: 'https://klike.net/uploads/posts/2019-03/medium/1551511789_7.jpg', 
            fullName: 'Nikki', 
            status: 'Yo...', 
            location: {
                city: 'NY', 
                country: 'USA'
            }
        },
        {
            id: 6, 
            followed: false, 
            avatarka: 'https://klike.net/uploads/posts/2019-03/medium/1551511846_20.jpg', 
            fullName: 'Olga', 
            status: 'love', 
            location: {
                city: 'Moscow', 
                country: 'Russia'
            }
        },
        {
            id: 7, 
            followed: true, 
            avatarka: 'https://klike.net/uploads/posts/2019-03/1551511880_29.jpg', 
            fullName: 'Kate', 
            status: 'I am good girl', 
            location: {
                city: 'Minsk', 
                country: 'Belarus'
            }
        },
        {
            id: 8, 
            followed: true, 
            avatarka: 'https://klike.net/uploads/posts/2019-03/1551511804_3.jpg', 
            fullName: 'Andrew', 
            status: 'I am boss', 
            location: {
                city: 'Minsk', 
                country: 'Belarus'
            }
        },
        {
            id: 9, 
            followed: true, 
            avatarka: 'https://klike.net/uploads/posts/2019-03/medium/1551511876_31.jpg', 
            fullName: 'Kate', 
            status: 'I am good girl', 
            location: {
                city: 'Minsk', 
                country: 'Belarus'
            }
        },
        {
            id: 10, 
            followed: false, 
            avatarka: 'https://klike.net/uploads/posts/2019-03/medium/1551515619_53.jpg', 
            fullName: 'Sasha', 
            status: 'It is good day today!', 
            location: {
                city: 'Berlin', 
                country: 'German'
            }
        },])
    }
    return (
        <div className={d.userInfo}>
           {props.users.map(user => <div key={user.id} className={d.parent} >
            <div className={d.avatarka}>
                <img src={user.avatarka} alt='avatarka' />
                <div className={d.btn}>
                    {user.followed ? <button onClick={() => {props.unfollow(user.id)}}>Unfollow</button> : <button onClick={() => {props.follow(user.id)}}>Follow</button>}
                </div>
            </div>
            <div className={d.description}>
                <div className={d.text}>
                    <p className={d.userName}>{user.fullName}</p>
                    <p className={d.status}>{user.status}</p>
                </div>
                <div className={d.text}>
                    <p>{user.location.city}</p>
                    <p>{user.location.country}</p>
                </div>
            </div>
           </div>)}
        </div>
    )
}

export default Users;