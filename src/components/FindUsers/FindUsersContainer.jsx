import { connect } from "react-redux";
import { followAction, setUsersAction, unfollowAction, setCurrentPageAction } from "../redux/findusersReducer";
import FindUsers from "./FindUsers";

let mapStateToProps = (state) => {
    return { users: state.UsersPage.users,
            pageSize: state.UsersPage.pageSize,
            totalUsers: state.UsersPage.totalUsers,
            currentPage: state.UsersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAction(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAction(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAction(users))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAction(currentPage))
        },
        // setTotalCount: (totalCount) => {
        //     dispatch(setTotalCountAction(totalCount))
        // }
    }
}

const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(FindUsers);

export default FindUsersContainer;