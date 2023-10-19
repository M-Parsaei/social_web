import { createContext, useEffect, useReducer } from "react";


export const AuthContext = createContext();

export const authReducer = (state,action)=>{
    switch(action.type){
        case 'LOGIN':
            return {token : action.payload.token, user: action.payload.user}
        case 'LOGOUT':
            return {token:null, user:null}
        default:
            return state
    }
}

export const AuthContextProvider = (props)=>{
    const [state,dispatch]=useReducer(authReducer,{
        user:null,
        token: null
    })

    useEffect(()=>{
        const userSaved = JSON.parse(sessionStorage.getItem("user"));
        if (userSaved){
            dispatch({type: "LOGIN",payload: userSaved})
        }
    },[])
    return (
        <AuthContext.Provider value={{...state,dispatch}}>
            {props.children}
        </AuthContext.Provider>
    );
}