import { useAuthContext } from "./useAuthContext"

export const useSignOut = ()=>{
    const {dispatch} = useAuthContext();
    const signOut = () =>{
        sessionStorage.removeItem("user");
        dispatch({type:"LOGOUT"});
    }
    return signOut;
}