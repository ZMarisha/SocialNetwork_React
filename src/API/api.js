import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const getCurrentUsers = (currentPage = 1, pageSize = 5) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
}

export const getNextUsers = (pageNumber, pageSize) => {
    return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
}

export const getUserById = (userId) => {
    return instance.get(`profile/${userId}`)
}