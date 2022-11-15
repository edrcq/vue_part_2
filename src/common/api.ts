import axios from 'axios'
import { GetMeResDto, LoginReqDto, LoginResDto, RegisterReqDto, RegisterResDto } from '../models/interfaces'

export const http = axios.create({
    baseURL: 'https://chat.apigame.co',
})

export function setToken(token: string) {
    http.defaults.headers.common['Authorization'] = token
}

export function login(payload: LoginReqDto) {
    return http.post<LoginResDto>('/login', payload)
}

export function register(payload: RegisterReqDto) {
    return http.post<RegisterResDto>('/register', payload)
}

export function getMe() {
    return http.get<GetMeResDto>('/me')
}
