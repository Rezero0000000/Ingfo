export type User = {
    id: number,
    name: string,
    username: string,
    email: string,
    password: string,
    token?: string | null,
    created_at: string
}



export type UserResponse = {
    id: number,
    name: string,
    username: string,
    email: string,
    password: string,
    token?: string | null,
    created_at: string,
}


export type CreateUser = {
    name: string,
    username: string,
    email: string,
    password: string
}

export type LoginUser = {
    email: string,
    password: string
}

export function ToUserResponse (user: User): UserResponse {
    return {
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        password: user.password,
        token: user.token,
        created_at: user.created_at
    }
}