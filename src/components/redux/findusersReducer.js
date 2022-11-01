const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
// const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT'

let initialState = {
    users: [],
    pageSize: 5,
    totalUsers: 120,
    currentPage: 1
}

const findusersReducer = (state = initialState, action) => {
    switch(action.type) {

        case FOLLOW: 
            return { ...state, 
                users: state.users.map(user => {
                if (user.id === action.userId) {
                    return {
                        ...user, followed: true
                    }
                }
                return user;
            })};

        case UNFOLLOW: 
            return { ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: false}
                    }
                    return user
                })};

        case SET_USERS: 
            return { ...state, users: action.users};
        
        case SET_CURRENT_PAGE: 
            return {...state, currentPage: action.currentPage};

        // case SET_TOTAL_COUNT: 
        //     return {...state, totalUsers: action.totalCount}

        default: 
            return state;
    }
}

export const followAction = (userId) => ({type: FOLLOW, userId});
export const unfollowAction = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAction = (users) => ({type: SET_USERS, users});
export const setCurrentPageAction = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
// export const setTotalCountAction = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount});

export default findusersReducer;
