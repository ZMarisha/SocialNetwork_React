import React from "react";
import axios from "axios";
// import Users from "./Users/Users";
import d from './FindUsers.module.css'
import Preloader from "../common/Preloader/Preloader";
// import Pagination from "./Pagination/Pagination";


class FindUsers extends React.Component {

    componentDidMount() {
        this.props.togglePreloader(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => { this.props.setUsers(response.data.items);
                            this.props.togglePreloader(false);
                            }) //this.props.setTotalCount(response.data.totalCount)
    }

    onPageChanged(pageNumber) {
        this.props.togglePreloader(true);
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then(response => { this.props.setUsers(response.data.items);
                            this.props.togglePreloader(false)})
    }

    render() {
        
            let countPages = Math.ceil(this.props.totalUsers / this.props.pageSize)
            let pages = [];
            for(let i = 1; i <= countPages; i++) {
                pages.push(i)
            }
            
            return (

            <div className={d.userBlock}>
            {this.props.isPreloader ? <Preloader /> : null} 
            <div>
                <h1>Users</h1>
                <div className={d.pagination}>
                    {pages.map((el, i) => <p onClick={() => {this.onPageChanged(el)}} className={this.props.currentPage === el ? d.selectedPage : d.notActive}  key={i}>{el}</p>)}
                </div>
            </div>
            <div className={d.userInfo}>
           {this.props.users.map(user => <div key={user.id} className={d.parent} >
            <div className={d.avatarka}>
                <img src={'https://android-obzor.com/wp-content/uploads/2022/03/21-3.jpg'} alt='avatarka' />
                <div className={d.btn}>
                    {user.followed ? <button onClick={() => {this.props.unfollow(user.id)}}>Unfollow</button> : <button onClick={() => {this.props.follow(user.id)}}>Follow</button>}
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

    
}

export default FindUsers;
