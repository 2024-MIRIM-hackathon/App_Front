export interface Learn {
    userId: string;
    date: string;
}

export interface Words {
    word: string,
    meaning: string,
    example: string,
    first_example: string,
    last_example: string,
    title: string,
    writer: string
}

export interface TextType {
    text: string,
    title: string,
    writer: string
}

export interface LearnRes {
    date: string,
    words: Words[],
    text: TextType,
}

export type Done = {
    user_id: number;
    t_type: string;
    thing: string;
    learn_date: string;
};