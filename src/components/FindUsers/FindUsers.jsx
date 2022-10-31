import React from "react";
import Users from "./Users/Users";

const FindUsers = (props) => {
    return (
        <div>
            <h1>Users</h1>
            <Users users={props.users} follow={props.follow} unfollow={props.unfollow} setUsers={props.setUsers} />
        </div>
    )
}

export default FindUsers;
