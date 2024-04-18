import { SignUp } from "@/api/data";

import { user } from "@/utils/types";

export default async function useRegister({user, email, password}: user): Promise<string>{
    try{
        console.log(user, email, password)
        const response = await SignUp({user, email, password})
        return response.toString()
    }catch(error:any){
        console.error(error)
        return error.toString();
    }

}