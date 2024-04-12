import { session } from '@/utils/types';
import {login} from '../api/data'
async function useLogin({ user, password }: { user: string, password: string }): Promise<session | null> {
    try{
        const response = await login({user, password})
        return response
    }catch(error){
        console.error(error)
        return null;
    }

}

export default useLogin;