import { createContext, useEffect, useReducer } from "react";


export const AuthContext = createContext();

export const authReducer = (state,action)=>{
    switch(action.type){
        case 'LOGIN':
            return {user : action.payload}
        case 'LOGOUT':
            return {user:null}
        default:
            return state
    }
}

export const AuthContextProvider = (props)=>{
    const [state,dispatch]=useReducer(authReducer,{
        user:null
    })
    useEffect(()=>{
        const user = JSON.parse(sessionStorage.getItem("user"));
        console.log(user);
        if (user){
            dispatch({type: "LOGIN",payload: user.token})
        }
    },[])
    console.log('Authcontext state: ',state); // to see everytime is changed
    return (
        <AuthContext.Provider value={{...state,dispatch}}>
            {props.children}
        </AuthContext.Provider>
    );
}