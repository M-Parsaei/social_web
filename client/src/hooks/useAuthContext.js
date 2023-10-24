import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"




export const useAuthContext = ()=>{
    const context = useContext(AuthContext)
    if (!context){
        throw "can not use AuthContext ouside of AuthContextProvider";
    }
    return context
}