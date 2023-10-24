import { createContext, useEffect, useReducer } from "react";

const DarkModeReducer = (state,action)=>{
    switch(action.type){
        case "toggle":
            state = !state;
            return state
        default:
            return state;
    }
}
export const DarkModeContext = createContext();
export const DarkModeContextProvider = (props) =>{

    const [state,dispatch]=useReducer(DarkModeReducer,true);
    return(
        <DarkModeContext.Provider value={{state,dispatch}}>
            {props.children}
        </DarkModeContext.Provider>
    )
}