import { connect } from "react-redux";
import { followAction, setUsersAction, unfollowAction } from "../redux/findusersReducer";
import FindUsers from "./FindUsers";

let mapStateToProps = (state) => {
    return { users: state.UsersPage.users}
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
        }
    }
}

const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(FindUsers);

export default FindUsersContainer;