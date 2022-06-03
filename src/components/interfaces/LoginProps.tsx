import { Dispatch, SetStateAction } from 'react';

export interface LoginProps {
    user: User,
    setUser: Dispatch<SetStateAction<User>>
    userData: UserData,
    setUserData: Dispatch<SetStateAction<UserData>>
    loginErrors: LoginErrors,
    setLoginErrors: Dispatch<SetStateAction<LoginErrors>>
};
export interface User {
    user: string,
    password: string
};
export interface UserData {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
            lat: string,
            lng: string,
        }
    },
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string,
    }
};
export interface LoginErrors {
    message: string
};