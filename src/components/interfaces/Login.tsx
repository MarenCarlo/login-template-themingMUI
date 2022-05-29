import { Dispatch, SetStateAction } from 'react';

export interface LoginErrorProps {
    loginErrors: LoginErrors,
    setLoginErrors: Dispatch<SetStateAction<LoginErrors>>
};
export interface LoginErrors {
    message: string
};