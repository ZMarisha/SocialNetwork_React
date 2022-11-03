import { connect } from "react-redux";
import { follow, setUsers, unfollow, setCurrentPage, togglePreloader } from "../redux/findusersReducer";
import FindUsers from "./FindUsers";

let mapStateToProps = (state) => {
    return { users: state.UsersPage.users,
            pageSize: state.UsersPage.pageSize,
            totalUsers: state.UsersPage.totalUsers,
            currentPage: state.UsersPage.currentPage,
            isPreloader: state.UsersPage.isPreloader
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAction(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAction(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAction(users))
//         },
//         setCurrentPage: (currentPage) => {
//             dispatch(setCurrentPageAction(currentPage))
//         },
//         // setTotalCount: (totalCount) => {
//         //     dispatch(setTotalCountAction(totalCount))
//         // },
//         togglePreloader: (isPreloader) => {
//             dispatch(toggleIsPreloader(isPreloader))
//         }
//     }
// }


// сократили
// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow,
//         unfollow,
//         setUsers,
//         setCurrentPage,
//         // setTotalCount,
//         togglePreloader
//     }
// } удалили и перенесли как объект connect в вторым параметром

const FindUsersContainer = connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, togglePreloader} )(FindUsers);

export default FindUsersContainer;