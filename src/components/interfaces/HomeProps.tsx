import { Dispatch, SetStateAction } from 'react';

export interface HomeProps {
    userData: UserData,
    setUserData: Dispatch<SetStateAction<UserData>>
    token: Token
    setToken: Dispatch<SetStateAction<Token>>
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
export interface Token {
    token: string
}