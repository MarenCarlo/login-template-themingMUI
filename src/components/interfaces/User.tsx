import { Dispatch, SetStateAction } from 'react';

export interface UserProps {
    user: User,
    setUser: Dispatch<SetStateAction<User>>
};
export interface User {
    user: string,
    password: string
};

/*
export type UserProps = {
  user: User;
  setUser: (user: User) => void;
};
export type User = {
  user: string;
  password: string;
};
*/
