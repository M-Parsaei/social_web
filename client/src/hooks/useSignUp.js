import { useState } from "react"
import {useAuthContext} from "./useAuthContext";
import axios from "axios";

export const useSignUp = ()=>{
    const [error,setError] = useState(null);
    const [isLoading,setIsLoading] = useState(null);
    const {dispatch} = useAuthContext()

    const signup = async (newUserData)=>{
        setIsLoading(true)
        setError(null)
        try{
            //
            const {data} = await axios.post('/register',newUserData);
            console.log(data);
            // save the token to local storage
            sessionStorage.setItem('user',JSON.stringify(data))
            dispatch({type: 'LOGIN', payload: {token: data.token, user: data.user}})
        }
        catch(err){
            setError(err.response.data.error)
            console.log("error catch part in sign up hook");
            console.log(err.response.data)
        }
        finally{
            setIsLoading(false);
        }
    }
    return {signup,isLoading,error}
}