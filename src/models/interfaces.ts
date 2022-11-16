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
    user: UserApi,
    users: string[]
}

export interface WritingSocket {
    name: string
}

export interface NewMessageResSocket {
    name: string
    message: string
}

/**
 * Le Chat
 */
export interface Message {
    name: string
    text: string
    createdAt: Date
}

export interface Room {
    name: string
    messages: Message[]
}

// Objet supportant toute clé
export interface IWritingUsers {
    [key: string]: string
}

export interface RoomOption {
    label: string,
    name: string
}
