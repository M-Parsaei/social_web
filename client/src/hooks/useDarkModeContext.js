import { useContext } from "react"
import { DarkModeContext } from "../context/DarkModeContext";

export const useDarkModeContext = ()=>{
    const context = useContext(DarkModeContext)
    if (!context){
        throw "can not use DarkModeContext ouside of DarkModeContextProvider";
    }
    return context
}