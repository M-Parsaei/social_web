import axios from "axios";

export const useBackEnd = ()=>{
    const callBackEnd = async (url,data,token,method)=>{
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
            const {responseData} = await axiosCall(url,{fuck:"you"},config);

            return responseData
        }
        catch(err){
            console.log(err);
        }
    }
    return {callBackEnd}
}