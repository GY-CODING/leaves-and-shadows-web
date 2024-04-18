import Cookies from 'js-cookie';

export interface session{
    user: {
        username: string | null;
        email: string | null;
        token: string | null;
    }
    // jwt: string | null;
}

export const getSession = () => {
    const session: session = {
       user:{
        username: Cookies.get('session') || null,
        email: Cookies.get('email') || null,
        token: Cookies.get('token') || null
       }
    }
    return session;
}

export interface user{
    user?: string;
    username?: string;
    password: string;
    email?: string
}

