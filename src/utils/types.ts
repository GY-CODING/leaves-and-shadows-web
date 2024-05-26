import Cookies from 'js-cookie';

export interface session {
  user: {
    username?: string;
    email?: string;
    token?: string;
  };
  // jwt: string | null;
}

export const getSession = (): session => {
  const session: session = {
    user: {
      username: Cookies.get('session'),
      email: Cookies.get('email'),
      token: Cookies.get('token'),
    },
  };
  return session;
};

export interface user {
  user?: string;
  username?: string;
  password: string;
  email?: string;
}

export interface GYUser {
  id: number;
  email: string;
  password: string;
  salt: string;
  token: string;
  username: string;
}
