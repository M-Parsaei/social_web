import { useState } from "react"
import {useAuthContext} from "./useAuthContext";
import axios from "axios";

export const useSignUp = ()=>{
    const [error,setError] = useState(null);
    const [isLoading,setIsLoading] = useState(null);
    const {dispatch} = useAuthContext()

    const signup = async (username,email,password)=>{
        setIsLoading(true)
        setError(null)
        try{
            const {data} = await axios.post('/register',{username,email,password});

            console.log(data);

            // save the token to local storage
            sessionStorage.setItem('user',JSON.stringify(data))
            // updating the authContext
            dispatch({type: 'LOGIN', payload: data.token})
        }
        catch(err){
            setError(err)
            console.log(err)
        }
        finally{
            setIsLoading(false);
        }
    }
    return {signup,isLoading,error}
}