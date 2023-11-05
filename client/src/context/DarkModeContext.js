import { createContext, useEffect, useReducer } from "react";


export const DarkModeContext = createContext();


const DarkModeReducer = (state,action)=>{
    switch(action.type){
        case "toggle":
            state = !state;
            return state
        default:
            return state;
    }
}
export const DarkModeContextProvider = (props) =>{

    const [state,dispatch]=useReducer(DarkModeReducer,true);

    useEffect(()=>{
        console.log("value of dark mode is ")
        console.log(state);
    },[state])

    return(
        <DarkModeContext.Provider value={{state,dispatch}}>
            {props.children}
        </DarkModeContext.Provider>
    )
}