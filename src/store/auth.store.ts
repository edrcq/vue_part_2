import { defineStore } from "pinia";
import { inject } from "vue";
import { getMe, login, register, setToken } from "../common/api";
import { EmailPassword, UserApi } from "../models/interfaces";
import { socket } from "../common/socket";

const LS_TOKEN = 'token'

interface AuthState {
    user: UserApi | false
    token: string
}

const useAuthStore = defineStore('auth', {
    state: (): AuthState => ({
        user: false,
        token: '',
    }),
    getters: {
        isLoggedIn: state => {
            return state.token !== '' && state.user !== false;
        },
        userEmail: state => {
            return state.user ? state.user.email : ''
        }
    },
    actions: {
        login(payload: EmailPassword) {
            // return une promise
            return login(payload)
                .then(res => {
                    this.token = res.data.token
                    localStorage.setItem(LS_TOKEN, this.token)
                    // return la promise de checkToken
                    return this.checkToken()
                })
                .catch(err => {
                    // log error ?
                    return false;
                })
        },
        async register(payload: EmailPassword) {
            try {
                await register(payload)
                return true
            }
            catch(err) {
                // log error ?
                return false
            }
        },
        checkToken() {
            setToken(this.token)
            return getMe()
                .then(r => {
                    this.user = r.data.user
                    socket.emit('auth-me', { token: this.token })
                    return true
                })
                .catch(err => false)
        },
        logout() {
            localStorage.removeItem(LS_TOKEN)
            setToken('') // remove token from axios headers
            this.token = ''
            this.user = false
        },
        loadLocalStorage() {
            const token = localStorage.getItem(LS_TOKEN)
            if (!token) return ;
            this.token = token;
            this.checkToken();
        }
    }
})

export default useAuthStore
