export interface EmailPassword {
    email: string
    password: string
}

export interface UserApi {
    email: string
    _id: string
}

/**
 * DTOs
 */
export interface RegisterReqDto extends EmailPassword {}

export interface RegisterResDto {
    message: string
    id: string
}

export interface LoginReqDto extends EmailPassword {}

export interface LoginResDto {
    token: string
}

export interface GetMeResDto {
    user: UserApi
}

// ENVOI DE PACKET CLIENT -> SERVER
// "auth-me" { token }
export interface AuthMeSocket {
    token: string
}

// "writing"

export interface NewMessageSocket {
    message: string
}


// RECEPTION DES PACKETS SERVER -> CLIENT
export interface AuthMeResSocket {
    user: UserApi
}

export interface WritingSocket {
    name: string
}

export interface NewMessageResSocket {
    name: string
    message: string
}
