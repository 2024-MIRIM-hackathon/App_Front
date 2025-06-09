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

export interface Level {
    now_level: number;
    next_level: number;
    need_study_num: number;
    studied_num: number;
}