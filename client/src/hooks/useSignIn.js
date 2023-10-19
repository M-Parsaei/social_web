import { useRef, useState } from "react"
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
            console.log("This data comes from axios : Sign in ")
            console.log(data);
            // save the token to local storage
            sessionStorage.setItem('user',JSON.stringify(data))
            // updating the authContext
            dispatch({type: 'LOGIN', payload: {token: data.token, user: data.user}})
        }
        catch(err){
            setError(err.response.data.error)
            console.log("error catch part in signIn hook");
            console.log(err.response.data)
        }
        finally{
            setIsLoading(false);
        }
    }
    return {signIn,isLoading,error}
}