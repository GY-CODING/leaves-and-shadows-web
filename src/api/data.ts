import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { session } from '@/utils/types';


export async function login({ user, password }: { user: string, password: string }): Promise<session | null> {
    try {
        const response = await fetch(`https://gy-accounts.onrender.com/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user, password })
        })

        if (response.ok) {
           if(await response.text() === 'true'){
                const session:session = await getSession({ user, password })
                
                return session;

           }else{
                return null;
           }
        } else {
            return null;
        }

    } catch (error) {
        console.error(error)
        return null;
    }
}

export async function getSession({ user, password }: { user: string, password: string }): Promise<any> {
    try {
        const response = await fetch(`https://gy-accounts.onrender.com/session`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user, password })
        })
        return await response.json()
    }
    catch (error) {
        console.error(error)
        return false;
    }
}



export async function SignUp({ username, email, password }: { username: string, email: string, password: string }): Promise<boolean | string> {
    try {
        const response = await fetch(`https://gy-accounts.onrender.com/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, email, password })
        })

        const data = await response.text()
        return data
    }
    catch (error) {
        console.error(error)
        return false;
    }
}

export default { login, SignUp }