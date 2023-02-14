import React from "react";
import { connect } from "react-redux";
import { follow, setUsers, unfollow, setCurrentPage, togglePreloader } from "../../redux/findusersReducer";
import Users from "./Users/Users";
import { getUsersThunkCreator, getNextUsersThunkCreator } from "../../redux/findusersReducer";


class FindUsers extends React.Component {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getNextUsersThunkCreator(pageNumber, this.props.pageSize)
    }

    render() {
        
        return <Users follow={this.props.follow} unfollow={this.props.unfollow} onPageChanged={this.onPageChanged} totalUsers={this.props.totalUsers} pageSize={this.props.pageSize} isPreloader={this.props.isPreloader} currentPage={this.props.currentPage} users={this.props.users} />
    
    } 
}

let mapStateToProps = (state) => {
    return { users: state.UsersPage.users,
            pageSize: state.UsersPage.pageSize,
            totalUsers: state.UsersPage.totalUsers,
            currentPage: state.UsersPage.currentPage,
            isPreloader: state.UsersPage.isPreloader
    }
}


const FindUsersContainer = connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, 
                                    togglePreloader, getUsersThunkCreator, getNextUsersThunkCreator} )(FindUsers);

export default FindUsersContainer;