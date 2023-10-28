import axios from "axios";

export const useBackEnd = ()=>{
    const callBackEnd = async (url,clientData,token,method)=>{
        try{
            let axiosCall = axios.get
            method = method.toLowerCase();
            if (method == "post"){
                axiosCall = axios.post
            }
            else if (method == "delete"){
                axiosCall = axios.delete
            }
            else if (method == "update"){
                axiosCall = axios.put
            }
            let config = {}
            if (token){
                config = {
                    headers: {"Authorization" : `Bearer ${token}`}
                }
            }
            if (method != "get" && method != "delete"){
                const {data} = await axiosCall(url,clientData,config);
                return data
            }
            else{
                const {data} = await axiosCall(url,config);
                return data
            }
        }
        catch(err){
            console.log(err);
        }
    }
    return {callBackEnd}
}