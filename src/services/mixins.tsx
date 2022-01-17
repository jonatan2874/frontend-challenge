import { BEARER_TOKEN } from "../configuration/Consts";

const Api = async (method:string,endPoint:string)=>{
    const request = await fetch(endPoint,{
        method,
        headers:{
            'Content-Type' : 'application/json'
        }
    });
    return request.json();
}

export {Api};