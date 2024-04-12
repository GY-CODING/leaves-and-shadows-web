import { SignUp } from "@/api/data";

export default async function useRegister({username, email, password}: {username:string, email:string, password:string}){
    try{
        const response = await SignUp({username, email, password})
        return response
    }catch(error){
        console.error(error)
        return false;
    }

}