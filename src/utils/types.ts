import Cookies from 'js-cookie';

export interface session{
    username: string | null;
    email: string | null;
    token: string | null;
}

export const getSession = () => {
    const session: session = {
        username: Cookies.get('session') || null,
        email: Cookies.get('email') || null,
        token: Cookies.get('token') || null
    }
    return session;
}

