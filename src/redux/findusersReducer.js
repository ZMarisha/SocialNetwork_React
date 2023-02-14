import { getCurrentUsers, getNextUsers, getUserById } from "../API/api";


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const USER = 'USER';
const PRELOADER = 'PRELOADER';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsers: 120,
    currentPage: 1,
    isPreloader: false,
    user: null
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

        case PRELOADER: 
            return {...state, isPreloader: action.isPreloader};

        case USER: 
                return {...state, user: action.user}

        default: 
            return state;
    }
}

export const follow = (userId) => ({type: FOLLOW, userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const togglePreloader = (isPreloader) => ({type: PRELOADER, isPreloader});
export const setUser = (user) => ({type: USER, user});

export const getUsersThunkCreator = (currentPage, pageSize) => (dispatch) => {
        dispatch(togglePreloader(true));
        getCurrentUsers(currentPage, pageSize).then(response => { dispatch(setUsers(response.data.items));
            dispatch(togglePreloader(false));
    })
}

export const getNextUsersThunkCreator = (pageNumber, pageSize) => (dispatch) => {
            dispatch(togglePreloader(true));
            dispatch(setCurrentPage(pageNumber))
            getNextUsers(pageNumber, pageSize).then(response => { dispatch(setUsers(response.data.items))
                        dispatch(togglePreloader(false))
            })
}

export const getUsersByIdThunkCreator = (userId) => (dispatch) => {
    getUserById(userId).then(response => dispatch(setUser(response)))
}


export default findusersReducer;
