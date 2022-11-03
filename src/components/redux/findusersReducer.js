const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
// const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const PRELOADER = 'PRELOADER';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsers: 120,
    currentPage: 1,
    isPreloader: false
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
        //     return {...state, totalUsers: action.totalCount};

        case PRELOADER: 
            return {...state, isPreloader: action.isPreloader}

        default: 
            return state;
    }
}

export const follow = (userId) => ({type: FOLLOW, userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const togglePreloader = (isPreloader) => ({type: PRELOADER, isPreloader})
// export const setTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount});

export default findusersReducer;
