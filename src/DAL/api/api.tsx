import axios from "axios";
import {UserType} from "../../redux/usersReducer";

const instance = axios.create(
    {
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        withCredentials: true
    }
)


export const usersApi = {
    getUsers(page: number, count: number) {
        return instance.get<{ items: UserType[], totalCount: number, error: string | null}>(`users?page=${page}&count=${count}`)
    },
    followUser(id: number) {
        return instance.post(`follow/${id}`)
    },
    unFollowUser(id: number) {
        return instance.delete(`follow/${id}`)
    }
}

export const profileApi = {
    getProfile(id:number) {
        return instance.get(`profile/${id}`)
    }
}