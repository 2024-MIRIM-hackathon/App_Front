export interface Join {
    nickname: string;
    email: string;
    password: string;
    age: string;
}

export interface JoinRes {
    err?: string
}

export interface LoginData {
    nickname : string;
    password : string;
}