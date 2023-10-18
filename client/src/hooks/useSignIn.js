import { useState } from "react"
import {useAuthContext} from "./useAuthContext";
import axios from "axios";

export const useSignIn = ()=>{
    const [error,setError] = useState(null);
    const [isLoading,setIsLoading] = useState(null);
    const {dispatch} = useAuthContext()

    const signIn = async (email,password)=>{
        setIsLoading(true)
        setError(null)
        try{
            const {data} = await axios.post('/login',{email,password});
            console.log(data);
            // save the token to local storage
            sessionStorage.setItem('user',JSON.stringify(data))
            // updating the authContext
            dispatch({type: 'LOGIN', payload: {token: data.token, user: data.user}})
        }
        catch(err){
            setError(err)
            console.log(err)
        }
        finally{
            setIsLoading(false);
        }
    }
    return {signIn,isLoading,error}
}