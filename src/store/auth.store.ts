import { defineStore } from "pinia";
import { getMe, login, register, setToken } from "../common/api";
import { EmailPassword, UserApi } from "../models/interfaces";

interface AuthState {
    user: UserApi | false
    token: string
}

const useAuthStore = defineStore('auth', {
    state: (): AuthState => ({
        user: false,
        token: '',
    }),
    actions: {
        login(payload: EmailPassword) {
            return login(payload)
                .then(res => {
                    this.token = res.data.token
                    setToken(this.token)
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
            return getMe().then(r => true).catch(err => false)
        },
        logout() {

        }
    }
})

export default useAuthStore
