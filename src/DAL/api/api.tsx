import axios from "axios";

const instance = axios.create(
    {
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        headers: {
            withcredentials:true
        }
    }
)


export const usersApi = {
        getUsers(page:number,count:number) {
           return instance.get(`users?page=${page}&count=${count}`).then(resp=>resp.data)
        }
}