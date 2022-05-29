import { Dispatch, SetStateAction } from 'react';

export interface Props {
    user: User,
    setUser: Dispatch<SetStateAction<User>>
    loginErrors: LoginErrors,
    setLoginErrors: Dispatch<SetStateAction<LoginErrors>>
};
export interface User {
    user: string,
    password: string
};
export interface LoginErrors {
    message: string
};
